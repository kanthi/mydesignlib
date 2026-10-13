# Library workflow (websites)

How new **website** templates are researched, rebranded, built, and registered in mydesignlib.

For agents, the canonical procedures are:

| File | Role |
|------|------|
| [`AGENTS.md`](../AGENTS.md) | Always-on project rules |
| [`OPERATIONS.md`](OPERATIONS.md) | Hosting, Pages, privacy, GA, deploy |
| [`.grok/skills/template-from-ref/SKILL.md`](../.grok/skills/template-from-ref/SKILL.md) | Grok: reference → one library item |
| [`.agents/skills/template-from-ref/SKILL.md`](../.agents/skills/template-from-ref/SKILL.md) | Antigravity: same package (`/tfr` alias beside it) |
| [`SKILLS.md`](SKILLS.md) | Active skill + archived skills map |

The six aesthetic skills stay archived under [`.grok/archive/skills/`](../.grok/archive/skills/). Do not load them. Match the reference with `template-from-ref`, then register and verify.

## Quick start (human or agent)

1. Drop a design reference (X URL, screenshot, scroll video, fragment, or brand board).
2. Follow [template-from-ref](../.grok/skills/template-from-ref/SKILL.md). The old aesthetic-skill route stays archived.
3. Preview via **Caddy** (already configured): `~/.config/mydesignlib-portal/serve.sh --url`.

## Pipeline (summary)

```
Reference (X / video / screenshot / fragment / brand board)
    → research + frames in /tmp/xmedia/<slug>/
    → library/brands/<id>/ in the Omnia shape
         hub + replica + guidelines + landing + social + merch + reveal
    → data/catalog.json (type: brand) + data/files.json
    → audit + HTTP 200 on Caddy
    → done
```

The format specimen is [`library/brands/omnia/`](../library/brands/omnia/). The procedure is [template-from-ref](../.grok/skills/template-from-ref/SKILL.md). A per-item DESIGN.md is optional.
### Hard rules

1. **Same package every time** — hub, replica, guidelines, landing, social kit, merch, reveal. Keep the reference name, redraw the mark, credit the author. Do not copy reference pixels into the folder.
2. **Original assets** — SVG/CSS, AI-generated, or code-built UI. No scraped client shots.
3. **Vanilla static** — `library/brands/<id>/` self-contained; GitHub Pages friendly.
4. **Noindex + GA** — every HTML page: robots noindex meta + gtag `G-Z97ZD3EVSF` (see OPERATIONS).
5. **Register** — every item in `data/catalog.json` with a `type`.
6. **Audit + verify** before calling a deliverable finished.
7. **Push `main`** when the user wants it live — Pages deploys when the workflow is enabled (see OPERATIONS § Pages paused if off).

## Folder contract

A new reference lives at `library/brands/<id>/` and matches [`library/brands/omnia/`](../library/brands/omnia/): `index.html` hub, `preview.jpg`, `replica/`, `extended/` (guidelines, landing, social, merch, reveal). Older items under `library/websites/<id>/` stay one-page folders.

## Catalog entry shape

```json
{
  "id": "example",
  "type": "brand",
  "name": "Example",
  "description": "One-line visual summary of the study package.",
  "tags": ["branding", "identity"],
  "category": "Studio",
  "thumbnail": "library/brands/example/preview.jpg",
  "path": "library/brands/example/",
  "projectId": "example",
  "related": [],
  "featured": true,
  "date": "2026-08-04"
}
```

Categories (industry) live in the `categories` array at the top of `data/catalog.json`.
Types: `website` · `brand` · `logo` · `system`.

## Local server (Caddy)

Do **not** start `python3 -m http.server`. Use the machine Caddy portal:

```bash
~/.config/mydesignlib-portal/serve.sh --url   # base URL
~/.config/mydesignlib-portal/serve.sh --bg    # if not already running
```

Open the printed base URL for the showcase index, or `/library/websites/<id>/` for a single site.

## Index app notes

- Primary filter: **type** tabs (All / Websites / Brands / Logos / Systems).
- Tag filter UI: top **8** tags shown, then expand (`TAG_PREVIEW` in `js/app.js`).
- Cards show **2** tags (`CARD_TAGS`).
- Sort: featured first, then newest `date`.
