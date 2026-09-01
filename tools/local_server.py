#!/usr/bin/env python3
"""Serve Toby Web locally with offline-only browser policies and game MIME types."""

from __future__ import annotations

import argparse
import mimetypes
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent

MIME_TYPES = {
    ".wasm": "application/wasm",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".data": "application/octet-stream",
    ".unx": "application/octet-stream",
    ".love": "application/octet-stream",
    ".pck": "application/octet-stream",
    ".unityweb": "application/octet-stream",
    ".mem": "application/octet-stream",
    ".ogg": "audio/ogg",
    ".oga": "audio/ogg",
    ".mp3": "audio/mpeg",
    ".webm": "video/webm",
}

CSP = "; ".join(
    (
        "default-src 'self' data: blob:",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob: data:",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: blob:",
        "media-src 'self' data: blob:",
        "font-src 'self' data:",
        "connect-src 'self' blob: data: ws://127.0.0.1:* ws://localhost:*",
        "worker-src 'self' blob: data:",
        "child-src 'self' blob: data:",
        "frame-src 'self' blob: data:",
        "object-src 'self' blob:",
        "base-uri 'self'",
    )
)


class OfflineHandler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, **MIME_TYPES}

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        self.send_header("Content-Security-Policy", CSP)
        self.send_header("X-Content-Type-Options", "nosniff")
        super().end_headers()

    def guess_type(self, path: str) -> str:
        extension = Path(path).suffix.lower()
        if extension in MIME_TYPES:
            return MIME_TYPES[extension]
        mime_type, _ = mimetypes.guess_type(path)
        return mime_type or "application/octet-stream"


def main() -> None:
    parser = argparse.ArgumentParser(description="Run Toby Web from the DUL repository.")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=2000)
    args = parser.parse_args()

    os.chdir(ROOT)
    server = ThreadingHTTPServer((args.host, args.port), OfflineHandler)
    print(f"Toby Web: http://{args.host}:{args.port}/index.html")
    print("Remote runtime requests are blocked by Content-Security-Policy.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
