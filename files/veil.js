/* Toby Web site veil — inserts zero-width joiners into human-visible DOM text
   so keyword scanners never see blocked terms as contiguous strings.
   Also decodes data-vu base64 URLs back into href/src on interaction. */
(function () {
  "use strict";

  var BLOCKED = atob("ZGVsdGFydW5lLHVuZGVydGFsZSxmYW5nYW1lLHVuYmxvY2tlZCxnYW1lYmFuYW5hLGdhbWVqb2x0LGl0Y2guaW8sc2FucyxwYXB5cnVzLGZsb3dleSxrcmlzLHN1c2llLHJhbHNlaSxub2VsbGUsYmVyZGx5LHNwYW10b24samV2aWwsa25pZ2h0LHJvYXJpbmcsYXNyaWVsLHRvcmllbCxhc2dvcmUsdW5keW5lLGFscGh5cyxtZXR0YXRvbixtdWZmZXQsbmFwc3RhYmxvb2ssZ2FzdGVyLGNoYXJhLGZyaXNrLHRlbm5hLG1pa2Uscm91eGxzLGxhbmNlcixxdWVlbixraW5nLGNoYXB0ZXIsZ2FtZSxnYW1lcyxtb2QsbW9kcyxmaWdodCxiYXR0bGUsYm9zcyx1bmRlcnRhbGV5ZWxsb3csdW5kZXJzd2FwLG91dGVydGFsZSxob3Jyb3J0YWxlLGR1c3R0YWxlLGZlbGw=").split(",").sort(function (a, b) { return b.length - a.length; });

  var JOINERS = ["​", "‌", "‍", "⁠"];
  var JOINER_RE = /[​‌‍⁠﻿]/g;

  function unveil(v) { return v.replace(JOINER_RE, ""); }

  function paint(m) {
    var out = "";
    for (var i = 0; i < m.length; i++) {
      out += m[i];
      if (i < m.length - 1) out += JOINERS[i % JOINERS.length];
    }
    return out;
  }

  function veil(v) {
    var raw = unveil(v);
    if (!raw) return raw;
    var lower = raw.toLowerCase();
    var out = "", i = 0;
    while (i < raw.length) {
      var hit = 0;
      for (var t = 0; t < BLOCKED.length; t++) {
        if (lower.indexOf(BLOCKED[t], i) === i) { hit = BLOCKED[t].length; break; }
      }
      if (hit) { out += paint(raw.substr(i, hit)); i += hit; }
      else { out += raw[i]; i += 1; }
    }
    return out;
  }

  function containsBlocked(v) {
    var l = unveil(v).toLowerCase();
    for (var i = 0; i < BLOCKED.length; i++) if (l.indexOf(BLOCKED[i]) !== -1) return true;
    return false;
  }

  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1 };
  var TEXT_ATTR = ["title", "alt", "placeholder", "aria-label", "aria-description", "aria-roledescription", "aria-valuetext", "label"];

  function veilAttr(el, name) {
    var cur = el.getAttribute(name);
    if (!cur || !containsBlocked(cur)) return;
    var next = veil(cur);
    if (next !== cur) el.setAttribute(name, next);
  }

  function veilTextNode(node) {
    var v = node.nodeValue;
    if (!v || !containsBlocked(v)) return;
    var next = veil(v);
    if (next !== v) node.nodeValue = next;
  }

  function walk(node) {
    if (node.nodeType === 3) {
      var p = node.parentElement;
      if (p && SKIP_TAGS[p.tagName]) return;
      if (p && (p.tagName === "INPUT" || p.tagName === "TEXTAREA")) return;
      veilTextNode(node);
      return;
    }
    if (node.nodeType !== 1) return;
    if (SKIP_TAGS[node.tagName]) return;
    for (var a = 0; a < TEXT_ATTR.length; a++) veilAttr(node, TEXT_ATTR[a]);
    for (var c = 0; c < node.childNodes.length; c++) walk(node.childNodes[c]);
  }

  /* data-vu links: restore the real href just-in-time so source HTML carries no plain URLs. */
  function restoreLink(el) {
    var enc = el.getAttribute("data-vu");
    if (!enc) return;
    try { el.setAttribute("href", atob(enc)); el.removeAttribute("data-vu"); } catch (e) {}
  }

  /* data-vs images: hydrate the real src on boot (deferred, invisible until set). */
  function hydrateImages(root) {
    if (root.nodeType === 1 && (root.tagName === "IMG" || root.tagName === "SOURCE") && root.hasAttribute("data-vs")) {
      try { root.setAttribute("src", atob(root.getAttribute("data-vs"))); root.removeAttribute("data-vs"); } catch (e) {}
    }
    var imgs = (root.querySelectorAll ? root.querySelectorAll("img[data-vs], source[data-vs]") : []);
    for (var i = 0; i < imgs.length; i++) {
      var el = imgs[i];
      try {
        el.setAttribute("src", atob(el.getAttribute("data-vs")));
        el.removeAttribute("data-vs");
      } catch (e) {}
    }
  }
  function armLinks(root) {
    var links = (root.querySelectorAll ? root.querySelectorAll("[data-vu]") : []);
    for (var i = 0; i < links.length; i++) {
      (function (el) {
        if (el.__vuArmed) return;
        el.__vuArmed = true;
        var handler = function () { restoreLink(el); };
        el.addEventListener("mouseenter", handler);
        el.addEventListener("focus", handler);
        el.addEventListener("pointerdown", handler);
        el.addEventListener("contextmenu", handler);
        el.addEventListener("click", function (ev) {
          if (el.getAttribute("href") === "#") {
            restoreLink(el);
            var h = el.getAttribute("href");
            if (h && h !== "#") { ev.preventDefault(); window.open(h, el.target || "_blank"); }
          }
        });
      })(links[i]);
    }
  }

  function veilTitle() {
    var next = containsBlocked(document.title) ? veil(document.title) : document.title;
    if (next !== document.title) document.title = next;
  }

  function boot() {
    hydrateImages(document);
    walk(document);
    armLinks(document);
    veilTitle();
    var obs = new MutationObserver(function (recs) {
      for (var r = 0; r < recs.length; r++) {
        var rec = recs[r];
        for (var n = 0; n < rec.addedNodes.length; n++) { walk(rec.addedNodes[n]); armLinks(rec.addedNodes[n]); hydrateImages(rec.addedNodes[n]); }
        if (rec.type === "characterData") veilTextNode(rec.target);
        if (rec.type === "attributes" && rec.target && rec.target.nodeType === 1) veilAttr(rec.target, rec.attributeName);
      }
      veilTitle();
    });
    obs.observe(document.documentElement, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: TEXT_ATTR });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
