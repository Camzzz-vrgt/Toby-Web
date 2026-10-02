import { validateThemeName, validateThemeDescription } from "../../../files/theme-name-policy.mjs";

const PREFIX = "community-themes/";
const TAGS = new Set(["Verified", "Camzzz Approved"]);
const IMAGE_TYPES = { "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp", "image/gif": "gif" };
const AUDIO_TYPES = { "audio/mpeg": "mp3", "audio/ogg": "ogg" };
const BUTTON_LAYOUTS = new Set(["stacked-center", "stacked-left", "stacked-right"]);
const DAY = 86400;

function response(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...headers } });
}

function originHeaders(request, env) {
  const origin = request.headers.get("Origin");
  const allowed = [env.SITE_ORIGIN, "http://localhost:2000", "http://127.0.0.1:2000"];
  return origin && allowed.includes(origin) ? { "access-control-allow-origin": origin, "access-control-allow-credentials": "true", "vary": "Origin" } : {};
}

function withCors(result, request, env) {
  const headers = new Headers(result.headers);
  for (const [name, value] of Object.entries(originHeaders(request, env))) headers.set(name, value);
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "no-referrer");
  headers.set("x-frame-options", "DENY");
  return new Response(result.body, { status: result.status, headers });
}

function ensureWriteOrigin(request, env) {
  const origin = request.headers.get("Origin");
  if ((origin !== env.SITE_ORIGIN && !(env.LOCAL_WRITES === "true" && ["http://localhost:2000", "http://127.0.0.1:2000"].includes(origin))) || request.headers.get("X-Toby-Theme-Action") !== "1") {
    throw new HttpError(403, "Request origin not allowed.");
  }
}

class HttpError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

function cookies(request) {
  return Object.fromEntries((request.headers.get("Cookie") || "").split(";").map(part => part.trim().split(/=(.*)/s).slice(0, 2)).filter(parts => parts.length === 2));
}

function base64url(bytes) {
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeBase64url(value) {
  const raw = atob(value.replace(/-/g, "+").replace(/_/g, "/"));
  return Uint8Array.from(raw, char => char.charCodeAt(0));
}

async function sign(value, secret) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return base64url(new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value))));
}

