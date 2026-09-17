# DESIGN — Ribline

## Overview
- Audience: Homeowners and facility managers who need a roof that will still be quiet in a twenty-year storm.
- Single CTA: Start your project
- Emotion: Clear-sky confidence — metal in daylight.
- Create this feeling through:
  - Full-bleed standing-seam photography, worker in harness as the thesis
  - White paper, charcoal type, **black pills** for every primary action (no orange trades cliché)
  - Manrope display, Source Sans 3 body; large left-aligned hero
  - Dark material shop as the one ink field; everything else stays airy

## Source of truth
- This file + CSS `:root` in `styles.css`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Daylight trades / standing-seam editorial
- Signature element: Roofer on a bright metal ridge, black pill CTA, then a black material catalog.

## Colors (semantic)
- surface-page / paper: `#F7F7F6`
- surface-raised: `#FFFFFF`
- surface-ink: `#121417`
- text-primary: `#16181C`
- text-secondary: `#6A6E76`
- border-default: `#E4E5E7`
- action-primary: `#121417` — pills, not a hue
- action-on-ink: `#FFFFFF`
- Usage: black is the only “accent.” Photos carry color. No orange/blue SaaS.

## Typography
- Display: Manrope 600–700 — H1/H2
- Body: Source Sans 3
- Scale: display `clamp(2.5rem, 5.5vw, 4.1rem)` / 3xl `clamp(1.8rem, 3vw, 2.4rem)` / base 1.05rem / sm 0.9rem
- H1 leading 1.08, tracking `-0.035em`. Body 1.6, measure ~48ch on about.

## Space
- section-y: `clamp(4rem, 8vw, 6.5rem)`
- wrap: `min(1080px, 100% - 2.5rem)`

## Layout and responsiveness
### Compact
- Hamburger; hero copy stacks over crop; process 1-col; materials 1-col; plans stack
### Medium
- Process 2-up; projects 2-up; materials 2-up
### Expanded
- Hero split copy | worker; process 01 + photos; 3-up materials; 2 pricing cards

## Shape & elevation
- radius-pill 999px on CTAs and nav
- radius 14px on photos
- No drop shadow except 1 soft on pricing cards

## Components
### Buttons
- Primary: ink fill, white label, pill, 44px; hover `#000`; focus ring 2px ink; active scale 0.97
- On dark: white fill, ink label
### Nav
- Logo left; pill links; Let’s talk + quote bag
### Cards
- Materials: photo, name, price range, Buy → quote
- Do not use 3 equal icon services as the only pattern

## Motion
- 220ms; accordion/quote only; reduced-motion off

## Content
- CTA **Start your project** / **Let’s talk** — never Submit
- Fictional: Ribline, ribline.example, Ribline Roofing Co.

## Ban list
- Steelcrest; Inter as display; orange contractor templates; real tool/brand logos; scraped crew shots

## Accessibility
- Contrast on paper and ink; 44px targets; visible focus
