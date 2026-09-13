# DESIGN — Claret

## Overview
- Audience: Fashion-conscious buyers of structured handbags
- Single CTA: Contact / shop categories
- Emotion: Bold editorial confidence
- Create this feeling through:
  - Claret red field (`#d42020`) as hero identity
  - Syne geometric sans + Cormorant Garamond italic scripts
  - Sharp 2px corners (not soft SaaS pills)
  - Mosaic product photography as thesis

## Aesthetic commitment
- Name: Red editorial luxury
- Signature element: Split hero — script/roman title + bag mosaic on solid red

## Colors
- action / red: `#d42020` · red-deep `#b81414` (menus, depth)
- ink: `#121212` · muted `#7a7a7a`
- cream / blush for light sections only
- white chrome on red

## Typography
- Display/UI: Syne (heavy uppercase)
- Script accents: Cormorant Garamond italic
- text-wrap balance on hero title

## Layout
### Compact
- Nav drawer overlay inside `.page` (position relative)
- Hero single column; polaroids unwrap
### Expanded
- Three-column hero; centered uppercase nav links

## Components
### Nav
- Absolute over hero; parent `.page` is containing block
- Desktop: brand | links | Contact outline
- Mobile: hamburger + full red overlay panel
### Buttons / CTA
- Sharp outline Contact; hover fill white / text red
- active scale 0.96; focus-visible rings

## Motion
- GSAP reveals + category crossfades; reduced-motion off

## Ban list
- Inter, purple gradients, soft 16px everywhere, real fashion house names, emoji icons

## Accessibility
- 44px menu toggle; Escape closes menu; aria-expanded
