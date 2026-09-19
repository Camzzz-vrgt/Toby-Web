import createButterscotch from "./undertale-red-yellow/butterscotch-2.1.5.mjs";

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
    locateFile: file => new URL(`./undertale-red-yellow/${file}`, import.meta.url).href,
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

  if (message.type === "stop") {
    clearTimeout(audioTimer);
    audioTimer = undefined;
    module._stopRunner();
  }
});
