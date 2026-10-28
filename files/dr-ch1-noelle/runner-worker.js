import createButterscotch from "./butterscotch.mjs";

let module;
let audio;
let audioTimer;

function sendError(error) {
  self.postMessage({
    type: "error",
    message: error?.stack || error?.message || String(error),
  });
}

function pumpAudio() {
  if (!audio || !module) return;
  const readIndex = Atomics.load(audio.header, 0);
  const writeIndex = Atomics.load(audio.header, 1);
  const used = (writeIndex - readIndex + audio.modulus) % audio.modulus;
  const free = audio.capacityFrames - used - 1;

  if (free >= 256) {
    const count = Math.min(free, audio.chunkFrames);
    module._pullAudioFrames(audio.pointer, count);
    const source = module.HEAPF32.subarray(
      audio.pointer >> 2,
      (audio.pointer >> 2) + count * 2
    );
    const frame = writeIndex % audio.capacityFrames;
    const firstCount = Math.min(count, audio.capacityFrames - frame);
    audio.samples.set(source.subarray(0, firstCount * 2), frame * 2);
    if (firstCount < count) {
      audio.samples.set(source.subarray(firstCount * 2, count * 2), 0);
    }
    Atomics.store(audio.header, 1, (writeIndex + count) % audio.modulus);
  }

  audioTimer = setTimeout(pumpAudio, 4);
}

async function initialize() {
  module = await createButterscotch({
    locateFile: file => new URL(`./${file}`, import.meta.url).href,
    print: (...args) => self.postMessage({ type: "log", args }),
    printErr: (...args) => self.postMessage({ type: "errorLog", args }),
  });

  const mounted = module.ccall("mountOpfs", "number", [], []);
  if (mounted !== 0) throw new Error(`Butterscotch could not mount browser storage (code ${mounted}).`);
  self.postMessage({ type: "ready" });
}

const initialized = initialize().catch(sendError);

self.addEventListener("message", async event => {
  await initialized;
  if (!module) return;
  const message = event.data;

  if (message.type === "audio") {
    const chunkFrames = 1024;
    module._setAudioSampleRate(message.sampleRate);
    audio = {
      capacityFrames: message.capacityFrames,
      modulus: message.capacityFrames * 2,
      header: new Int32Array(message.buffer, 0, 2),
      samples: new Float32Array(message.buffer, 8, message.capacityFrames * 2),
      chunkFrames,
      pointer: module._malloc(chunkFrames * 2 * Float32Array.BYTES_PER_ELEMENT),
    };
    return;
  }

  if (message.type === "start") {
    module.specialHTMLTargets["#canvas"] = message.canvas;
    module.canvas = message.canvas;
    if (module._setCanvasSize && message.canvas.width > 0 && message.canvas.height > 0) {
      module._setCanvasSize(message.canvas.width, message.canvas.height);
    }
    module.ccall(
      "startRunner",
      null,
      ["string", "string"],
      [message.gamePath, message.savePath]
    );
    if (audio && !audioTimer) pumpAudio();
    self.postMessage({ type: "started" });
    return;
  }

  if (message.type === "key") {
    const pointer = message.down ? module._getKeyDownPtr() : module._getKeyUpPtr();
    const count = module._getKeyCount();
    if (message.key >= 0 && message.key < count) {
      module.HEAPU8[pointer + message.key] = 1;
    }
    return;
  }

  if (message.type === "mouse" && module._setMousePos) {
    module._setMousePos(message.x, message.y);
    return;
  }

  if (message.type === "mouseButton" && module._setMouseButton) {
    module._setMouseButton(message.button, message.down ? 1 : 0);
    return;
  }

  if (message.type === "dumpState") {
    if (module._requestDump) {
      module._requestDump(); // game thread posts the dump itself
    } else if (module._dumpStateJson) {
      const ptr = module._dumpStateJson();
      const json = ptr ? module.UTF8ToString(ptr) : null;
      if (ptr) module._free(ptr);
      self.postMessage({ type: "dumpState", json });
    }
    return;
  }

  if (message.type === "gotoRoom" && module._debugGotoRoom) {
    module._debugGotoRoom(message.room);
    return;
  }

  if (message.type === "stepFrames" && module._debugStepFrames) {
    module._debugStepFrames(message.frames);
    return;
  }

  if (message.type === "stop") {
    clearTimeout(audioTimer);
    audioTimer = undefined;
    module._stopRunner();
  }
});
