# Templates

Personal collection of static website templates, with a small index app at the repo root.

No build step. No frameworks. Suitable for local use or GitHub Pages.

All brands and copy are **fictional sample names** for portfolio use. Designs are inspired by public references (X posts, case studies, etc.) and fully rebranded.

## Structure

```
.
├── AGENTS.md                 # Project rules for agents
├── docs/TEMPLATE_WORKFLOW.md # Human-readable pipeline
├── .grok/skills/ship-template/  # /ship-template skill
├── index.html
├── css/styles.css
├── js/app.js
├── data/templates.json       # Catalog (source of truth)
└── templates/<id>/           # Self-contained pages
    ├── index.html
    └── preview.jpg
```

Each template folder is self-contained (`index.html` + `preview.jpg` + optional assets).

## Adding a template

**Full pipeline** (research → rebrand → assets → build → register → audit → verify):

- Read **[docs/TEMPLATE_WORKFLOW.md](docs/TEMPLATE_WORKFLOW.md)**
- Agents: root **[AGENTS.md](AGENTS.md)** + skill **`.grok/skills/ship-template`** (`/ship-template`)

Minimal manual steps:

1. Create `templates/<id>/` with `index.html` and `preview.jpg`.
2. Register it in `data/templates.json`.
3. Brand-audit (no real brand names) and open via local server.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

Deploy branch root (`main` / `/`). Relative paths work under project Pages URLs.

## Hard rules (short)

| Rule | Why |
|------|-----|
| Fictional rebrands only | Portfolio-safe; no client IP |
| AI / code assets only | No scraped client photography |
| Vanilla static | GitHub Pages, no build |
| Always register + HTTP-check | Catalog stays truthful |
