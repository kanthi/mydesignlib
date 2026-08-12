# mydesignlib

Personal design library — websites, brands, logos, and systems — with a static index app at the repo root.

No build step. No frameworks. Suitable for local use or GitHub Pages.

**Not for search discovery.** Root `robots.txt` disallows all crawlers; every page ships `noindex, nofollow` meta. The site is still reachable by URL (GitHub Pages has no auth) — share links only with people you trust.

All brands and copy are **fictional sample names** for portfolio use. Designs are inspired by public references (X posts, case studies, etc.) and fully rebranded.

## Structure

```
.
├── AGENTS.md                      # Project rules for agents (always)
├── docs/
│   ├── SKILLS.md                  # Skills map + filename naming scheme
│   ├── OPERATIONS.md              # Hosting, Pages, privacy, GA, deploy
│   ├── TEMPLATE_WORKFLOW.md       # Human-readable template pipeline
│   ├── method-design-md-for-ai.md # DESIGN.md that agents can execute
│   ├── premium-site-method.md     # Premium polish method
│   └── ai-website-methods-corpus.md
├── .grok/skills/                  # Agent skills (/ship-template, …)
├── .github/workflows/pages.yml    # GitHub Pages deploy (Node 24)
├── robots.txt                     # Disallow all crawlers
├── index.html                     # Showcase (mydesignlib)
├── css/styles.css
├── js/app.js
├── data/catalog.json              # Catalog (source of truth)
└── library/
    ├── websites/<id>/             # Self-contained site templates
    │   ├── index.html
    │   ├── preview.jpg
    │   └── DESIGN.md              # optional per-item design system
    ├── brands/<id>/
    ├── logos/<id>/
    └── systems/<id>/
```

Each library folder is self-contained (`index.html` / assets + `preview.jpg` as needed).

## Workflows (for future tasks)

| Goal | Follow |
|------|--------|
| Hosting, Pages, no-crawl, Analytics, deploy smoke checks | **[docs/OPERATIONS.md](docs/OPERATIONS.md)** |
| Ship a new website template from a design reference | **[docs/TEMPLATE_WORKFLOW.md](docs/TEMPLATE_WORKFLOW.md)** + `/ship-template` |
| Skills map + how files are named | **[docs/SKILLS.md](docs/SKILLS.md)** |
| DESIGN.md for AI (mistakes + tips) | **[docs/method-design-md-for-ai.md](docs/method-design-md-for-ai.md)** + `/design-system-first` |
| Premium / anti-AI-slop polish | `/premium-site` · `/anti-slop-frontend` · [docs/premium-site-method.md](docs/premium-site-method.md) |
| Clean SaaS / whitespace / product-as-proof | `/clean-interface` |
| Micro craft (feel / radii / hit areas) | `/interface-craft` |
| X methods corpus | [docs/ai-website-methods-corpus.md](docs/ai-website-methods-corpus.md) |
| Agent hard rules | **[AGENTS.md](AGENTS.md)** |

### Doc & skill filename scheme (short)

Names should reveal role without opening the file:

| Pattern | Role |
|---------|------|
| `docs/method-<topic>.md` | Reusable method / checklist |
| `docs/SKILLS.md` | Skills index (not `skillme.md`) |
| `docs/OPERATIONS.md` | Hosting / deploy ops |
| `.grok/skills/<name>/SKILL.md` | Agent skill entry (Grok convention) |
| `…/references/method-<topic>.md` | Method notes inside a skill |
| `…/references/src-<author>-<topic>.md` | Single-source distillation (new files) |
| `library/.../DESIGN.md` | **That item’s** design system (not a method doc) |

Full table: **[docs/SKILLS.md](docs/SKILLS.md)**.

## Adding a website template

**Full pipeline** (research → rebrand → assets → build → register → audit → verify):

- Read **[docs/TEMPLATE_WORKFLOW.md](docs/TEMPLATE_WORKFLOW.md)**
- Agents: root **[AGENTS.md](AGENTS.md)** + skill **`.grok/skills/ship-template`** (`/ship-template`)
- Every page must include **noindex** + **GA** (`G-Z97ZD3EVSF`) — see OPERATIONS

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

This machine serves the repo with **Caddy** (no need to run `python3 -m http.server`).

```bash
# Print base URL (LAN host + stable port)
~/.config/mydesignlib-portal/serve.sh --url

# Start if not already running
~/.config/mydesignlib-portal/serve.sh --bg
```

Open the printed URL (e.g. `http://192.168.68.200:33215/`). Item paths: `/library/websites/<id>/`. See `docs/OPERATIONS.md` § Local preview.

## GitHub Pages

**Status:** paused — GitHub Pages and the deploy workflow are **off** so Actions does not fail while the site is unpublished. See `docs/OPERATIONS.md` § “Pages paused” to turn them back on.

**Intended live URL:** [https://www.kanthi.in/mydesignlib/](https://www.kanthi.in/mydesignlib/)  
Alternate (when live): [https://kanthi.github.io/mydesignlib/](https://kanthi.github.io/mydesignlib/)

| Setting | Value |
|---------|--------|
| Source | GitHub Actions (`.github/workflows/pages.yml`) |
| Build | None — pure static HTML/CSS/JS |
| Catalog | `data/catalog.json` |
| Templates | `library/websites/<id>/` |

When Pages is active again, every push to `main` runs **Deploy GitHub Pages**. Manual runs: Actions → workflow → Run workflow.

## Hard rules (short)

| Rule | Why |
|------|-----|
| Fictional rebrands only | Portfolio-safe; no client IP |
| AI / code assets only | No scraped client photography |
| Vanilla static | GitHub Pages, no build |
| Always register + HTTP-check | Catalog stays truthful |
| Noindex + robots Disallow | Personal library; not for SERPs |
| GA on every HTML page | `G-Z97ZD3EVSF` |

