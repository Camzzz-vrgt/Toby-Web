(() => {
  "use strict";

  const GAME_ID = "undertale-choose-your-soul";
  const AUDIO_CAPACITY_FRAMES = 1024;

  const canvas = document.getElementById("game");
  const loading = document.getElementById("loading");
  const status = document.getElementById("status");
  const progress = document.getElementById("progress");
  const error = document.getElementById("error");
  const startButton = document.getElementById("start");
  const retryButton = document.getElementById("retry");
  retryButton.addEventListener("click", async () => {
    try { await window.TobyGameMakerInstaller.reset("install-manifest.json"); } catch (_) {}
    location.reload();
  });

  let worker;
  let keyDown;
  let keyUp;
  let audioContext;
  let audioNode;

  function setStatus(message, current = 0, total = 1) {
    status.textContent = message;
    progress.max = Math.max(total, 1);
    progress.value = current;
  }

  async function prepareGameFiles() {
    await window.TobyGameMakerInstaller.install("install-manifest.json", setStatus);
  }

  function waitForWorkerReady(target) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("The Undertale runner did not initialize in time.")), 30000);
      const onMessage = (event) => {
        if (event.data && event.data.type === "ready") {
          clearTimeout(timeout);
          target.removeEventListener("message", onMessage);
          resolve();
        }
      };
      target.addEventListener("message", onMessage);
      target.addEventListener("error", (event) => {
        clearTimeout(timeout);
        reject(new Error(event.message || "The Undertale runner failed to load."));
      }, { once: true });
    });
  }

  async function initializeAudio(target) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) throw new Error("Web Audio is not supported by this browser.");

    const sharedAudio = new SharedArrayBuffer(8 + AUDIO_CAPACITY_FRAMES * 2 * 4);
    audioContext = new AudioContextClass();
    await audioContext.audioWorklet.addModule("audio-worklet.js");
    audioNode = new AudioWorkletNode(audioContext, "butterscotch-audio", {
      numberOfInputs: 0,
      numberOfOutputs: 1,
      outputChannelCount: [2],
      processorOptions: { sab: sharedAudio, capacityFrames: AUDIO_CAPACITY_FRAMES }
    });
    audioNode.connect(audioContext.destination);
    await audioContext.resume();
    target.postMessage({
      type: "audioInit",
      sab: sharedAudio,
      sampleRate: audioContext.sampleRate,
      capacityFrames: AUDIO_CAPACITY_FRAMES
    });
  }

  function attachInput() {
    const handledKeys = new Set([13, 16, 27, 37, 38, 39, 40, 88, 90]);
    window.addEventListener("keydown", (event) => {
      if (event.repeat || !keyDown || event.keyCode >= keyDown.length) return;
      Atomics.store(keyDown, event.keyCode, 1);
      if (handledKeys.has(event.keyCode)) event.preventDefault();
    });
    window.addEventListener("keyup", (event) => {
      if (!keyUp || event.keyCode >= keyUp.length) return;
      Atomics.store(keyUp, event.keyCode, 1);
      if (handledKeys.has(event.keyCode)) event.preventDefault();
    });
  }

  async function startGame() {
    startButton.disabled = true;
    setStatus("Starting the Undertale runner...", 1, 1);
    await initializeAudio(worker);
    const offscreen = canvas.transferControlToOffscreen();
    worker.postMessage({
      type: "startRunner",
      gamePath: GAME_ID,
      savePath: GAME_ID,
      canvas: offscreen
    }, [offscreen]);
  }

  async function boot() {
    if (!window.crossOriginIsolated || typeof SharedArrayBuffer === "undefined") {
      throw new Error("The runner needs cross-origin isolation. Reload once; if this remains, use Toby Web through HTTPS or start-local.bat.");
    }
    if (!HTMLCanvasElement.prototype.transferControlToOffscreen) {
      throw new Error("This browser does not support OffscreenCanvas, which this Undertale runner requires.");
    }

    await prepareGameFiles();
    setStatus("Loading the Undertale engine...", 1, 1);
    worker = new Worker("worker.js");
    worker.addEventListener("message", (event) => {
      const message = event.data || {};
      if (message.type === "startedRunner") {
        keyDown = new Uint8Array(message.key.buffer, message.key.keyDownPtr, message.key.keyCount);
        keyUp = new Uint8Array(message.key.buffer, message.key.keyUpPtr, message.key.keyCount);
        loading.hidden = true;
        canvas.focus();
      } else if (message.type === "windowTitle" && message.title) {
        document.title = message.title;
      } else if (message.type === "runnerExit") {
        loading.hidden = false;
        setStatus("The game closed. Refresh the page to restart it.", 1, 1);
      }
    });
    await waitForWorkerReady(worker);
    attachInput();
    setStatus("Ready. Click start to enable game audio.", 1, 1);
    startButton.hidden = false;
    startButton.addEventListener("click", () => startGame().catch(showError), { once: true });
  }

  function showError(cause) {
    console.error(cause);
    error.hidden = false;
    error.textContent = cause && cause.message ? cause.message : String(cause);
    status.textContent = "The game could not start.";
    progress.hidden = true;
    startButton.hidden = true;
    retryButton.hidden = false;
  }

  boot().catch(showError);
})();
