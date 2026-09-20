# DESIGN — Stave

## Overview
- Audience: Ops leads, founders, and internal-tools buyers who currently juggle spreadsheets, a CRM, and a login page nobody can edit
- Single CTA: Start for free (secondary: Book a demo)
- Emotion: Capable afternoon — the portal is already on the table
- Create this feeling through:
  - Electric-blue canvas (`surface-frame`) holding a white rounded sheet (`surface-page`)
  - Split hero on a blue-to-paper wash; product-as-proof is a 3D-tilted HTML portal, not a photo
  - One yellow meet-band with an isometric timber-stave cube (not a folded S)
  - Figtree only; accent used for CTAs, active nav, and the hero wash — never a purple mesh
  - Monochrome fictional partner wordmarks; no real-world logos

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge; report conflicts.

## Aesthetic commitment
- Name: Blue-frame portal SaaS
- Signature element: Perspective-tilted customer portal mock + yellow isometric stave-beam meet-band

## Colors (semantic)
- surface-frame: `#2563EB` — outer canvas only; never as body text
- surface-page / paper: `#FFFFFF` — the rounded sheet
- surface-soft: `#F4F6F8` — feature wells, mock cards
- surface-hero: `#3B82F6` → `#E8F1FF` → paper — hero wash only
- surface-meet: `#F5C400` → `#FFE56A` — Meet Stave band only
- text-primary / ink: `#111827`
- text-secondary / muted: `#6B7280`
- text-on-accent: `#FFFFFF`
- text-on-meet: `#111827`
- border-default / line: `#E5E7EB`
- action-primary / accent: `#2563EB` — primary buttons, active links, mock checkmarks
- action-primary-hover: `#1D4ED8`
- status-success: `#16A34A` — checklist done only
- Usage rules:
  - Accent is CTAs, hero wash, and mock UI chrome — not full-bleed inner sections
  - Yellow is one band (Meet Stave) plus the 3D cube; never nav or body text
  - Frame blue is the page gutter; the sheet stays paper

## Typography
- Display: Figtree 700 — H1/H2/wordmark
- Body: Figtree 400–500
- Label: Figtree 600
- Scale:
  - display: `clamp(2.35rem, 5.4vw, 3.65rem)` / 700 / 1.08 / -0.035em
  - 3xl: `clamp(1.85rem, 3.4vw, 2.6rem)` / 700 / 1.15
  - 2xl: `clamp(1.45rem, 2.2vw, 1.85rem)` / 650
  - xl: 1.25rem / 600
  - lg: 1.0625rem
  - base: 1rem / 400 / 1.55
  - sm: 0.875rem
  - xs: 0.75rem
- Rules: H1 measure ~14ch on expanded; body ~46ch on problem band; `text-wrap: balance` on display; tabular-nums on metrics

## Space
- section-y: `clamp(3.75rem, 8vw, 6.25rem)`
- wrap: `min(1120px, 100% - 2.5rem)`
- sheet gutter: `clamp(0.6rem, 2vw, 1.15rem)` inside the blue frame
- gap scale: 4 / 8 / 12 / 16 / 24 / 32 / 48

## Layout and responsiveness
### Compact (< ~640px)
- Sheet radius 16px; hamburger nav; hero stacks (H1, lead, CTAs, mock); mock tilt flattens to 6deg; feature cards 1-col; pricing stacks
### Medium (~640–1023px)
- 2-col features; hero still stacked until 900px; logo strip 4-up wrap
### Expanded (≥ ~1024px)
- Pill nav; hero split (H1 left, lead+CTAs right); mock perspective `rotateX(16deg) rotateY(-10deg)`; features 2-col; pricing 3-col

## Shape & elevation
- radius-sheet: 28px (16px compact)
- radius-hero: 22px
- radius-card: 20px; radius-inner: 14px; radius-pill: 999px
- Nested: outer − padding ≈ inner (hero 22 / mock 18 / cards 14)
- One elevation: mock `0 28px 70px rgba(37, 99, 235, 0.22)`
- Feature cards: border + soft fill, no drop shadow

## Components
### Buttons
- Primary: `action-primary` fill, `text-on-accent`, `radius-pill`, Figtree 600 sm; one per view above the fold
- States: hover → `action-primary-hover` + translateY(-1px); focus → 3px accent ring; active scale 0.97; disabled 0.4
- Secondary: paper fill + `border-default`; on hero wash: translucent white + 1px white
- Ghost outline: 1px line, ink label — Book a demo, Read stories

### Nav
- Inside the sheet; logo (beam mark + “stave”) left; links; Book a demo outline + Start for free primary
- Compact: logo + Start for free + menu; drawer from top, 44px hits

### Product mock (hero)
- HTML/CSS tablet: sidebar (Dashboard / Customers / Deals / Reports) + profile, checklist, company, comments
- Fictional org **Arden**; people from `assets/*.jpg`; play chip is decorative
- Never a screenshot of a real product

### Feature cards
- Soft well, title, miniature UI, muted caption — two unequal cards (website-from-data, permissions), not a 3-up grid
- App-icon row: five fictional tools; Stave mark is the larger center tile

### Pricing
- Three plans; featured = Team with accent ring; CTA repeats Start for free

## Motion
- Purpose: stage the mock, reveal bands, cube idle
- duration 220–280ms; ease `cubic-bezier(0.22, 1, 0.36, 1)`
- reveal: opacity + translateY 16px; hover lift ≤3px
- Cube: slow 12s yaw if motion allowed
- reduced-motion: opacity only; cube static; mock tilt static

## Iconography
- Inline SVG, 1.6px stroke, 16/18/20; `currentColor`
- Mark: isometric bundle of three timber staves (beam), not an S-fold
- No emoji; no real app glyphs (Sheets / Airtable / etc.)

## Content
- Sentence case; buttons start with a verb
- Specific: “afternoon, not a quarter”; “+42,800 ops teams”; “roles, login links, field-level hide”
- No lorem; no seamless / unleash / next-gen
- Email `hello@stave.example`; fictional partners only (Northspin, Dunlin, Harborline, Rivet, Cinder, Oakline, Fathom, Meridian)

## Ban list
- Inter/Roboto as display; purple mesh; `#6366F1`
- Stacker, stacker.com, Nike, Amazon, Google, IBM, FedEx, Samsung, MAPFRE, Segment, Airtable, Google Sheets, studiobakers, framer.com
- Emoji icons; 3 equal cards as the only proof; real trademarks

## Accessibility
- Contrast: ink on paper, white on accent, ink on yellow
- Visible focus; tap ≥44px compact
- Reduced motion honored
- Skip link to `#main`
