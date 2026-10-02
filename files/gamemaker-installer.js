(() => {
  "use strict";

  const directory = (parent, name) => parent.getDirectoryHandle(name, { create: true });

  async function fileAt(root, path, create = false) {
    const parts = path.split("/");
    const name = parts.pop();
    let dir = root;
    for (const part of parts) dir = await directory(dir, part);
    return dir.getFileHandle(name, { create });
  }

  async function fileSize(root, path) {
    try { return (await (await fileAt(root, path)).getFile()).size; }
    catch (error) { if (error.name === "NotFoundError") return -1; throw error; }
  }

  async function sha256(blob) {
    const bytes = await blob.arrayBuffer();
    const digest = await crypto.subtle.digest("SHA-256", bytes);
    return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
  }

  async function download(entry, base) {
    const sources = Array.isArray(entry.sources) ? entry.sources : [entry.source];
    const pieces = [];
    for (const source of sources) {
      const url = new URL(source, base);
      if (url.origin !== new URL(document.baseURI).origin) throw new Error(`Non-local asset: ${source}`);
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error(`${source}: HTTP ${response.status}`);
      pieces.push(await response.blob());
    }
    const blob = pieces.length === 1 ? pieces[0] : new Blob(pieces);
    const label = sources.join("+");
    if (blob.size !== entry.size || await sha256(blob) !== entry.sha256) {
      throw new Error(`${label}: file differs from the manifest`);
    }
    return blob;
  }

  async function write(root, path, blob) {
    const handle = await fileAt(root, path, true);
    const stream = await handle.createWritable();
    try { await stream.write(blob); }
    finally { await stream.close(); }
  }

  async function install(manifestPath, onStatus) {
    if (!navigator.storage?.getDirectory) throw new Error("This browser does not support the local storage API required by the Undertale runner.");
    const manifestUrl = new URL(manifestPath, document.baseURI);
    const response = await fetch(manifestUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`${manifestPath}: HTTP ${response.status}`);
    const manifest = await response.json();
    if (manifest.schemaVersion !== 1 || !/^[a-z0-9-]+$/.test(manifest.gameId) || !manifest.buildId || !Array.isArray(manifest.dataParts) || !Array.isArray(manifest.files)) {
      throw new Error("Invalid GameMaker install manifest");
    }
    for (const entry of [...manifest.dataParts, ...manifest.files]) {
      const sourcesOk = typeof entry.source === "string" ||
        (Array.isArray(entry.sources) && entry.sources.length > 0 && entry.sources.every(source => typeof source === "string"));
      if (!sourcesOk || !Number.isSafeInteger(entry.size) || entry.size < 0 || !/^[a-f0-9]{64}$/.test(entry.sha256)) throw new Error("Invalid asset entry in install manifest");
    }
    for (const entry of manifest.files) {
      if (typeof entry.target !== "string" || entry.target.split("/").some(part => !part || part === "." || part === "..")) throw new Error("Invalid target path in install manifest");
    }
    const root = await navigator.storage.getDirectory();
    const gameDir = await directory(await directory(root, "games"), manifest.gameId);
    await directory(await directory(root, "saves"), manifest.gameId);
    let marker = "";
    try { marker = await (await (await fileAt(gameDir, ".toby-web-build")).getFile()).text(); }
    catch (error) { if (error.name !== "NotFoundError") throw error; }
    const dataSize = manifest.dataParts.reduce((sum, entry) => sum + entry.size, 0);
    if (marker === manifest.buildId && await fileSize(gameDir, "data.win") === dataSize) {
      const sizes = await Promise.all(manifest.files.map(entry => fileSize(gameDir, entry.target)));
      if (sizes.every((size, index) => size === manifest.files[index].size)) return;
    }
    const total = manifest.dataParts.length + manifest.files.length;
    let completed = 0;
    const dataHandle = await fileAt(gameDir, "data.win", true);
    const dataStream = await dataHandle.createWritable();
    try {
      for (const [index, entry] of manifest.dataParts.entries()) {
        await dataStream.write(await download(entry, manifestUrl));
        onStatus(`Installing game data (${index + 1}/${manifest.dataParts.length})...`, ++completed, total);
      }
    } finally { await dataStream.close(); }
    const queue = manifest.files.slice();
    let failure;
    await Promise.all(Array.from({ length: Math.min(8, queue.length) }, async () => {
      while (queue.length && !failure) {
        const entry = queue.shift();
        try {
          await write(gameDir, entry.target, await download(entry, manifestUrl));
          onStatus(`Installing local assets (${++completed - manifest.dataParts.length}/${manifest.files.length})...`, completed, total);
        } catch (error) { failure = error; }
      }
    }));
    if (failure) throw failure;
    await write(gameDir, ".toby-web-build", manifest.buildId);
  }

  window.TobyGameMakerInstaller = { install };
})();
