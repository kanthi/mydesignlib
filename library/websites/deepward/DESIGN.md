# DESIGN — Deepward

## Overview
- Audience: CISO, SOC lead, and incident-response lead at a mid-market or enterprise org that already owns tools — and still gets surprised.
- Single CTA: Book a threat walkthrough (`Reveal the threat` in the hero; same verb in the close).
- Emotion: Calm precision. The gift is already inside the walls.
- Create this feeling through:
  - Cool white **prospectus shell** on a slate-blue field (not a dark SOC dashboard)
  - One accent (`action-primary` #2F5BFF) on the nav CTA and labels only
  - Hairline grid, not cards-as-decoration
  - Instrument Serif italic used only for the *hidden* clause of a headline
  - Blue technical wireframe plates as the only photography language
  - High-contrast ink on paper; almost no shadow except the shell lift

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Editorial prospectus + blueprint metaphor
- Signature element: Steel-blue wireframe Trojan horse (and sister plates: crate, cutaway, lattice) inside a white document shell

## Colors (semantic)
- surface-page: #EEF2F8 — field behind the shell only
- surface-paper: #FFFFFF — the document
- surface-tint: #F4F8FF — art wells and selected rows
- text-primary / ink: #1A2744
- text-secondary / muted: #6B7A99
- text-soft: #8B97B3 — eyebrow, serif emphasis
- border-default / line: #E6EBF4
- action-primary / blue: #2F5BFF — nav CTA, section labels, focus
- action-primary-hover / blue-deep: #1E3A8A
- text-on-accent: #FFFFFF
- Usage rules:
  - `action-primary` is never a page background or a large decorative wash
  - Primary in-page buttons use `ink`, not blue — blue is reserved for the persistent nav CTA
  - Stats and product chrome stay ink / line / tint; no neon

## Typography
- Display / UI: Plus Jakarta Sans — H1–H3, nav, buttons, numbers
- Emphasis: Instrument Serif italic — only the *beyond / inside / invited* clause
- Scale: display clamp(2.2rem, 4.4vw, 3.15rem) / 2xl 1.75rem / xl 1.35rem / lg 1.05rem / base 1rem / sm 0.9rem / xs 0.72rem
- Rules: H1 weight 800, tracking -0.035em, leading 1.08, `text-wrap: balance`. Body leading 1.6, measure ≤42ch for leads, ≤62ch for prose. Labels 0.72rem / 700 / 0.1em / uppercase. Tabular nums on metrics.

## Space
- wrap: min(1120px, 100% - 1.5rem)
- section-y: clamp(2.5rem, 5vw, 3.5rem) inside the shell (document, not marketing-billboard)
- gap scale: 8 / 12 / 16 / 24 / 40
- Shell margin: 1.25rem auto 2.75rem; radius 14px (outer). Inner cards 10px (concentric: ~14 − 4).

## Layout and responsiveness
### Compact (< ~640px)
- Single column; page margin via wrap. Nav collapses behind a 58px toggle.
- Hero stacks copy then art. Stats: thesis full-bleed, then 2-up metrics.
- Process, case, and product mock stack. Footer columns collapse.
### Medium (~640–1023px)
- Stats 2×2. Capability rows stay one column. Case may stay stacked.
### Expanded (≥ ~1024px)
- Nav as a 6-cell hairline grid. Hero 1.05fr / 1fr. Stats 1.2fr + 3 metrics.
- Capability rows: index + copy + note. Product mock + case split allowed.

## Shape & elevation
- Philosophy: document, not app. Sharp-ish 6px buttons; 10px inner panels; 14px shell.
- One soft elevation on the shell only (`0 30px 80px` ink @ 8%). No card drop-shadows.

## Components
### Buttons
- Primary (in-page): `ink` fill, `text-on-accent`, radius 6px, min-height 44px. Hover: #0F172A. Active: scale(0.97).
- Outline: paper + `line` border. Never for the persistent nav CTA.
- Nav CTA: `action-primary` fill, square to the nav cell (no radius). Hover: `action-primary-hover`.
- One primary per band. Labels start with a verb.

### Nav
- Segmented hairline grid inside the shell. Logo + 4 links + blue CTA.
- Compact: hamburger; open state stacks full-width rows. Escape / resize / link click close it.
- Active/hover: ink on `#F8FAFF`. Focus-visible: 2px `action-primary` offset 3px.

### Cards / feature blocks
- Hairline panels, no shadow. Prefer numbered editorial rows over a 3-equal-card grid.
- Do not use three equal cards as the only capability pattern.

### Product mock (timeline)
- CSS-only. Exact labels, no generated screenshot type. Tint well, hairline rows, tabular time stamps.

### Inputs / forms
- If a form appears: 44px fields, label above, focus ring `action-primary`. This page uses mailto + anchors, not a live form.

## Motion
- Purpose: confirm press and settle the document, not decorate the horse.
- Duration 220ms; ease `cubic-bezier(.22, 1, .36, 1)`. Hover lift ≤2px on buttons.
- Reduced-motion: no transform, no smooth-scroll.

## Iconography
- One set: 1.6px stroke inline SVG, `currentColor` or ink/blue only.
- Sizes 22 (logo) / 16 (rows). No emoji. No mixed fill/outline in one region.

## Content
- Sentence case. Buttons: `Reveal the threat`, `Book a walkthrough`, `Read the brief`.
- Metaphor is Trojan-as-method, not mythology brand: no Laocoön, Odyssey, or real vendor names.
- Fictional proof only (e.g. Northglass Exchange). Metrics in the strip are industry-typical, labeled as such.
- No lorem. No “seamless / unleash / next-gen.”

## Ban list
- Inter/Roboto as display, purple gradients, emoji icons, centered-everything-only
- Three equal cards as the sole feature pattern
- Dark neon “cyber” chrome, matrix rain, skulls, padlock clichés
- Real trademarks (CrowdStrike, Mandiant, Palo Alto, Microsoft, etc.)
- Source product names (Laocoön, Odyssey) and scraped media

## Accessibility
- Ink on paper and white on `action-primary` meet contrast
- Visible focus; tap targets ≥44px on compact
- Reduced motion honored
