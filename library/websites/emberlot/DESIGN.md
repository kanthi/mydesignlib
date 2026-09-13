# DESIGN — Emberlot

## Overview
- Audience: Buyers hunting a contemporary house with a porch, a lawn, and rooms that look good after 6pm.
- Single CTA: Book a Visit
- Emotion: Warm dusk, no-pressure showing — a house already lit for you.
- Create this feeling through:
  - Full-bleed twilight photography with porch lamps as the only warm light
  - Coral ember pills (`action-primary`) on dark photography; never as a page wash
  - Centered pill nav over a dusk hero, then a quiet paper body
  - Manifesto type that fades to muted as the sentence completes
  - One inverted black feature card in a row of pale tiles

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Dusk listing / soft-minimal residential
- Signature element: Floating dark listing card on full-bleed dusk photography, coral circular arrow, coral pill CTAs

## Colors (semantic)
- surface-page: #F2F1EE — paper behind about, listings, footer
- surface-tile: #E8E7E3 — pale feature cards
- surface-ink: #141414 — inverted cards, featured band, nav pill
- text-primary: #111111 — headlines on paper
- text-on-ink: #FFFFFF
- text-secondary: #6A6A6A — body, distances, faded manifesto
- text-faint: #A3A3A3 — manifesto tail
- border-default: #DDDBD6
- action-primary: #EE5A4A — only primary CTAs and the brand square
- status-danger: #C0392B — form errors only, never decorative
- Usage rules:
  - Ember coral is for buttons, the mark, and the listing-card arrow — not backgrounds
  - Photography carries warmth; UI stays paper / ink / coral
  - Do not tint the paper cream-terracotta; keep it cool-grey paper

## Typography
- Display: Sora — H1/H2/wordmark
- Body: Manrope
- Label/utility: Sora (medium, wider tracking)
- Scale:
  - display: clamp(2.6rem, 6vw, 4.25rem) / 700 / 1.05 / -0.035em
  - 3xl: clamp(2rem, 3.4vw, 2.85rem) / 600 / 1.15 / -0.03em
  - 2xl: clamp(1.6rem, 2.4vw, 2.1rem)
  - xl: 1.35rem
  - lg: 1.125rem
  - base: 1rem / 400 / 1.62
  - sm: 0.875rem
  - xs: 0.75rem / 0.12em tracking (kickers)
- Rules: H1 measure ≤ 12ch; manifesto ≤ 28ch; body ≤ 62ch. `text-wrap: balance` on display.

## Space
- section-y: clamp(4.5rem, 9vw, 7.25rem)
- wrap: min(1180px, 100% - 2.5rem)
- gap: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96

## Layout and responsiveness
### Compact (< ~640px)
- Single column; 20px page margin; hamburger; hero copy above listing card; stack CTAs (primary last)
### Medium (~640–1023px)
- 2-col listings; feature cards 2×2; nav collapses
### Expanded (≥ ~1024px)
- Sticky bar: mark left, pill nav center, Book a Visit right
- Hero is full-viewport photography; copy bottom-left; listing card bottom-right
- Feature row is 4 tiles; listings 3-up

## Shape & elevation
- radius-lg: 28px (listing card, featured band, photos)
- radius-md: 22px (feature tiles)
- radius-sm: 14px (inner photos)
- radius-pill: 999px (nav, CTAs)
- Concentric: outer radius ≈ inner + padding
- Shadow: one soft dusk shadow on the listing card only

## Components
### Buttons
- Primary: `action-primary` fill, white label, pill, circular arrow disc
- States: hover darken 8% + translateY(-1px); focus 2px ink ring offset 3px; active scale(0.96); disabled 40% opacity
- Secondary on ink: white/10 fill, white label, small coral arrow disc
### Nav
- Desktop: dark pill, white links, coral dot on current
- Compact: drawer from top; Book a Visit pinned
### Cards
- Feature: pale tile, 48px icon disc, title at bottom; one inverted ink tile with extra body
- Listing: photo 4:3, NEW chip, title + distance
- Overlay listing: glass-dark, inner photo, caption, 4-dot pager, coral next
### Inputs
- 48px height, paper fill, 1px border-default, focus border ink; error uses status-danger text under field

## Motion
- Purpose: listing pager + scroll reveal
- duration 240ms; ease cubic-bezier(0.22, 1, 0.36, 1)
- reveal: opacity + translateY 16px
- reduced-motion: opacity only; no auto-rotate

## Iconography
- Inline SVG, 1.6px stroke, 20px default, currentColor
- No emoji; filled discs only for nav-current and CTA arrows

## Content
- Sentence case. CTAs: Book a Visit, Explore Properties, See all homes
- Residential only — no hotel, farm-tool, or travel-deal copy
- Fictional brand; contact @emberlot.example

## Ban list
- Inter/Roboto as display, purple gradients, emoji icons
- Dual hero CTAs of equal weight
- Real brokerages, MLS marks, Comfort Inn / Homiq / Hourglass / Realcera
- Scraped video frames as assets
- Cream + terracotta editorial cluster; acid-green dark mode

## Accessibility
- White on coral ≥ 4.5:1; white on dusk hero uses a bottom gradient
- Visible focus; tap targets ≥44px
- Reduced motion honored
