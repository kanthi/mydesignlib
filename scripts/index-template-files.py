#!/usr/bin/env python3
"""Write data/files.json: relative files inside each catalog template folder.

The portal uses this list to zip a template in the browser. Re-run after
adding or removing files under library/.
"""

from __future__ import annotations

import json
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKIP_DIRS = {"node_modules", ".git"}
SKIP_NAMES = {".DS_Store"}


def files_for(folder: Path) -> list[str]:
    found: list[str] = []
    for dirpath, dirnames, filenames in os.walk(folder):
        dirnames[:] = [
            name
            for name in dirnames
            if name not in SKIP_DIRS and not name.startswith(".")
        ]
        for name in filenames:
            if name in SKIP_NAMES or name.endswith(".zip"):
                continue
            found.append(Path(dirpath, name).relative_to(folder).as_posix())
    found.sort()
    return found


def main() -> None:
    catalog = json.loads((ROOT / "data" / "catalog.json").read_text())
    index: dict[str, dict] = {}
    missing: list[str] = []
    for item in catalog["items"]:
        folder = ROOT / item["path"]
        if not folder.is_dir():
            missing.append(item["id"])
            continue
        index[item["id"]] = {
            "prompt": (folder / "prompt.md").is_file(),
            "files": files_for(folder),
        }
    out = ROOT / "data" / "files.json"
    out.write_text(json.dumps(index, indent=2) + "\n")
    prompts = sum(1 for entry in index.values() if entry["prompt"])
    print(f"wrote {out} · {len(index)} templates · {prompts} prompts")
    if missing:
        print("missing folders:", ", ".join(missing))


if __name__ == "__main__":
    main()
