# Create Your Frisk — Web Port

This folder is a **self-contained Create Your Frisk (CYF) engine** built for WebGL.
One build hosts **multiple game ports** — they're all packed into
`StreamingAssets/gamepack.bin` and selected via the `?mod=` URL parameter
(or the built-in mod selector).

## Deploy

Upload this whole folder to any static web host and serve it. Open `index.html`
(or the directory itself) in a browser.

## Available ports

| Game | URL |
|------|-----|
| Mod selector (all mods) | `index.html` |
| **Deltarune: Rouxls Kaard** | `rouxls/` or `index.html?mod=Rouxls` |
| **VS Tung-Tung-Tung Sahur** | `vstung/` or `index.html?mod=VsTung` |
| **Pomni Battle V2** | `pomni/` or `index.html?mod=Pomni` |
| **Smurf Cat Fight** | `smurfcat/` or `index.html?mod=SmurfCat` |
| **Nightmare Mode Sans** | `nightmaresans/` or `index.html?mod=NightmareSans` |

The per-game subfolders are just tiny redirect pages into the main build —
handy for giving each game its own clean link.

## Notes

- Click once on the disclaimer screen — that first click also unlocks the
  browser audio (autoplay policy). Sound starts right after.
- The game is fixed 640x480 and scales to fill the window (letterboxed).
  Bottom-right button toggles real fullscreen.
- Saves/options persist in the browser via IndexedDB.
- Discord Rich Presence and desktop window controls are stubbed out
  (not supported in browsers).

## Adding more CYF / CreateYourKris mods

Mods are pure data — usually no Unity rebuild needed:

1. Drop the mod folder into the game tree (a `Mods/<ModName>/` folder next to
   `Default/` in the source staging dir).
2. Repack `StreamingAssets/gamepack.bin` with the pack script
   (`_newports/pack_game.py` in the repo).
3. Replace this folder's `StreamingAssets/gamepack.bin` and link with
   `?mod=<ModFolderName>`.

One caveat — **audio**: on WebGL, `.ogg` files can't be decoded at runtime, so
they're baked into `Resources` by the build (`WebBuild.ImportAudio`). If a new
mod ships `.ogg` music/sounds, run one Unity build so they get imported —
otherwise you'll see `Loading custom music failed`. `.wav` files decode
natively and need no rebuild.

CYK-based mods (like Rouxls) work too — the CYK library just needs to be inside
the mod's `Lua/Libraries/` folder, which most CYK mod releases already include.
