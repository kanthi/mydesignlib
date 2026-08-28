# DESIGN — Avenlo

## Overview

- Audience: small revenue teams that need a clear, shared view of pipeline work.
- Single CTA: **Build your pipeline**.
- Emotion: energetic operational calm.
- Create this through a spacious periwinkle canvas, warm paper content bands, a sharply framed black product section, and a vivid cobalt action color used only for movement and decisions.

## Source of truth

This document and the `:root` tokens in `index.html` are the system. The implementation wins if they conflict.

## Aesthetic commitment

- Name: **Tinted ledger**.
- Signature element: a dense-but-legible revenue board that layers chart paper, status marks, and guided callouts over a quiet page.
- Editorial cue: a small, numbered field-guide marker grounds the hero in the working-notes metaphor; it is supporting metadata, never a second headline.
- The page borrows the reference’s high-contrast light/dark rhythm, not its brand, words, composition, or product UI.

## Colors

- `surface-lilac`: `#e8ebff` — hero and optimistic product moments.
- `surface-paper`: `#fffefa` — reading and pricing space.
- `surface-ink`: `#0b0b10` — conversion and proof zone.
- `text-primary`: `#11121a` — headings and UI labels.
- `text-muted`: `#5e6270` — supporting copy only.
- `line`: `#d9dced` — quiet grouping and table structure.
- `action-primary`: `#2454ff` — primary CTAs, active controls, selected data only.
- `highlight`: `#d7fb70` — labels and low-volume emphasis; never an entire page surface.

Do not use a gradient. Cobalt is action color, not decoration. Ink sections use paper text and lime labels, with no extra brand colors.

## Typography and space

- Display: **DM Sans**, 700–800, tight tracking and balanced wrapping.
- Body: **DM Sans**, 400–600. Metrics use tabular figures.
- Display scale: `clamp(2.8rem, 5.6vw, 5.6rem)`; utility labels use 11px uppercase tracking.
- Wrap: 1180px. Section rhythm: `clamp(4.5rem, 9vw, 8rem)`.
- Cards are soft (18–26px); nested panels reduce their radius by 6–8px.

## Layout and responsive behavior

- Compact (<680px): nav links collapse into a button-controlled drawer; hero, proof cards, product board, pricing, and footer stack; primary CTA remains visible.
- Medium (680–1023px): hero visual sits beneath the copy; two-column grids become two equal columns.
- Expanded (≥1024px): hero is 5/7 split, callouts may overlap the product board, and the black product section may use a staggered two-column reading path.

## Components

### Buttons

- Primary: `action-primary`, white label, pill radius, at least 44px high. Hover darkens and lifts 2px; press scales to .97.
- Secondary: transparent with `line` border on light surfaces, white border on ink. It never competes with the primary action.
- Focus: 3px `highlight` ring plus a 2px offset.

### Labels, cards, and product UI

- Labels: `highlight` on light and ink surfaces, black uppercase text, small radius.
- Cards: use borders for grouping and one restrained shadow only when a card overlaps its parent surface.
- Product UI: browser-like shell, 1px line, 16px outer radius, 10px inner panels, tabular metrics, consistent 1.5px inline icon stroke.
- Range and billing controls are functional toggles with a visible selected state; changing billing updates the displayed plan values.

## Motion and accessibility

- Use one 260ms opacity/translate reveal and small chart motion only. No bounce or continuous decorative movement.
- Honor `prefers-reduced-motion` by disabling animation and smooth scrolling.
- All controls show focus, have descriptive labels, and meet 44px touch targets.

## Content and bans

- Clear, specific revenue-operations language; no lorem, generic AI claims, or fake real-company logo cloud.
- Ban: gradients, emoji icons, real trademarks, source brand terms, purple SaaS meshes, and three equal feature cards as the main proof.
