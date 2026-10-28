// Shared cross-origin-isolation recovery for the Undertale runner games.
// The butterscotch runtime needs SharedArrayBuffer, which only exists on a
// cross-origin-isolated page. On a static host that isolation comes from the
// per-game coi-serviceworker.js — which can only take effect after it is
// registered AND the page reloads under its control. The stock coi script
// retries exactly once, so when that single reload lands uncontrolled
// (service worker update in flight, hard refresh, cache eviction) the game
// hard-fails until the user manually reloads. This file repeats the
// register+reload cycle a bounded number of times and exposes
// window.TobyRunnerCOIReloadPending so the app's boot check can stay quiet
// while a recovery reload is on the way.
(function () {
  var KEY = "tobyweb.runner.coiRetries";
  var MAX_RETRIES = 6;

  if (window.crossOriginIsolated && typeof SharedArrayBuffer !== "undefined") {
    try { sessionStorage.removeItem(KEY); } catch (e) {}
    return;
  }
  if (location.protocol === "file:" ||
      !("serviceWorker" in navigator) ||
      window.isSecureContext === false) {
    return;
  }
  var retries = 0;
  try { retries = Number(sessionStorage.getItem(KEY)) || 0; } catch (e) {}
  if (retries >= MAX_RETRIES) {
    try { sessionStorage.removeItem(KEY); } catch (e) {}
    return;
  }
  try { sessionStorage.setItem(KEY, String(retries + 1)); } catch (e) {}
  window.TobyRunnerCOIReloadPending = true;

  var done = function () { location.reload(); };
  var fallback = setTimeout(done, 12000);
  var finish = function () { clearTimeout(fallback); done(); };
  try {
    navigator.serviceWorker
      .register(new URL("coi-serviceworker.js", location.href), { updateViaCache: "none" })
      .then(function () {
        return Promise.race([
          navigator.serviceWorker.ready,
          new Promise(function (resolve) { setTimeout(resolve, 8000); })
        ]);
      })
      .then(finish, finish);
  } catch (e) {
    finish();
  }
})();
