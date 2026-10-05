import { installTheme, listInstalledThemes, getInstalledTheme, uninstallTheme, validateThemeAsset, validateThemeManifest, compressThemeAsset, ASSET_LIMITS, saveThemeDraft, listThemeDrafts, deleteThemeDraft } from "./community-themes.mjs?v=5";
import { validateThemeName, validateThemeDescription } from "./theme-name-policy.mjs?v=3";

const official = [
  ["halloween_2026", "Halloween 2026", "halloween-2026.gif"],
  ["dr_ch5_anim", "Chapter 5 Animated", "dr-ch5-animated.webp"],
  ["black", "Black", null], ["ch1", "Chapter 1", "ch1.png"], ["ch2", "Chapter 2", "ch2.png"],
  ["ch3", "Chapter 3", "ch3.png"], ["ch4", "Chapter 4", "ch4.png"], ["ch5", "Chapter 5", "ch5.png"],
  ["tadc", "TADC", "tadc.png"], ["backrooms", "Backrooms", "backrooms.png"], ["pirate", "Pirate", "pirate.png"],
  ["kendrick", "Kendrick", "kendrick.png"], ["jackpot", "Jackpot", "jackpot.png"], ["dk", "DK", "dk.png"],
  ["tung", "Tung", "tung.png"], ["dialtone_wrong", "Dialtone", "dialtone.png"], ["dialtone_normal", "Sadtone", "dialtone.png"],
  ["mad_spam", "Mad-Spam", "mad-spam.png"], ["birdbrain", "Birdbrain", "birdbrain.png"], ["imposter", "Imposter", "imposter.png"],
  ["excuseme", "Excuseme", "excuseme.png"], ["excuseme2", "Excuseme2", "excuseme2.png"], ["last_sahur", "Last Sahur", "last-sahur.png"],
  ["90s", "90s", "90s.png"], ["hotline", "Hotline", "hotline.png"], ["knight_shanty", "Knight Shanty", "knight-shanty.png"],
  ["aqua", "Aqua", "aqua.png"], ["washy_washy", "WASHY WASHY", "washy-washy.png"],
  ["ralseis_got_a_gun", "Ralsei's Got A Gun", "ralseis-got-a-gun.png"]
];

const $ = id => document.getElementById(id);
const API_BASE = new URLSearchParams(location.search).get("themeApi") === "local"
  ? "http://127.0.0.1:8787"
  : "https://themes-api.booksforschool.online";
const PRESENCE_SOCKET_URL = "wss://dul-presence.dul-presence-worker.workers.dev/presence";
const activeUrls = [];
let catalogUrls = [];
let adminUrls = [];
let previewUrl = null;
let previewAudioUrl = null;
let adminAudioUrl = null;
let adminAudioThemeId = null;
let catalogPreviewUrls = [];
const previewAudio = new Audio();
let publishingReady = false;
let turnstileWidget = null;
let reportTurnstileWidget = null;
let turnstileSiteKey = null;
let currentDraftId = null;
let catalogPage = 0;
let catalogRequest = 0;
let catalogHasMore = true;
let catalogLoading = false;
let catalogQueued = false;
let currentUser = null;
let reportThemeId = null;
let serviceLoaded = false;
let serviceSignInEnabled = false;
let presenceSocket = null;
let liveThemeUse = {};
let statsUsage = null;
const statsMeta = new Map();

function presenceClientId() {
  let clientId = localStorage.getItem("toby_web_presence_client_id");
  if (!clientId) {
    clientId = typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem("toby_web_presence_client_id", clientId);
  }
  return clientId;
}

function currentThemeId() {
  return localStorage.getItem("dul_site_background") || official[0][0];
}

function presenceOptedOut() {
  return localStorage.getItem("dul_presence_enabled") === "off";
}

function reportThemeUsage(themeId) {
  if (!themeId || presenceOptedOut()) return;
  if (localStorage.getItem("dul_theme_usage_reported") === themeId) return;
  localStorage.setItem("dul_theme_usage_reported", themeId);
  fetch(`${API_BASE}/api/themes/usage`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-toby-theme-action": "1" },
    body: JSON.stringify({ clientId: presenceClientId(), themeId }),
    keepalive: true
  }).catch(() => {});
}

function onThemeChanged(themeId) {
  reportThemeUsage(themeId);
  if (presenceSocket && presenceSocket.readyState === WebSocket.OPEN) {
    presenceSocket.send(JSON.stringify({ type: "theme", themeId }));
  }
}

function connectPresence() {
  if (presenceOptedOut()) return;
  let socket;
  try {
    socket = new WebSocket(PRESENCE_SOCKET_URL);
    presenceSocket = socket;
  } catch {
    setTimeout(connectPresence, 15000);
    return;
  }
  socket.addEventListener("open", () => {
    socket.send(JSON.stringify({ type: "hello", version: 3, clientId: presenceClientId(), themeId: currentThemeId() }));
  });
  socket.addEventListener("message", event => {
    try {
      const message = JSON.parse(event.data);
      if (message.type === "presence" && message.themes && typeof message.themes === "object") {
        liveThemeUse = message.themes;
        if (document.querySelector(".view.active")?.id === "stats") renderStatsBoards();
      }
    } catch {}
  });
  socket.addEventListener("close", () => {
    if (socket !== presenceSocket) return;
    presenceSocket = null;
    setTimeout(connectPresence, 15000);
  });
  socket.addEventListener("error", () => socket.close());
}

addEventListener("storage", event => {
  if (event.key === "dul_site_background") onThemeChanged(localStorage.getItem("dul_site_background") || official[0][0]);
});

function maybeNudgeSignIn() {
  if (!serviceLoaded || !serviceSignInEnabled || currentUser) return;
  if (document.querySelector(".view.active")?.id !== "studio") return;
  if (sessionStorage.getItem("tw-theme-nudge-dismissed")) return;
  if (!$("signin-nudge").open) $("signin-nudge").showModal();
}

