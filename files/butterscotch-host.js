function waitForWorker(worker, expectedType) {
  return new Promise((resolve, reject) => {
    const onMessage = event => {
      if (event.data.type === expectedType) {
        cleanup();
        resolve(event.data);
      } else if (event.data.type === "error") {
        cleanup();
        reject(new Error(event.data.message));
      }
    };
    const onError = event => {
      cleanup();
      reject(event.error || new Error(event.message));
    };
    const cleanup = () => {
      worker.removeEventListener("message", onMessage);
      worker.removeEventListener("error", onError);
    };
    worker.addEventListener("message", onMessage);
    worker.addEventListener("error", onError);
  });
}

function gameMakerKey(event) {
  const named = {
    Backspace: 8, Tab: 9, Enter: 13, Shift: 16, Control: 17, Alt: 18,
    Pause: 19, Escape: 27, " ": 32, PageUp: 33, PageDown: 34,
    End: 35, Home: 36, ArrowLeft: 37, ArrowUp: 38, ArrowRight: 39,
    ArrowDown: 40, Insert: 45, Delete: 46,
  };
  if (Object.hasOwn(named, event.key)) return named[event.key];
  if (/^F(?:[1-9]|1[0-2])$/.test(event.key)) return 111 + Number(event.key.slice(1));
  if (/^Numpad[0-9]$/.test(event.code)) return 96 + Number(event.code.slice(-1));
  const numpad = { NumpadMultiply: 106, NumpadAdd: 107, NumpadSubtract: 109, NumpadDecimal: 110, NumpadDivide: 111 };
  if (Object.hasOwn(numpad, event.code)) return numpad[event.code];
  return event.key.length === 1 ? event.key.toUpperCase().charCodeAt(0) : -1;
}

async function initializeAudio(worker) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) throw new Error("Web Audio is not supported by this browser.");
  const context = new AudioContextClass({ latencyHint: "interactive" });
  await context.audioWorklet.addModule(new URL("./butterscotch-audio-worklet.js", import.meta.url));

  const capacityFrames = 8192;
  const buffer = new SharedArrayBuffer(8 + capacityFrames * 2 * Float32Array.BYTES_PER_ELEMENT);
  const node = new AudioWorkletNode(context, "toby-web-butterscotch-audio", {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
    processorOptions: { buffer, capacityFrames },
  });
  const gain = context.createGain();
  gain.gain.value = new URLSearchParams(location.search).has("mute-test") ? 0 : 1;
  node.connect(gain).connect(context.destination);

  const root = document.documentElement;
  root.dataset.audioReady = "true";
  root.dataset.audioState = context.state;
  root.dataset.audioActive = "false";
  context.addEventListener("statechange", () => { root.dataset.audioState = context.state; });
  node.port.addEventListener("message", event => {
    if (event.data.peak > 0.00001) {
      root.dataset.audioActive = "true";
      root.dataset.audioPeak = event.data.peak.toFixed(6);
    }
  });
  node.port.start();

  const resume = () => context.resume().catch(() => {});
  document.addEventListener("keydown", resume, { capture: true });
  document.addEventListener("pointerdown", resume, { capture: true });
  worker.postMessage({ type: "audio", buffer, capacityFrames, sampleRate: context.sampleRate });
  return { context, node, gain };
}

function installKeyboard(worker, canvas, releaseDelay) {
  const held = new Set();
  const send = (key, down) => worker.postMessage({ type: "key", key, down });
  const keyDown = event => {
    const key = gameMakerKey(event);
    if (key < 0 || key >= 256) return;
    event.preventDefault();
    if (!held.has(key)) {
      held.add(key);
      send(key, true);
    }
  };
  const keyUp = event => {
    const key = gameMakerKey(event);
    if (key < 0 || key >= 256) return;
    event.preventDefault();
    setTimeout(() => {
      held.delete(key);
      send(key, false);
    }, releaseDelay);
  };
  const releaseAll = () => {
    for (const key of held) send(key, false);
    held.clear();
  };
  document.addEventListener("keydown", keyDown, true);
  document.addEventListener("keyup", keyUp, true);
  window.addEventListener("blur", releaseAll);
  canvas.addEventListener("pointerdown", () => canvas.focus());
}

export async function startButterscotch({ canvas, gamePath, savePath, releaseDelay = 0 }) {
  const worker = new Worker(new URL("./butterscotch-runner-worker.js", import.meta.url), { type: "module" });
  worker.addEventListener("message", event => {
    if (event.data.type === "log") console.log(...event.data.args);
    if (event.data.type === "errorLog") console.error(...event.data.args);
  });
  await waitForWorker(worker, "ready");
  const audio = await initializeAudio(worker);
  const started = waitForWorker(worker, "started");
  const offscreen = canvas.transferControlToOffscreen();
  worker.postMessage({ type: "start", canvas: offscreen, gamePath, savePath }, [offscreen]);
  await started;
  installKeyboard(worker, canvas, releaseDelay);

  window.addEventListener("pagehide", () => {
    worker.postMessage({ type: "stop" });
    audio.context.close().catch(() => {});
    worker.terminate();
  }, { once: true });
  return { worker, audio };
}
