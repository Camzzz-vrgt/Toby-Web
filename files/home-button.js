// Toby Web — in-game "home" button.
// Shared script included at the bottom of every game runner page. Injects a
// small semi-transparent launcher-styled button at the top-left that returns
// to the site's main menu (top-level), never to a game-internal menu.
// Inside the single-file launcher (file:// document.write context — the
// launcher's own globals survive on window) it reloads to restore the menu.
(function () {
  "use strict";
  if (window.__tobyHomeButton) return;
  window.__tobyHomeButton = true;

  // Blob-iframe ports (Turg's webport, the bog page) embed a chapter page that
  // also carries this script. If a parent frame already shows the button, skip.
  if (window !== window.top) {
    try {
      if (window.top.document.querySelector(".toby-home-btn")) return;
    } catch (e) { /* cross-origin parent — still show ours */ }
  }

  var scriptUrl =
    (document.currentScript && document.currentScript.src) ||
    (document.querySelector('script[src$="home-button.js"]') || {}).src ||
    location.href;
  var filesBase = scriptUrl.slice(0, scriptUrl.lastIndexOf("/") + 1);
  // files/ always sits one level under the site root.
  var siteRoot = filesBase.slice(0, filesBase.slice(0, -1).lastIndexOf("/") + 1);
  var inLauncherDom = typeof window.loadRemotePage === "function";

  function goHome() {
    if (inLauncherDom || location.protocol === "file:") {
      location.reload();
    } else {
      window.top.location.href = siteRoot;
    }
  }

  var style = document.createElement("style");
  style.textContent =
    "@font-face{font-family:'Monster Friend';src:url('" + filesBase + "monster-friend-fore.woff2') format('woff2');font-display:swap;}" +
    ".toby-home-btn{position:fixed;top:8px;left:8px;z-index:2147483647;margin:0;" +
    "border:2px solid #fff;background:rgba(0,0,0,.55);color:#fff;" +
    "font-family:'Monster Friend','Deltarune',monospace;font-size:11px;" +
    "text-transform:uppercase;letter-spacing:0;padding:4px 9px;cursor:pointer;" +
    "line-height:1;display:inline-flex;align-items:center;user-select:none;-webkit-user-select:none;}" +
    ".toby-home-btn:hover{color:#ffff00;border-color:#ffff00;}";

  var btn = document.createElement("button");
  btn.className = "toby-home-btn";
  btn.type = "button";
  btn.textContent = "Home";
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    goHome();
  });

  // documentElement, not body — some runners replace body contents on boot.
  document.documentElement.appendChild(style);
  document.documentElement.appendChild(btn);
})();