function makeCard({ id, name, image, badge, creator, installed = false }) {
  const card = document.createElement("article");
  card.className = "theme-card";
  card.classList.toggle("active", localStorage.getItem("dul_site_background") === id);
  const select = document.createElement("button");
  select.className = "theme-card-select";
  select.type = "button";
  select.setAttribute("aria-label", `Use ${name} theme`);
  const picture = document.createElement("img");
  if (image) picture.src = image;
  picture.alt = "";
  picture.loading = "lazy";
  const body = document.createElement("span");
  body.className = "theme-card-body";
  const title = document.createElement("strong");
  title.textContent = name;
  const credit = document.createElement("small");
  credit.textContent = creator;
  body.append(title);
  if (badge) {
    const label = document.createElement("span");
    label.className = "badge";
    label.textContent = badge;
    body.append(label);
  }
  body.append(credit);
  select.append(picture, body);
  select.addEventListener("click", () => {
    localStorage.setItem("dul_site_background", id);
    onThemeChanged(id);
    if (installed) {
      getInstalledTheme(id).then(item => {
        if (item) localStorage.setItem("dul_site_music_volume", String(Math.round(item.manifest.musicVolume * 100)));
        location.href = "dltrn.html";
      }).catch(error => { $("installed-themes").textContent = error.message; });
      return;
    }
    location.href = "dltrn.html";
  });
  card.append(select);
  if (installed) {
    const remove = document.createElement("button");
    remove.className = "action";
    remove.type = "button";
    remove.textContent = "Uninstall";
    remove.addEventListener("click", async () => {
      await uninstallTheme(id);
      if (localStorage.getItem("dul_site_background") === id) {
        localStorage.setItem("dul_site_background", "halloween_2026");
        onThemeChanged("halloween_2026");
      }
      await renderLibrary();
    });
    card.append(remove);
  }
  return card;
}

async function renderLibrary() {
  activeUrls.splice(0).forEach(url => URL.revokeObjectURL(url));
  const officialGrid = $("official-themes");
  officialGrid.replaceChildren(...official.map(([id, name, file]) => makeCard({
    id, name, image: file ? `files/backgrounds/${file}` : null, creator: "Toby Web - Camzzz"
  })));
  const installedGrid = $("installed-themes");
  const themes = await listInstalledThemes();
  if (!themes.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No community themes installed.";
    installedGrid.replaceChildren(empty);
    return;
  }
  const cards = await Promise.all(themes.map(async ({ manifest }) => {
    const item = await getInstalledTheme(manifest.id);
    const image = URL.createObjectURL(item.background);
    activeUrls.push(image);
    return makeCard({ id: manifest.id, name: manifest.name, image, badge: "LOCAL", creator: manifest.creator, installed: true });
  }));
  installedGrid.replaceChildren(...cards);
}

async function api(path, options = {}) {
  const result = await fetch(`${API_BASE}${path}`, { credentials: "include", ...options });
  if (!result.ok) {
    let message = `Theme service returned ${result.status}.`;
    try { message = (await result.json()).error || message; } catch {}
    throw new Error(message);
  }
  return result;
}

async function showCatalogPreview(theme) {
  const [image, music] = await Promise.all([api(theme.backgroundUrl), api(theme.musicUrl)]);
  const [backgroundBlob, musicBlob] = await Promise.all([image.blob(), music.blob()]);
  const urls = [URL.createObjectURL(backgroundBlob), URL.createObjectURL(musicBlob)];
  catalogPreviewUrls.forEach(url => URL.revokeObjectURL(url));
  catalogPreviewUrls = urls;
  $("catalog-preview-image").src = urls[0];
  $("catalog-preview-title").textContent = theme.name;
  $("catalog-preview-creator").textContent = `By ${theme.creator}`;
  $("catalog-preview-description").textContent = theme.description || "";
  $("catalog-preview-audio").src = urls[1];
  $("catalog-preview").showModal();
}

$("catalog-preview-close").addEventListener("click", () => $("catalog-preview").close());
$("catalog-preview").addEventListener("close", () => {
  const audio = $("catalog-preview-audio");
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  catalogPreviewUrls.forEach(url => URL.revokeObjectURL(url));
  catalogPreviewUrls = [];
});
$("report-cancel").addEventListener("click", () => $("report-dialog").close());
$("report-form").addEventListener("submit", async event => {
  event.preventDefault();
  const button = $("report-form").querySelector('button[type="submit"]');
  button.disabled = true;
  try {
    const token = reportTurnstileWidget === null ? null : window.turnstile?.getResponse(reportTurnstileWidget);
    if (!token) throw new Error("Complete the verification first.");
    await api(`/api/themes/${reportThemeId}/report`, {
      method: "POST", headers: { "Content-Type": "application/json", "X-Toby-Theme-Action": "1" },
      body: JSON.stringify({ reason: $("report-reason").value, turnstileToken: token })
    });
    $("report-dialog").close();
    $("catalog-status").textContent = "Report sent for review.";
  } catch (error) { $("report-status").textContent = error.message; }
  finally { if (reportTurnstileWidget !== null) window.turnstile?.reset(reportTurnstileWidget); button.disabled = false; }
});

