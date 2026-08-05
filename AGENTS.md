# mywebtemplates — project rules

Personal static showcase of HTML/CSS/JS website templates derived from design references (X posts, videos, images, Framer/Webflow/Figma case studies).

## Product rules (always)

1. **Fictional rebrands only.** Never ship real brand names, logos, trademarks, client identities, or lookalike lockups from the reference. Invent a new brand (e.g. Nelta → Nordwerk, Solén → Noirline, Bohemian Research → Respondra, wawa → Ovara, River House → Claybank).
2. **Original assets only.** Use AI-generated images (`image_gen` / `image_edit`) or pure CSS/SVG/HTML UI mockups. Do not scrape client work, stock with visible watermarks, or copy proprietary media from the reference.
3. **Vanilla static for GitHub Pages.** One self-contained folder per template: `templates/<id>/index.html` + assets. No React/Vite/Next unless a free open stack is explicitly justified (rare). Prefer free libraries when the original used proprietary tools (Framer → GSAP/CSS/Three.js/Lenis as needed).
4. **Register every template** in `data/templates.json` with `id`, `name`, `description`, `tags`, `category`, `thumbnail`, `path`, `featured`, `date`.
5. **Brand audit before done.** Grep the new folder for original brand, designer handles, Framer/Webflow marketplace URLs, real client names, and competitor logos. Must be clean.
6. **HTTP verify.** Serve with `python3 -m http.server 8080` from repo root; confirm `200` for `index.html`, `preview.jpg`, and key assets.
7. **One complete template per reference URL** unless the user asks otherwise. Finish registration + audit + verify in the same turn when possible.

## Stack defaults

- HTML + CSS (+ small vanilla JS). Google Fonts OK.
- Motion: CSS first; GSAP + ScrollTrigger or Lenis when the reference is motion-heavy.
- 3D: Three.js only if the design needs it.
- `prefers-reduced-motion: reduce` support when animating.
- Catalog UI: tag cloud shows top 8 (`TAG_PREVIEW=8`); cards show 2 tags (`CARD_TAGS=2`) — do not regress this without asking.

## Catalog categories

Use an existing category from `data/templates.json` when possible:

`SaaS` · `Fintech` · `Sales` · `Studio` · `Travel` · `Services` · `Restaurant` · `Real Estate` · `Education` · `Wellness` · `Developer` · `Product` · `Agency`

## Naming

- Folder `id`: lowercase kebab or single word (`noirline`, `claybank`, `respondra`).
- Display `name`: title case brand.
- Check `data/templates.json` and `templates/` for collisions before committing a name.

## Do not

- Commit real personal data or live API keys.
- Mention these agent rules in user-facing template copy.
- Leave templates unregistered or with broken asset paths.

## Full procedure

When the user pastes a design URL or asks to ship a template from a reference, follow the **ship-template** skill:

`.grok/skills/ship-template/SKILL.md`
