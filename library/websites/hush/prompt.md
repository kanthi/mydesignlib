# Rebuild prompt — Hush (`hush`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/hush/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Wireless ANC catalogue — sage/wine/sand colorways, full-bleed field, floating Hush One.

## Title
Hush — The room goes quiet. You stay.

## Description meta
Hush One wireless ANC headphones. Sage, Wine, and Sand. A fictional product catalogue.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@600;700;800&family=Public+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Darker Grotesque", "Arial Narrow", sans-serif;
  --font-body: "Public Sans", "Helvetica Neue", sans-serif;
  --field-sage: #647560;
  --field-wine: #744851;
  --field-sand: #816851;
  --field: var(--field-sage);
  --text-on-field: #F7F4EE;
  --text-on-field-muted: rgba(247, 244, 238, 0.68);
  --surface-page: #F3EEE6;
  --surface-ink: #161412;
  --text-primary: #161412;
  --text-secondary: #6A645C;
  --text-on-ink: #F3EEE6;
  --action-primary: #F7F4EE;
  --on-action: #161412;
  --border-on-field: rgba(247, 244, 238, 0.28);
  --focus-ring: #F7F4EE;
  --text-display: clamp(3.1rem, 7.4vw, 5.6rem);
  --text-3xl: clamp(2rem, 3.6vw, 2.85rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 1rem;
  --text-sm: 0.8125rem;
  --text-xs: 0.6875rem;
  --leading-body: 1.6;
  --section-y: clamp(4.5rem, 9vw, 7.5rem);
  --wrap: 1180px;
  --page-pad: clamp(1.2rem, 3.6vw, 2.75rem);
  --radius-pill: 999px;
  --radius-card: 18px;
  --shadow-product: 0 28px 70px rgba(0, 0, 0, 0.22);
  --dur: 240ms;
  --dur-field: 420ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #sound
- header #top .hero
  - nav .chrome “Primary”
    - a: Hush → #top
    - ul .pill
      - li: Sound
      - li: Design
      - li: Specs
      - li: Review
  - h1: The room goes quiet. You stay.
  - p: Hush One · wireless ANC
  - a: Buy → #buy
  - p: Sage colorway
- main
  - section #sound
    - figure .still.reveal
    - p: Sound
    - h2: A 32-decibel hush
    - p: Hush One reads the room 6,000 times a second and writes a quieter one. The 40 mm driver stays honest — a voice stays a voice. The HVAC does not.
    - dt: 32 dB
    - dd: Typical hush, mid-band
    - dt: 40 h
    - dd: Charge with hush on
    - dt: 6k
    - dd: Room reads each second
  - section #design
    - p: Design
    - h2: Cut for the long sit
    - p: Suede on the cups. Knit on the band. One silver hinge. No mark on the shell — the colorway is the identity.
    - figure .plate.reveal
      - figcaption: Memory foam, wrapped in matching suede. Made to disappear after the first hour.
    - figure .plate.reveal
      - figcaption: A slim knit band and a single hinge. Nothing extra on the cup.
    - button: Sage
    - button: Wine
    - button: Sand
  - section #specs .ink
    - p: Specs
    - h2: Hush One, on paper
    - table .spec-table.reveal
      - th: Model
      - td: Hush One
      - th: Weight
      - td: 248 g
      - th: Drivers
      - td: 40 mm dynamic
      - th: Hush
      - td: 32 dB typical ANC, 8 beamformed mics
      - th: Battery
      - td: 40 hours with hush on · USB-C, 10 min → 5 h
      - th: Wireless
      - td: Bluetooth 5.4, multipoint
      - th: Weather
      - td: IPX4
      - th: Colorways
      - td: Sage, Wine, Sand
  - section #review
    - figure .review-face.reveal
    - p: Review
    - blockquote: “I take the train at 7:10. Since January the carriage has been a room I chose.”
    - p: Nia Park · editor, Harbour Review
  - section #buy .ink
    - p: Buy
    - h2: Hush One
    - p: $329
    - p: Ships in 3–5 days. Thirty days to send it back if the room is still too loud.
    - form #order .reveal
      - p: Colorway
      - button: Sage
      - button: Wine
      - button: Sand
      - label: Name
      - label: Email
      - button: Buy Hush One
      - p: Hold the room. We’ll write to you at that address — this is a sample template, so no charge was taken.
    - footer
      - a: Hush → #top
      - a: hello@hush.example → mailto:hello@hush.example

## Images in the page
- `one-sage.jpg — Hush One headphones in Sage`
- `still-desk.jpg — Hush One in Sage on a pale oak desk beside a linen notebook and tea`
- `detail-cushion.jpg — Close-up of the sage suede ear cushion and hand stitching`
- `detail-band.jpg — Knit headband and brushed-silver hinge of Hush One`
- `review-face.jpg — Nia Park wearing Hush One in Sage, eyes closed`

## Fields
Keep these controls, including ids and placeholders.
- input[text] name=name
- input[email] name=email

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `detail-band.jpg`
- `detail-cushion.jpg`
- `index.html`
- `one-sage.jpg`
- `one-sand.jpg`
- `one-wine.jpg`
- `preview.jpg`
- `review-face.jpg`
- `still-desk.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
