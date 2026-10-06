import { startButterscotch } from "../butterscotch-host.js";

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

function setStatus(message, current = 0, total = 1) {
  status.textContent = message;
  progress.max = Math.max(total, 1);
  progress.value = current;
}

async function startGame() {
  startButton.disabled = true;
  setStatus("Starting the Undertale runner...", 1, 1);
  const host = await startButterscotch({
    canvas,
    gamePath: "/butterscotch/games/undertale-uncanny/data.win",
    savePath: "/butterscotch/saves/undertale-uncanny",
    workerUrl: new URL("runner-worker.js", import.meta.url),
  });
  host.worker.addEventListener("message", event => {
    const message = event.data || {};
    if (message.type === "windowTitle" && message.title) {
      document.title = message.title;
    } else if (message.type === "runnerExit") {
      loading.hidden = false;
      setStatus("The game closed. Refresh the page to restart it.", 1, 1);
    }
  });
  loading.hidden = true;
  canvas.focus();
}

async function boot() {
  if (!window.crossOriginIsolated || typeof SharedArrayBuffer === "undefined") {
    throw new Error("The runner needs cross-origin isolation. Reload once; if this remains, use Toby Web through HTTPS or start-local.bat.");
  }
  if (!HTMLCanvasElement.prototype.transferControlToOffscreen) {
    throw new Error("This browser does not support OffscreenCanvas, which this Undertale runner requires.");
  }

  await window.TobyGameMakerInstaller.install("install-manifest.json", setStatus);
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
