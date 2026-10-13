# mydesignlib — project rules

Personal static design library: website templates, brand systems, logos, and UI specimens derived from design references (X posts, videos, images, Framer/Webflow/Figma case studies). A new reference ships as an Omnia-format study package. Older one-page items stay as they are.

**Ops runbook (hosting, Pages, privacy, GA, deploy):** [`docs/OPERATIONS.md`](docs/OPERATIONS.md) — read it for any live-site or deploy work.

Former repo name: **mytemplate** (same product).

## Product rules (always)

1. **New reference → Omnia study package.** Grok follows [`.grok/skills/template-from-ref/SKILL.md`](.grok/skills/template-from-ref/SKILL.md). Antigravity follows [`.agents/skills/template-from-ref/SKILL.md`](.agents/skills/template-from-ref/SKILL.md) (`/template-from-ref`, `/tfr`). One folder, `library/brands/<id>/`, with the hub, replica, guidelines, landing, social kit, merch, and logo reveal, in the shape of `library/brands/omnia/`. Keep the reference name, redraw the mark as SVG, and credit the author on the hub and in `README.md`. A landing, a video, a fragment, and a brand board all get that same package.
2. **Original assets only.** Use redrawn SVG/CSS, AI-generated images (`image_gen` / `image_edit`), or code-built mockups. Do not copy the reference image or video into the folder. Do not scrape client work or ship watermarked stock.
3. **Vanilla static for GitHub Pages.** One self-contained folder per item under `library/<type>/<id>/` (e.g. `library/websites/<id>/index.html` + assets). No React/Vite/Next unless a free open stack is explicitly justified (rare). Prefer free libraries when the original used proprietary tools (Framer → GSAP/CSS/Three.js/Lenis as needed). Relative paths only (site is served under `/mydesignlib/`).
4. **No search indexing.** Site is personal / private-by-convention. Keep root `robots.txt` as `Disallow: /`. Every HTML page (showcase + library items) must include:
   `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />`
   (and the matching `googlebot` meta). Do not add a sitemap or SEO markup meant for discovery.
5. **Google Analytics.** Every HTML page must include the site gtag (`G-Z97ZD3EVSF`) in `<head>` (same snippet as root `index.html`). Full required head block is in `docs/OPERATIONS.md`.
6. **Register every item** in `data/catalog.json` with `id`, `type`, `name`, `description`, `tags`, `category`, `thumbnail`, `path`, `featured`, `date` (optional: `projectId`, `related`, `meta`).
7. **Audit before done.** For an Omnia-format study, the reference name and the author credit belong on the hub and in `README.md`. The folder must not contain the reference image or video, or a marketplace purchase link. Any other new item must not contain the original brand, designer handle, marketplace URL, real client, or competitor logo.
8. **HTTP verify.** Local site is already served by **Caddy** (do **not** start `python3 -m http.server`). Resolve base URL with `~/.config/mydesignlib-portal/serve.sh --url`, then confirm `200` for `index.html`, `preview.jpg`, and key assets. Details: `docs/OPERATIONS.md` § Local preview.
9. **One complete deliverable per reference URL** unless the user asks otherwise. Finish registration + audit + verify in the same turn when possible.
10. **Ship to live when asked.** Site-facing changes: commit, push `main`. Pages is currently **paused** (workflow disabled); re-enable per `docs/OPERATIONS.md` § “Pages paused” before expecting a live deploy.
11. **Complete website with full motion & assets.** Whenever reference material is provided, build a complete, production-grade website deliverable — including smooth scroll, section transitions, micro-interactions, scroll-driven motion (GSAP/ScrollTrigger/Lenis/CSS keyframes), responsive breakpoints, and rich original high-fidelity imagery/mockups rather than static shells or placeholder sections.

## Library layout

```
library/
  websites/<id>/   # marketing / product sites (primary today)
  brands/<id>/     # identity systems
  logos/<id>/      # standalone marks
  systems/<id>/    # UI kits / token specimens
  components/<id>/ # modular web components / specimens
```

- **type** in catalog: `website` | `brand` | `logo` | `system` | `component`
- Cross-link related work with optional `projectId` / `related[]`
- Showcase app at repo root reads `data/catalog.json`

