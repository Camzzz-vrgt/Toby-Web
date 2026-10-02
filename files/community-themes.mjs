const DATABASE_NAME = "toby-web-community-themes";
const STORE_NAME = "installed";
const DRAFT_STORE = "drafts";
const IMAGE_TYPES = new Set(["image/png", "image/jpeg", "image/webp", "image/gif"]);
const AUDIO_TYPES = new Set(["audio/mpeg", "audio/ogg"]);

function requiredText(value, field, maxLength) {
  if (typeof value !== "string" || !value.trim() || value.trim().length > maxLength) {
    throw new Error(`${field} must be 1-${maxLength} characters.`);
  }
  return value.trim();
}

function fileName(value, field, extensions) {
  const name = requiredText(value, field, 100);
  if (!/^[a-zA-Z0-9._-]+$/.test(name) || !extensions.some(ext => name.toLowerCase().endsWith(ext))) {
    throw new Error(`${field} must be a local ${extensions.join(" or ")} file name.`);
  }
  return name;
}

export function validateThemeManifest(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) throw new Error("Invalid theme manifest.");
  if (input.schemaVersion !== 1) throw new Error("Unsupported theme schema version.");
  const id = requiredText(input.id, "ID", 80);
  if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) throw new Error("Invalid theme ID.");
  const accentColor = requiredText(input.accentColor, "Accent color", 7);
  const textColor = requiredText(input.textColor, "Text color", 7);
  if (!/^#[0-9a-fA-F]{6}$/.test(accentColor) || !/^#[0-9a-fA-F]{6}$/.test(textColor)) {
    throw new Error("Theme colors must be six-digit hex values.");
  }
  if (!Number.isFinite(input.musicVolume) || input.musicVolume < 0 || input.musicVolume > 1) {
    throw new Error("Music volume must be between 0 and 1.");
  }
  const buttonOffsets = validateButtonOffsets(input.buttonOffsets);
  const buttonLayout = validateButtonLayout(input.buttonLayout);
  return {
    schemaVersion: 1,
    id,
    name: requiredText(input.name, "Name", 40),
    creator: requiredText(input.creator, "Creator", 40),
    description: typeof input.description === "string" ? input.description.trim().slice(0, 250) : "",
    background: fileName(input.background, "Background", [".png", ".jpg", ".jpeg", ".webp", ".gif"]),
    music: fileName(input.music, "Music", [".mp3", ".ogg"]),
    preview: input.preview ? fileName(input.preview, "Preview", [".png", ".jpg", ".jpeg", ".webp", ".gif"]) : null,
    accentColor,
    textColor,
    musicVolume: input.musicVolume,
    buttonOffsets,
    buttonLayout
  };
}

const BUTTON_LAYOUTS = new Set(["stacked-center", "stacked-left", "stacked-right"]);
function validateButtonLayout(input) {
  if (input == null) return null;
  if (!BUTTON_LAYOUTS.has(input)) throw new Error("Invalid button layout.");
  return input;
}

function validateButtonOffsets(input) {
  if (input == null) return null;
  if (typeof input !== "object" || Array.isArray(input)) throw new Error("Invalid button offsets.");
  const offsets = {};
  for (const key of ["deltarune", "undertale"]) {
    const entry = input[key];
    if (entry == null) continue;
    const x = Number(entry.x);
    const y = Number(entry.y);
    if (!Number.isFinite(x) || !Number.isFinite(y) || Math.abs(x) > 500 || Math.abs(y) > 500) {
      throw new Error("Button offsets must be numbers between -500 and 500.");
    }
    if (x || y) offsets[key] = { x, y };
  }
  return Object.keys(offsets).length ? offsets : null;
}

