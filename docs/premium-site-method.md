# Premium marketing site method (Bateshkaaa + community corpus)

Primary source: [Romario (@bateshkaaa) — X post 2079218516150862086](https://x.com/bateshkaaa/status/2079218516150862086)  
Captured for this repo: 2026-08-05  

**Skills:** `.grok/skills/premium-site/` · `anti-slop-frontend/` · `design-system-first/`  
**Full X corpus:** [`docs/ai-website-methods-corpus.md`](./ai-website-methods-corpus.md)  
Companion research: Anthropic [`frontend-design`](https://github.com/anthropics/skills/tree/main/skills/frontend-design), community [`ui-ux-pro-max`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)

## Thesis

Agencies charge $8k–$12k and multi-week process for marketing sites that AI tools can ship in an afternoon — **if** you stop prompting with vibes (“make it beautiful”) and instead ship **constraints**.

Default model taste looks like a $500 template:

- Inter / system sans as the display face  
- Purple gradients  
- Three equal feature cards  
- Centered-everything layouts  
- Emoji-as-icons, generic stock placeholders  

The “$10K look” comes from **constraints + references + separate polish passes**, not one mega-prompt.

## Pipeline (5 parts)

### Part 1 — Load the design brain (~15 min)

Install / enable design skills so the agent reads rules **before** inventing UI.

Original post (Claude Code):

1. Install Claude Code (`npm i -g @anthropic-ai/claude-code`)  
2. Drop skills into `.claude/skills/`:  
   - `frontend-design` from [anthropics/skills](https://github.com/anthropics/skills)  
   - A UI/UX ruleset (popular: `ui-ux-pro-max`)  
3. Restart; confirm with `/skills`

**In this repo (Grok Build):** use `.grok/skills/premium-site/` (this method) plus project rules in `AGENTS.md` and `ship-template`. Optionally mirror Anthropic frontend-design principles in the skill body.

Skills are folders with `SKILL.md`. No API keys required for the skill files themselves.

### Part 2 — Steal the direction (~20 min)

Adjectives fail (“make it premium”). **Screenshots work.**

1. Open Awwwards / Dribbble / live niche sites  
2. Search niche: “SaaS landing”, “portfolio”, “law firm”, etc.  
3. Pick **3** references (not 10 — more confuses the model)  
4. For each, screenshot: hero · one content section · footer → **9 images**  
5. Save as `ref-1.png` … (or attach paths)  
6. Prompt line (exact idea):

   > Match the typography scale, spacing rhythm, and motion of these references. **Do not copy the layouts.**

Without “do not copy,” models clone reference #1 (lawsuit-adjacent lookalike).

### Part 3 — The build prompt (5 blocks, one message)

Fill brackets; paste as **one** message:

| Block | Template |
|-------|----------|
| **Audience** | This site is for [freelance photographers charging $2K+ per shoot]. |
| **The 1 action** | Every page pushes toward [booking a call]. One CTA, repeated. |
| **References** | Use ref-1…ref-3 as the quality bar. |
| **Stack** | (Original post: Astro + Tailwind → Cloudflare Pages.) **This repo:** vanilla HTML/CSS/JS, self-contained `templates/<id>/`, GitHub Pages. |
| **Ban list** | Banned: purple gradients, emoji as icons, Inter as the display font, generic stock-photo placeholders, centered-everything layouts. |

Expect **~70%** on first pass. Nobody ships version 1 as final.

### Part 4 — Polish pass (1–2 hours — the $10K part)

Run **three separate messages**, in order. Do **not** combine (model does one dimension well and two badly):

1. **Typography only** — Review every heading and body size. Establish a strict type scale. Fix line-height and letter-spacing. Touch nothing else.  
2. **Spacing only** — Audit vertical rhythm section by section. Double whitespace where sections feel cramped. Touch nothing else.  
3. **Motion only** — Add scroll-reveal and hover states. Subtle. 200–300ms. Nothing bounces.

Then **mobile check**:

> Show me every page at 375px width and fix what breaks.

60%+ traffic is phone. Attach screenshots of anything that still feels wrong; describe the fix.

**Life hack:** for animation direction, send a reference site URL/screenshot and ask for something similar (not identical).

### Part 5 — Ship (~15 min, $0 hosting in original post)

Original: `git` → GitHub → Cloudflare Pages (`npm run build`, `dist`), custom domain.

**This repo:** register in `data/templates.json`, brand-audit, `python3 -m http.server 8080`, HTTP 200 on page + assets. Catalog is the “ship.”

## Realistic progression (from post)

| Milestone | Effort | Look |
|-----------|--------|------|
| Site 1 | ~6 hours | ~$3K |
| Site 3 | ~3 hours | ~$7K |
| Site 5 | ~2 hour pipeline | Agency-priced portfolio |

Agency sells process. Process was always one afternoon — **plus** polish discipline.

## Outcome mindset

Ship a **solid** site, not a perfect one. First version has rough edges (mobile, one off animation). Find one thing to improve each day. That is how good sites become great ones.

## Adaptation for mywebtemplates

| Original advice | Here |
|-----------------|------|
| Astro + Tailwind + Cloudflare | Vanilla static folder; free libs only when needed (GSAP/Lenis/Three) |
| Claude Code skills path | `.grok/skills/premium-site/` |
| Brand-new client site | Fictional rebrand only (`AGENTS.md`); original assets |
| One mega redesign | Prefer **versioned folders**: keep `templates/<id>/`, ship polish as `templates/<id>-v1/` (or `-v2`) so A/B comparison stays honest |
| Ban list | Enforce in skill + build prompt; also ban real trademarks / scraped media |
| Ship | `ship-template` checklist after polish |

## Ban list (default — extend per project)

- Purple gradients (and “AI SaaS purple” in general unless brief demands it)  
- Emoji as icons  
- Inter / Roboto / system UI as **display** face (body utility OK if intentional)  
- Generic stock placeholders / lorem-gradient cards standing in for work  
- Centered-everything cookie-cutter heroes  
- Three equal feature cards as the only content pattern  
- Bounce / elastic motion  
- Asking for typography + spacing + motion in **one** polish message  

## Type scale starter (enforce in Pass 1)

Define CSS variables and stick to them:

```css
:root {
  --text-xs: 0.75rem;    /* 12 */
  --text-sm: 0.875rem;   /* 14 */
  --text-base: 1rem;     /* 16 */
  --text-md: 1.125rem;   /* 18 */
  --text-lg: 1.25rem;    /* 20 */
  --text-xl: 1.5rem;     /* 24 */
  --text-2xl: 2rem;      /* 32 */
  --text-3xl: clamp(2.25rem, 4vw, 3.25rem);
  --text-display: clamp(2.75rem, 6vw, 4.5rem);
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-body: 1.6;
  --tracking-display: -0.03em;
  --tracking-label: 0.12em;
}
```

## Spacing rhythm starter (enforce in Pass 2)

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --section-y: clamp(4.5rem, 10vw, 7.5rem);
}
```

Prefer fewer, larger section paddings over dense equal cards.

## Motion starter (enforce in Pass 3)

- Scroll reveal: opacity + small translateY (12–20px), 200–300ms ease  
- Hover: color/border/transform ≤ 4px or opacity only  
- `prefers-reduced-motion: reduce` → disable transforms/opacity animations  
- No bounce, no spring, no multi-second hero loops unless the brief is motion-led  

## Versioning convention (this repo)

When applying this method to an **existing** catalog template:

1. **Do not overwrite** `templates/<id>/`  
2. Copy assets into `templates/<id>-v1/` (then `-v2` if needed)  
3. Register a new `data/templates.json` entry (`id`: `<id>-v1`, name e.g. `Atrium V1`)  
4. Description should note “premium-site polish of &lt;id&gt;” so the catalog comparison is clear  

## Checklist

- [ ] Audience + single CTA stated  
- [ ] 1–3 visual references (or explicit aesthetic plan from subject)  
- [ ] Ban list applied  
- [ ] First build accepted as ~70%  
- [ ] Typography-only pass  
- [ ] Spacing-only pass  
- [ ] Motion-only pass  
- [ ] 375px mobile pass  
- [ ] Brand audit (fictional names, original assets)  
- [ ] Registered + HTTP 200  

## Related methods (same problem, other posts)

See **`docs/ai-website-methods-corpus.md`** for the full index. Highlights folded into skills:

| Source | Idea | Skill |
|--------|------|-------|
| @PrajwalTomar_ | Taste-first; DS → template → skill → one-shot; stop blaming the model | `design-system-first` |
| @cloudxdev | modern-frontend-design skill + award landing prompt + AI Look checklist | `anti-slop-frontend` |
| @monokern | Extract design system from refs; export to code agent | `design-system-first` |
| @Info_sam_ai et al. | 7-step: blueprint → type → space → motion → case → trust → refs | `premium-site` Part 4–5 |
| @typakon4 | Don’t stack 10 design skills; route direction → mode → QA | corpus + skill routing |
| @AIandTechh87 | Goal-first brief (what site **does**) then refs and plan | `premium-site` Part 3 |
| @bateshkaaa (Yashica) | Skills + inspiration + micro-interactions + hierarchy | `premium-site` + `anti-slop-frontend` |
| @the_cyw | scroll-world skill for heavy motion landings | optional inspiration only |

### Recommended agent order

```
design-system-first → anti-slop-frontend → ship-template | premium-site build
  → premium-site polish (type → space → motion → mobile → trust)
  → brand audit + HTTP verify
```

## Test case in this repo

- Original: `templates/atrium/`  
- Polished: `templates/atrium-v1/`  
- Built with skill: `/premium-site` (2026-08-05)
