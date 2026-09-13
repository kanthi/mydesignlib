# DESIGN — Formwork

## Overview
- Audience: owners and developers in Hale Quay commissioning a new build or shell fit-out.
- Single CTA: Book a walk
- Emotion: a yard that already started — crew on site, orange as kit, not decoration
- Create this feeling through:
  - Orange ribbon that shears the top-left of the header (`action-primary` plate, wordmark on it)
  - Hoarding-scale two-word display (`text-display`, `font-display`) over a faint line-city
  - One full-width crew photograph as the hero plate, not a stock collage
  - Blaze used on the ribbon, primary buttons, one service card, two why-us tiles — nowhere else as a flood

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Yard-sheet contractor
- Signature element: orange ribbon header + hoarding two-word display + crew plate with 01 / 03 rail

## Colors (semantic)
- surface-page / paper: #FFFFFF
- surface-mist: #F5F5F6 — section bands only
- surface-ink / night: #111111 — dark CTA band only
- text-primary / ink: #121212
- text-secondary / steel: #5A5A62
- text-on-blaze: #FFFFFF
- text-on-ink: #F4F4F2
- border-default / line: #E6E6E8
- action-primary / blaze: #F15A22 — ribbon, CTAs, one service card, two why-us tiles
- action-primary-deep: #D44814 — hover fill
- Usage:
  - Blaze is kit colour (vests, ribbon, buttons). Never a full-page background.
  - Night is the join-the-yard band only.
  - Mist only under services / journal so paper stays paper.

## Typography
- Display: Barlow Condensed — H1/H2/wordmark (700/800)
- Body: Public Sans — nav, body, cards
- Label: IBM Plex Mono — kickers, 01/03, dates
- Scale: display clamp(3.15rem, 12vw, 7.4rem) / 3xl clamp(2rem, 4vw, 2.85rem) / xl 1.2rem / base 1.02rem / sm 0.82rem / xs 0.7rem
- Rules: display leading 0.86, tracking −0.02em; body 1.58 / 68ch; labels 0.12em uppercase

## Space
- section-y: clamp(4.25rem, 8vw, 6.75rem)
- wrap: min(1140px, 100% − 2.5rem)
- gap: 8 / 12 / 16 / 24 / 32 / 48

## Layout and responsiveness
### Compact (< ~720px)
- Single column; ribbon becomes a full-width top bar; nav in a drawer; hero type stacks over quote; cards 1-up; team 2-up
### Medium (~720–1060px)
- Services 2×2; why-us tiles + photo stack; team 2×2
### Expanded (≥ ~1060px)
- Header: orange shear left, links centre, phone + Book a walk right
- Hero: display left / quote right, crew plate full bleed of wrap, 01/03 on the right rail
- Why-us: 2×2 tiles left, site photo right

## Shape & elevation
- Cards: 4px (not 16px)
- Buttons: 4px (not pills — this is kit, not app chrome)
- Photos: 4px, 1px ink @ 8% outline
- Shadow: one soft lift on hover only (`0 12px 28px` ink @ 8%)

## Components
### Buttons
- Primary: `action-primary` + `text-on-blaze` + 4px; hover `action-primary-deep`; focus 2px ink ring offset 2px; active scale 0.97; disabled 40% opacity
- Ghost: ink hairline, paper fill; hover mist
- One primary per view
### Nav
- Wordmark on blaze plate; links `text-secondary`; compact hamburger ≥44px; Book a walk is the only verb
### Service cards
- Photo 4:3, title + 18-word note, blaze arrow chip; middle-left card inverts to blaze fill
- Four cards because the trade list is four trades — not a generic trio
### Why-us tiles
- 2×2: blaze / mist / mist / night. Icon 20px stroke. Do not add a fifth.
### Team cards
- Cropped portrait, name, role in `label`; no social icons
### Journal cards
- Photo 16:10, title, byline + date in `label`

## Motion
- Purpose: hover lift and drawer open only
- duration 220ms; ease cubic-bezier(0.22, 1, 0.36, 1)
- reveal: none on first paint (sheet, not theatre)
- reduced-motion: no transform, colour only

## Iconography
- Inline SVG, 1.75px stroke, 20px. One set. No emoji. Play triangle optically nudged +1px.

## Content
- Sentence case headings except the hoarding H1 (title case two words)
- Buttons start with a verb: Book a walk / See the yard
- Desk: desk@formwork.example · 020 7946 0042 (fictional)
- City: Hale Quay. No real contractor names.

## Ban list
- BuildGo, (215) 555-0114, Mezario, Framer, Webflow
- Inter / Roboto display; Syne, Sora, Epilogue, Instrument Sans
- Purple gradients, 16px radius everywhere, three equal icon cards as the only pattern
- Real contractor brands, celebrity faces, watermarks

## Accessibility
- White on blaze and on-ink contrast
- Visible 2px ink focus; compact hits ≥44px
- Reduced motion honored

## Plan gate
- Subject: mid-size building contractor
- Uniqueness: ribbon + hoarding display + crew plate — not a transferable SaaS shell
- Default-cluster: blaze is safety kit, not terracotta editorial
