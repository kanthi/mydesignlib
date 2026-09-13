# DESIGN — Truss

## Overview
- Audience: Founders and in-house brand leads who want a studio that treats identity as structure, not decoration.
- Single CTA: Request the kit
- Emotion: a printed guideline on a grey bench — black, white, load-bearing.
- Create this feeling through:
  - 21-card board (3 × 7) as the signature, not a 2×4 mood collage
  - One double-leg A-truss mark, never a second icon language
  - Black / white / light grey / charcoal only
  - Outfit as the in-world face (Gotham is commercial; do not name Gotham)

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Swiss brand-book monochrome
- Signature element: 21-slide guideline board + overlapping truss mark

## Plan gate
- Layout: sticky nav → intro → 21-card board → expanded spec (type, color, stationery, contact)
- Uniqueness: the page *is* the guideline. Not a crimson civic ridge (Arris) and not a lime climate mark (Calyx).
- Default-cluster: black+white is the brief. Differentiated by the 21-card rhythm and the two-leg truss.

## Colors
- surface-page: `#C9C9C9` — board ground
- surface-paper: `#FFFFFF`
- surface-ink: `#000000`
- surface-grey: `#E5E5E5`
- surface-charcoal: `#3A3A3A`
- text-primary: `#111111`
- text-on-ink: `#FFFFFF`
- text-secondary: `#5A5A5A`
- action-primary: `#000000`
- Usage: no accent color. Grey is a field, never a button.

## Typography
- Display / wordmark: Outfit 600–700, lowercase, tracking −0.04em
- Body: Outfit 400
- Spec: IBM Plex Mono — hex, weights, addresses
- Scale: display `clamp(2.4rem, 5vw, 3.5rem)` / slide titles `1.05–1.35rem` / base `0.95rem` / xs `0.68rem`

## Space
- board: `min(1180px, 100% - 1.4rem)`
- board gap: `10px`
- section-y: `clamp(3rem, 6vw, 4.75rem)`
- Slide padding: `22px`

## Layout
### Compact
- Board 1 column; nav drawer
### Medium
- Board 2 columns
### Expanded
- Board 3 columns × 7 rows, same order as the specimen

## Shape
- Slides: 6px radius, no drop shadow (or 0 1px 0 rgba(0,0,0,.06))
- Buttons: 6px (not pills)
- Mark: sharp; no rounded terminals

## Components
- Primary: black fill, white type, 42px
- Secondary: 1px ink border
- Cards: white or ink; numbered chapter slides stay ink
- Stationery: CSS-drawn envelope + cards; no scraped print shops

## Motion
- Board cells fade 220ms on enter; hover 1px lift max
- reduced-motion: no lift

## Content
- Fictional studio only. Contact `hello@truss.example`, Port Meridian
- No Artight, Gotham, Dhaka, Bangladesh

## Ban list
- Real trademarks, Inter as display, purple, emoji icons, cream+terracotta, extra brand colors
