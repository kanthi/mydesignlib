# mydesignlib — project rules

Personal static design library: website templates, brand systems, logos, and UI specimens — derived from design references (X posts, videos, images, Framer/Webflow/Figma case studies) and fully rebranded.

## Product rules (always)

1. **Fictional rebrands only.** Never ship real brand names, logos, trademarks, client identities, or lookalike lockups from the reference. Invent a new brand (e.g. Nelta → Nordwerk, Solén → Noirline, Bohemian Research → Respondra, wawa → Ovara, River House → Claybank).
2. **Original assets only.** Use AI-generated images (`image_gen` / `image_edit`) or pure CSS/SVG/HTML UI mockups. Do not scrape client work, stock with visible watermarks, or copy proprietary media from the reference.
3. **Vanilla static for GitHub Pages.** One self-contained folder per item under `library/<type>/<id>/` (e.g. `library/websites/<id>/index.html` + assets). No React/Vite/Next unless a free open stack is explicitly justified (rare). Prefer free libraries when the original used proprietary tools (Framer → GSAP/CSS/Three.js/Lenis as needed).
4. **No search indexing.** Site is personal / private-by-convention. Keep root `robots.txt` as `Disallow: /`. Every HTML page (showcase + library items) must include:
   `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />`
   (and the matching `googlebot` meta). Do not add a sitemap or SEO markup meant for discovery.
5. **Register every item** in `data/catalog.json` with `id`, `type`, `name`, `description`, `tags`, `category`, `thumbnail`, `path`, `featured`, `date` (optional: `projectId`, `related`, `meta`).
6. **Brand audit before done.** Grep the new folder for original brand, designer handles, Framer/Webflow marketplace URLs, real client names, and competitor logos. Must be clean.
7. **HTTP verify.** Serve with `python3 -m http.server 8080` from repo root; confirm `200` for `index.html`, `preview.jpg`, and key assets.
8. **One complete deliverable per reference URL** unless the user asks otherwise. Finish registration + audit + verify in the same turn when possible.

## Library layout

```
library/
  websites/<id>/   # marketing / product sites (primary today)
  brands/<id>/     # identity systems
  logos/<id>/      # standalone marks
  systems/<id>/    # UI kits / token specimens
```

- **type** in catalog: `website` | `brand` | `logo` | `system`
- Cross-link related work with optional `projectId` / `related[]`
- Showcase app at repo root reads `data/catalog.json`

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

- Folder `id`: lowercase kebab or single word (`noirline`, `claybank`, `respondra`).
- Display `name`: title case brand.
- Check `data/catalog.json` and `library/` for collisions before committing a name.

## Do not

- Commit real personal data or live API keys.
- Mention these agent rules in user-facing template copy.
- Leave items unregistered or with broken asset paths.

## Full procedure

When the user pastes a design URL or asks to ship a **website** template from a reference, follow the **ship-template** skill:

`.grok/skills/ship-template/SKILL.md`