async function renderDiscover() {
  if (catalogLoading) { catalogQueued = true; return; }
  catalogLoading = true;
  const requestId = ++catalogRequest;
  const page = catalogPage;
  const reset = page === 0;
  const imageUrls = [];
  const status = $("catalog-status");
  if (reset) status.textContent = "Loading community themes...";
  try {
    const query = new URLSearchParams({ q: $("theme-search").value.trim(), sort: $("theme-sort").value, page: String(page) });
    const [{ themes, hasMore, paused }, installedThemes, favorites] = await Promise.all([
      api(`/api/themes?${query}`).then(result => result.json()),
      listInstalledThemes(),
      currentUser ? api("/api/me/favorites").then(result => result.json()).catch(() => { currentUser = null; return { ids: [] }; }) : { ids: [] }
    ]);
    if (requestId !== catalogRequest) return;
    const installedIds = new Set(installedThemes.map(item => item.manifest.id));
    const favoriteIds = new Set(favorites.ids);
    const cards = await Promise.all(themes.map(async theme => {
      const card = document.createElement("article");
      card.className = "theme-card";
      const picture = document.createElement("img");
      picture.alt = `${theme.name} background`;
      picture.loading = "lazy";
      try {
        const image = await api(theme.backgroundUrl);
        picture.src = URL.createObjectURL(await image.blob());
        imageUrls.push(picture.src);
      } catch { picture.alt = `${theme.name} background unavailable`; }
      const title = document.createElement("strong");
      title.textContent = theme.name;
      const credit = document.createElement("small");
      credit.textContent = `By ${theme.creator}`;
      credit.className = "theme-creator";
      const body = document.createElement("div");
      body.className = "theme-card-body discover-card-body";
      const meta = document.createElement("div");
      meta.className = "discover-card-meta";
      const tags = document.createElement("div");
      tags.className = "theme-tags";
      for (const tag of theme.tags || []) {
        if (tag === "Awesome Sauce") continue;
        const badge = document.createElement("span");
        badge.className = tag === "Verified" ? "badge verified" : "badge";
        badge.textContent = tag;
        tags.append(badge);
      }
      body.append(title);
      const favoriteCount = document.createElement("small");
      favoriteCount.textContent = `${theme.favoriteCount || 0} favorites`;
      favoriteCount.className = "theme-favorite-count";
      meta.append(credit, favoriteCount);
      body.append(meta);
      if (tags.childElementCount) body.append(tags);
      const install = document.createElement("button");
      install.type = "button";
      install.className = "action";
      install.textContent = installedIds.has(theme.id) ? "Uninstall" : "Install";
      install.addEventListener("click", async () => {
        install.disabled = true;
        try {
          if (installedIds.has(theme.id)) {
            await uninstallTheme(theme.id);
            if (localStorage.getItem("dul_site_background") === theme.id) {
              localStorage.setItem("dul_site_background", "halloween_2026");
              onThemeChanged("halloween_2026");
            }
            await renderLibrary();
            await refreshDiscover();
            return;
          }
          install.textContent = "Installing...";
          const [backgroundResponse, musicResponse] = await Promise.all([
            api(theme.backgroundUrl), api(theme.musicUrl)
          ]);
          const [background, music] = await Promise.all([backgroundResponse.blob(), musicResponse.blob()]);
          await installTheme(theme, background, music);
          await renderLibrary();
          await refreshDiscover();
        } catch (error) {
          status.textContent = error.message;
          install.disabled = false;
          install.textContent = installedIds.has(theme.id) ? "Uninstall" : "Install";
        }
      });
      const preview = document.createElement("button");
      preview.type = "button";
      preview.className = "action";
      preview.textContent = "Preview";
      preview.addEventListener("click", () => showCatalogPreview(theme).catch(error => { status.textContent = error.message; }));
      const actions = document.createElement("div");
      actions.className = "theme-card-actions";
      actions.append(preview, install);
      const secondaryActions = document.createElement("div");
      secondaryActions.className = "theme-card-secondary";
      if (currentUser) {
        const report = document.createElement("button");
        report.type = "button";
        report.className = "action";
        report.textContent = "Report";
        report.addEventListener("click", () => {
          reportThemeId = theme.id;
          $("report-title").textContent = `Report ${theme.name}`;
          $("report-reason").value = "";
          $("report-status").textContent = "";
          $("report-dialog").showModal();
          renderReportTurnstile();
        });
        secondaryActions.append(report);
        const favorite = document.createElement("button");
        favorite.type = "button";
        favorite.className = "action";
        favorite.textContent = favoriteIds.has(theme.id) ? "Unfavorite" : "Favorite";
        favorite.addEventListener("click", async () => {
          favorite.disabled = true;
          try {
            await api(`/api/themes/${theme.id}/favorite`, {
              method: "POST", headers: { "Content-Type": "application/json", "X-Toby-Theme-Action": "1" },
              body: JSON.stringify({ favorite: !favoriteIds.has(theme.id) })
            });
            await refreshDiscover();
          } catch (error) {
            status.textContent = error.message;
            favorite.disabled = false;
          }
        });
        secondaryActions.prepend(favorite);
      }
      card.classList.add("discover-card");
      card.append(picture, body, actions);
      if (secondaryActions.childElementCount) card.append(secondaryActions);
      return card;
    }));
    if (requestId !== catalogRequest) {
      imageUrls.forEach(url => URL.revokeObjectURL(url));
      return;
    }
    if (reset) {
      catalogUrls.forEach(url => URL.revokeObjectURL(url));
      catalogUrls = imageUrls;
      $("catalog-results").replaceChildren(...cards);
    } else {
      catalogUrls = catalogUrls.concat(imageUrls);
      $("catalog-results").append(...cards);
    }
    catalogHasMore = hasMore;
    catalogPage = page + 1;
    status.textContent = paused ? "Community themes are temporarily unavailable." : reset && !cards.length ? "No community themes found." : "";
  } catch (error) {
    if (requestId !== catalogRequest) return;
    catalogHasMore = false;
    if (reset) $("catalog-results").replaceChildren();
    status.textContent = `Community themes unavailable: ${error.message}`;
  } finally {
    catalogLoading = false;
  }
  if (catalogQueued) { catalogQueued = false; await renderDiscover(); }
  else if (requestId === catalogRequest && catalogHasMore) await renderDiscover();
}

async function refreshDiscover() {
  const loaded = Math.max(1, catalogPage);
  catalogPage = 0;
  catalogHasMore = true;
  for (let i = 0; i < loaded && (i === 0 || catalogHasMore); i++) await renderDiscover();
}

function statsMetaFor(id) {
  if (statsMeta.has(id)) return statsMeta.get(id);
  const officialEntry = official.find(([officialId]) => officialId === id);
  const meta = officialEntry
    ? { name: officialEntry[1], creator: "Toby Web - Camzzz", image: officialEntry[2] ? `files/backgrounds/${officialEntry[2]}` : null, resolved: true }
    : { name: id, creator: "", image: null, resolved: !/^[a-f0-9-]{36}$/.test(id) };
  statsMeta.set(id, meta);
  return meta;
}

async function resolveStatsMeta(ids) {
  await Promise.all([...ids].map(async id => {
    const meta = statsMetaFor(id);
    if (meta.resolved) return;
    meta.resolved = true;
    try {
      const { theme } = await api(`/api/themes/${id}`).then(result => result.json());
      meta.name = theme.name;
      meta.creator = `By ${theme.creator}`;
      meta.image = `${API_BASE}${theme.backgroundUrl}`;
    } catch {
      meta.name = "Hidden or removed theme";
    }
  }));
}

function statsRow(rank, meta, count) {
  const row = document.createElement("li");
  row.classList.toggle("zero", !count);
  const place = document.createElement("span");
  place.className = "stats-rank";
  place.textContent = count ? `#${rank}` : "—";
  const swatch = document.createElement(meta.image ? "img" : "span");
  swatch.className = "stats-swatch";
  if (meta.image) { swatch.src = meta.image; swatch.alt = ""; swatch.loading = "lazy"; }
  const name = document.createElement("span");
  name.className = "stats-name";
  name.textContent = meta.name;
  if (meta.creator) {
    const creator = document.createElement("small");
    creator.textContent = ` ${meta.creator}`;
    name.append(creator);
  }
  const amount = document.createElement("span");
  amount.className = "stats-count";
  amount.textContent = `${count} `;
  const label = document.createElement("span");
  label.textContent = count === 1 ? "user" : "users";
  amount.append(label);
  row.append(place, swatch, name, amount);
  return row;
}

function renderStatsBoards() {
  const allIds = new Set([...official.map(([id]) => id), ...Object.keys(statsUsage || {}), ...Object.keys(liveThemeUse)]);
  const liveEntries = [...allIds].map(id => [id, liveThemeUse[id] || 0]).sort((a, b) => b[1] - a[1] || statsMetaFor(a[0]).name.localeCompare(statsMetaFor(b[0]).name));
  const allTimeEntries = [...allIds].map(id => [id, (statsUsage || {})[id] || 0]).sort((a, b) => b[1] - a[1] || statsMetaFor(a[0]).name.localeCompare(statsMetaFor(b[0]).name));
  $("stats-live").replaceChildren(...liveEntries.map(([id, count], index) => statsRow(index + 1, statsMetaFor(id), count)));
  $("stats-alltime").replaceChildren(...allTimeEntries.map(([id, count], index) => statsRow(index + 1, statsMetaFor(id), count)));
}

