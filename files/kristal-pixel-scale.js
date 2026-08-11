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
    var scale;
    if (fit >= 1) {
      scale = Math.max(1, Math.floor(fit));
    } else {
      // Keep source pixels uniform on very small screens by stepping down in
      // exact halves instead of stretching to an arbitrary fractional size.
      scale = 1;
      while (scale / 2 >= fit) scale /= 2;
      if (scale > fit) scale /= 2;
    }
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
