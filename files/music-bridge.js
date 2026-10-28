/* Toby Web — local music bridge.
   Serves user-uploaded songs (Toby Music Library, IndexedDB "toby-music") in
   place of soundtrack files that were removed from the site.
   - Service-worker mode: registered by the launcher; intercepts every request
     under /files/ (covers fetch, XHR and <audio>/media element loads).
   - Page mode: included directly in game pages; wraps fetch() and
     XMLHttpRequest for contexts where service workers cannot run (file://). */
(function () {
  'use strict';
  var DB_NAME = 'toby-music';
  var STORE = 'files';
  var AUDIO_EXT = /\.(ogg|wav|mp3|flac|m4a)$/i;
  var MIME = {
    ogg: 'audio/ogg', wav: 'audio/wav', mp3: 'audio/mpeg',
    flac: 'audio/flac', m4a: 'audio/mp4'
  };

  function extOf(path) {
    var m = AUDIO_EXT.exec(path);
    return m ? m[1].toLowerCase() : '';
  }

  /* Map a /files/<dir>/<tail> request path to its music-library key.
     Mirrors the grouping in files/music-manifest.json. */
  function keyForPath(pathname) {
    var i = pathname.indexOf('/files/');
    if (i < 0) return null;
    if (!AUDIO_EXT.test(pathname)) return null;
    var segs = pathname.slice(i + 7).split('/');
    if (segs.length < 2 && !/^mus_/.test(segs[segs.length - 1])) return null;
    var top = segs[0];
    var tail = segs.slice(1).join('/');
    var base = segs[segs.length - 1];
    var key;
    var m = /(?:^|\/)chapter([1-5])(?:\/|$)/.exec(tail);
    if (m) key = 'chapter' + m[1];
    else if (top.indexOf('undertale') >= 0 || /^mus_/.test(base)) key = 'undertale';
    else key = top;
    return key + '|' + base;
  }

  var dbPromise = null;
  function idb() {
    if (!dbPromise) {
      dbPromise = new Promise(function (res, rej) {
        var rq = indexedDB.open(DB_NAME, 1);
        rq.onupgradeneeded = function () { rq.result.createObjectStore(STORE); };
        rq.onsuccess = function () { res(rq.result); };
        rq.onerror = function () { rej(rq.error); };
      });
    }
    return dbPromise;
  }

  function lookup(key) {
    return idb().then(function (db) {
      return new Promise(function (res) {
        var tx = db.transaction(STORE, 'readonly');
        var rq = tx.objectStore(STORE).get(key);
        rq.onsuccess = function () { res(rq.result || null); };
        rq.onerror = function () { res(null); };
      });
    });
  }

  function audioKeyFromUrl(url) {
    try {
      var u = new URL(url, typeof location !== 'undefined' ? location.href : undefined);
      return keyForPath(u.pathname);
    } catch (e) { return null; }
  }

  function blobResponse(blob, path) {
    return new Response(blob, {
      status: 200,
      headers: { 'Content-Type': MIME[extOf(path)] || 'application/octet-stream' }
    });
  }

  if (typeof window === 'undefined') {
    /* ---------------- service worker mode ---------------- */
    self.addEventListener('install', function (ev) { self.skipWaiting(); });
    self.addEventListener('activate', function (ev) { ev.waitUntil(clients.claim()); });
    self.addEventListener('fetch', function (ev) {
      if (ev.request.method !== 'GET') return;
      var key;
      try { key = keyForPath(new URL(ev.request.url).pathname); } catch (e) { return; }
      if (!key) return;
      ev.respondWith(
        lookup(key).then(function (blob) {
          return blob ? blobResponse(blob, key) : fetch(ev.request);
        }).catch(function () { return fetch(ev.request); })
      );
    });
    return;
  }

  /* ---------------- page mode ---------------- */
  if (!window.indexedDB) return;

  var OF = window.fetch;
  if (OF) {
    window.fetch = function (input, init) {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      var key = url && audioKeyFromUrl(url);
      if (!key) return OF.apply(this, arguments);
      var self = this, args = arguments;
      return lookup(key).then(function (blob) {
        return blob ? blobResponse(blob, key) : OF.apply(self, args);
      }).catch(function () { return OF.apply(self, args); });
    };
  }

  var XO = XMLHttpRequest.prototype.open;
  var XS = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function () {
    this.__mbu = arguments[1];
    return XO.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function () {
    var xhr = this;
    var args = arguments;
    var key = xhr.__mbu && audioKeyFromUrl(xhr.__mbu);
    if (!key) return XS.apply(xhr, args);
    lookup(key).then(function (blob) {
      if (!blob) { XS.apply(xhr, args); return; }
      var finish = function (val) {
        try {
          Object.defineProperty(xhr, 'readyState', { value: 4, configurable: true });
          Object.defineProperty(xhr, 'status', { value: 200, configurable: true });
          Object.defineProperty(xhr, 'statusText', { value: 'OK', configurable: true });
          if (xhr.responseType === '' || xhr.responseType === 'text') {
            Object.defineProperty(xhr, 'response', { value: val, configurable: true });
            Object.defineProperty(xhr, 'responseText', { value: val, configurable: true });
          } else {
            Object.defineProperty(xhr, 'response', { value: val, configurable: true });
          }
          Object.defineProperty(xhr, 'responseURL', { value: xhr.__mbu, configurable: true });
        } catch (e) {}
        try { xhr.dispatchEvent(new ProgressEvent('readystatechange')); } catch (e) {}
        try { xhr.dispatchEvent(new ProgressEvent('load')); } catch (e) {}
        try { xhr.dispatchEvent(new ProgressEvent('loadend')); } catch (e) {}
      };
      var rt = xhr.responseType;
      if (rt === 'blob') finish(blob);
      else if (rt === 'arraybuffer') blob.arrayBuffer().then(finish);
      else if (rt === 'json') blob.text().then(function (t) { try { finish(JSON.parse(t)); } catch (e) { finish(t); } });
      else blob.text().then(finish);
    }).catch(function () { XS.apply(xhr, args); });
  };

  /* Also self-register as a service worker so <audio>/media loads get
     covered when the page is served over http(s). */
  try {
    if ('serviceWorker' in navigator && document.currentScript) {
      navigator.serviceWorker.register(document.currentScript.src).catch(function () {});
    }
  } catch (e) {}
})();