async function renderStats() {
  const status = $("stats-status");
  status.textContent = "Loading stats...";
  let failed = null;
  try {
    const { usage } = await api("/api/themes/usage").then(result => result.json());
    statsUsage = usage || {};
  } catch (error) {
    statsUsage = statsUsage || {};
    failed = error.message;
  }
  await resolveStatsMeta(new Set([...Object.keys(statsUsage), ...Object.keys(liveThemeUse)]));
  renderStatsBoards();
  status.textContent = failed ? `All-time stats unavailable: ${failed}` : "";
}

function selectView(view) {
  if (view === "admin" && $("admin-tab").hidden) view = "library";
  $("admin").hidden = view !== "admin";
  document.querySelectorAll(".view").forEach(section => section.classList.toggle("active", section.id === view));
  document.querySelectorAll(".tabs button").forEach(button => button.setAttribute("aria-selected", String(button.dataset.view === view)));
  if (view !== "studio") {
    document.documentElement.style.removeProperty("--theme-accent");
    const selectedId = localStorage.getItem("dul_site_background");
    if (selectedId && !official.some(([id]) => id === selectedId)) {
      getInstalledTheme(selectedId).then(item => {
        if (item && document.querySelector(".view.active")?.id !== "studio") {
          document.documentElement.style.setProperty("--theme-accent", item.manifest.accentColor);
        }
      }).catch(() => {});
    }
  } else {
    document.documentElement.style.setProperty("--theme-accent", $("theme-accent").value);
  }
  history.replaceState(null, "", `#${view}`);
  if (view === "discover" && catalogPage === 0) renderDiscover();
  if (view === "stats") renderStats();
  if (view === "admin") renderAdmin();
  maybeNudgeSignIn();
}

document.querySelectorAll(".tabs button").forEach(button => button.addEventListener("click", () => selectView(button.dataset.view)));
let searchTimer;
$("theme-search").addEventListener("input", () => {
  clearTimeout(searchTimer);
  catalogPage = 0;
  catalogHasMore = true;
  searchTimer = setTimeout(renderDiscover, 300);
});
$("theme-sort").addEventListener("change", () => { catalogPage = 0; catalogHasMore = true; renderDiscover(); });
const catalogObserver = new IntersectionObserver(entries => {
  if (entries.some(entry => entry.isIntersecting) && catalogHasMore && !catalogLoading && document.querySelector(".view.active")?.id === "discover") renderDiscover();
}, { rootMargin: "800px" });
catalogObserver.observe($("catalog-sentinel"));
selectView(["library", "discover", "studio", "stats"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "library");
connectPresence();
reportThemeUsage(currentThemeId());
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);
addEventListener("load", () => window.scrollTo(0, 0));

const form = $("theme-form");
async function renderDrafts() {
  const drafts = await listThemeDrafts();
  drafts.sort((a, b) => b.savedAt - a.savedAt);
  const select = $("draft-list");
  select.replaceChildren(new Option("Select a draft", ""), ...drafts.map(draft => new Option(draft.name || "Untitled", draft.id)));
  select.value = currentDraftId || "";
}

function restoreFile(input, file) {
  const transfer = new DataTransfer();
  if (file) transfer.items.add(file instanceof File ? file : new File([file], file.name || "asset", { type: file.type }));
  input.files = transfer.files;
}

$("save-draft").addEventListener("click", async () => {
  try {
    const name = validateThemeName($("theme-name").value);
    const description = validateThemeDescription($("theme-description").value);
    currentDraftId ||= `draft-${crypto.randomUUID()}`;
    await saveThemeDraft({
      id: currentDraftId, name, creator: currentUser?.name || "Local Creator",
      description, accentColor: $("theme-accent").value,
      textColor: $("theme-text").value, musicVolume: Number($("theme-volume").value) / 100,
      background: $("theme-background").files[0] || null, music: $("theme-music").files[0] || null,
      buttonOffsets, buttonLayout
    });
    await renderDrafts();
    $("studio-status").textContent = "Draft saved on this device.";
  } catch (error) { $("studio-status").textContent = error.message; }
});

function fillFormFromDraft(draft) {
  currentDraftId = draft.id;
  $("theme-name").value = draft.name;
  $("theme-creator").value = draft.creator || currentUser?.name || "Local Creator";
  $("theme-description").value = draft.description;
  $("theme-accent").value = draft.accentColor;
  $("theme-text").value = draft.textColor;
  $("theme-volume").value = String(Math.round(draft.musicVolume * 100));
  restoreFile($("theme-background"), draft.background);
  restoreFile($("theme-music"), draft.music);
  buttonOffsets = draft.buttonOffsets || null;
  buttonLayout = draft.buttonLayout || null;
  $("button-layout").value = buttonLayout || "";
  refreshPreview();
}

$("draft-list").addEventListener("change", async () => {
  const id = $("draft-list").value;
  if (!id) return;
  const draft = (await listThemeDrafts()).find(item => item.id === id);
  if (!draft) return;
  fillFormFromDraft(draft);
  $("studio-status").textContent = "Draft loaded.";
});

$("delete-draft").addEventListener("click", async () => {
  if (!currentDraftId) return;
  await deleteThemeDraft(currentDraftId);
  currentDraftId = null;
  await renderDrafts();
  $("studio-status").textContent = "Draft deleted.";
});

