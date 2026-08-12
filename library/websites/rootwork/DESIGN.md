# DESIGN — Rootwork

## Overview
- Audience: Mid-sized regenerative farms and co-ops
- Single CTA: Get Started / Talk to Rootwork
- Emotion: Trustworthy field-green optimism
- Create this feeling through:
  - Deep green + harvest yellow (not purple SaaS)
  - Fraunces display + DM Sans body
  - Soft white shell card on sage page
  - Hero field photography as thesis
  - One yellow primary CTA; green secondary

## Aesthetic commitment
- Name: Organic farm marketing (rounded soft-tech + field photo)
- Signature element: Yellow trust strip under full-bleed field hero

## Colors (semantic)
- paper / shell: `#ffffff` on page `#e8ebe6`
- ink: `#0f1a12`
- muted: `#5c6b60`
- action-primary / yellow: `#f0c93a` — primary CTAs only
- action-secondary / green: `#1f6b3a`
- green-deep: `#0f3d22` — mobile menu, deep panels
- lime: `#c8e86a` — accents / chips only

## Typography
- Display: Fraunces — H1/H2
- Body: DM Sans
- Scale: display / h2 / base / sm via CSS tokens

## Layout
### Compact
- Nav collapses to overlay drawer inside shell; hide desktop CTA in bar
- Single-column services / about / process
### Expanded
- Nav: brand · links · yellow CTA over hero (absolute, parent `.shell` relative)

## Components
### Nav
- Contained by `.shell { position: relative }` — never viewport-escaped
- Overlay panel on ≤960px; Escape closes; aria-expanded
### Buttons
- Primary yellow pill; hover lift; active scale 0.96
- Focus-visible yellow ring (white on hero)

## Motion
- GSAP scroll reveal 200–300ms; reduced-motion = static

## Ban list
- Inter/purple gradients, real farm brand logos, emoji icons, dead menu positioning outside shell

## Accessibility
- 44px hit targets on nav controls; visible focus; reduced-motion honored
