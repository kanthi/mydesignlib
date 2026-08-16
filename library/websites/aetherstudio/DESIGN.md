# DESIGN — Aetherstudio

## Overview
- Audience: founder or brand lead hiring a studio for identity, product UI, or a launch site.
- Single CTA: Start a project (`Start a project` in hero and close).
- Emotion: Clear air. Work that can stand outside.
- Create this feeling through:
  - A **sky field** (`sky.jpg`) with a white prospectus panel floating on it
  - One orange (`action-primary` #F06A1A) used only on the primary pill and the diamond mark
  - Bricolage Grotesque for display — not Inter
  - Hairline columns, not a stack of equal cards
  - Photography is product stills and studio light — no gradient avatars

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Open-sky prospectus
- Signature element: White 18px panel on a real sky photograph; orange pill as the only heat

## Colors (semantic)
- surface-page: the sky photograph — never a flat fill except as fallback `#7EB6E8`
- surface-paper: #FFFFFF — the panel
- text-primary / ink: #121212
- text-display: #1A1A1A — headlines; `#0E0E0E` on the stressed line
- text-secondary / muted: #6B6B6B
- text-soft: #8A8A8A — eyebrows
- border-default / line: #E8E8E8
- action-primary / orange: #F06A1A
- action-primary-hover: #D4550C
- text-on-accent: #FFFFFF
- Usage:
  - Orange never as a page or section fill
  - One orange pill per band
  - Stars, if any, use `#C47A12` — not decorative emoji

## Typography
- Display: Bricolage Grotesque — H1/H2/wordmark
- Body / UI: Outfit
- Scale: display clamp(2.4rem, 5vw, 3.6rem) / 2xl 1.75rem / xl 1.25rem / lg 1.05rem / base 1rem / sm 0.9rem / xs 0.72rem
- Rules: H1 weight 800, tracking -0.04em, leading 0.98, `text-wrap: balance`. Stressed line can sit on its own. Body leading 1.55, measure ≤40ch in side columns, ≤52ch in bands. Labels 0.72rem / 700 / 0.14em / uppercase. Sentence case except the wordmark.

## Space
- wrap: min(980px, 100%)
- sky padding: clamp(1.25rem, 3vw, 2rem)
- section-y: clamp(2.25rem, 4vw, 3rem) inside the panel
- gap: 8 / 12 / 16 / 24
- Panel radius 18px. Inner work wells 10px. Pills 999px only on CTAs.

## Layout and responsiveness
### Compact (< ~800px)
- Sky padding stays. Hero stacks: blurb, thesis, trust. Mid column loses side borders, gains hairlines top/bottom.
- Work becomes one column. Method stacks. Footer stacks.
- Nav: logo + CTA; links behind a 44px toggle.
### Medium (~800–1023px)
- Hero three columns may compress; keep thesis centered.
- Work 1-up or 2-up.
### Expanded (≥ ~1024px)
- Hero 1fr / 1.35fr / 1fr. Work as editorial rows. Method as three sequenced columns.

## Shape & elevation
- One lift: the panel (`0 30px 80px` sky-shadow). No card drop-shadows.
- Hairlines divide the document. Pills only on actions.

## Components
### Buttons
- Primary: `action-primary` fill, `text-on-accent`, radius-pill, min-height 44px, Outfit 700.
- Hover: `action-primary-hover`. Active: scale(0.97).
- Outline (secondary): paper + `line` border. Never for the only CTA in a band.

### Nav
- Inside the panel, hairline bottom. Wordmark left, links, orange pill right.
- Compact: hamburger. Escape / resize / link click close.

### Cards / work
- Work is a **row** (media + caption), not three equal feature cards.
- Services: numbered editorial list. Do not use 3 equal cards as the only pattern.

### Inputs
- This page uses mailto. If a field appears: 44px, label above, focus `action-primary`.

## Motion
- Purpose: confirm press. Duration 220ms. Hover lift ≤2px.
- Reduced-motion: no transform, no smooth-scroll. Sky `background-attachment: scroll` on compact anyway.

## Iconography
- One 1.6px stroke SVG set. Diamond mark in orange for the studio mote only.
- No emoji. No star characters if they can be a labelled rating.

## Content
- Sentence case. CTA: `Start a project`.
- No “4000+ creatives”, no gradient fake avatars, no lorem, no real trademarks.
- Fictional clients: Northline, Solace, Pulp, Orbit. Email `hello@aetherstudio.example`.

## Ban list
- Inter / Inter Tight / Roboto as display
- Purple gradients, emoji icons, centered-everything-only
- Three equal service cards as the sole feature pattern
- Fake grey-circle avatar stacks
- Real agencies, scraped decks, “seamless / unleash / elevate”

## Accessibility
- Ink on paper; white on orange
- Visible focus; tap targets ≥44px on compact
- Reduced motion honored