function matchesSignature(bytes, type) {
  const starts = (...values) => values.every((value, i) => bytes[i] === value);
  const ascii = (offset, value) => [...value].every((char, i) => bytes[offset + i] === char.charCodeAt(0));
  switch (type) {
    case "image/png": return starts(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a);
    case "image/jpeg": return starts(0xff, 0xd8, 0xff);
    case "image/gif": return ascii(0, "GIF87a") || ascii(0, "GIF89a");
    case "image/webp": return ascii(0, "RIFF") && ascii(8, "WEBP");
    case "audio/ogg": return ascii(0, "OggS");
    case "audio/mpeg": return ascii(0, "ID3") || (bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0);
    default: return false;
  }
}

const IMAGE_MAX_BYTES = 30 * 1024 * 1024;
const AUDIO_MAX_BYTES = 50 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 8192;
export const ASSET_LIMITS = { background: IMAGE_MAX_BYTES, music: AUDIO_MAX_BYTES };

export async function validateThemeAsset(file, kind) {
  const allowed = kind === "background" ? IMAGE_TYPES : AUDIO_TYPES;
  const maxBytes = kind === "background" ? IMAGE_MAX_BYTES : AUDIO_MAX_BYTES;
  if (!(file instanceof Blob) || !allowed.has(file.type) || file.size < 12 || file.size > maxBytes) {
    throw new Error(`Invalid ${kind} file type or size.`);
  }
  const bytes = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  if (!matchesSignature(bytes, file.type)) throw new Error(`Invalid ${kind} file contents.`);
  return file;
}

let lameLoader;
function loadLame() {
  if (globalThis.lamejs?.Mp3Encoder) return Promise.resolve(globalThis.lamejs);
  lameLoader ||= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = new URL("./vendor/lame.min.js", import.meta.url).href;
    script.onload = () => globalThis.lamejs?.Mp3Encoder ? resolve(globalThis.lamejs) : reject(new Error("MP3 encoder failed to initialize."));
    script.onerror = () => reject(new Error("Could not load the MP3 encoder."));
    document.head.append(script);
  });
  return lameLoader;
}

async function gifAnimated(file) {
  try {
    if (typeof ImageDecoder !== "function") return true;
    const decoder = new ImageDecoder({ data: await file.arrayBuffer(), type: "image/gif" });
    await decoder.tracks.ready;
    return decoder.tracks.selectedTrack.frameCount > 1;
  } catch { return true; }
}

async function compressAnimatedGif(file, limit) {
  if (typeof ImageDecoder !== "function") {
    throw new Error(`That animated GIF is over ${Math.round(limit / 1024 / 1024)} MB — animation-preserving compression needs Chrome or Edge.`);
  }
  const decoder = new ImageDecoder({ data: await file.arrayBuffer(), type: "image/gif" });
  await decoder.tracks.ready;
  const count = decoder.tracks.selectedTrack.frameCount;
  if (count > 400) throw new Error("That GIF has too many frames to compress.");
  const frames = [];
  let width = 0, height = 0;
  for (let i = 0; i < count; i++) {
    const { image } = await decoder.decode({ frameIndex: i });
    width = Math.max(width, image.displayWidth);
    height = Math.max(height, image.displayHeight);
    frames.push({ image, delay: Math.max(20, Math.round((image.duration || 80000) / 1000)) });
  }
  decoder.close();
  const { GIFEncoder, quantize, applyPalette } = await import(new URL("./vendor/gifenc.esm.js", import.meta.url).href);
  const comp = document.createElement("canvas");
  comp.width = width;
  comp.height = height;
  const cctx = comp.getContext("2d");
  const scaled = document.createElement("canvas");
  const sctx = scaled.getContext("2d");
  let scale = Math.min(1, Math.sqrt(limit / file.size) * 0.9);
  while (scale >= 0.15) {
    const w = Math.max(1, Math.round(width * scale));
    const h = Math.max(1, Math.round(height * scale));
    scaled.width = w;
    scaled.height = h;
    const gif = GIFEncoder();
    cctx.clearRect(0, 0, width, height);
    for (const frame of frames) {
      cctx.drawImage(frame.image, 0, 0);
      sctx.drawImage(comp, 0, 0, w, h);
      const pixels = sctx.getImageData(0, 0, w, h).data;
      const palette = quantize(pixels, 256);
      gif.writeFrame(applyPalette(pixels, palette), w, h, { palette, delay: frame.delay });
    }
    gif.finish();
    const bytes = gif.bytes();
    if (bytes.length <= limit) return new Blob([bytes], { type: "image/gif" });
    scale *= 0.8;
  }
  throw new Error(`That GIF could not be compressed under ${Math.round(limit / 1024 / 1024)} MB while keeping its animation.`);
}

