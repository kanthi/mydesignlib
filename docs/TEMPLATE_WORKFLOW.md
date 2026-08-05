# Template workflow

How new templates are researched, rebranded, built, and registered in this repo.

For agents, the canonical procedures are:

| File | Role |
|------|------|
| [`AGENTS.md`](../AGENTS.md) | Always-on project rules |
| [`.grok/skills/ship-template/SKILL.md`](../.grok/skills/ship-template/SKILL.md) | Step-by-step ship procedure (also `/ship-template`) |

## Quick start (human or agent)

1. Drop a design reference (X URL, screenshot, case study).
2. Run the **ship-template** flow (or ask Grok to implement it).
3. Preview: `python3 -m http.server 8080` → `http://127.0.0.1:8080/`.

## Pipeline (summary)

```
Reference (X / video / site)
    → research + frames
    → fictional rebrand + free stack
    → AI assets + HTML/CSS page
    → data/templates.json
    → brand audit + HTTP 200
    → done
```

### Hard rules

1. **Fictional brands only** — no real logos, client identities, or original product names.
2. **Original assets** — AI-generated or code-built UI; no scrapes of client work.
3. **Vanilla static** — `templates/<id>/` self-contained; GitHub Pages friendly.
4. **Register** — every template in `data/templates.json`.
5. **Audit + verify** before calling a template finished.

## Folder contract

```
templates/<id>/
  index.html      # required
  preview.jpg     # required (catalog thumbnail)
  *.jpg|*.svg…    # optional section assets
```

## Catalog entry shape

```json
{
  "id": "example",
  "name": "Example",
  "description": "One-line visual summary.",
  "tags": ["saas", "minimal"],
  "category": "SaaS",
  "thumbnail": "templates/example/preview.jpg",
  "path": "templates/example/",
  "featured": true,
  "date": "2026-08-04"
}
```

Categories live in the `categories` array at the top of `data/templates.json`.

## Local server

```bash
python3 -m http.server 8080
```

Open `http://127.0.0.1:8080/` for the index, or `/templates/<id>/` for a single template.

## Index app notes

- Tag filter UI: top **8** tags shown, then expand (`TAG_PREVIEW` in `js/app.js`).
- Cards show **2** tags (`CARD_TAGS`).
- Sort: featured first, then newest `date`.
