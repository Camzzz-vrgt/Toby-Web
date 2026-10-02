// Serves oversized game assets in small slices for CDN hosts with per-file
// limits (jsDelivr). Bridges fetch() and XMLHttpRequest so requests for a
// mapped file are answered from its reassembled .partN pieces.
//
//   TobyPartBridge({ "runner.data": ["runner.data.part1", "runner.data.part2"] });
//
window.TobyPartBridge = function TobyPartBridge(manifest) {
  const blobType = file =>
    /\.wasm$/i.test(file) ? "application/wasm" : "application/octet-stream";
  const entries = Object.entries(manifest).map(([file, parts]) => ({
    file,
    parts,
    pattern: new RegExp(`(?:^|/)${file.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:[?#]|$)`),
    promise: null
  }));
  const entryFor = url => (typeof url === "string" ? entries.find(entry => entry.pattern.test(url)) : null);
  const originalFetch = window.fetch.bind(window);
  const blobUrlFor = entry => {
    if (!entry.promise) {
      entry.promise = Promise.all(entry.parts.map(async name => {
        const response = await originalFetch(name, { cache: "no-store" });
        if (!response.ok) throw new Error(`Unable to load ${name}: HTTP ${response.status}`);
        return response.arrayBuffer();
      })).then(buffers => URL.createObjectURL(new Blob(buffers, { type: blobType(entry.file) })));
    }
    return entry.promise;
  };
  window.fetch = function (resource, options) {
    const url = typeof resource === "string" ? resource : resource && resource.url;
    const entry = entryFor(url);
    if (entry) return blobUrlFor(entry).then(blobUrl => originalFetch(blobUrl, options));
    return originalFetch(resource, options);
  };
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;
  const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    const entry = entryFor(url);
    if (entry) { this.__pendingPartFile = { entry, method, rest }; return; }
    return originalOpen.call(this, method, url, ...rest);
  };
  XMLHttpRequest.prototype.setRequestHeader = function (name, value) {
    if (this.__pendingPartFile) { (this.__pendingPartFile.headers ||= []).push([name, value]); return; }
    return originalSetRequestHeader.call(this, name, value);
  };
  XMLHttpRequest.prototype.send = function (...args) {
    if (this.__pendingPartFile) {
      const { entry, method, rest, headers } = this.__pendingPartFile;
      delete this.__pendingPartFile;
      blobUrlFor(entry).then(blobUrl => {
        originalOpen.call(this, method, blobUrl, ...rest);
        (headers || []).forEach(([name, value]) => originalSetRequestHeader.call(this, name, value));
        originalSend.apply(this, args);
      });
      return;
    }
    return originalSend.apply(this, args);
  };
};