async function compressImage(file, limit) {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  let { width, height } = bitmap;
  if (Math.max(width, height) > MAX_IMAGE_DIMENSION) {
    const ratio = MAX_IMAGE_DIMENSION / Math.max(width, height);
    width = Math.max(1, Math.round(width * ratio));
    height = Math.max(1, Math.round(height * ratio));
  }
  const encode = (w, h, quality) => new Promise(resolve => {
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(bitmap, 0, 0, w, h);
    canvas.toBlob(resolve, "image/webp", quality);
  });
  let scale = 1;
  while (width * scale >= 320 && height * scale >= 320) {
    const w = Math.round(width * scale);
    const h = Math.round(height * scale);
    for (const quality of [0.92, 0.85, 0.75, 0.62, 0.5, 0.4]) {
      const blob = await encode(w, h, quality);
      if (blob && blob.size <= limit) return blob;
    }
    scale *= 0.75;
  }
  throw new Error(`Background could not be compressed under ${Math.round(limit / 1024 / 1024)} MB.`);
}

function encodeMp3(lamejs, buffer, channels, kbps) {
  const encoder = new lamejs.Mp3Encoder(channels, buffer.sampleRate, kbps);
  const block = 32768;
  const left = buffer.getChannelData(0);
  const right = channels === 2 ? buffer.getChannelData(1) : null;
  const leftInt = new Int16Array(block);
  const rightInt = new Int16Array(block);
  const chunks = [];
  for (let i = 0; i < left.length; i += block) {
    const count = Math.min(block, left.length - i);
    for (let j = 0; j < count; j++) {
      leftInt[j] = Math.max(-1, Math.min(1, left[i + j])) * 32767;
      if (right) rightInt[j] = Math.max(-1, Math.min(1, right[i + j])) * 32767;
    }
    chunks.push(encoder.encodeBuffer(count === block ? leftInt : leftInt.subarray(0, count),
      channels === 2 ? (count === block ? rightInt : rightInt.subarray(0, count)) : undefined));
  }
  chunks.push(encoder.flush());
  return chunks;
}

async function compressAudio(file, limit) {
  const lamejs = await loadLame();
  const context = new AudioContext();
  try {
    let buffer = await context.decodeAudioData(await file.arrayBuffer());
    const channels = Math.min(2, buffer.numberOfChannels);
    if (![8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000].includes(buffer.sampleRate)) {
      const offline = new OfflineAudioContext(channels, Math.ceil(buffer.duration * 44100), 44100);
      const source = offline.createBufferSource();
      source.buffer = buffer;
      source.connect(offline.destination);
      source.start();
      buffer = await offline.startRendering();
    }
    const ladder = [320, 256, 224, 192, 160, 128, 112, 96];
    const headroom = Math.floor(limit * 8 / buffer.duration / 1000 * 0.9);
    let start = ladder.findIndex(rate => rate <= Math.min(320, headroom));
    if (start === -1) start = ladder.length - 1;
    for (let i = start; i < ladder.length; i++) {
      const blob = new Blob(encodeMp3(lamejs, buffer, channels, ladder[i]), { type: "audio/mpeg" });
      if (blob.size <= limit) return blob;
    }
    throw new Error(`Music could not be compressed under ${Math.round(limit / 1024 / 1024)} MB.`);
  } finally {
    context.close();
  }
}

