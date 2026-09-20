# DESIGN — Nuclid

## Overview
- Audience: Art directors and design engineers reviewing a mint sci-fi compute identity
- Single CTA: Request the kit (`kit@nuclid.example`)
- Emotion: Cool mint light in a dark lab — a nucleus you can hold
- Create this feeling through:
  - Flat mint `surface-mint` as the only light field; `surface-forest` as the dark field
  - One mark: three elliptical orbits around a hexagonal nucleus (never a filled clover)
  - Silhouette photography on mint; glass token with the SVG mark overlaid, not baked into the photo
  - Manrope geometric wordmark with a construction grid; IBM Plex Mono for hex

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Mint-core sci-fi — orbit lab
- Signature element: Hex-nucleus 3-orbit mark on a mint field

## Colors (semantic)
- surface-page: `#111413` — studio wall around the board
- surface-charcoal: `#111413` — charcoal bar, chrome on mint
- surface-forest: `#0D2A24` — type construction, neon cell, dark lockups
- surface-teal: `#178A96` — mid bar only, never a full-bleed page
- surface-mint: `#7DFFC2` — primary field, lockup ground, portrait ground
- surface-mist: `#D5DED9` — grey bar
- surface-white: `#F7FBF9` — white bar, type on forest
- text-primary: `#F7FBF9` — body on page
- text-on-mint: `#0D2A24` — lockup, buttons on mint
- text-secondary: `#8AA39A`
- action-primary: `#7DFFC2`
- Usage:
  - Mint or forest as a full bleed; never a mint→teal gradient as a brand fill
  - Teal is a bar and a kiosk screen wash, not a second lockup field
  - Charcoal type only on mint/white; mint type only on forest/charcoal
  - Do not use mint as body text on teal (contrast fails)

## Typography
- Display / wordmark / UI: Manrope 500–800, sentence-case **Nuclid**, tracking `-0.045em`
- Spec: IBM Plex Mono 400–500, tabular hex and orbit codes (`NCL-3`)
- Scale: display clamp 2.4–3.8rem / 3xl 2rem / xl 1.35 / base 1.02 / sm 0.82 / xs 0.68
- Rules: wordmark never all-caps, never outlined, never tracked above `0.02em`. Construction cell uses the same Manrope cuts with mint vertex dots.

## Space
- section-y: `clamp(3.2rem, 6vw, 5.2rem)`
- wrap: `min(1120px, 100% - 2.4rem)`
- board: `min(1180px, 100% - 1.2rem)`
- Board gap: 10px on `surface-page` (studio air, never flush)

## Layout and responsiveness
### Compact (< ~860px)
- Board stacks lockup → construction → palette → token → kiosk → neon/portrait
- Nav drawer; CTAs hide behind the toggle
- Color rows: chip + name; hex wraps under the name
### Expanded
- Board 2 columns × 3 rows matching the specimen: lockup | construction / palette | glass / kiosk | neon+portrait
- Neon and portrait share the last cell 1:1

## Shape & elevation
- Radius 0 on board cells. 8px only on UI chrome (nav, buttons, system cards)
- No drop shadows on color fields. Glass token uses a 1px mint edge, not a drop shadow
- App/icon tile: 22% rounded square only in the mark section, never on the board

## Components
### Buttons
- Primary: `action-primary` fill, `text-on-mint` type, radius 8px, Manrope 700
- Hover: mint mixed 12% toward forest; focus 2px mint ring; active scale 0.97
- Ghost: 1px mist border on page; never for the kit CTA
### Mark
- Three ellipses at 0° / 60° / 120°, stroke `currentColor`, hexagonal nucleus, one electron bead per orbit
- Clear space = one cap-height of the “N”. Never rotate in lockups. Never fill the orbits into clover lobes. Never set in mid-grey
### Board cells
- Lockup: mint field, charcoal mark + wordmark, optically centered
- Construction: forest field, mint vertex dots, large Manrope “Nuclid” (clipped is allowed)
- Palette: six full-width bars, name left, play-triangle, hex right
- Token: photo of silhouette hand + blank glass; SVG mark composited in HTML
- Kiosk: photo of arm + pedestal; screen copy is HTML (`Nuclid` / `HOLD THE CORE`)
- Split: neon 3-orbit (SVG glow) + portrait photo with a small mark in the corner

## Motion
- Purpose: the orbits suggest spin; the page does not
- Duration 240ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`
- Reveal: opacity + translateY 14px. Neon glow is a 4s opacity pulse
- Lockup mark may rotate 360° in 28s, linear, paused under reduced-motion
- reduced-motion: opacity only; no rotation; no pulse

## Iconography
- One mark (the trine orbit). Play triangles on palette bars are 8px CSS, not a second logo
- Stroke 2.2 in a 64 viewBox. No emoji. No outlined-and-filled mix

## Content
- Voice: lab English, short clauses. Nucleus, orbit, isolate, core
- Ban “unleash”, “seamless”, “next-gen”
- Fictional runtime for sandboxed compute. `kit@nuclid.example`
- Codes: `NCL-3` (three orbits), `CORE-HEX`

## Ban list
- Source product names, chain names, and studio handles from the reference
- Filled three-lobe clover / trefoil as the mark
- Inter as display, purple, mint→teal page gradients
- Real lab photography scraped from the reference
- Three equal feature cards as the board

## Accessibility
- Forest on mint and mint on forest for display; body on page is `text-primary` on charcoal
- Never mint type on teal; never charcoal type on forest
- Visible focus; tap ≥ 44px; reduced motion honored
