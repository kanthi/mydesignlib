# mydesignlib

Personal design library — websites, brands, logos, and systems — with a static index app at the repo root.

No build step. No frameworks. Suitable for local use or GitHub Pages.

All brands and copy are **fictional sample names** for portfolio use. Designs are inspired by public references (X posts, case studies, etc.) and fully rebranded.

## Structure

```
.
├── AGENTS.md                      # Project rules for agents
├── docs/TEMPLATE_WORKFLOW.md      # Human-readable pipeline
├── .grok/skills/ship-template/    # /ship-template skill
├── index.html                     # Showcase (mydesignlib)
├── css/styles.css
├── js/app.js
├── data/catalog.json              # Catalog (source of truth)
└── library/
    ├── websites/<id>/             # Self-contained site templates
    │   ├── index.html
    │   └── preview.jpg
    ├── brands/<id>/               # Brand systems (future)
    ├── logos/<id>/                # Standalone marks (future)
    └── systems/<id>/              # UI / token specimens (future)
```

Each library folder is self-contained (`index.html` / assets + `preview.jpg` as needed).

## Adding a website template

**Full pipeline** (research → rebrand → assets → build → register → audit → verify):

- Read **[docs/TEMPLATE_WORKFLOW.md](docs/TEMPLATE_WORKFLOW.md)**
- Agents: root **[AGENTS.md](AGENTS.md)** + skill **`.grok/skills/ship-template`** (`/ship-template`)

Minimal manual steps:

1. Create `library/websites/<id>/` with `index.html` and `preview.jpg`.
2. Register it in `data/catalog.json` with `"type": "website"`.
3. Brand-audit (no real brand names) and open via local server.

## Catalog item shape

```json
{
  "id": "example",
  "type": "website",
  "name": "Example",
  "description": "Short summary of the design.",
  "tags": ["saas", "dark"],
  "category": "SaaS",
  "thumbnail": "library/websites/example/preview.jpg",
  "path": "library/websites/example/",
  "projectId": "example",
  "related": [],
  "featured": true,
  "date": "2026-08-08"
}
```

`type` is one of: `website` · `brand` · `logo` · `system`.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

Deploy branch root (`main` / `/`). Relative paths work under project Pages URLs.

Repo rename (optional): this product is **mydesignlib** — rename the GitHub repository when ready.

## Hard rules (short)

| Rule | Why |
|------|-----|
| Fictional rebrands only | Portfolio-safe; no client IP |
| AI / code assets only | No scraped client photography |
| Vanilla static | GitHub Pages, no build |
| Always register + HTTP-check | Catalog stays truthful |
