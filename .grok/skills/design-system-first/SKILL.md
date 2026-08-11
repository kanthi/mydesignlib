---
name: design-system-first
description: >
  Establish taste and a concrete design system (semantic tokens, type, palette, radii,
  elevation, components, responsive behaviour, motion/icons/content) before writing page
  HTML. Use when the user says design system first, taste-first, tokens before code,
  DESIGN.md, design.md mistakes, extract design system from references, Claude Design
  handoff, stop AI template look at the source, or /design-system-first. Run before
  ship-template or premium-site builds; complements anti-slop-frontend.
---

# Design system first (taste before code)

Synthesized from:

- [@PrajwalTomar_ taste-first / DS → template → skill → one-shot](https://x.com/PrajwalTomar_/status/2082081647252685163)  
- [@monokern design system extract → export to code](https://x.com/monokern/status/2083610099549954330)  
- [@alexisfchpro real-world design system .md before prompt](https://x.com/alexisfchpro/status/2081404948403683792)  
- **DESIGN.md anti-mistakes** (UX Planet / Google Labs framing): [article mirror](https://freedium-mirror.cfd/uxplanet.org/7-design-md-mistakes-that-make-ai-generated-ui-worse-9ec2dfcc44cd) → full notes in `references/method-design-md-7-ai-mistakes.md` · human doc [`docs/method-design-md-for-ai.md`](../../../docs/method-design-md-for-ai.md)  
- Notes: `../premium-site/references/prajwal-taste-first.md`, `monokern-design-system.md`

**Core rule:** “Make it premium” fails. **Taste is input**, not a hope. A DESIGN.md only improves AI UI if it is **actionable** (semantic roles, components, responsive *behaviour*, short rules) and **actually loaded** before code — not a mood board of adjectives.

## When to use

| Intent | Action |
|--------|--------|
| Greenfield template | Produce tokens + DESIGN.md **then** build |
| Versioned polish of existing template | Re-derive system from subject; don’t only tweak CSS ad hoc |
| User pasted 1–3 reference images/URLs | Extract system; **do not copy layouts/brands** |
| Agent about to freehand a landing | Interrupt: run this skill first |
| “We have a DESIGN.md but UI still looks generic” | Audit against **7 mistakes** below; rewrite weak sections |

## Pipeline

### Step 1 — Cultivate taste (inputs)

Gather one of:

- 1–3 reference screenshots/URLs (hero + section + footer), or  
- Subject vernacular (e.g. architecture → stone, linen, charcoal, serif display), or  
- Existing brand tokens if polishing a known template  

Prompt constraint (always):

> Match typography scale, spacing rhythm, and motion of references. **Do not copy layouts or trademarks.**

Adjectives alone (“premium”, “clean”, “modern”) are **invalid** as sole direction.

### Step 2 — Write DESIGN.md that agents can execute

Path: `library/<type>/<id>/DESIGN.md` (e.g. `library/websites/<id>/DESIGN.md`).  
Also emit matching CSS `:root` tokens in `index.html` (or shared CSS).

**Target length:** focused rules, prefer **≤ ~200 lines**. Rules over essays. Delete dead tokens.

#### 7 DESIGN.md mistakes (never ship these)

| # | Mistake | Fix |
|---|---------|-----|
| 1 | **Mood board** (“clean, modern, premium”) | Overview = one emotion sentence + *Create this feeling through:* concrete token-backed rules |
| 2 | **Raw values only** (`blue`, `gray-900`) | **Semantic** names + usage bullets (what the token *does*) |
| 3 | **Foundations only** | Document high-frequency **components** (anatomy, variants, restrictions) |
| 4 | **No responsive behaviour** | Breakpoints as **layout logic changes**, not bare px lists |
| 5 | **No motion / icons / content** | Short sections for each (duration, icon set, tone of voice) |
| 6 | **Too long / contradictory** | Reusable decisions only; one priority when rules conflict |
| 7 | **File not loaded** | Before any UI HTML/CSS: **read** DESIGN.md; do not assume filename magic |

**Overview test:** *Could two designers interpret this rule completely differently?* If yes → add decisions.

#### Required template (marketing site — compact)

```markdown
# DESIGN — <Brand>

## Overview
- Audience: …
- Single CTA: …
- Emotion: … (one phrase)
- Create this feeling through:
  - … (token-backed rules: contrast, accent use, spacing, shadows, type scale, ban notes)

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: (e.g. Editorial organic / Soft minimal tech)
- Signature element: (the one thing people remember)

## Colors (semantic)
- surface-page / paper: #…
- text-primary / ink: #…
- text-secondary / muted: #…
- border-default / line: #…
- action-primary / accent: #…  — only for the primary action (or one bold accent)
- status-danger (optional): #… — destructive / errors only, never decorative
- Usage rules: (1–4 bullets)

## Typography
- Display: <family> — H1/H2/wordmark
- Body: <family>
- Label/utility: <family or body>
- Scale: display / 3xl / 2xl / xl / lg / base / sm / xs (rem or clamp)
- Rules: measure, line-height, tracking for display vs body

## Space
- section-y, wrap max-width, gap scale (4/6/8/12/16/24)
- Dense UI uses tighter steps; marketing sections use section-y

## Layout and responsiveness
### Compact (< ~640px)
- Single column; page margin …; nav behaviour …; stack CTAs (primary last)
### Medium (~640–1023px)
- …
### Expanded (≥ ~1024px)
- max width …; margins …; multi-column / sticky patterns allowed if designed

## Shape & elevation
- radius philosophy (sharp editorial vs pills only on CTAs)
- shadow: none | one soft elevation — not on every card

## Components (by frequency — be precise here)
### Buttons
- Primary: one per view; size; radius token; no dual primaries
- Secondary: border/ghost; never for destructive confirm
- Destructive (if any): status-danger; verb label (“Delete …”), not “Confirm”
### Nav
- Desktop vs compact; active/hover; logo + primary CTA placement
### Cards / feature blocks
- Anatomy; max density; media ratio; when *not* to use 3 equal cards
### Inputs / forms (if present)
- height, label position, error text pattern

## Motion
- Purpose: state change, not decoration
- duration 200–300ms (marketing) or 160–240ms (product UI); ease curve
- reveal: opacity + translateY ≤20px
- reduced-motion: opacity only or off

## Iconography
- One set (inline SVG / named library); stroke weight; sizes (e.g. 20 / 16)
- No emoji as icons; no mixed filled/outline in one region
- Unfamiliar actions need labels

## Content
- Sentence case; buttons start with a verb
- No lorem; no Yes/No/OK/Submit when a specific label exists
- Fictional brand only; no real trademarks (`AGENTS.md`)

## Ban list
- Inter/Roboto as display, purple gradients, emoji icons, centered-everything only,
  3 equal cards only, real trademarks, scraped media, (project-specific bans)

## Accessibility
- Text/icon contrast on primary surfaces
- Visible focus; tap targets ≥44px on touch layouts
- Reduced motion honored
```

For multi-page product UI or `library/systems/`, expand toward the full outline in `references/method-design-md-7-ai-mistakes.md` (interaction states, elevation scale, multi-theme, maintenance).

### Step 3 — CSS tokens (implementable)

Emit a ready `:root` block matching **semantic** DESIGN names. Example skeleton:

```css
:root {
  --font-display: "…", serif;
  --font-body: "…", sans-serif;
  --surface-page: #…;   /* paper */
  --text-primary: #…;   /* ink */
  --text-secondary: #…; /* muted */
  --border-default: #…; /* line */
  --action-primary: #…; /* accent — sparingly */
  --status-danger: #…;
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
Alias short marketing names (`--ink`, `--paper`) only if DESIGN.md defines them as synonyms of semantic roles.

### Step 4 — Hand off (do not skip) — Mistake 7

Creating DESIGN.md **does not** load it into the agent. Before building or editing UI:

1. **Read** `library/<type>/<id>/DESIGN.md` (and existing components)  
2. Reuse tokens and component rules; do not invent a second palette mid-build  
3. Run **anti-slop-frontend** checklist against the system  
4. Build with **ship-template** (from URL) or **premium-site** Part 3  
5. Polish with **premium-site** Part 4 (type → space → motion → mobile) **without renaming tokens** unless fixing a bug  
6. Report conflicts between DESIGN.md and production CSS  

Optional validation (schema-friendly files):

```bash
npx @google/design.md lint library/websites/<id>/DESIGN.md
```

Wire project memory when using Claude Code:

```markdown
Follow the design system in @library/websites/<id>/DESIGN.md
Before UI work: read DESIGN.md, reuse tokens/components, check responsive + a11y.
```

## Versioned upgrades

```bash
cp -R library/websites/<id> library/websites/<id>-v1
# write DESIGN.md + new tokens into v1 only
```

Never overwrite a shipped catalog folder when experimenting.

## Anti-patterns

- Jumping to full page HTML with only “SaaS landing, make it nice”  
- Ten aesthetic adjectives, zero hex values or usage rules  
- Palette of `blue` / `gray-500` with no roles  
- Tokens without button / nav / card rules  
- Breakpoints listed without layout behaviour  
- Copying a reference site’s layout or brand  
- Stacking five design skills that redefine tokens mid-build  
- Design system that is just Inter + indigo + 8px radius  
- 1,000-line DESIGN.md full of repeated principles  
- Writing DESIGN.md then never reading it during the build  

## Done checklist

- [ ] Overview: emotion + *create this feeling through* rules (not adjectives alone)  
- [ ] Audience + single CTA  
- [ ] One aesthetic name + signature element  
- [ ] Semantic colors (4–8) + usage bullets  
- [ ] Display/body fonts chosen (not system display)  
- [ ] Type + space + motion tokens  
- [ ] Layout behaviour for compact / medium / expanded  
- [ ] Components: at least buttons + nav + primary content block  
- [ ] Iconography + content tone (even if short)  
- [ ] Ban list + a11y basics  
- [ ] DESIGN.md ≤ ~200 lines or progressive disclosure for deep tables  
- [ ] Tokens ready to paste into `index.html`  
- [ ] Build step will **read** DESIGN.md before markup  
- [ ] Next skill identified (ship-template or premium-site build)  
