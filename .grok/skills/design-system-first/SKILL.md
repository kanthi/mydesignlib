---
name: design-system-first
description: >
  Establish taste and a concrete design system (tokens, type, palette, radii, elevation,
  signature) before writing page HTML. Use when the user says design system first,
  taste-first, tokens before code, DESIGN.md, extract design system from references,
  Claude Design handoff, stop AI template look at the source, or /design-system-first.
  Run before ship-template or premium-site builds; complements anti-slop-frontend.
---

# Design system first (taste before code)

Synthesized from:

- [@PrajwalTomar_ taste-first / DS → template → skill → one-shot](https://x.com/PrajwalTomar_/status/2082081647252685163)  
- [@monokern design system extract → export to code](https://x.com/monokern/status/2083610099549954330)  
- [@alexisfchpro real-world design system .md before prompt](https://x.com/alexisfchpro/status/2081404948403683792)  
- Notes: `../premium-site/references/prajwal-taste-first.md`, `monokern-design-system.md`

**Core rule:** “Make it premium” fails. **Taste is input**, not a hope. Same model produces purple template or studio work depending on what you feed it.

## When to use

| Intent | Action |
|--------|--------|
| Greenfield template | Produce tokens (+ optional DESIGN.md) **then** build |
| Versioned polish of existing template | Re-derive system from subject; don’t only tweak CSS ad hoc |
| User pasted 1–3 reference images/URLs | Extract system; **do not copy layouts/brands** |
| Agent about to freehand a landing | Interrupt: run this skill first |

## Pipeline

### Step 1 — Cultivate taste (inputs)

Gather one of:

- 1–3 reference screenshots/URLs (hero + section + footer), or  
- Subject vernacular (e.g. architecture → stone, linen, charcoal, serif display), or  
- Existing brand tokens if polishing a known template  

Prompt constraint (always):

> Match typography scale, spacing rhythm, and motion of references. **Do not copy layouts or trademarks.**

Adjectives alone (“premium”, “clean”, “modern”) are **invalid** as sole direction.

### Step 2 — Extract / invent the system

Write a compact system the agent will obey. Prefer a short block at the top of `index.html` CSS **and** optional `templates/<id>/DESIGN.md` for multi-file work.

#### Required fields

```markdown
# DESIGN — <Brand>

## Audience & one job
- Audience: …
- Single CTA: …
- Emotion: …

## Aesthetic commitment
- Name: (e.g. Editorial organic / Soft minimal tech)
- Signature element: (the one thing people remember)

## Typography
- Display: <family> — use for H1/H2/wordmark
- Body: <family>
- Label/utility: <family or body>
- Scale: display / 3xl / 2xl / xl / lg / base / sm / xs (list rem or clamp)

## Color (4–6 hex, named)
- paper / ink / muted / line / accent / (optional dark band)

## Space
- section-y, wrap max-width, gap scale (4/6/8/12/16/24)

## Shape & elevation
- radius philosophy (e.g. 2px sharp editorial vs 999px pills only on CTAs)
- shadow: none | one soft elevation — not on every card

## Motion
- duration 200–300ms, ease curve
- reveal: opacity + translateY 12–20px
- reduced-motion: disable

## Ban list
- Inter/Roboto as display, purple gradients, emoji icons, centered-everything, 3 equal cards only, real trademarks, scraped media
```

### Step 3 — CSS tokens (implementable)

Emit a ready `:root` block matching the DESIGN fields. Example skeleton:

```css
:root {
  --font-display: "…", serif;
  --font-body: "…", sans-serif;
  --ink: #…;
  --paper: #…;
  --muted: #…;
  --line: #…;
  --accent: #…;
  --dark: #…;
  --text-display: clamp(2.75rem, 6vw, 4.5rem);
  --text-3xl: clamp(2.25rem, 4vw, 3.25rem);
  --text-base: 1rem;
  --leading-body: 1.65;
  --section-y: clamp(4.5rem, 10vw, 7.5rem);
  --wrap: min(1180px, 100% - 2.75rem);
  --radius: 2px;
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Load Google Fonts / OFL only. No Inter as display.

### Step 4 — Hand off (do not skip)

After the system exists:

1. Run **anti-slop-frontend** checklist against the system  
2. Build with **ship-template** (from URL) or **premium-site** Part 3 (from brief)  
3. Polish with **premium-site** Part 4 (type → space → motion → mobile) **without changing the token names** unless correcting a bug  

## Versioned upgrades

```bash
cp -R templates/<id> templates/<id>-v1
# write DESIGN.md + new tokens into v1 only
```

Never overwrite a shipped catalog folder when experimenting.

## Anti-patterns

- Jumping to full page HTML with only “SaaS landing, make it nice”  
- Ten aesthetic adjectives, zero hex values  
- Copying a reference site’s layout or brand  
- Stacking five design skills that redefine tokens mid-build  
- Design system that is just Inter + indigo + 8px radius  

## Done checklist

- [ ] Audience + single CTA written  
- [ ] One aesthetic name + signature element  
- [ ] Display/body fonts chosen (not system display)  
- [ ] 4–6 named hex colors  
- [ ] Type + space + motion tokens  
- [ ] Ban list present  
- [ ] Tokens ready to paste into `index.html`  
- [ ] Next skill identified (ship-template or premium-site build)  
