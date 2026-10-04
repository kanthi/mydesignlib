# DESIGN — Asterloop

## Overview
- Audience: small operations teams stitching together repetitive work across tools.
- Single CTA: Map a workflow.
- Emotion: quiet command over a busy system.
- Create this feeling through a layered starfield horizon, a single luminous routing diagram, and precise operational language. Keep glow inside the hero art; body sections return to pale neutral surfaces.

## Source of truth
- This file and CSS `:root` in `index.html`; code wins if they diverge.

## Aesthetic commitment
- Name: Orbital operations.
- Signature element: the Signal Path, a branching constellation route through a modular automation engine, set over original generated horizon artwork.

## Colors (semantic)
- `surface-night`: #090B20 — hero and dark feature bands; never use for every section.
- `surface-paper`: #F4F3F8 — quiet reading surfaces.
- `surface-card`: #FFFFFF — workflow cards and controls.
- `text-primary`: #17172A — primary copy on light surfaces.
- `text-on-night`: #F8F7FF — hero and dark-band copy.
- `text-muted`: #77758D — secondary copy; never for small text on dark.
- `action-primary`: #5E53EA — key actions and active route node only.
- `signal-cyan`: #68DDF4 — connected state and diagram accents only.
- `border-default`: #E4E2ED — separators and card edges.
- Use aurora gradients only as large illustration lighting; never behind body copy. Keep the horizon image darker behind headline and node labels.

## Typography
- Display: Space Grotesk, 600 — hero 4.6–7.2rem, tight 0.96 line-height, negative tracking.
- Body: DM Sans — body 1rem/1.65; lead 1.2rem/1.55.
- Utility: DM Sans 600 — 0.72rem uppercase labels, 0.12em tracking.
- Keep paragraphs under 62ch; headings are sentence case.

## Space
- 4px base; UI steps 8/12/16/24/32/48; section-y `clamp(5rem, 10vw, 9rem)`.
- Content wrap `min(1200px, 100% - 3rem)`; hero diagram uses viewport width beyond text measure.

## Layout and responsiveness
- Compact (<680px): nav collapses to wordmark + menu toggle; hero statement left-aligns; route nodes stack above engine; tabs scroll horizontally; all grids single-column.
- Medium (680–1023px): two-column example grid; diagram may wrap into a vertical path; use 2.5rem page gutters.
- Expanded (≥1024px): 1200px wrap; hero has centered message over a wide signal path; examples use asymmetric feature layout.

## Shape and elevation
- Controls use 999px pills. Cards use 18px radius; diagram nodes use 14px. Thin borders before shadows.
- One soft shadow for floating nav and workflow cards; no repeated glow on content cards.

## Components
### Buttons
- Primary: `action-primary`, pill, white label; arrow icon; 48px high. Hover lifts 2px and brightens; focus has 3px cyan outline; disabled opacity 0.5.
- Secondary: transparent border/ghost; never compete with primary in hero.
### Nav
- Floating glass-white capsule on night; logo, section links, one CTA. Active/hover underlines; keyboard focus visible. Mobile menu has `aria-expanded` state.
### Signal Path
- One engine hub connects labeled input/output modules via thin luminous SVG paths. Route pulse runs once on scroll; node hover brightens its own connection. No random looping motion.
### Workflow cards
- Two contrasting layouts, not a row of equal feature tiles: wide lead-routing story and narrow closeout story. Use compact stat rows, real labels, and UI snippets.
### Inputs
- No form; CTA links to a fictional contact email.

## Motion
- State transitions 220ms, `cubic-bezier(.2,.8,.2,1)`; reveal uses opacity + translateY 16px.
- Signal pulse completes within 1.6s and runs once. Pointer parallax is limited to 4px and disabled on touch.
- Reduced motion: no parallax, no pulse/reveal translation; content remains visible.

## Iconography and content
- Inline SVG, 1.7px stroke, 18/20px. No emoji.
- Voice: capable, plain, and specific; buttons start with verbs. Fictional proof only, labeled sample where needed.

## Ban list and accessibility
- No generic purple gradient page, no 3 equal cards, no glass UI outside the hero navigation, no fake recognizable brand marks, no scraped imagery.
- Visible focus, minimum 44px touch targets, semantic landmarks, alt text for meaningful diagrams, sufficient contrast, reduced-motion support.
