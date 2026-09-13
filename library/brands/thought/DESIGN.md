# DESIGN — Thought

## Overview
- Audience: Forward-thinking technology companies, AI research labs, and digital product studios.
- Single CTA: Explore Brand Kit
- Emotion: Intelligent, precise, futuristic yet ultra-minimal — electric slate blue on pitch black with pure geometry.
- Create this feeling through:
  - Electric light slate blue `surface-slate-blue` (`#7366FF`) paired with pitch black (`#000000`) and white (`#FFFFFF`)
  - A 4-point quadfoil star emblem with soft inward arcs
  - Geometric sans-serif typography with subtle ink traps (`Bw Gradual` / `Plus Jakarta Sans`)
  - Full suite of collateral mockups: Digital Billboard, Logo Construction Grid, Business Cards, Typeface Specimen, Mobile Screens, Canvas Tote, and Stacked Cards

## Source of Truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic Commitment
- Name: Electric Minimalist — Light Slate Blue & Pitch Black
- Signature element: Quadfoil star emblem + geometric "Thought" wordmark on `#000000` & `#7366FF`

## Colors (semantic)
- surface-slate-blue: `#7366FF` — primary brand color, buttons, cards, callout fields
- surface-pitch-black: `#000000` — pitch black ground for high-contrast presentation
- surface-dark-card: `#0C0C0E` — subtle dark card surface
- surface-light-card: `#F5F6FA` — pure clean light card surface
- text-primary: `#FFFFFF` — primary text on dark fields
- text-on-blue: `#FFFFFF` — text on slate blue fields
- text-dark: `#0A0A0C` — dark text on light fields
- text-muted: `#8A8A99` — subtle secondary text
- action-primary: `#7366FF` — CTA button color
- action-hover: `#5E50EC` — hover state button color

## Typography
- Display / Wordmark: Plus Jakarta Sans / Outfit (600–700 weight, tracking `-0.03em`)
- Spec / Mono: Space Mono / IBM Plex Mono
- Body: Plus Jakarta Sans (400–500 weight, line-height 1.55)
- Scale: display clamp 2.4–3.6rem / h2 1.8–2.4rem / body 1.05rem / sm 0.85rem

## Space
- wrap: min(1120px, 100% - 2.4rem)
- board: min(1240px, 100% - 1.2rem)
- section-y: clamp(3.2rem, 6vw, 5rem)
- Board cells: 8-card grid layout reflecting all collateral specimens

## Components
### Logo Emblem (Quadfoil Star)
- 4-point star with soft rounded tips and quarter-circle inward cutout arcs.
- Always rendered in `#7366FF`, `#FFFFFF`, or `#000000`.

### Business Cards
- 3 Variants: Pitch Black (dark watermark), Pure White (light blue watermark), Light Slate Blue (dark blue watermark).

### Construction Grid
- Precision alignment lines, crosshairs, and bounding boxes showing mathematical geometry.

## Motion
- 220ms ease; respects `prefers-reduced-motion`.

## Accessibility
- High contrast compliant (#7366FF on #000000, #FFFFFF on #7366FF, #000000 on #FFFFFF).
- Interactive tap targets ≥ 44px.