async function session(request, env) {
  if (!env.SESSION_SECRET) return null;
  const token = cookies(request).tw_theme_session;
  if (!token) return null;
  const [payload, signature] = token.split(".");
  try {
    if (!payload || !signature) return null;
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(env.SESSION_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    if (!await crypto.subtle.verify("HMAC", key, decodeBase64url(signature), new TextEncoder().encode(payload))) return null;
    const data = JSON.parse(new TextDecoder().decode(decodeBase64url(payload)));
    if (!/^\d{15,22}$/.test(data.id) || data.exp < Date.now()) return null;
    return data;
  } catch { return null; }
}

function requireUser(user) {
  if (!user) throw new HttpError(401, "Sign in with Discord first.");
  return user;
}

function requireAdmin(user, env) {
  requireUser(user);
  if (!(env.ADMIN_DISCORD_IDS || "").split(",").map(id => id.trim()).includes(user.id)) throw new HttpError(403, "Admin access required.");
  return user;
}

function validateManifest(input) {
  if (!input || input.schemaVersion !== 1) throw new HttpError(400, "Invalid theme manifest.");
  let name;
  try { name = validateThemeName(input.name); }
  catch (error) { throw new HttpError(400, error.message); }
  for (const [field, limit] of [["creator", 40]]) {
    if (typeof input[field] !== "string" || !input[field].trim() || input[field].trim().length > limit) throw new HttpError(400, `Invalid ${field}.`);
  }
  let description;
  try { description = validateThemeDescription(input.description); }
  catch (error) { throw new HttpError(400, error.message); }
  if (!/^#[0-9a-fA-F]{6}$/.test(input.accentColor) || !/^#[0-9a-fA-F]{6}$/.test(input.textColor)) throw new HttpError(400, "Invalid color.");
  if (!Number.isFinite(input.musicVolume) || input.musicVolume < 0 || input.musicVolume > 1) throw new HttpError(400, "Invalid music volume.");
  let buttonOffsets = null;
  if (input.buttonOffsets != null) {
    if (typeof input.buttonOffsets !== "object" || Array.isArray(input.buttonOffsets)) throw new HttpError(400, "Invalid button offsets.");
    const offsets = {};
    for (const key of ["deltarune", "undertale"]) {
      const entry = input.buttonOffsets[key];
      if (entry == null) continue;
      const x = Number(entry.x);
      const y = Number(entry.y);
      if (!Number.isFinite(x) || !Number.isFinite(y) || Math.abs(x) > 500 || Math.abs(y) > 500) throw new HttpError(400, "Invalid button offsets.");
      if (x || y) offsets[key] = { x, y };
    }
    buttonOffsets = Object.keys(offsets).length ? offsets : null;
  }
  let buttonLayout = null;
  if (input.buttonLayout != null) {
    if (!BUTTON_LAYOUTS.has(input.buttonLayout)) throw new HttpError(400, "Invalid button layout.");
    buttonLayout = input.buttonLayout;
  }
  return { name, creator: input.creator.trim(), description, accentColor: input.accentColor, textColor: input.textColor, musicVolume: input.musicVolume, buttonOffsets, buttonLayout };
}

function imageDimensions(bytes, type) {
  const ascii = (offset, value) => [...value].every((char, i) => bytes[offset + i] === char.charCodeAt(0));
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  if (type === "image/png" && bytes.length > 24 && ascii(1, "PNG") && ascii(12, "IHDR")) return [view.getUint32(16), view.getUint32(20)];
  if (type === "image/gif" && bytes.length > 10 && (ascii(0, "GIF87a") || ascii(0, "GIF89a"))) return [view.getUint16(6, true), view.getUint16(8, true)];
  if (type === "image/webp" && bytes.length > 30 && ascii(0, "RIFF") && ascii(8, "WEBP")) {
    if (ascii(12, "VP8X")) return [1 + bytes[24] + (bytes[25] << 8) + (bytes[26] << 16), 1 + bytes[27] + (bytes[28] << 8) + (bytes[29] << 16)];
    if (ascii(12, "VP8L")) return [1 + (((bytes[22] & 0x3f) << 8) | bytes[21]), 1 + (((bytes[24] & 0x0f) << 10) | (bytes[23] << 2) | ((bytes[22] & 0xc0) >> 6))];
    if (ascii(12, "VP8 ") && bytes[23] === 0x9d && bytes[24] === 0x01 && bytes[25] === 0x2a) return [view.getUint16(26, true) & 0x3fff, view.getUint16(28, true) & 0x3fff];
  }
  if (type === "image/jpeg" && bytes[0] === 0xff && bytes[1] === 0xd8) {
    let offset = 2;
    while (offset + 9 < bytes.length) {
      if (bytes[offset] !== 0xff) break;
      const marker = bytes[offset + 1];
      if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) return [view.getUint16(offset + 7), view.getUint16(offset + 5)];
      const length = view.getUint16(offset + 2);
      if (length < 2) break;
      offset += length + 2;
    }
  }
  return null;
}

async function validateAsset(file, kind) {
  const types = kind === "background" ? IMAGE_TYPES : AUDIO_TYPES;
  const maxSize = kind === "background" ? 30 * 1024 * 1024 : 50 * 1024 * 1024;
  if (!(file instanceof File) || !types[file.type] || file.size < 16 || file.size > maxSize) throw new HttpError(400, `Invalid ${kind} file.`);
  const bytes = new Uint8Array(await file.arrayBuffer());
  if (kind === "background") {
    const dimensions = imageDimensions(bytes, file.type);
    if (!dimensions || dimensions.some(size => size < 1 || size > 8192)) throw new HttpError(400, "Invalid background image or dimensions.");
  } else if (file.type === "audio/ogg" ? ![79, 103, 103, 83].every((v, i) => bytes[i] === v) : !(bytes[0] === 73 && bytes[1] === 68 && bytes[2] === 51) && !(bytes[0] === 255 && (bytes[1] & 224) === 224)) {
    throw new HttpError(400, "Invalid music file contents.");
  }
  return { bytes, extension: types[file.type], type: file.type };
}

function publicTheme(row) {
  return {
    schemaVersion: 1, id: row.id, name: row.name, creator: row.creator, description: row.description,
    accentColor: row.accent_color, textColor: row.text_color, musicVolume: row.music_volume,
    background: `background.${IMAGE_TYPES[row.background_type]}`, music: `music.${AUDIO_TYPES[row.music_type]}`,
    preview: null, tags: JSON.parse(row.tags || "[]").filter(tag => TAGS.has(tag)), createdAt: row.created_at, updatedAt: row.updated_at,
    buttonOffsets: (() => { try { return row.button_offsets ? JSON.parse(row.button_offsets) : null; } catch { return null; } })(),
    buttonLayout: BUTTON_LAYOUTS.has(row.button_layout) ? row.button_layout : null,
    backgroundUrl: `/api/themes/${row.id}/assets/background`, musicUrl: `/api/themes/${row.id}/assets/music`,
    favoriteCount: row.favorite_count || 0
  };
}

async function verifyTurnstile(token, request, env, action) {
  if (!env.TURNSTILE_SECRET || typeof token !== "string" || !token || token.length > 2048) throw new HttpError(503, "Turnstile is not configured.");
  const form = new FormData();
  form.set("secret", env.TURNSTILE_SECRET);
  form.set("response", token);
  const ip = request.headers.get("CF-Connecting-IP");
  if (ip) form.set("remoteip", ip);
  const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form });
  const data = await result.json();
  if (!data.success || data.action !== action || (env.SITE_ORIGIN && data.hostname !== new URL(env.SITE_ORIGIN).hostname)) throw new HttpError(403, "Verification failed. Please try again.");
}

