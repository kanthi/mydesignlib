# DESIGN — Sixfold

## Overview
- Audience: Designers collecting product identities
- Single job: Present six complete, distinct visual systems on one wall
- Emotion: Bright, specific, side-by-side — not one blended “studio look”
- Create this feeling through:
  - A 2×3 case wall; each cell is its own 2×3 board
  - Six palettes that never mix
  - Original marks (pinwheel, horizon, capsule, eye, stall, twin loft)
  - UI chrome in HTML/CSS; photos only for people and sky

## Source of truth
- This file + CSS custom properties in `index.html` (scoped per brand). Prefer code if they diverge.

## Aesthetic commitment
- Name: Product-identity lookbook
- Signature element: Six adjacent boards with no shared chrome inside the cells

## Six brands
| Id | Role | Signature |
|----|------|-----------|
| Quarto | Study notes | Candy columns + 8-point pinwheel |
| Daybreak | Wallpaper studio | Spectrum stripe + aurora field |
| Dram | Daily color brand | Fat capsule field + rounded wordmark |
| Sightline | Creative agency | Blood-red stack + geometric eye |
| Baylot | Parking finder | Navy/mint stall grid + car glyph |
| Alto | Social loft | Twin rhombi on magenta-violet |

## Colors
### Studio (page)
- `surface-page` `#EDEDED`
- `text-primary` `#141414`
- `text-muted` `#6A6A6A`
- `line` `#D4D4D4`

### Quarto
- sky `#2F6BFF` · lime `#C6F04C` · solar `#FF8A32` · bloom `#FF5EA0` · paper `#FFF7F0`

### Daybreak
- ink `#0B0B0E` · paper `#F4F4F6` · spectrum Y `#F5D000` O `#FF6A00` P `#FF3D8A` V `#7A3DFF` B `#2F6BFF` C `#19D0FF`

### Dram
- ink `#0A0A0A` · sun `#FFE14A` · punch `#FF4DA1` · leaf `#7CFF4D` · ice `#3D8CFF`

### Sightline
- bright `#FF2A2A` · blood `#C10D0D` · dark `#6E0909` · paper `#F3F3F3` · ink `#0A0A0A`

### Baylot
- navy `#071A33` · mint `#2FE59A` · paper `#F3F7F4`

### Alto
- deep `#16081F` · violet `#6A1788` · magenta `#E848FF` · paper `#F7EEFA`

Usage: never put Dram punch on Quarto, or mint on Alto. Ember/spectrum tiles stay inside their board.

## Typography
- Studio: Figtree 500–700
- Quarto: Outfit
- Daybreak: Instrument Sans
- Dram: Fredoka
- Sightline: Archivo Black (theses) + IBM Plex Sans (body)
- Baylot: Manrope
- Alto: Bebas Neue (display) + DM Sans
- Scale: board titles `clamp(1.1rem, 1.6vw, 1.45rem)` · system titles `clamp(1.6rem, 3vw, 2.1rem)`
- No Inter as display

## Space
- `section-y` `clamp(3rem, 6vw, 5rem)`
- `wrap` `min(1200px, 100% - 2.25rem)`
- Wall gap `10px`; inner board gap `8px`

## Layout and responsiveness
### Compact (< ~720px)
- Wall stacks to 1 column; each brand board stays 2-col until 520px, then 1-col
- Nav hamburger; CTA last
### Medium (720–1100px)
- Wall 1 column; boards keep 2×3
### Expanded (≥ 1100px)
- Wall 2 columns; six boards visible as a poster

## Shape & elevation
- Board cells `radius 0` (poster mosaic)
- System cards `6px`
- One soft shadow on each brand board, none inside

## Components
### Buttons
- Primary: studio ink, white type, 6px, Figtree
- Hover darken; focus gold-ish `#C9A03A` ring; active `scale(0.97)`
### Nav
- Sticky white; Sixfold wordmark; jump links to each brand
### Brand board
- 2×3 cells; mark + mock + type + social card
- Social cards are HTML, not screenshots
### Phone
- CSS device; home grid of 4 colored glyphs; no real OS logos as marks

## Motion
- `220ms` / `cubic-bezier(0.22, 1, 0.36, 1)` on buttons only
- Reduced motion: off

## Iconography
- Inline SVG, `currentColor`, one language per brand
- No emoji; no real app trademarks (Phone / Chat / Pulse / Note as invented glyphs)

## Content
- Fictional only. No OVO, Dose, ScreenCheck, Vision Agency, Spaces, SkyNode, yahyavision
- CTAs: “View the wall”, “Request the kit”
- Sentence case except theses (Sightline / Alto)

## Ban list
- Real brand names from the reference
- Inter display, purple-on-white SaaS gradient as the *studio* look
- Mixing the six palettes
- Scraped UI screenshots

## Accessibility
- Contrast on each field (white on navy, ink on mint, white on blood)
- Focus visible; 44px taps on compact
- Reduced motion honored
