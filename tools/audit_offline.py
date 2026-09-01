#!/usr/bin/env python3
"""Audit browser-loadable project references for offline/local availability."""

from __future__ import annotations

import argparse
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


LOAD_ATTRS = {
    "audio": {"src"},
    "embed": {"src"},
    "iframe": {"src"},
    "img": {"src", "srcset"},
    "input": {"src"},
    "link": {"href"},
    "object": {"data"},
    "script": {"src"},
    "source": {"src", "srcset"},
    "track": {"src"},
    "video": {"src", "poster"},
}
SKIP_PREFIXES = ("data:", "blob:", "javascript:", "mailto:", "tel:", "#")
CSS_URL_RE = re.compile(r"url\(\s*(['\"]?)(.*?)\1\s*\)", re.IGNORECASE)


class AssetParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.assets: list[tuple[str, str]] = []
        self.base_href: str | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "base" and values.get("href"):
            self.base_href = values["href"]
        for attr in LOAD_ATTRS.get(tag, set()):
            value = values.get(attr)
            if not value:
                continue
            entries = value.split(",") if attr == "srcset" else [value]
            for entry in entries:
                self.assets.append((f"{tag}[{attr}]", entry.strip().split()[0]))


def classify(value: str) -> str:
    lower = value.strip().lower()
    if not lower or lower.startswith(SKIP_PREFIXES):
        return "skip"
    if lower.startswith(("http://", "https://", "//", "ws://", "wss://")):
        return "remote"
    return "local"


def local_path(root: Path, source: Path, value: str, base_href: str | None = None) -> Path:
    parsed = urlsplit(value)
    path = unquote(parsed.path).replace("/", str(Path("/")))
    if parsed.path.startswith("/"):
        return root / parsed.path.lstrip("/")
    base = source.parent
    if base_href and classify(base_href) == "local":
        base_path = urlsplit(base_href).path
        if base_path and base_path not in (".", "./"):
            base = (source.parent / base_path).resolve()
    return (base / path).resolve()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", nargs="?", default=".")
    args = parser.parse_args()
    root = Path(args.root).resolve()
    missing: list[tuple[Path, str, str]] = []
    remote: list[tuple[Path, str, str]] = []
    checked = 0

    for source in root.rglob("*"):
        if not source.is_file() or ".git" in source.parts:
            continue
        suffix = source.suffix.lower()
        if suffix not in {".html", ".htm", ".css"}:
            continue
        refs: list[tuple[str, str]] = []
        base_href = None
        try:
            text = source.read_text(encoding="utf-8", errors="ignore")
        except OSError:
            continue
        if suffix in {".html", ".htm"}:
            html = AssetParser()
            html.feed(text)
            refs.extend(html.assets)
            base_href = html.base_href
        if suffix == ".css":
            refs.extend(("css[url]", match.group(2)) for match in CSS_URL_RE.finditer(text))

        for kind, value in refs:
            state = classify(value)
            if state == "skip":
                continue
            if state == "remote":
                remote.append((source.relative_to(root), kind, value))
                continue
            checked += 1
            target = local_path(root, source, value, base_href)
            if not target.exists():
                missing.append((source.relative_to(root), kind, value))

    print(f"Checked local asset references: {checked}")
    print(f"Missing local asset references: {len(missing)}")
    for source, kind, value in missing:
        print(f"MISSING\t{source}\t{kind}\t{value}")
    print(f"Remote load-bearing attributes: {len(remote)}")
    for source, kind, value in remote:
        print(f"REMOTE\t{source}\t{kind}\t{value}")
    return 1 if missing or remote else 0


if __name__ == "__main__":
    raise SystemExit(main())