## Hosting (summary)

| | |
|---|---|
| Live | https://www.kanthi.in/mydesignlib/ (**paused** — Pages off; see `docs/OPERATIONS.md`) |
| Deploy | Push `main` → `.github/workflows/pages.yml` (disabled while Pages paused) |
| Privacy | `robots.txt` + noindex on all HTML |
| Analytics | `G-Z97ZD3EVSF` on all HTML |

Details, smoke checks, and “do not regress” list: **`docs/OPERATIONS.md`**.

## Stack defaults

- HTML + CSS (+ small vanilla JS). Google Fonts OK.
- Motion: CSS first; GSAP + ScrollTrigger or Lenis when the reference is motion-heavy.
- 3D: Three.js only if the design needs it.
- `prefers-reduced-motion: reduce` support when animating.
- Catalog UI: tag cloud shows top 8 (`TAG_PREVIEW=8`); cards show 2 tags (`CARD_TAGS=2`) — do not regress this without asking.

## Catalog categories (industry)

Use an existing category from `data/catalog.json` when possible:

`SaaS` · `Fintech` · `Sales` · `Studio` · `Travel` · `Services` · `Restaurant` · `Real Estate` · `Education` · `Wellness` · `Developer` · `Product` · `Agency`

## Naming

- Folder `id`: lowercase kebab or single word (`noirline`, `claybank`, `claret`).
- Display `name`: title case brand.
- Check `data/catalog.json` and `library/` for collisions before committing a name.

## Do not

- Commit real personal data or live API keys (GA measurement ID in HTML is intentional).
- Mention these agent rules in user-facing template copy.
- Leave items unregistered or with broken asset paths.
- Re-enable GitHub’s managed branch Pages deploy (Node 20 warning) without cause.
- Remove noindex / robots Disallow “for SEO”.

## Full procedure

When the user pastes a visual reference (X post, screenshot, scroll video, fragment, or branding board) or asks to ship a template from one, follow the skill for this agent: Grok uses **[`.grok/skills/template-from-ref/SKILL.md`](.grok/skills/template-from-ref/SKILL.md)**; Antigravity uses **[`.agents/skills/template-from-ref/SKILL.md`](.agents/skills/template-from-ref/SKILL.md)**.

The six aesthetic skills stay archived and must not be loaded: `.grok/archive/skills/` (`ship-template`, `design-system-first`, `anti-slop-frontend`, `clean-interface`, `premium-site`, `interface-craft`). Index: **`docs/SKILLS.md`**.

Hosting / deploy / privacy / analytics changes: follow **`docs/OPERATIONS.md`**. Product rules above still win.

## Repository working model (keep in mind)

- This is a **private-by-convention static design archive**, not a production application or public template marketplace. It remains publicly reachable by URL when Pages is enabled, so preserve robots/noindex controls and do not treat it as authenticated storage.
- The root showcase (`index.html` + `css/styles.css` + `js/app.js`) loads `data/catalog.json`. That catalog is the source of truth for cards, filters, detail modals, related-item links, and responsive iframe previews.
- Each item in `library/<type>/<id>/` is a self-contained deliverable. A new item needs a usable `index.html`, `preview.jpg`, original local assets, and a matching catalog record before it is complete.
- The intended contribution loop is: understand the reference → Omnia-format study (hub, replica, guidelines, landing, social, merch, reveal) → register → privacy/GA and audit → Caddy HTTP verification. Procedure: [`.grok/skills/template-from-ref/SKILL.md`](.grok/skills/template-from-ref/SKILL.md) on Grok, [`.agents/skills/template-from-ref/SKILL.md`](.agents/skills/template-from-ref/SKILL.md) on Antigravity. Do not load archived skills from `.grok/archive/skills/` or `~/.gemini/archive/skills/`.
- Keep root-site changes and item changes separate conceptually: a catalog/UI change affects the gallery; an item-folder change affects one deliverable. Use relative paths throughout because deployment is under `/mydesignlib/`.
- Pages and its workflow are intentionally paused. Do not enable or push for a deployment unless the user explicitly asks to ship live and the re-enable sequence in `docs/OPERATIONS.md` has been followed.
