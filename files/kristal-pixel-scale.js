(function () {
  "use strict";

  var LOGICAL_WIDTH = 640;
  var LOGICAL_HEIGHT = 480;
  var canvas;

  function resizeCanvas() {
    if (!canvas) canvas = document.getElementById("canvas");
    if (!canvas) return;

    var fit = Math.min(
      window.innerWidth / LOGICAL_WIDTH,
      window.innerHeight / LOGICAL_HEIGHT
    );
    // Fill as much of the current tab as possible while preserving 4:3.
    // Nearest-neighbor rendering keeps fractional Chromebook scaling crisp.
    var scale = fit;
    var width = Math.max(1, Math.floor(LOGICAL_WIDTH * scale));
    var height = Math.max(1, Math.floor(LOGICAL_HEIGHT * scale));

    canvas.style.setProperty("width", width + "px", "important");
    canvas.style.setProperty("height", height + "px", "important");
    canvas.style.setProperty("max-width", "100vw", "important");
    canvas.style.setProperty("max-height", "100vh", "important");
    canvas.style.setProperty("image-rendering", "pixelated", "important");
  }

  window.addEventListener("resize", resizeCanvas, { passive: true });
  window.addEventListener("orientationchange", resizeCanvas, { passive: true });
  document.addEventListener("DOMContentLoaded", resizeCanvas);
  requestAnimationFrame(resizeCanvas);
})();
