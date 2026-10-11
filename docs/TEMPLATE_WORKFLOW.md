# Library workflow (websites)

How new **website** templates are researched, rebranded, built, and registered in mydesignlib.

For agents, the canonical procedures are:

| File | Role |
|------|------|
| [`AGENTS.md`](../AGENTS.md) | Always-on project rules |
| [`OPERATIONS.md`](OPERATIONS.md) | Hosting, Pages, privacy, GA, deploy |
| [`SKILLS.md`](SKILLS.md) | Archived skills map |

The design skills are archived under [`.grok/archive/skills/`](../.grok/archive/skills/). Do not load them. Match the reference, then register and verify.

## Quick start (human or agent)

1. Drop a design reference (X URL, screenshot, case study).
2. Match the reference and build the page. The old skill route is archived.
3. Preview via **Caddy** (already configured): `~/.config/mydesignlib-portal/serve.sh --url`.

## Pipeline (summary)

```
Reference (X / video / site)
    → research + frames
    → fictional rebrand + free stack
    → original assets + HTML/CSS page that matches the reference
    → data/catalog.json (type: website)
    → brand audit + HTTP 200
    → done
```

A per-item DESIGN.md is optional. The old requirement to write one before HTML is archived with the design skills.
### Hard rules

1. **Fictional brands only** — no real logos, client identities, or original product names.
2. **Original assets** — AI-generated or code-built UI; no scrapes of client work.
3. **Vanilla static** — `library/websites/<id>/` self-contained; GitHub Pages friendly.
4. **Noindex + GA** — every HTML page: robots noindex meta + gtag `G-Z97ZD3EVSF` (see OPERATIONS).
5. **Register** — every item in `data/catalog.json` with a `type`.
6. **Audit + verify** before calling a deliverable finished.
7. **Push `main`** when the user wants it live — Pages deploys when the workflow is enabled (see OPERATIONS § Pages paused if off).

## Folder contract

```
library/websites/<id>/
  index.html      # required
  preview.jpg     # required (catalog thumbnail)
  *.jpg|*.svg…    # optional section assets
```

Other types (same idea):

```
library/brands/<id>/
library/logos/<id>/
library/systems/<id>/
```

## Catalog entry shape

```json
{
  "id": "example",
  "type": "website",
  "name": "Example",
  "description": "One-line visual summary.",
  "tags": ["saas", "minimal"],
  "category": "SaaS",
  "thumbnail": "library/websites/example/preview.jpg",
  "path": "library/websites/example/",
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
