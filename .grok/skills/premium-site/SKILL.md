---
name: premium-site
description: >
  Build or upgrade a marketing site to a non-template “$10K” level using a multi-source
  constraint pipeline (Bateshkaaa + community taste-first methods): design brain, references,
  5-block build, separate typography/spacing/motion polish, mobile, trust sweep. Use when
  the user says premium site, polish this template, $10K look, agency quality, upgrade
  template, not template-looking, ban list redesign, versioned polish, multi-pass website,
  or /premium-site. Load design-system-first and/or anti-slop-frontend when starting cold;
  load ship-template for new designs from a URL.
---

# Premium site (constraint pipeline)

## Sources (read corpus for full links)

Master index: `docs/ai-website-methods-corpus.md`  
Primary: [@bateshkaaa constraint pipeline](https://x.com/bateshkaaa/status/2079218516150862086)  
Also absorbed: Prajwal taste-first · CloudAI-X anti-slop · monokern DS handoff · 7-step framework · skill routing · Sam AI goal-first brief · Anthropic frontend plan gate · multi-expert role lenses · interface-craft micro pass  

Reference pack: `references/*.md`

**Core rule:** models default to Inter/system sans, purple gradients, 3 feature cards, centered-everything. Fix with **constraints + taste inputs**, not vibes.

Always respect root `AGENTS.md` (fictional rebrand, original assets, vanilla static).

## Skill routing (do not stack everything)

```
design-system-first     → tokens / DESIGN + uniqueness plan (if cold start)
anti-slop-frontend      → ban list + aesthetic commitment + copy craft
premium-site Part 3–4   → build + polish   OR  ship-template then Part 4
interface-craft         → micro feel audit (optional but recommended)
premium-site Part 5     → ship (catalog, audit, HTTP)
```

Calling every design skill at once averages contradictions ([skill-routing](references/skill-routing.md)).

## When to use

| User intent | Action |
|-------------|--------|
| New site from brief/refs | DS-first (optional) → full Parts 1–5 |
| “Make this template not look AI” | Versioned upgrade + Parts 3–4 |
| After `ship-template` first pass | Part 4 polish only |
| Compare old vs new | Keep original; ship `<id>-v1` |

## Versioned upgrades

**Never overwrite** a shipped template when testing polish.

1. Copy `library/websites/<id>/` → `library/websites/<id>-v1/`  
2. Apply pipeline to **v1** only  
3. Register (`id`: `<id>-v1`, name: `<Name> V1`)  
4. Description: premium-site polish of `<id>`  

## Part 1 — Design brain (before any CSS)

### Prefer design-system-first when cold

If no tokens exist, produce them first (`/design-system-first`). Otherwise internalize:

#### Frontend-design principles (condensed)

- Hero is a **thesis**, not badge + centered H1 + two buttons  
- Typography carries personality — deliberate display + body pairing  
- Structure encodes meaning; don’t number non-sequences  
- One **signature** element; everything else disciplined  
- Avoid default AI clusters unless briefed: cream+terracotta; black+acid green; broadsheet  

#### Default ban list

- Purple gradients / AI SaaS purple  
- Emoji as icons  
- Inter, Roboto, bare system-ui as **display**  
- Generic stock / gradient fake project cards  
- Centered-everything with no editorial asymmetry  
- Bounce / elastic motion  
- Combining type + spacing + motion in **one** edit pass  

#### Repo stack

- `library/websites/<id>/index.html` + assets  
- Google Fonts / OFL  
- CSS first; GSAP/Lenis only if motion-heavy  
- `prefers-reduced-motion` when animating  
- No React/Vite/Next for a landing page  

## Part 2 — Direction (references)

Adjectives fail. Screenshots / subject vernacular work.

1. Infer niche from template or brief  
2. 1–3 refs max (Bateshkaaa: 3 sites × hero/section/footer) — more confuses  
3. Or aesthetic plan grounded in subject materials  
4. Always: **Match type scale, spacing rhythm, and motion. Do not copy layouts or brands.**

## Part 3 — Five-block brief (+ goal-first)

```
Audience: This site is for [specific buyer + context].
The 1 action: Every section pushes toward [one CTA]. One primary CTA, repeated.
References: [paths or aesthetic plan]. Do not copy layouts.
Stack: Vanilla HTML/CSS/JS in library/websites/<id>/, static. No CMS.
Ban list: purple gradients, emoji icons, Inter/system as display, generic stock placeholders, centered-everything, real trademarks, scraped media.
```

Also set fictional brand (if new), category/tags.  
Build ~70% complete structure first — all sections, real copy, real type, mobile nav if needed.

### Extended structure (7-step / award mode)

When aiming higher, ensure sections cover: signature blueprint · anti-sameness type · breathing room · purposeful motion · case-study presentation · trust signals · reference anchor. See `references/seven-step-framework.md` and award prompt notes.

## Part 4 — Polish (separate passes)

**In order.** Each pass may only change its dimension.

### Pass 1 — Typography only

Strict type scale variables · display/body/label · line-height · letter-spacing · kill size sprawl · **nothing else**

### Pass 2 — Spacing only

`--section-y` · double cramped whitespace · consistent gaps · measure max-width · **nothing else**

### Pass 3 — Motion only

Scroll-reveal 200–300ms · hover ≤4px · no bounce · reduced-motion · **nothing else**

### Pass 4 — Mobile (375px)

Overflow, nav, stacks, tap targets, CTA visibility  

### Pass 5 — Trust signal sweep (from 7-step)

Remove amateur credibility gaps: vague claims, broken contact, emoji icons, placeholder lorem, fake “logo clouds” of real brands  

If user attaches a screenshot of a problem: fix that region only.

### Optional — Role lenses (multi-expert critique)

When stuck or aiming higher, run **one lens per pass** (do not average all at once):

| Lens | Ask |
|------|-----|
| Typography | Hierarchy, pairing, measure, tracking — type only |
| Breathing room | Section rhythm, cramped clusters — space only |
| Motion purpose | What motion *explains* vs decorates |
| Trust authenticity | Fake metrics, real-brand logos, vague claims |
| Reference gap | What craft from refs is still missing (not layouts) |

Maps to `references/seven-step-framework.md`.

### Pass 6 — Craft (or run `/interface-craft`)

Micro feel after macro polish: concentric radii, hit areas, icon weight, tabular-nums, press/focus states, no `transition: all`. Prefer the dedicated skill for structured quick/full review.

## Part 5 — Ship

1. `preview.jpg` present  
2. `data/catalog.json` entry (`library/websites/<id>/` paths)  
3. Brand audit  
4. HTTP 200 on page + preview  
5. Summary: audience, CTA, type/space/motion/craft deltas, old vs v1 URLs when versioning  

## Design tokens (inject early)

```css
:root {
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-md: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: clamp(2.25rem, 4vw, 3.25rem);
  --text-display: clamp(2.75rem, 6vw, 4.5rem);
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-body: 1.65;
  --tracking-display: -0.03em;
  --tracking-label: 0.14em;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --section-y: clamp(4.5rem, 10vw, 7.5rem);
  --wrap: min(1120px, 100% - 2.5rem);
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 240ms;
}
```

## Anti-patterns

- “Make it more premium” with no ban list or scale  
- One pass rewriting type + layout + motion  
- Overwriting the only copy of a catalog template  
- Inter + purple + 3 cards after loading this skill  
- Loading 5+ design skills that redefine tokens mid-build  

## Done checklist

- [ ] Audience + single CTA  
- [ ] Ban list respected  
- [ ] Distinctive font pairing  
- [ ] Strict type scale in use  
- [ ] Generous section rhythm  
- [ ] Subtle motion + reduced-motion  
- [ ] Trust sweep clean  
- [ ] Craft pass or `/interface-craft` considered  
- [ ] 375px usable  
- [ ] Versioned path if upgrade  
- [ ] Registered + audited + HTTP 200  