export async function compressThemeAsset(file, kind) {
  const limit = ASSET_LIMITS[kind];
  if (!(file instanceof Blob) || file.size <= limit) return { file, changed: false };
  if (kind === "background") {
    if (!IMAGE_TYPES.has(file.type)) return { file, changed: false };
    if (file.type === "image/gif" && await gifAnimated(file)) {
      const blob = await compressAnimatedGif(file, limit);
      const name = (file.name || "background").replace(/\.[^.]+$/, "") + ".gif";
      return { file: new File([blob], name, { type: "image/gif" }), changed: true, note: "Animation was kept." };
    }
    const blob = await compressImage(file, limit);
    const name = (file.name || "background").replace(/\.[^.]+$/, "") + ".webp";
    return { file: new File([blob], name, { type: "image/webp" }), changed: true, note: null };
  }
  if (!AUDIO_TYPES.has(file.type)) return { file, changed: false };
  const blob = await compressAudio(file, limit);
  const name = (file.name || "music").replace(/\.[^.]+$/, "") + ".mp3";
  return { file: new File([blob], name, { type: "audio/mpeg" }), changed: true, note: null };
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, 2);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) request.result.createObjectStore(STORE_NAME, { keyPath: "manifest.id" });
      if (!request.result.objectStoreNames.contains(DRAFT_STORE)) request.result.createObjectStore(DRAFT_STORE, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function transaction(mode, callback, storeName = STORE_NAME) {
  const db = await openDatabase();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(storeName, mode);
      const request = callback(tx.objectStore(storeName));
      let result;
      request.onsuccess = () => { result = request.result; };
      request.onerror = () => reject(request.error);
      tx.oncomplete = () => resolve(result);
      tx.onabort = () => reject(tx.error);
      tx.onerror = () => reject(tx.error);
    });
  } finally {
    db.close();
  }
}

export async function installTheme(manifestInput, background, music) {
  const manifest = validateThemeManifest(manifestInput);
  await Promise.all([validateThemeAsset(background, "background"), validateThemeAsset(music, "music")]);
  if (manifest.background.split(".").pop().toLowerCase() !== (background.type === "image/jpeg" ? "jpg" : background.type.split("/")[1]) &&
      !(background.type === "image/jpeg" && manifest.background.toLowerCase().endsWith(".jpeg"))) {
    throw new Error("Background file type does not match its manifest name.");
  }
  if ((music.type === "audio/mpeg" ? ".mp3" : ".ogg") !== manifest.music.slice(manifest.music.lastIndexOf(".")).toLowerCase()) {
    throw new Error("Music file type does not match its manifest name.");
  }
  await transaction("readwrite", store => store.put({ manifest, background, music, installedAt: Date.now() }));
  return manifest;
}

export async function getInstalledTheme(id) {
  return transaction("readonly", store => store.get(id));
}

export async function listInstalledThemes() {
  const entries = await transaction("readonly", store => store.getAll());
  return entries.map(({ manifest, installedAt }) => ({ manifest, installedAt }));
}

export async function uninstallTheme(id) {
  await transaction("readwrite", store => store.delete(id));
}

export async function saveThemeDraft(draft) {
  if (!draft || typeof draft.id !== "string" || !draft.id.startsWith("draft-")) throw new Error("Invalid draft.");
  if (draft.background) await validateThemeAsset(draft.background, "background");
  if (draft.music) await validateThemeAsset(draft.music, "music");
  await transaction("readwrite", store => store.put({ ...draft, savedAt: Date.now() }), DRAFT_STORE);
}

export async function listThemeDrafts() {
  return transaction("readonly", store => store.getAll(), DRAFT_STORE);
}

export async function deleteThemeDraft(id) {
  await transaction("readwrite", store => store.delete(id), DRAFT_STORE);
}