async function limitWrite(env, user, action) {
  if (!env.WRITE_LIMIT) return;
  const { success } = await env.WRITE_LIMIT.limit({ key: `${user.id}:${action}` });
  if (!success) throw new HttpError(429, "Too many requests. Please wait a minute.");
}

async function limitIpWrite(env, request, action) {
  const ip = request.headers.get("CF-Connecting-IP");
  if (!env.IP_WRITE_LIMIT || !ip) return;
  const { success } = await env.IP_WRITE_LIMIT.limit({ key: `${ip}:${action}` });
  if (!success) throw new HttpError(429, "Too many requests from this network. Please wait a minute.");
}

async function catalogPaused(env) {
  const row = await env.DB.prepare("SELECT value FROM moderation_settings WHERE key = 'catalog_paused'").first();
  return row?.value === "true";
}

async function recordAction(env, themeId, adminId, action, detail = "") {
  await env.DB.prepare("INSERT INTO moderation_actions (id, theme_id, admin_id, action, detail, created_at) VALUES (?, ?, ?, ?, ?, ?)")
    .bind(crypto.randomUUID(), themeId, adminId, action, detail, Date.now()).run();
}

async function notifyPendingTheme(env, manifest, user) {
  if (!env.DISCORD_WEBHOOK_URL) return;
  const mention = (env.DISCORD_NOTIFY_USER_ID || (env.ADMIN_DISCORD_IDS || "").split(",")[0] || "").trim();
  const name = manifest.name.replace(/[*_`~|@#]/g, "").slice(0, 40) || "Untitled";
  const creator = user.name.replace(/[*_`~|@#]/g, "").slice(0, 40);
  const link = `${(env.SITE_ORIGIN || "").replace(/\/$/, "")}/themes.html#admin`;
  try {
    await fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `${mention ? `<@${mention}> ` : ""}New theme pending review: **${name}** by ${creator} — ${link}`,
        allowed_mentions: { users: mention ? [mention] : [] }
      })
    });
  } catch {}
}

