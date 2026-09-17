# DESIGN — Rigel

## Overview
- Audience: Solo makers and small product teams who drown in lists instead of doing the work.
- Single CTA: Get access
- Emotion: Quiet night focus — a beam through dark space.
- Create this feeling through:
  - Near-black void (`surface-page`) with a **vertical ice-blue beam** in the hero only
  - One electric cobalt action color on pills and the active chart bar
  - Outfit display, large centered theses; IBM Plex Sans for UI chrome
  - Product proof as HTML dashboard / task cards — not screenshots of real apps
  - Glass panels (`surface-raised` + hairline) floating over the starfield

## Source of truth
- This file + CSS `:root` in `styles.css`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Cosmic night / deep-work cockpit
- Signature element: Vertical ice-blue beam through a starfield, with a glass task dashboard sitting in the light.

## Colors (semantic)
- surface-page / void: `#05060C`
- surface-raised / glass: `#0C1020`
- text-primary / snow: `#E8EEFF`
- text-secondary / mist: `#8B93B0`
- border-default / line: `#1C2440`
- action-primary / beam: `#4E7BFF` — CTAs, active nav, one chart bar, focus
- action-primary-hover: `#3D68E8`
- status-up: `#3DDC97` — deltas only
- Usage rules:
  - Beam never fills a whole section except the generated starfield hero.
  - Do not use `#6366F1` / indigo-on-white.
  - Status green is never a marketing wash.

## Typography
- Display: Outfit — H1/H2/wordmark
- Body: IBM Plex Sans
- Label: Outfit 500
- Scale: display `clamp(2.6rem, 6vw, 4.4rem)` / 3xl `clamp(2rem, 4vw, 3rem)` / 2xl 1.85rem / xl 1.35rem / base 1.02rem / sm 0.88rem / xs 0.72rem
- Rules: H1 weight 600, leading 1.08, tracking `-0.04em`, `text-wrap: balance`. Body leading 1.55. Second line of split headlines uses mist.

## Space
- section-y: `clamp(4.5rem, 10vw, 7.5rem)`
- wrap: `min(1120px, 100% - 2.5rem)`
- gap: 8 / 12 / 16 / 24 / 32 / 48

## Layout and responsiveness
### Compact (< ~640px)
- Single column; hamburger; email field stacks over Get access; dashboard scrolls; feature grid 1-col; testimonial 1-col
### Medium (~640–1023px)
- Features 2-col; steps stack; audience copy above mock
### Expanded (≥ ~1024px)
- Pill nav centered; dashboard full; features 2×2; steps split; audience 50/50; testimonials 3-up

## Shape & elevation
- radius-sm 10px, radius 16px, radius-lg 22px, radius-pill 999px
- Nav: pill capsule
- Shadow: one blue glow `0 30px 80px rgba(78,123,255,0.18)` on the hero dashboard only

## Components
### Buttons
- Primary: `action-primary` fill, snow label, radius-pill, height 44px; hover darken; focus 2px snow ring; active scale 0.97
- Ghost: glass + line; Log in in nav
- One primary per view
### Nav
- Logo left, pill links center, Log in right
- Compact: drawer
### Cards
- Feature tiles: copy + HTML specimen, not 3 equal icon cards
- Testimonial: quote + avatar + score
### Inputs
- Hero email: pill field in glass, 48px; Get access adjacent
- Focus: beam ring

## Motion
- duration 220ms; ease `cubic-bezier(0.22, 1, 0.36, 1)`
- Tab/accordion state only; beam is a static image
- reduced-motion: no transform

## Iconography
- Inline SVG, 1.5px, 18–20px, currentColor
- Fictional integration marks only — no Figma, Notion, Slack, Zoom, Mercury

## Content
- Sentence case; CTA **Get access** (never Submit)
- No lorem; no seamless/unleash/next-gen
- Fictional brand: Rigel, rigel.example

## Ban list
- Inter as display; `#6366F1`; Agex / Ryzo / Zyro; real tool logos; scraped UI; cream+serif cluster

## Accessibility
- Snow on void; snow on beam; visible focus; tap ≥44px; reduced motion
