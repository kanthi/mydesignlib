# DESIGN — Madder

## Overview
- Audience: someone bored of beige wellness who will drop one sphere tonight.
- Single CTA: Shop the vat
- Emotion: the tub goes loud — pigment, not spa whisper
- Create this feeling through:
  - A single dye-in-water film as the page (`surface-film`), scrubbed by scroll, never a `<video>`
  - Foam type (`text-on-film`) at display scale; madder red (`action-primary`) only on the verb and the split wordmark
  - Lime (`signal`) for numbers and one product name — never as a page fill
  - No glass cards, no beige spa photography

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Loud vat / pigment editorial
- Signature element: one continuous dye-in-water image sequence, scrubbed by scroll progress

## Colors (semantic)
- surface-page / vat: #0A3D42 — deep pool behind the film
- surface-film: the sequence (not a hex)
- text-on-film / foam: #F3EEE4
- text-primary / ink: #102226
- text-secondary / muted: #C9D4D2
- border-default / line: rgba(243,238,228,0.28)
- action-primary / madder: #E23A28 — CTA + last letters of the wordmark
- signal / weld: #C6F04A — prices, one product, never backgrounds
- plum / vat-night: #5C3478 — range card only
- Usage:
  - Madder red is the only button fill.
  - Weld lime is a shout, not a theme.
  - Film is the background; do not put a second full-bleed photo behind it.

## Typography
- Display: Anton — H1, wordmark, range names
- Body: Figtree
- Label: IBM Plex Mono
- Scale: display clamp(4.2rem, 14vw, 11rem) / 3xl clamp(2.4rem, 6vw, 4.2rem) / xl 1.35rem / base 1.05rem / sm 0.8rem / xs 0.68rem
- Rules: display tracking −0.02em, uppercase headlines, body 1.55, labels 0.14em

## Space
- section-y: 100vh sticky chapters
- wrap: min(1120px, 100% − 2rem)
- page length: ~420vh so the film has room to scrub

## Layout and responsiveness
### Compact (< ~700px)
- Wordmark stacks; nav becomes one Shop button; range cards stack; stamp hides
### Medium (~700–1100px)
- Split cover (type left, film full); range as a column of named slabs
### Expanded (≥ ~1100px)
- Full-bleed film; type locked in the optical centre or the left third; range as a horizontal trio

## Shape & elevation
- Radius 0 on type frames
- Pills only on the primary CTA
- Range slabs: 12px radius, 1px foam line, no drop shadow

## Components
### Buttons
- Primary: `action-primary`, foam text, `radius-pill`, `label`
- Hover: brighten 8%; focus: 2px foam ring; disabled: 40%
- Ghost: foam hairline
### Nav
- Wordmark left; chapter anchors; one Shop CTA
### Range slabs
- Name in display, note in body, price in `signal`, one verb
- Three named moods — not three equal feature cards with icons
### Stamp
- CSS circle of `label` type; hide on compact

## Motion
- Film frame = scroll progress (no easing on the sequence)
- Chapter type fades in over 200ms
- Reduced-motion: lock frame 08, no scrub, chapters static

## Iconography
- 1.5px stroke. Wave mark is one path. No emoji.

## Content
- Short, spoken, slightly rude to beige wellness
- Fictional: Madder, Port Silt, Inez Cald, hello@madder.example
- No real magazines, department stores, or wellness conglomerates

## Ban list
- Wallow, Goop, Vogue, Monocle, Liberty, Selfridges, Dazed
- Inter as display, beige spa photos, 3 icon cards, purple SaaS gradient
- `<video>` for the dye film

## Accessibility
- Foam on vat contrast; do not set small type on the brightest dye
- Focus visible; 44px compact hits
- Reduced motion locks the film

## Plan gate
- Subject: dye-plant bath bombs
- Uniqueness: scroll-scrubbed pigment film + madder vernacular — not a transferable SaaS shell
- Default-cluster: avoided cream/serif/terracotta and black/acid-green-only by using vat teal + multi-pigment film
