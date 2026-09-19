(() => {
  "use strict";

  const STORAGE_KEY = "toby_web_mobile_controls";
  const enabled = localStorage.getItem(STORAGE_KEY) === "on";
  document.documentElement.classList.toggle("toby-mobile-controls-enabled", enabled);
  document.documentElement.classList.toggle("toby-mobile-controls-disabled", !enabled);

  if (!enabled) return;

  const existingControls = document.querySelector("#toby-mobile-controls, #mobile-controls");
  if (existingControls) {
    existingControls.style.display = "block";
    return;
  }

  const style = document.createElement("style");
  style.textContent = `
    #toby-mobile-controls {
      position: fixed;
      inset: 0;
      z-index: 2147483646;
      pointer-events: none;
      touch-action: none;
      user-select: none;
      -webkit-user-select: none;
      font-family: Arial, sans-serif;
    }
    #toby-mobile-controls .toby-pad {
      position: absolute;
      left: max(18px, env(safe-area-inset-left));
      bottom: max(18px, env(safe-area-inset-bottom));
      display: grid;
      grid-template-columns: repeat(3, 54px);
      grid-template-rows: repeat(3, 54px);
      filter: drop-shadow(0 3px 2px rgba(0, 0, 0, 0.7));
    }
    #toby-mobile-controls .toby-actions {
      position: absolute;
      right: max(18px, env(safe-area-inset-right));
      bottom: max(24px, env(safe-area-inset-bottom));
      display: grid;
      grid-template-columns: repeat(2, 64px);
      grid-template-rows: repeat(2, 64px);
      gap: 12px;
      transform: rotate(-10deg);
      filter: drop-shadow(0 3px 2px rgba(0, 0, 0, 0.7));
    }
    #toby-mobile-controls button {
      width: 100%;
      height: 100%;
      border: 3px solid rgba(255, 255, 255, 0.9);
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.66);
      color: #fff;
      font: 700 25px/1 Arial, sans-serif;
      letter-spacing: 0;
      pointer-events: auto;
      touch-action: none;
      -webkit-tap-highlight-color: transparent;
      box-sizing: border-box;
    }
    #toby-mobile-controls button[data-key^="Arrow"] { border-radius: 8px; }
    #toby-mobile-controls button.is-pressed {
      color: #ffff00;
      border-color: #ffff00;
      background: rgba(70, 35, 95, 0.82);
      transform: scale(0.93);
    }
    #toby-mobile-controls .up { grid-column: 2; grid-row: 1; }
    #toby-mobile-controls .left { grid-column: 1; grid-row: 2; }
    #toby-mobile-controls .down { grid-column: 2; grid-row: 2; }
    #toby-mobile-controls .right { grid-column: 3; grid-row: 2; }
    #toby-mobile-controls .z { grid-column: 1; grid-row: 2; }
    #toby-mobile-controls .x { grid-column: 2; grid-row: 1; }
    #toby-mobile-controls .c { grid-column: 2; grid-row: 2; }
    @media (max-width: 680px), (max-height: 520px) {
      #toby-mobile-controls .toby-pad {
        grid-template-columns: repeat(3, 44px);
        grid-template-rows: repeat(3, 44px);
      }
      #toby-mobile-controls .toby-actions {
        grid-template-columns: repeat(2, 54px);
        grid-template-rows: repeat(2, 54px);
        gap: 9px;
      }
      #toby-mobile-controls button { font-size: 21px; }
    }
  `;
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "toby-mobile-controls";
  root.setAttribute("aria-label", "Mobile game controls");
  root.innerHTML = `
    <div class="toby-pad" aria-label="Movement controls">
      <button class="up" data-key="ArrowUp" data-code="ArrowUp" data-key-code="38" aria-label="Up">&#9650;</button>
      <button class="left" data-key="ArrowLeft" data-code="ArrowLeft" data-key-code="37" aria-label="Left">&#9664;</button>
      <button class="down" data-key="ArrowDown" data-code="ArrowDown" data-key-code="40" aria-label="Down">&#9660;</button>
      <button class="right" data-key="ArrowRight" data-code="ArrowRight" data-key-code="39" aria-label="Right">&#9654;</button>
    </div>
    <div class="toby-actions" aria-label="Action controls">
      <button class="z" data-key="z" data-code="KeyZ" data-key-code="90" aria-label="Confirm (Z)">Z</button>
      <button class="x" data-key="x" data-code="KeyX" data-key-code="88" aria-label="Cancel (X)">X</button>
      <button class="c" data-key="c" data-code="KeyC" data-key-code="67" aria-label="Menu (C)">C</button>
    </div>
  `;

  const held = new Map();
  const target = () => document.querySelector("canvas") || document.activeElement || document.body;
  const makeKeyboardEvent = (button, type) => {
    const keyCode = Number(button.dataset.keyCode);
    const event = new KeyboardEvent(type, {
      key: button.dataset.key,
      code: button.dataset.code,
      bubbles: true,
      cancelable: true,
      composed: true,
      repeat: type === "keydown" && held.has(button),
    });
    try {
      Object.defineProperties(event, {
        keyCode: { get: () => keyCode },
        charCode: { get: () => type === "keypress" ? keyCode : 0 },
        which: { get: () => keyCode },
      });
    } catch (_) {}
    return event;
  };
  const send = (button, type) => {
    const primaryTarget = target();
    primaryTarget.dispatchEvent(makeKeyboardEvent(button, type));
    if (primaryTarget !== document) document.dispatchEvent(makeKeyboardEvent(button, type));
    window.dispatchEvent(makeKeyboardEvent(button, type));
  };

  const release = button => {
    if (!held.has(button)) return;
    held.delete(button);
    button.classList.remove("is-pressed");
    send(button, "keyup");
  };

  root.querySelectorAll("button").forEach(button => {
    button.addEventListener("pointerdown", event => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      target().focus?.();
      if (held.has(button)) return;
      held.set(button, event.pointerId);
      button.classList.add("is-pressed");
      send(button, "keydown");
      if (!button.dataset.key.startsWith("Arrow")) send(button, "keypress");
    });
    button.addEventListener("pointerup", event => {
      event.preventDefault();
      setTimeout(() => release(button), 45);
    });
    button.addEventListener("pointercancel", () => release(button));
    button.addEventListener("lostpointercapture", () => release(button));
    button.addEventListener("contextmenu", event => event.preventDefault());
  });

  const releaseAll = () => [...held.keys()].forEach(release);
  window.addEventListener("blur", releaseAll);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) releaseAll();
  });
  document.body.appendChild(root);
})();
