# AGENTS.md — Toby Web

## What this is

Toby Web is a static, browser-based launcher for web ports of DELTARUNE, UNDERTALE, their mods, and fan games. No build system, no package manager, no automated test suite. Runtime files are committed/served directly.

## Deploy model

- The repo root IS the web root. `index.html` and `dltrn.html` are byte-identical launchers — keep them in sync.
- `tobywebsinglefile.html` is the downloadable launcher that pulls game assets from the GitHub CDN.
- GitHub repo (`Camzzz-vrgt/Toby-Web`) = file storage + the singlefile version. The live site is a Cloudflare R2 bucket (`toby-web`, served at toby.booksforschool.online).
- Site uploads: use `aws s3 cp <file> s3://toby-web/<key> --profile cloudflare-r2 --endpoint-url https://0653d26ef384c1a3a4252e507b9684ae.r2.cloudflarestorage.com --content-type <type>` (see `~/.aws/credentials`). Do NOT use `wrangler r2 object put` for site files — the wrangler OAuth account has a stale same-named `toby-web` bucket on a different account that does NOT serve the domain.
- After uploads, run `bash tools/purge-site-cache.sh [key ...]` (defaults to the HTML entry points) — the R2 custom-domain gateway caches by bare URL and serves stale pages for hours otherwise. Token lives in `~/.cf-toby-purge.env` (zone-scoped cache-purge token, not committed).
- NEVER push to GitHub or Cloudflare. Releases ship in big updates (1.1 is live; 1.2 is in development — tracked in `TODO.md`).
- The site is served as an **R2 custom domain** — do NOT route the hostname through a Worker. Workers are for `themes-api` (community themes) and `dul-presence` (online counter) only; the account is on the free tier (100k req/day shared), and site asset traffic alone far exceeds that. `toby-web-site` exists but is intentionally unused.
- To bust stale asset copies after a deploy, bump `?v=` keys on changed files (ASSET_VERSION / launcher URL params) — there is no cache-purge access on the wrangler token.

## Layout

| Path | What it is |
|---|---|
| `index.html`, `dltrn.html`, `themes.html`, `tobywebsinglefile.html` | Site pages — served URLs, do not move or rename |
| `camzzz_deltarune_allbossessave.data` | Featured save, referenced by the launcher |
| `tobyweb.svg` | Site logo asset |
| `files/` | All runtime assets + every game port (`files/<short-lowercase-name>/`). Large — every path here is a public URL |
| `tools/` | Local dev scripts (gitignored): `local_server.py`, `smoke-port.js`, `probe-*.js`, `build-*.ps1`, UTMT `*.csx` scripts |
| `workers/presence-worker/` | Cloudflare presence counter (deployed separately) |
| `workers/themes-worker/` | Community themes API: D1 + private R2 + Turnstile + Discord OAuth |
| `docs/` | Dev docs: `OFFLINE_RUNTIME.md`, `developer-setup.txt` (contributor guide), `message.txt` (porting brief), `CODEX_PROJECT_CONTEXT.md` (historical Codex handoff — partly stale; trust current code) |
| `.tmp/` | All porting scratch. Source archives in here are load-bearing — TODO.md requires keeping exact mod sources for reproducible builds. Also holds `pw/` (local Playwright), `tools/xdelta`, `ports/` (port staging), `npm-cache` |
| `TODO.md` | Update 1.2 roadmap and verification queue — read it before porting work |

## Dev commands

- Serve the site: `start-local.bat` or `py -3 tools/local_server.py --port 2000` → http://127.0.0.1:2000
- Smoke-test a port startup: `node tools/smoke-port.js` (uses `.tmp/pw` Playwright)
- Theme API probes: `node tools/probe-theme-*.js`
- Offline asset audit: `py -3 tools/audit_offline.py`

## Hard rules

- Keep `index.html` and `dltrn.html` byte-identical.
- Never break paths under `files/` — they are public URLs on the live site.
- No runtime dependency on external hosts (GameBanana, jsDelivr, raw GitHub, etc.). Everything a game needs ships from `files/`.
- Keep individual Git objects under GitHub's 100 MB limit; split large files and reconstruct in the browser.
- Include `files/mobile-controls.js` in game runner pages (disabled by default).
- Record port provenance (source page, exact version, checksums) per the process in `TODO.md`.
- Do not commit `.tmp/`, `tools/`, worker state, or other dev scratch.

## Porting guidance (learned the hard way)

- Do NOT attempt ports of mobile-only game builds again — the user has explicitly asked to be told no. The ULB Clickteam mobile port burned ~8 hours on touch-layer stubs (Multiple Touch extension, on-screen button proxies) that a desktop audience never needed.
- Before committing to a port, verify the build is actually portable: GameMaker YYC builds have no VM bytecode (unrunnable by butterscotch — see the ULB Resurrection PC build); Clickteam `.ccn` needs the HTML5 runtime and any stubbed extensions implemented.
- Prefer the path of least resistance: official HTML5 builds > VM-format data.win on butterscotch > anything requiring a custom engine runtime.
- Ports requiring cross-origin isolation (SharedArrayBuffer, OPFS, WASM threads) must keep a detectable marker in their `index.html` so the single-file's `loadRemotePage` redirects them to the live site: `coi-serviceworker`, a `crossOriginIsolated` gate, `GODOT_THREADS_ENABLED = true`, or a COOP/COEP-injecting service worker. Detection lives in `tools/lrp-body.txt`.
