# Toby Web Offline Runtime

Toby Web is supported locally from the repository root through the bundled HTTP server:

```powershell
Set-Location "C:\Users\cmrns_4sj17yr\Documents\GitHub\DUL"
py -3 tools\local_server.py --port 2000
```

Open `http://127.0.0.1:2000/index.html`. `start-local.bat` starts the same server and opens that URL. Do not use `file://`.

## Offline Guarantees

- The repository root is the web root; game assets resolve below `files/`.
- The server sends correct WASM and game-data MIME types.
- The server's Content Security Policy blocks non-local runtime requests.
- Local `blob:` and `data:` resources remain allowed because several packaged runners create workers, scripts, and media from embedded data.
- Hosted presence defaults off on localhost. Connection failure is non-fatal.
- Advertising requests are removed.

## Verification

Run the static audit:

```powershell
py -3 tools\audit_offline.py
```

The September 1, 2026 browser pass loaded the launcher and representative builds from each major engine family under the offline server policy: Chapters 1 and 5, Undertale, Upper Hand, Dreamwake, Scampton, VS Tung Tung Tung Sahur, Plugged Dream, Frostveil, Free Her, Full Roaring Knight Remake, A Different Snowgrave, Guess Who, GeoGuessr, and the old layout. The launcher home/mods/extras pages reported no broken images. Featured and mod save payloads returned HTTP 200, and `.wasm` returned `application/wasm`.

## Intentionally External Navigation

These domains are retained only in clickable credits, creator pages, and community links. They are not required to load or play locally:

- `discord.gg`
- `gtag.pro`
- `truffled.lol`
- `storynetwork.site`
- `chatgpt.com`
- `deltarune.com`
- `undertale.com`
- `gamebanana.com`
- `gamejolt.com`
- `serve.gamejolt.net`
- `itch.io` creator subdomains (`colinstick`, `jan-ko-pan`, `selene3`, `signalsphere`)
- `html-classic.itch.zone` (legacy original-game credit links only)
- `jcw87.github.io`
- `turbowarp.org`
- `ut10-battle.undertale.com`
- `youtube.com`
- `x.com`

The optional hosted presence endpoint is `wss://dul-presence.dul-presence-worker.workers.dev/presence`. It is disabled by default on localhost and blocked by the offline server policy.

## Missing Optional Files

GeoGuessr's downloaded `runner.svg` and `runnerLocal.svg` were Cloudflare Not Found HTML pages rather than QR images. The optional QR buttons were removed and the invalid files deleted. This does not affect the game. No required local runtime files are missing according to `tools/audit_offline.py`.
