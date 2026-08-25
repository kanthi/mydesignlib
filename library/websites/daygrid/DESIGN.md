# DESIGN — Daygrid

## Overview
- Audience: Offtake buyers and investors in utility-scale modules, not rooftop DIY.
- Single CTA: Contact us
- Emotion: Quiet industrial scale — a field of glass at golden hour, then the hardware in a dark bay.
- Create this feeling through:
  - Full-bleed aerial farm as the hero thesis; copy left, stats card stacked bottom-right
  - Dark bay of isometric hardware (photos or SVG), not 3 equal SaaS cards
  - One lemon `action-primary` band and buttons — never a yellow page
  - Light gray `surface-page` for discovery; near-black for offering / building

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Industrial landscape — aerial + isometric hardware
- Signature element: Golden-hour solar field hero + lemon “Contact us” pill + isometric product bay

## Colors (semantic)
- surface-page: `#E8E9ED` — discovery bands
- surface-ink: `#101112` — offering, building, footer
- surface-raised: `#FFFFFF` — stats, buttons on photo, cards
- text-primary: `#121314`
- text-on-dark: `#F3F3F0`
- text-secondary: `#5C5F66`
- action-primary: `#F0E34A` — lemon. CTA fill and energy band only
- action-ink: `#121314` — text on lemon
- border-default: `#D2D4DA`
- status-danger: `#B23B2A` — form errors only
- Usage: lemon never as a hero wash. One primary button per cluster.

## Typography
- Display: Syne — H1/H2/wordmark, weight 600–700, tracking `-0.03em`, `text-wrap: balance`
- Body: Outfit — nav, body, labels, 400–500, leading `1.55`
- Scale: display `clamp(2.6rem, 6vw, 4.25rem)` / 3xl `clamp(1.9rem, 3.4vw, 2.85rem)` / xl 1.25rem / base 1.05rem / sm 0.875rem / xs 0.75rem
- Measure: hero subhead ≤ 36rem; body ≤ 40rem

## Space
- wrap: `min(1160px, 100% - 2.5rem)`
- section-y: `clamp(4rem, 9vw, 6.5rem)`
- Hero frame radius 20px; inner stats 14px; pills 999px

## Layout and responsiveness
### Compact (< 720px)
- Hero stacks; stats under copy; nav collapses; hardware scrolls horizontally
### Medium (720–1023px)
- Hero still stacked if photo would crush; 2-col hardware
### Expanded (≥ 1024px)
- Hero overlay on photo; nav centered pill; stats bottom-right; hardware 5-up; products copy | isometric

## Shape & elevation
- Frame 20px. Nested stats 14px. Photos 12px inside frame.
- Shadow only on floating stats: `0 16px 40px rgba(0,0,0,0.18)`
- Photo outline: 1px black @ 8%

## Components
### Buttons
- Primary on photo/dark: white fill, `action-ink` (reference “Discover more”)
- Contact: white pill in nav
- Energy band: `surface-ink` text on lemon, or ink on lemon
- Hover: translateY(-1px); active scale(0.97); focus 2px lemon ring
### Nav
- Dark translucent pill over photo; Contact as filled white
- Compact: 44px menu
### Hardware bay
- Dark strip, isometric units, caption under
### Stats
- White card, 2-up grid + one full-width figure

## Motion
- 240ms ease; hardware hover lift ≤4px; reduced-motion: none

## Iconography
- Inline SVG 1.75 stroke. No emoji.

## Content
- Sentence case. “Contact us”, “Discover more”
- Fictional Klarfeld range — not Austria, not a real grid operator
- `desk@daygrid.example`

## Ban list
- Inter display, purple, emoji, real utilities, scraped farms, 3-card SaaS grid as the whole page

## Accessibility
- Lemon only with `action-ink` text
- Tap ≥ 44px; reduced motion honored
