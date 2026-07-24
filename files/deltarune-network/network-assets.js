(function () {
  if (window.__dulNetworkAssetRouterInstalled) return;
  window.__dulNetworkAssetRouterInstalled = true;

  const sharedMusicBase = new URL("../mus/", document.baseURI).href;
  const musicCaseAliases = new Map([
    ["audio_anotherhim.ogg", "AUDIO_ANOTHERHIM.ogg"],
    ["audio_darkness.ogg", "AUDIO_DARKNESS.ogg"],
    ["audio_defeat.ogg", "AUDIO_DEFEAT.ogg"],
    ["audio_drone.ogg", "AUDIO_DRONE.ogg"],
    ["audio_story.ogg", "AUDIO_STORY.ogg"],
    ["gallery.ogg", "GALLERY.ogg"],
    ["keygen.ogg", "KEYGEN.ogg"],
    ["tv_game.ogg", "TV_GAME.ogg"]
  ]);

  function resolveNetworkAssetUrl(value) {
    const rawUrl = typeof value === "string" ? value : (value && value.url) || "";
    if (!rawUrl || /^(blob|data):/i.test(rawUrl)) return rawUrl || value;

    const suffixIndex = rawUrl.search(/[?#]/);
    const suffix = suffixIndex >= 0 ? rawUrl.slice(suffixIndex) : "";
    const cleanUrl = (suffixIndex >= 0 ? rawUrl.slice(0, suffixIndex) : rawUrl).replace(/\\/g, "/");
    const lowerUrl = cleanUrl.toLowerCase();

    let musicPath = "";
    const assetsMusIndex = lowerUrl.lastIndexOf("assets/mus/");
    const musIndex = lowerUrl.lastIndexOf("mus/");
    if (assetsMusIndex >= 0) {
      musicPath = cleanUrl.slice(assetsMusIndex + "assets/mus/".length);
    } else if (musIndex >= 0) {
      musicPath = cleanUrl.slice(musIndex + "mus/".length);
    }
    if (!musicPath) return rawUrl;

    const fileName = musicPath.split("/").pop().toLowerCase();
    const alias = musicCaseAliases.get(musicPath.toLowerCase()) || musicCaseAliases.get(fileName);
    return new URL(alias || musicPath, sharedMusicBase).href + suffix;
  }

  const originalFetch = window.fetch;
  window.fetch = function (resource, ...args) {
    const requestUrl = typeof resource === "string" ? resource : (resource && resource.url) || "";
    const resolvedUrl = resolveNetworkAssetUrl(requestUrl);
    if (resolvedUrl !== requestUrl) {
      resource = typeof Request !== "undefined" && resource instanceof Request
        ? new Request(resolvedUrl, resource)
        : resolvedUrl;
    }
    return originalFetch.call(this, resource, ...args);
  };

  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    return originalOpen.call(this, method, resolveNetworkAssetUrl(url), ...rest);
  };

  const mediaSrcDescriptor = Object.getOwnPropertyDescriptor(HTMLMediaElement.prototype, "src");
  if (mediaSrcDescriptor && mediaSrcDescriptor.get && mediaSrcDescriptor.set) {
    Object.defineProperty(HTMLMediaElement.prototype, "src", {
      configurable: true,
      enumerable: mediaSrcDescriptor.enumerable,
      get: function () {
        return mediaSrcDescriptor.get.call(this);
      },
      set: function (value) {
        mediaSrcDescriptor.set.call(this, resolveNetworkAssetUrl(value));
      }
    });
  }

  const originalSetAttribute = HTMLMediaElement.prototype.setAttribute;
  HTMLMediaElement.prototype.setAttribute = function (name, value) {
    if (String(name).toLowerCase() === "src") value = resolveNetworkAssetUrl(value);
    return originalSetAttribute.call(this, name, value);
  };

  const NativeAudio = window.Audio;
  window.Audio = function (src) {
    return arguments.length > 0 ? new NativeAudio(resolveNetworkAssetUrl(src)) : new NativeAudio();
  };
  window.Audio.prototype = NativeAudio.prototype;
  Object.setPrototypeOf(window.Audio, NativeAudio);
})();