$("export-theme").addEventListener("click", async () => {
  try {
    if (!form.reportValidity()) return;
    const { manifest, background, music } = currentManifest();
    await Promise.all([validateThemeAsset(background, "background"), validateThemeAsset(music, "music")]);
    const zip = new window.JSZip();
    zip.file("manifest.json", JSON.stringify(manifest, null, 2));
    zip.file(manifest.background, background);
    zip.file(manifest.music, music);
    const blob = await zip.generateAsync({ type: "blob", compression: "DEFLATE" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${manifest.name.trim().replace(/[^a-z0-9-]+/gi, "-").toLowerCase() || "toby-theme"}.zip`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
    $("studio-status").textContent = "Theme exported.";
  } catch (error) { $("studio-status").textContent = error.message; }
});

$("import-theme").addEventListener("click", () => $("import-file").click());
$("import-file").addEventListener("change", async () => {
  const file = $("import-file").files[0];
  $("import-file").value = "";
  if (!file) return;
  try {
    const zip = await window.JSZip.loadAsync(file);
    const manifestEntry = zip.file(/(^|\/)manifest\.json$/i)[0];
    if (!manifestEntry) throw new Error("No manifest.json found in that ZIP.");
    const manifest = validateThemeManifest(JSON.parse(await manifestEntry.async("string")));
    const findEntry = name => zip.file(new RegExp(`(^|/)${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i"))[0];
    const backgroundEntry = findEntry(manifest.background);
    const musicEntry = findEntry(manifest.music);
    if (!backgroundEntry || !musicEntry) throw new Error("ZIP is missing its background or music file.");
    const types = {
      png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", gif: "image/gif",
      mp3: "audio/mpeg", ogg: "audio/ogg"
    };
    const toFile = async entry => new File(
      [await entry.async("blob")],
      entry.name.split("/").pop(),
      { type: types[entry.name.split(".").pop().toLowerCase()] || "" }
    );
    const background = await toFile(backgroundEntry);
    const music = await toFile(musicEntry);
    await Promise.all([validateThemeAsset(background, "background"), validateThemeAsset(music, "music")]);
    $("theme-name").value = manifest.name;
    $("theme-creator").value = manifest.creator;
    $("theme-description").value = manifest.description;
    $("theme-accent").value = manifest.accentColor;
    $("theme-text").value = manifest.textColor;
    $("theme-volume").value = String(Math.round(manifest.musicVolume * 100));
    restoreFile($("theme-background"), background);
    restoreFile($("theme-music"), music);
    buttonOffsets = manifest.buttonOffsets || null;
    buttonLayout = manifest.buttonLayout || null;
    $("button-layout").value = buttonLayout || "";
    currentDraftId = null;
    refreshPreview();
    $("studio-status").textContent = `Imported "${manifest.name}".`;
  } catch (error) {
    $("studio-status").textContent = error.message;
  }
});

function currentManifest() {
  const name = validateThemeName($("theme-name").value);
  const description = validateThemeDescription($("theme-description").value);
  const background = $("theme-background").files[0];
  const music = $("theme-music").files[0];
  if (!background || !music) throw new Error("Choose a background and music file.");
  const imageExtension = background.type === "image/jpeg" ? "jpg" : background.type.split("/")[1];
  const audioExtension = music.type === "audio/mpeg" ? "mp3" : "ogg";
  return {
    manifest: {
      schemaVersion: 1, id: `community-${crypto.randomUUID()}`, name,
      creator: currentUser?.name || "Local Creator", description,
      background: `background.${imageExtension}`, music: `music.${audioExtension}`, preview: null,
      accentColor: $("theme-accent").value, textColor: $("theme-text").value,
      musicVolume: Number($("theme-volume").value) / 100,
      buttonOffsets, buttonLayout
    }, background, music
  };
}

const PREVIEW_SIZES = { desktop: [1600, 900], mobile: [390, 800] };
let buttonOffsets = null;
let buttonLayout = null;
let previewFrameReady = false;

function previewDoc() {
  try { return $("preview-frame").contentDocument; } catch { return null; }
}

function applyHomeOffsets(doc) {
  if (buttonLayout) doc.body.dataset.buttonLayout = buttonLayout;
  else delete doc.body.dataset.buttonLayout;
  const offsets = buttonLayout ? {} : (buttonOffsets || {});
  const parts = [];
  for (const key of ["deltarune", "undertale"]) {
    const element = doc.querySelector(`.home-${key}`);
    const offset = offsets[key];
    if (element) element.style.transform = offset && (offset.x || offset.y) ? `translate(${offset.x}%, ${offset.y}%)` : "";
    if (offset && (offset.x || offset.y)) parts.push(`${key.toUpperCase()} ${offset.x > 0 ? "+" : ""}${offset.x}%, ${offset.y > 0 ? "+" : ""}${offset.y}%`);
  }
  const readout = $("button-offsets-readout");
  if (readout) {
    const labels = { "stacked-center": "Stacked — centered", "stacked-left": "Stacked — left side", "stacked-right": "Stacked — right side" };
    if (buttonLayout) readout.textContent = `Button layout — ${labels[buttonLayout] || buttonLayout}`;
    else readout.textContent = parts.length ? `Button positions — ${parts.join(" · ")}` : "";
  }
}

function scalePreviewFrame() {
  const preview = $("theme-preview");
  const frame = $("preview-frame");
  if (!preview || !frame) return;
  const [width, height] = preview.classList.contains("mobile") ? PREVIEW_SIZES.mobile : PREVIEW_SIZES.desktop;
  frame.style.width = `${width}px`;
  frame.style.height = `${height}px`;
  frame.style.transform = `scale(${preview.clientWidth / width})`;
}

function initPreviewFrame() {
  const doc = previewDoc();
  if (!doc?.body) return;
  const style = doc.createElement("style");
  style.textContent = `
    body { user-select: none; }
    .home-logo-link { cursor: default; }

    body[data-button-layout^="stacked-"] .home-choices {
      grid-template-columns: 1fr;
      justify-items: center;
      gap: clamp(44px, 9vh, 84px);
      width: min(680px, calc(100vw - 80px));
      box-sizing: border-box;
    }
    body[data-button-layout="stacked-left"] .home-choices {
      left: clamp(60px, 10vw, 170px);
      transform: translateY(-50%);
    }
    body[data-button-layout="stacked-right"] .home-choices {
      left: auto;
      right: clamp(36px, 6vw, 96px);
      transform: translateY(-50%);
    }
    body[data-button-layout^="stacked-"] .home-logo-link { height: auto; }
    body[data-button-layout^="stacked-"] .home-logo-link img { width: min(100%, 620px); }

    body.community-theme {
      color: var(--theme-text, #fff);
    }

    body.community-theme .settings-toggle:hover,
    body.community-theme .download-toggle:hover,
    body.community-theme .changelog-toggle:hover,
    body.community-theme .pixel-button:hover,
    body.community-theme .save-button:hover,
    body.community-theme .brand-link:hover,
    body.community-theme .game-card:hover,
    body.community-theme .extras-home:hover,
    body.community-theme .mods-home:hover,
    body.community-theme .featured-save-info-btn:hover,
    body.community-theme .game-credits-disclosure summary:hover,
    body.community-theme .converter-file-label:hover,
    body.community-theme .presence-service-option:hover {
      color: var(--theme-hover);
      border-color: var(--theme-hover);
    }

    body.community-theme .home-logo-link:hover img,
    body.community-theme .site-volume-slider:hover {
      border-color: var(--theme-hover);
    }

    body.community-theme .category-filter:hover,
    body.community-theme .person-credit:hover,
    body.community-theme .game-credit-row:hover,
    body.community-theme .row:hover,
    body.community-theme .row:hover .chapter,
    body.community-theme .row:hover .title,
    body.community-theme .featured-save-btn:hover {
      color: var(--theme-hover);
    }

    body.community-theme .category-filter:hover,
    body.community-theme .person-credit:hover,
    body.community-theme .game-credit-row:hover,
    body.community-theme .row:hover {
      border-color: var(--theme-hover);
    }

    body.community-theme .category-filter[aria-pressed="true"]:hover,
    body.community-theme .site-volume-slider:hover::-webkit-slider-thumb,
    body.community-theme .site-volume-slider:hover::-moz-range-thumb {
      background: var(--theme-hover);
    }

    body.community-theme .site-volume-slider:hover,
    body.community-theme .tab-appearance-control:hover {
      box-shadow: 0 0 0 2px #000, 0 0 0 4px var(--theme-hover);
    }

    body.community-theme .site-volume-slider:hover::-webkit-slider-thumb,
    body.community-theme .site-volume-slider:hover::-moz-range-thumb {
      box-shadow: 0 0 0 2px var(--theme-hover);
    }

    body.community-theme .home-logo-link:hover {
      filter: url(#accent-tint);
    }

    body.community-theme .toby-web-logo-home:hover img,
    body.community-theme .toby-web-logo-home:focus-visible img {
      filter: url(#accent-silhouette) drop-shadow(2px 0 #000) drop-shadow(-2px 0 #000) drop-shadow(0 2px #000) drop-shadow(0 -2px #000);
    }

    .accent-flood {
      flood-color: var(--theme-hover, #ffff00);
    }
  `;
  doc.head.append(style);
  if (!doc.getElementById("accent-tint")) {
    const defs = doc.createElementNS("http://www.w3.org/2000/svg", "svg");
    defs.setAttribute("width", "0");
    defs.setAttribute("height", "0");
    defs.setAttribute("aria-hidden", "true");
    defs.setAttribute("style", "position:absolute;overflow:hidden");
    defs.innerHTML = '<filter id="accent-tint"><feFlood class="accent-flood" flood-color="#ffff00" result="f"/><feComposite in="f" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0"/></filter><filter id="accent-silhouette"><feFlood class="accent-flood" flood-color="#ffff00" result="f"/><feComposite in="f" in2="SourceAlpha" operator="in"/></filter>';
    doc.body.append(defs);
  }
  doc.addEventListener("click", event => event.preventDefault(), true);
  previewFrameReady = true;
  scalePreviewFrame();
  applyPreviewState();
}

function applyPreviewState() {
  const doc = previewDoc();
  if (!previewFrameReady || !doc?.body) return;
  doc.documentElement.style.setProperty("--site-bg-image", previewUrl ? `url("${previewUrl}")` : "none");
  doc.documentElement.style.setProperty("--theme-hover", $("theme-accent").value);
  doc.documentElement.style.setProperty("--theme-text", $("theme-text").value);
  doc.querySelectorAll(".accent-flood").forEach(el => el.setAttribute("flood-color", $("theme-accent").value));
  doc.body.classList.add("community-theme");
  applyHomeOffsets(doc);
}

function refreshPreview() {
  const file = $("theme-background").files[0];
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = file ? URL.createObjectURL(file) : null;
  document.documentElement.style.setProperty("--theme-accent", $("theme-accent").value);
  applyPreviewState();
  $("volume-label").textContent = `${$("theme-volume").value}%`;
  previewAudio.volume = Number($("theme-volume").value) / 100;
}

$("preview-frame").addEventListener("load", initPreviewFrame);
if (previewDoc()?.readyState === "complete") initPreviewFrame();
new ResizeObserver(scalePreviewFrame).observe($("theme-preview"));
$("button-layout").addEventListener("change", () => {
  buttonLayout = $("button-layout").value || null;
  const doc = previewDoc();
  if (doc) applyHomeOffsets(doc);
});
form.addEventListener("input", refreshPreview);
form.addEventListener("change", refreshPreview);
const formatMB = bytes => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
async function compressOnPick(input, kind) {
  const file = input.files[0];
  if (!file || file.size <= ASSET_LIMITS[kind]) return;
  const label = kind === "background" ? "Background" : "Music";
  $("studio-status").textContent = `${label} is ${formatMB(file.size)} — compressing…`;
  try {
    const result = await compressThemeAsset(file, kind);
    if (!result.changed) return;
    restoreFile(input, result.file);
    $("studio-status").textContent = `${label} compressed ${formatMB(file.size)} → ${formatMB(result.file.size)}.${result.note ? " " + result.note : ""}`;
    refreshPreview();
  } catch (error) {
    $("studio-status").textContent = error.message;
  }
}
$("theme-background").addEventListener("change", () => compressOnPick($("theme-background"), "background"));
$("theme-music").addEventListener("change", () => compressOnPick($("theme-music"), "music"));
form.addEventListener("reset", () => {
  previewAudio.pause();
  currentDraftId = null;
  buttonOffsets = null;
  buttonLayout = null;
  $("draft-list").value = "";
  $("studio-status").textContent = "";
  setTimeout(() => {
    $("theme-creator").value = currentUser?.name || "Local Creator";
    $("button-layout").value = "";
    refreshPreview();
  }, 0);
});
$("preview-size").addEventListener("click", () => {
  const mobile = $("theme-preview").classList.toggle("mobile");
  $("preview-size").textContent = mobile ? "Desktop Preview" : "Mobile Preview";
  scalePreviewFrame();
});
const syncMusicButtons = () => {
  $("preview-music").textContent = previewAudio.paused ? "Play Music" : "Pause Music";
  if (previewAudio.paused) document.querySelectorAll("[data-admin-listen]").forEach(button => { button.textContent = "Listen"; });
};
previewAudio.addEventListener("play", syncMusicButtons);
previewAudio.addEventListener("pause", syncMusicButtons);
$("preview-music").addEventListener("click", async () => {
  if (!previewAudio.paused) { previewAudio.pause(); return; }
  const file = $("theme-music").files[0];
  if (!file) { $("studio-status").textContent = "Choose a music file first."; return; }
  try {
    await validateThemeAsset(file, "music");
    if (previewAudioUrl) URL.revokeObjectURL(previewAudioUrl);
    previewAudioUrl = URL.createObjectURL(file);
    previewAudio.src = previewAudioUrl;
    await previewAudio.play();
  } catch (error) { $("studio-status").textContent = error.message; }
});
form.addEventListener("submit", async event => {
  event.preventDefault();
  try {
    const { manifest, background, music } = currentManifest();
    await installTheme(manifest, background, music);
    $("studio-status").textContent = "Theme installed locally.";
    await renderLibrary();
    selectView("library");
  } catch (error) { $("studio-status").textContent = error.message; }
});

function loadTurnstile(siteKey) {
  if (!siteKey || turnstileSiteKey) return;
  turnstileSiteKey = siteKey;
  const script = document.createElement("script");
  script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  script.async = true;
  script.onload = () => {
    if (publishingReady) turnstileWidget = window.turnstile.render("#turnstile-container", { sitekey: siteKey, theme: "dark", action: "submit_theme" });
    if ($("report-dialog").open) renderReportTurnstile();
  };
  document.head.append(script);
}

function renderReportTurnstile() {
  if (!window.turnstile || !turnstileSiteKey) return;
  if (reportTurnstileWidget === null) {
    reportTurnstileWidget = window.turnstile.render("#report-turnstile", { sitekey: turnstileSiteKey, theme: "dark", action: "report_theme" });
  } else window.turnstile.reset(reportTurnstileWidget);
}

async function loadService() {
  try {
    const [{ publishingEnabled, signInEnabled, betaAdminOnly, siteKey }, { user }] = await Promise.all([
      api("/api/config").then(result => result.json()),
      api("/api/me").then(result => result.json())
    ]);
    serviceSignInEnabled = signInEnabled;
    currentUser = user;
    $("theme-creator").value = user?.name || "Local Creator";
    if (document.querySelector(".view.active")?.id === "discover") refreshDiscover();
    if (user?.admin) $("admin-tab").hidden = false;
    publishingReady = publishingEnabled && (!betaAdminOnly || user?.admin);
    if (user) loadTurnstile(siteKey);
    if (!publishingReady) {
      $("account-status").textContent = user
        ? `Signed in as ${user.name}. ${!publishingEnabled ? "Community submissions are paused." : "Submissions are limited to beta admins."}`
        : "Community publishing is not available yet. Local themes still work.";
      $("discord-login").hidden = !signInEnabled || !!user;
      return;
    }
    if (!user) {
      $("account-status").textContent = "Sign in to submit a theme for review.";
      $("discord-login").hidden = false;
      return;
    }
    $("account-status").textContent = `Signed in as ${user.name}. Submissions require review.`;
    $("publish-theme").hidden = false;
  } catch {
    $("account-status").textContent = "Community publishing is unavailable. Local themes still work.";
  } finally {
    serviceLoaded = true;
    maybeNudgeSignIn();
  }
}

async function snapshotStudioForSignIn() {
  const draft = {
    id: currentDraftId || `draft-${crypto.randomUUID()}`,
    name: $("theme-name").value,
    creator: $("theme-creator").value,
    description: $("theme-description").value,
    accentColor: $("theme-accent").value,
    textColor: $("theme-text").value,
    musicVolume: Number($("theme-volume").value) / 100,
    background: $("theme-background").files[0] || null,
    music: $("theme-music").files[0] || null,
    buttonOffsets, buttonLayout
  };
  const untouched = !draft.name.trim() && !draft.description.trim() && !draft.background && !draft.music
    && !buttonOffsets && !buttonLayout && draft.accentColor === "#ffff00" && draft.textColor === "#ffffff" && draft.musicVolume === 0.33;
  localStorage.setItem("tw-theme-signin-view", document.querySelector(".view.active")?.id || "studio");
  if (untouched) return;
  try { await saveThemeDraft(draft); }
  catch { await saveThemeDraft({ ...draft, background: null, music: null }); }
  currentDraftId = draft.id;
  localStorage.setItem("tw-theme-signin-draft", draft.id);
}

$("discord-login").addEventListener("click", async () => {
  try { await snapshotStudioForSignIn(); } catch {}
  location.href = `${API_BASE}/auth/discord`;
});
$("signin-nudge-login").addEventListener("click", async () => {
  try { await snapshotStudioForSignIn(); } catch {}
  location.href = `${API_BASE}/auth/discord`;
});
$("signin-nudge").addEventListener("close", () => sessionStorage.setItem("tw-theme-nudge-dismissed", "1"));
$("signin-nudge-local").addEventListener("click", () => $("signin-nudge").close());
$("submit-confirm-close").addEventListener("click", () => $("submit-confirm").close());
$("publish-theme").addEventListener("click", async () => {
  if (!publishingReady) return;
  const button = $("publish-theme");
  button.disabled = true;
  try {
    if (!form.reportValidity()) return;
    const { manifest, background, music } = currentManifest();
    await Promise.all([validateThemeAsset(background, "background"), validateThemeAsset(music, "music")]);
    const token = window.turnstile?.getResponse(turnstileWidget);
    if (!token) throw new Error("Complete the verification first.");
    const data = new FormData();
    data.set("manifest", JSON.stringify(manifest));
    data.set("background", background);
    data.set("music", music);
    data.set("turnstileToken", token);
    const result = await api("/api/themes/submissions", { method: "POST", headers: { "X-Toby-Theme-Action": "1" }, body: data });
    const submission = await result.json();
    $("studio-status").textContent = `Submitted for review (${submission.id}).`;
    $("submit-confirm-id").textContent = submission.id ? `Submission ID: ${submission.id}` : "";
    $("submit-confirm").showModal();
    window.turnstile.reset(turnstileWidget);
  } catch (error) {
    $("studio-status").textContent = error.message;
    window.turnstile?.reset(turnstileWidget);
  } finally { button.disabled = false; }
});

async function adminAction(path, data = {}) {
  await api(path, { method: "POST", headers: { "Content-Type": "application/json", "X-Toby-Theme-Action": "1" }, body: JSON.stringify(data) });
  await renderAdmin();
  await renderDiscover();
}

async function reviewCard(theme, pending, imageUrls) {
  const card = document.createElement("article");
  card.className = "theme-card";
  const image = document.createElement("img");
  image.alt = `${theme.name} background`;
  try {
    const path = pending ? `/api/admin/submissions/${theme.id}/assets/background` : `/api/admin/themes/${theme.id}/assets/background`;
    const result = await api(path);
    image.src = URL.createObjectURL(await result.blob());
    imageUrls.push(image.src);
  } catch { image.alt = `${theme.name} background unavailable`; }
  const body = document.createElement("div");
  body.className = "theme-card-body";
  const title = document.createElement("strong");
  title.textContent = theme.name;
  const creator = document.createElement("small");
  creator.textContent = `${theme.creator} (${pending ? theme.ownerId : theme.status})`;
  const description = document.createElement("small");
  description.textContent = theme.description;
  body.append(title, creator, description);
  const actions = document.createElement("div");
  actions.className = "moderation-actions";
  function command(label, action) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "action";
    button.textContent = label;
    button.addEventListener("click", async () => {
      button.disabled = true;
      try { await action(button); } catch (error) { $("admin-status").textContent = error.message; }
      button.disabled = false;
    });
    actions.append(button);
  }
  if (pending) {
    command("Listen", async button => {
      if (adminAudioUrl && previewAudio.src === adminAudioUrl && adminAudioThemeId === theme.id) {
        if (previewAudio.paused) { await previewAudio.play(); button.textContent = "Pause"; }
        else previewAudio.pause();
        return;
      }
      const result = await api(`/api/admin/submissions/${theme.id}/assets/music`);
      previewAudio.pause();
      if (adminAudioUrl) URL.revokeObjectURL(adminAudioUrl);
      adminAudioUrl = URL.createObjectURL(await result.blob());
      adminAudioThemeId = theme.id;
      previewAudio.src = adminAudioUrl;
      button.dataset.adminListen = "";
      await previewAudio.play();
      button.textContent = "Pause";
    });
    command("Approve", () => adminAction(`/api/admin/submissions/${theme.id}/approve`));
    command("Reject", () => {
      const reason = prompt("Reason for rejection:");
      if (reason === null) return Promise.resolve();
      return adminAction(`/api/admin/submissions/${theme.id}/reject`, { reason });
    });
  } else {
    if (theme.status === "published") {
      for (const tag of ["Verified", "Camzzz Approved"]) {
        command(`${theme.tags.includes(tag) ? "Remove" : "Add"} ${tag}`, () => {
          const tags = theme.tags.filter(value => value !== "Awesome Sauce");
          if (tags.includes(tag)) tags.splice(tags.indexOf(tag), 1);
          else tags.push(tag);
          return adminAction(`/api/admin/themes/${theme.id}/tags`, { tags });
        });
      }
    }
    command(theme.status === "hidden" ? "Restore" : "Hide", () => adminAction(`/api/admin/themes/${theme.id}/${theme.status === "hidden" ? "restore" : "hide"}`));
  }
  card.append(image, body, actions);
  return card;
}

async function renderAdmin() {
  try {
    const [pending, moderated, reports, history, catalog] = await Promise.all([
      api("/api/admin/submissions").then(result => result.json()),
      api("/api/admin/themes").then(result => result.json()),
      api("/api/admin/reports").then(result => result.json()),
      api("/api/admin/history").then(result => result.json()),
      api("/api/admin/catalog").then(result => result.json())
    ]);
    $("catalog-paused").checked = catalog.paused;
    const imageUrls = [];
    const [pendingCards, moderatedCards] = await Promise.all([
      Promise.all(pending.themes.map(theme => reviewCard(theme, true, imageUrls))),
      Promise.all(moderated.themes.map(theme => reviewCard(theme, false, imageUrls)))
    ]);
    adminUrls.forEach(url => URL.revokeObjectURL(url));
    adminUrls = imageUrls;
    $("pending-themes").replaceChildren(...pendingCards);
    $("moderated-themes").replaceChildren(...moderatedCards);
    $("report-count").textContent = String(reports.reports.length);
    $("pending-count").textContent = String(pending.themes.length);
    $("open-reports").replaceChildren(...reports.reports.map(report => {
      const row = document.createElement("div");
      row.className = "report-row";
      const details = document.createElement("div");
      details.className = "report-details";
      const title = document.createElement("strong");
      title.textContent = report.themeName;
      const reason = document.createElement("span");
      reason.textContent = `Reason: ${report.reason}`;
      const context = document.createElement("small");
      context.textContent = `${report.themeStatus} | ${new Date(report.createdAt).toLocaleString()} | Reporter ${report.reporterId}`;
      details.append(title, reason, context);
      const actions = document.createElement("div");
      actions.className = "report-actions";
      const resolve = document.createElement("button");
      resolve.type = "button";
      resolve.className = "action";
      resolve.textContent = "Resolve";
      resolve.addEventListener("click", () => adminAction(`/api/admin/reports/${report.id}/resolve`).catch(error => { $("admin-status").textContent = error.message; }));
      actions.append(resolve);
      if (report.themeStatus === "published") {
        const hide = document.createElement("button");
        hide.type = "button";
        hide.className = "action";
        hide.textContent = "Hide Theme";
        hide.addEventListener("click", () => adminAction(`/api/admin/themes/${report.themeId}/hide`).catch(error => { $("admin-status").textContent = error.message; }));
        actions.prepend(hide);
      }
      row.append(details, actions);
      return row;
    }));
    if (!reports.reports.length) $("open-reports").textContent = "No open reports.";
    $("moderation-history").replaceChildren(...history.actions.map(action => {
      const row = document.createElement("div");
      row.className = "audit-row";
      row.textContent = `${new Date(action.createdAt).toLocaleString()} - ${action.action} - ${action.themeName || action.themeId}`;
      return row;
    }));
    $("admin-status").textContent = `${pending.themes.length} pending theme(s), ${reports.reports.length} open report(s).`;
  } catch (error) { $("admin-status").textContent = error.message; }
}

document.querySelectorAll("[data-admin-section]").forEach(button => button.addEventListener("click", () => {
  const section = button.dataset.adminSection;
  document.querySelectorAll("[data-admin-section]").forEach(item => item.setAttribute("aria-selected", String(item === button)));
  document.querySelectorAll("[data-admin-panel]").forEach(panel => { panel.hidden = panel.dataset.adminPanel !== section; });
}));

$("catalog-paused").addEventListener("change", async event => {
  const paused = event.target.checked;
  event.target.disabled = true;
  try { await adminAction("/api/admin/catalog", { paused }); }
  catch (error) { event.target.checked = !paused; $("admin-status").textContent = error.message; }
  finally { event.target.disabled = false; }
});

window.addEventListener("pagehide", () => {
  previewAudio.pause();
  activeUrls.forEach(url => URL.revokeObjectURL(url));
  catalogUrls.forEach(url => URL.revokeObjectURL(url));
  adminUrls.forEach(url => URL.revokeObjectURL(url));
  catalogPreviewUrls.forEach(url => URL.revokeObjectURL(url));
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  if (previewAudioUrl) URL.revokeObjectURL(previewAudioUrl);
  if (adminAudioUrl) URL.revokeObjectURL(adminAudioUrl);
});

renderLibrary().catch(error => { $("installed-themes").textContent = `Installed themes unavailable: ${error.message}`; });
loadService();
renderDrafts().catch(error => { $("studio-status").textContent = `Drafts unavailable: ${error.message}`; });

(async () => {
  const returnView = localStorage.getItem("tw-theme-signin-view");
  const returnDraft = localStorage.getItem("tw-theme-signin-draft");
  if (!returnView && !returnDraft) return;
  localStorage.removeItem("tw-theme-signin-view");
  localStorage.removeItem("tw-theme-signin-draft");
  try {
    if (returnDraft) {
      const draft = (await listThemeDrafts()).find(item => item.id === returnDraft);
      if (draft) {
        fillFormFromDraft(draft);
        await renderDrafts();
        $("studio-status").textContent = "Draft restored after sign-in.";
      }
    }
    if (returnView && ["library", "discover", "studio", "admin"].includes(returnView)) selectView(returnView);
  } catch {}
})();