async function route(request, env, ctx) {
  const url = new URL(request.url);
  const path = url.pathname;
  if (request.method === "OPTIONS") {
    if (!originHeaders(request, env)["access-control-allow-origin"]) return response({ error: "Origin not allowed" }, 403);
    return new Response(null, { status: 204, headers: { "access-control-allow-methods": "GET, POST, OPTIONS", "access-control-allow-headers": "content-type, x-toby-theme-action", "access-control-max-age": "86400" } });
  }
  if (path === "/api/config" && request.method === "GET") {
    const signInEnabled = Boolean(env.DISCORD_CLIENT_ID && env.DISCORD_CLIENT_SECRET && env.SESSION_SECRET);
    return response({ siteKey: env.TURNSTILE_SITE_KEY || "", signInEnabled, publishingEnabled: env.SUBMISSIONS_ENABLED === "true" && signInEnabled && Boolean(env.TURNSTILE_SECRET && env.TURNSTILE_SITE_KEY && env.ADMIN_DISCORD_IDS), betaAdminOnly: env.BETA_ADMIN_ONLY === "true" });
  }
  if (path === "/auth/discord" && request.method === "GET") {
    if (!env.DISCORD_CLIENT_ID || !env.DISCORD_CLIENT_SECRET || !env.SESSION_SECRET) throw new HttpError(503, "Discord sign-in is not configured.");
    const state = base64url(crypto.getRandomValues(new Uint8Array(24)));
    const callback = `${url.origin}/auth/callback`;
    const auth = new URL("https://discord.com/oauth2/authorize");
    auth.search = new URLSearchParams({ client_id: env.DISCORD_CLIENT_ID, redirect_uri: callback, response_type: "code", scope: "identify", state }).toString();
    return new Response(null, { status: 302, headers: { Location: auth.href, "Set-Cookie": `tw_theme_state=${state}; HttpOnly; Secure; SameSite=Lax; Path=/auth; Max-Age=600` } });
  }
  if (path === "/auth/callback" && request.method === "GET") {
    const state = url.searchParams.get("state");
    const code = url.searchParams.get("code");
    if (!state || !code || state !== cookies(request).tw_theme_state) throw new HttpError(403, "Invalid sign-in state.");
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST", headers: { "content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: env.DISCORD_CLIENT_ID, client_secret: env.DISCORD_CLIENT_SECRET, grant_type: "authorization_code", code, redirect_uri: `${url.origin}/auth/callback` })
    });
    if (!tokenResponse.ok) throw new HttpError(403, "Discord sign-in failed.");
    const token = await tokenResponse.json();
    const profileResponse = await fetch("https://discord.com/api/users/@me", { headers: { Authorization: `Bearer ${token.access_token}` } });
    if (!profileResponse.ok) throw new HttpError(403, "Discord profile could not be read.");
    const profile = await profileResponse.json();
    const payload = base64url(new TextEncoder().encode(JSON.stringify({ id: profile.id, name: String(profile.global_name || profile.username).slice(0, 40), exp: Date.now() + 7 * DAY * 1000 })));
    const signed = `${payload}.${await sign(payload, env.SESSION_SECRET)}`;
    const headers = new Headers({ Location: `${env.SITE_ORIGIN}/themes.html#studio` });
    headers.append("Set-Cookie", `tw_theme_session=${signed}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${7 * DAY}`);
    headers.append("Set-Cookie", "tw_theme_state=; HttpOnly; Secure; SameSite=Lax; Path=/auth; Max-Age=0");
    return new Response(null, { status: 302, headers });
  }

  if (!env.DB || !env.ASSETS) throw new HttpError(503, "Theme storage is not configured.");
  const user = await session(request, env);
  if (path === "/api/me" && request.method === "GET") return response({ user: user ? { id: user.id, name: user.name, admin: (env.ADMIN_DISCORD_IDS || "").split(",").includes(user.id) } : null });
  if (path === "/api/me/themes" && request.method === "GET") {
    requireUser(user);
    const rows = await env.DB.prepare("SELECT * FROM themes WHERE owner_id = ? ORDER BY created_at DESC LIMIT 100").bind(user.id).all();
    return response({ themes: rows.results.map(row => ({ ...publicTheme(row), status: row.status, rejectionReason: row.rejection_reason })) });
  }
  if (path === "/api/me/favorites" && request.method === "GET") {
    requireUser(user);
    const rows = await env.DB.prepare("SELECT theme_id FROM favorites WHERE user_id = ? ORDER BY created_at DESC LIMIT 500").bind(user.id).all();
    return response({ ids: rows.results.map(row => row.theme_id) });
  }
  if (path === "/api/themes" && request.method === "GET") {
    if (await catalogPaused(env)) return response({ themes: [], page: 0, hasMore: false, paused: true });
    const q = (url.searchParams.get("q") || "").trim().slice(0, 60);
    const sort = url.searchParams.get("sort");
    const verifiedOnly = sort === "verified" ? " AND EXISTS (SELECT 1 FROM json_each(t.tags) WHERE value = 'Verified')" : "";
    const order = sort === "alphabetical" ? "LOWER(t.name) ASC, t.id ASC" : "t.created_at DESC, t.id DESC";
    const page = Math.max(0, Math.min(100, Number.parseInt(url.searchParams.get("page") || "0", 10) || 0));
    const result = await env.DB.prepare(`SELECT t.*, (SELECT COUNT(*) FROM favorites WHERE theme_id = t.id) AS favorite_count FROM themes t WHERE t.status = 'published' AND t.name LIKE ?${verifiedOnly} ORDER BY ${order} LIMIT 25 OFFSET ?`).bind(`%${q}%`, page * 24).all();
    return response({ themes: result.results.slice(0, 24).map(publicTheme), page, hasMore: result.results.length > 24 });
  }
  if (path === "/api/themes/usage" && request.method === "GET") {
    const rows = await env.DB.prepare("SELECT theme_id, COUNT(*) AS users FROM theme_uses GROUP BY theme_id").all();
    const usage = {};
    for (const row of rows.results) usage[row.theme_id] = row.users;
    return response({ usage });
  }
  if (path === "/api/themes/usage" && request.method === "POST") {
    ensureWriteOrigin(request, env);
    await limitIpWrite(env, request, "usage");
    const data = await request.json();
    if (typeof data.themeId !== "string" || !/^[a-zA-Z0-9_-]{1,80}$/.test(data.themeId)) throw new HttpError(400, "Invalid theme id.");
    if (typeof data.clientId !== "string" || !/^[a-zA-Z0-9-]{8,80}$/.test(data.clientId)) throw new HttpError(400, "Invalid client id.");
    const now = Date.now();
    await env.DB.prepare("INSERT INTO theme_uses (theme_id, client_id, first_seen, last_seen) VALUES (?, ?, ?, ?) ON CONFLICT (theme_id, client_id) DO UPDATE SET last_seen = excluded.last_seen")
      .bind(data.themeId, data.clientId, now, now).run();
    return response({ ok: true });
  }
  const detail = path.match(/^\/api\/themes\/([a-f0-9-]{36})$/);
  if (detail && request.method === "GET") {
    if (await catalogPaused(env)) throw new HttpError(503, "Community catalog is temporarily paused.");
    const row = await env.DB.prepare("SELECT t.*, (SELECT COUNT(*) FROM favorites WHERE theme_id = t.id) AS favorite_count FROM themes t WHERE t.id = ? AND t.status = 'published'").bind(detail[1]).first();
    if (!row) throw new HttpError(404, "Theme not found.");
    return response({ theme: publicTheme(row) });
  }
  const favorite = path.match(/^\/api\/themes\/([a-f0-9-]{36})\/favorite$/);
  if (favorite && request.method === "POST") {
    ensureWriteOrigin(request, env);
    requireUser(user);
    await limitWrite(env, user, "favorite");
    const theme = await env.DB.prepare("SELECT id FROM themes WHERE id = ? AND status = 'published'").bind(favorite[1]).first();
    if (!theme) throw new HttpError(404, "Theme not found.");
    const data = await request.json();
    if (typeof data.favorite !== "boolean") throw new HttpError(400, "Invalid favorite state.");
    if (data.favorite) {
      const existing = await env.DB.prepare("SELECT 1 FROM favorites WHERE theme_id = ? AND user_id = ?").bind(theme.id, user.id).first();
      if (existing) return response({ ok: true });
      const count = await env.DB.prepare("SELECT COUNT(*) AS total FROM favorites WHERE user_id = ?").bind(user.id).first();
      if (count.total >= 500) throw new HttpError(429, "Favorite limit reached.");
      await env.DB.prepare("INSERT OR IGNORE INTO favorites (theme_id, user_id, created_at) VALUES (?, ?, ?)").bind(theme.id, user.id, Date.now()).run();
    } else {
      await env.DB.prepare("DELETE FROM favorites WHERE theme_id = ? AND user_id = ?").bind(theme.id, user.id).run();
    }
    return response({ ok: true });
  }
  const report = path.match(/^\/api\/themes\/([a-f0-9-]{36})\/report$/);
  if (report && request.method === "POST") {
    ensureWriteOrigin(request, env);
    requireUser(user);
    await limitWrite(env, user, "report");
    await limitIpWrite(env, request, "report");
    const data = await request.json();
    if (!["inappropriate", "copyright", "spam", "other"].includes(data.reason)) throw new HttpError(400, "Choose a report reason.");
    await verifyTurnstile(data.turnstileToken, request, env, "report_theme");
    const theme = await env.DB.prepare("SELECT id FROM themes WHERE id = ? AND status = 'published'").bind(report[1]).first();
    if (!theme) throw new HttpError(404, "Theme not found.");
    const existing = await env.DB.prepare("SELECT id FROM reports WHERE theme_id = ? AND reporter_id = ?").bind(report[1], user.id).first();
    if (existing) throw new HttpError(409, "You have already reported this theme.");
    const count = await env.DB.prepare("SELECT COUNT(*) AS total FROM reports WHERE reporter_id = ? AND created_at > ?").bind(user.id, Date.now() - DAY * 1000).first();
    if (count.total >= 5) throw new HttpError(429, "Daily report limit reached.");
    await env.DB.prepare("INSERT INTO reports (id, theme_id, reporter_id, reason, created_at) VALUES (?, ?, ?, ?, ?)")
      .bind(crypto.randomUUID(), report[1], user.id, data.reason, Date.now()).run();
    return response({ ok: true }, 201);
  }
  const asset = path.match(/^\/api\/themes\/([a-f0-9-]{36})\/assets\/(background|music)$/);
  if (asset && request.method === "GET") {
    if (await catalogPaused(env)) throw new HttpError(503, "Community catalog is temporarily paused.");
    const row = await env.DB.prepare("SELECT * FROM themes WHERE id = ? AND status = 'published'").bind(asset[1]).first();
    if (!row) throw new HttpError(404, "Theme not found.");
    const object = await env.ASSETS.get(asset[2] === "background" ? row.background_key : row.music_key);
    if (!object) throw new HttpError(404, "Theme asset not found.");
    return new Response(object.body, { headers: { "content-type": asset[2] === "background" ? row.background_type : row.music_type, "cache-control": "public, max-age=3600", "cross-origin-resource-policy": "cross-origin", "x-content-type-options": "nosniff", "content-security-policy": "default-src 'none'" } });
  }
  if (path === "/api/themes/submissions" && request.method === "POST") {
    if (env.SUBMISSIONS_ENABLED !== "true") throw new HttpError(503, "Community submissions are not open yet.");
    ensureWriteOrigin(request, env);
    requireUser(user);
    if (env.BETA_ADMIN_ONLY === "true") requireAdmin(user, env);
    await limitWrite(env, user, "submit");
    await limitIpWrite(env, request, "submit");
    if (Number(request.headers.get("Content-Length") || 0) > 32 * 1024 * 1024) throw new HttpError(413, "Submission is too large.");
    const form = await request.formData();
    await verifyTurnstile(form.get("turnstileToken"), request, env, "submit_theme");
    let input;
    try { input = JSON.parse(form.get("manifest")); } catch { throw new HttpError(400, "Invalid theme manifest."); }
    const manifest = validateManifest(input);
    try { validateThemeName(user.name); }
    catch { throw new HttpError(400, "Discord display name contains blocked language or unsupported characters."); }
    const background = await validateAsset(form.get("background"), "background");
    const music = await validateAsset(form.get("music"), "music");
    const id = crypto.randomUUID();
    const backgroundKey = `${PREFIX}pending/${id}/background.${background.extension}`;
    const musicKey = `${PREFIX}pending/${id}/music.${music.extension}`;
    await env.ASSETS.put(backgroundKey, background.bytes, { httpMetadata: { contentType: background.type } });
    try {
      await env.ASSETS.put(musicKey, music.bytes, { httpMetadata: { contentType: music.type } });
      await env.DB.prepare("INSERT INTO themes (id, owner_id, name, creator, description, accent_color, text_color, music_volume, background_type, music_type, background_key, music_key, button_offsets, button_layout, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?)")
        .bind(id, user.id, manifest.name, user.name.slice(0, 40), manifest.description, manifest.accentColor, manifest.textColor, manifest.musicVolume, background.type, music.type, backgroundKey, musicKey, manifest.buttonOffsets ? JSON.stringify(manifest.buttonOffsets) : null, manifest.buttonLayout, Date.now(), Date.now()).run();
    } catch (error) {
      await Promise.all([env.ASSETS.delete(backgroundKey), env.ASSETS.delete(musicKey)]);
      throw error;
    }
    if (ctx) ctx.waitUntil(notifyPendingTheme(env, manifest, user));
    return response({ id, status: "pending" }, 201);
  }
  if (path === "/api/admin/submissions" && request.method === "GET") {
    requireAdmin(user, env);
    const rows = await env.DB.prepare("SELECT * FROM themes WHERE status = 'pending' ORDER BY created_at ASC LIMIT 100").all();
    return response({ themes: rows.results.map(row => ({ ...publicTheme(row), ownerId: row.owner_id })) });
  }
  const pendingAsset = path.match(/^\/api\/admin\/submissions\/([a-f0-9-]{36})\/assets\/(background|music)$/);
  if (pendingAsset && request.method === "GET") {
    requireAdmin(user, env);
    const row = await env.DB.prepare("SELECT * FROM themes WHERE id = ? AND status = 'pending'").bind(pendingAsset[1]).first();
    if (!row) throw new HttpError(404, "Pending theme not found.");
    const object = await env.ASSETS.get(pendingAsset[2] === "background" ? row.background_key : row.music_key);
    if (!object) throw new HttpError(404, "Pending asset not found.");
    return new Response(object.body, { headers: { "content-type": pendingAsset[2] === "background" ? row.background_type : row.music_type, "cache-control": "no-store", "cross-origin-resource-policy": "cross-origin", "x-content-type-options": "nosniff" } });
  }
  if (path === "/api/admin/themes" && request.method === "GET") {
    requireAdmin(user, env);
    const rows = await env.DB.prepare("SELECT * FROM themes WHERE status IN ('published', 'hidden') ORDER BY updated_at DESC LIMIT 200").all();
    return response({ themes: rows.results.map(row => ({ ...publicTheme(row), status: row.status })) });
  }
  if (path === "/api/admin/reports" && request.method === "GET") {
    requireAdmin(user, env);
    const rows = await env.DB.prepare("SELECT r.id, r.theme_id, r.reporter_id, r.reason, r.created_at, t.name AS theme_name, t.status AS theme_status FROM reports r JOIN themes t ON t.id = r.theme_id WHERE r.status = 'open' ORDER BY r.created_at ASC LIMIT 100").all();
    return response({ reports: rows.results.map(row => ({ id: row.id, themeId: row.theme_id, reporterId: row.reporter_id, reason: row.reason, createdAt: row.created_at, themeName: row.theme_name, themeStatus: row.theme_status })) });
  }
  const resolveReport = path.match(/^\/api\/admin\/reports\/([a-f0-9-]{36})\/resolve$/);
  if (resolveReport && request.method === "POST") {
    ensureWriteOrigin(request, env);
    requireAdmin(user, env);
    await limitWrite(env, user, "admin");
    const row = await env.DB.prepare("SELECT theme_id FROM reports WHERE id = ? AND status = 'open'").bind(resolveReport[1]).first();
    if (!row) throw new HttpError(404, "Open report not found.");
    await env.DB.prepare("UPDATE reports SET status = 'resolved', resolved_at = ? WHERE id = ? AND status = 'open'").bind(Date.now(), resolveReport[1]).run();
    await recordAction(env, row.theme_id, user.id, "resolve_report", resolveReport[1]);
    return response({ ok: true });
  }
  if (path === "/api/admin/history" && request.method === "GET") {
    requireAdmin(user, env);
    const rows = await env.DB.prepare("SELECT m.theme_id, m.admin_id, m.action, m.detail, m.created_at, t.name AS theme_name FROM moderation_actions m LEFT JOIN themes t ON t.id = m.theme_id ORDER BY m.created_at DESC LIMIT 100").all();
    return response({ actions: rows.results.map(row => ({ themeId: row.theme_id, themeName: row.theme_name, adminId: row.admin_id, action: row.action, detail: row.detail, createdAt: row.created_at })) });
  }
  if (path === "/api/admin/catalog" && request.method === "GET") {
    requireAdmin(user, env);
    return response({ paused: await catalogPaused(env) });
  }
  if (path === "/api/admin/catalog" && request.method === "POST") {
    ensureWriteOrigin(request, env);
    requireAdmin(user, env);
    await limitWrite(env, user, "admin");
    const data = await request.json();
    if (typeof data.paused !== "boolean") throw new HttpError(400, "Invalid catalog state.");
    await env.DB.prepare("UPDATE moderation_settings SET value = ?, updated_at = ? WHERE key = 'catalog_paused'").bind(String(data.paused), Date.now()).run();
    await recordAction(env, "site", user.id, data.paused ? "pause_catalog" : "resume_catalog");
    return response({ paused: data.paused });
  }
  const adminAsset = path.match(/^\/api\/admin\/themes\/([a-f0-9-]{36})\/assets\/(background|music)$/);
  if (adminAsset && request.method === "GET") {
    requireAdmin(user, env);
    const row = await env.DB.prepare("SELECT * FROM themes WHERE id = ? AND status IN ('published', 'hidden')").bind(adminAsset[1]).first();
    if (!row) throw new HttpError(404, "Theme not found.");
    const object = await env.ASSETS.get(adminAsset[2] === "background" ? row.background_key : row.music_key);
    if (!object) throw new HttpError(404, "Theme asset not found.");
    return new Response(object.body, { headers: { "content-type": adminAsset[2] === "background" ? row.background_type : row.music_type, "cache-control": "no-store", "cross-origin-resource-policy": "cross-origin", "x-content-type-options": "nosniff" } });
  }
  const moderate = path.match(/^\/api\/admin\/submissions\/([a-f0-9-]{36})\/(approve|reject)$/);
  if (moderate && request.method === "POST") {
    ensureWriteOrigin(request, env);
    requireAdmin(user, env);
    await limitWrite(env, user, "admin");
    const row = await env.DB.prepare("SELECT * FROM themes WHERE id = ? AND status = 'pending'").bind(moderate[1]).first();
    if (!row) throw new HttpError(404, "Pending theme not found.");
    if (moderate[2] === "reject") {
      const data = await request.json();
      const reason = String(data.reason || "Not approved").trim().slice(0, 250);
      await env.DB.prepare("UPDATE themes SET status = 'rejected', rejection_reason = ?, updated_at = ? WHERE id = ?").bind(reason, Date.now(), row.id).run();
      await Promise.all([env.ASSETS.delete(row.background_key), env.ASSETS.delete(row.music_key)]);
      await recordAction(env, row.id, user.id, "reject", reason);
      return response({ ok: true });
    }
    const background = await env.ASSETS.get(row.background_key);
    const music = await env.ASSETS.get(row.music_key);
    if (!background || !music) throw new HttpError(409, "Pending assets are missing.");
    const backgroundKey = row.background_key.replace(`${PREFIX}pending/`, `${PREFIX}published/`);
    const musicKey = row.music_key.replace(`${PREFIX}pending/`, `${PREFIX}published/`);
    await env.ASSETS.put(backgroundKey, background.body, { httpMetadata: { contentType: row.background_type } });
    await env.ASSETS.put(musicKey, music.body, { httpMetadata: { contentType: row.music_type } });
    await env.DB.prepare("UPDATE themes SET status = 'published', background_key = ?, music_key = ?, updated_at = ? WHERE id = ?").bind(backgroundKey, musicKey, Date.now(), row.id).run();
    await Promise.all([env.ASSETS.delete(row.background_key), env.ASSETS.delete(row.music_key)]);
    await recordAction(env, row.id, user.id, "approve");
    return response({ ok: true });
  }
  const tags = path.match(/^\/api\/admin\/themes\/([a-f0-9-]{36})\/tags$/);
  if (tags && request.method === "POST") {
    ensureWriteOrigin(request, env);
    requireAdmin(user, env);
    await limitWrite(env, user, "admin");
    const data = await request.json();
    if (!Array.isArray(data.tags) || data.tags.length > 3 || data.tags.some(tag => !TAGS.has(tag))) throw new HttpError(400, "Invalid tags.");
    const result = await env.DB.prepare("UPDATE themes SET tags = ?, updated_at = ? WHERE id = ? AND status = 'published'").bind(JSON.stringify([...new Set(data.tags)]), Date.now(), tags[1]).run();
    if (!result.meta.changes) throw new HttpError(404, "Published theme not found.");
    await recordAction(env, tags[1], user.id, "tags", JSON.stringify(data.tags));
    return response({ ok: true });
  }
  const hide = path.match(/^\/api\/admin\/themes\/([a-f0-9-]{36})\/(hide|restore)$/);
  if (hide && request.method === "POST") {
    ensureWriteOrigin(request, env);
    requireAdmin(user, env);
    await limitWrite(env, user, "admin");
    const status = hide[2] === "hide" ? "hidden" : "published";
    const before = hide[2] === "hide" ? "published" : "hidden";
    const result = await env.DB.prepare("UPDATE themes SET status = ?, updated_at = ? WHERE id = ? AND status = ?").bind(status, Date.now(), hide[1], before).run();
    if (!result.meta.changes) throw new HttpError(404, "Theme not found in expected state.");
    await recordAction(env, hide[1], user.id, hide[2]);
    return response({ ok: true });
  }
  return response({ error: "Not found." }, 404);
}

export default {
  async fetch(request, env, ctx) {
    try { return withCors(await route(request, env, ctx), request, env); }
    catch (error) {
      if (!(error instanceof HttpError)) console.error("Theme API error", error);
      return withCors(response({ error: error instanceof HttpError ? error.message : "Internal error." }, error instanceof HttpError ? error.status : 500), request, env);
    }
  }
};
