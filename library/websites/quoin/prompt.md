# Rebuild prompt — Quoin (`quoin`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/quoin/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Olive pinstripe desk with a silver sun medallion, foil-nicked cream paper, and three navy coin routes.

## Title
Quoin — The evening desk

## Description meta
Quoin is an inference desk for voice and still pictures. The slow turn is written on the evening ledger.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,500;6..96,600&family=Public+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Bodoni Moda", "Didot", "Bodoni MT", serif;
  --font-body: "Public Sans", "Avenir Next", sans-serif;
  --surface-field: #3A3D34;
  --surface-navy: #263044;
  --surface-panel: #141613;
  --surface-card: #06101E;
  --surface-paper: #E3DDD0;
  --surface-chart: #504228;
  --action-foil: #C4A56A;
  --chart-bar: #D0A34B;
  --chart-rest: #8A7A52;
  --metal: #E8E4DA;
  --text-on-paper: #161616;
  --text-muted: #8A847A;
  --text-on-paper-muted: #5E584E;
  --text-quiet: #2C4368;
  --text-display: clamp(1.85rem, 3.2vw, 3.05rem);
  --text-sheet: clamp(2.4rem, 4.4vw, 4rem);
  --section-y: clamp(4.5rem, 9vw, 7rem);
  --wrap: min(1120px, calc(100% - 2.5rem));
  --radius-sheet: 0;
  --radius-instrument: 8px;
  --radius-pill: 2px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 220ms;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #desk
- header .bar
  - a: Quoin → #desk
  - nav #nav .links “Primary”
    - a: Desk → #desk
    - a: Routes → #routes
    - a: Ledger → #ledger
    - a: Setting → #setting
  - button: Menu
  - a: Open a desk → mailto:desk@quoin.example?subject=Evening%20desk
- main #main
  - section #desk .hero
    - h1: The room does not wait.
    - p: Quoin sets each token on a live desk. Voice and still pictures share one ledger, and the slow turn is written down.
  - section #routes .band.navy.thread
    - article .sheet
      - h2: Three routes
      - p: Stay on the evening desk, keep a room of your own, or read the page where the tail is counted.
      - p: Voice & picture
      - article .card
        - h3: Desk
        - p: A warm desk already in service. Quoin holds the scale and writes the evening page.
      - article .card
        - h3: Room
        - p: The same desk, set in your rooms. The keys stay in the house.
      - article .card
        - h3: Ledger
        - p: Voice and picture share one page. The slow turn is written as a number.
  - section #ledger .band.ground.thread
    - article .sheet.ledger-paper
      - p: Evening ledger
      - h2: The slow turn is written down.
      - p: Voice and picture share one page. The tail is a number, not a rumor.
      - button: Voice
      - button: Picture
    - p: Quoin
    - article .chart
      - p: Time to first token
      - p: 42k turns
      - p: 128ms
      - p: SLO 200 msp99 318 ms
      - p: Slowest turns
      - ul #slow .nums
      - p: Last hour
      - ul #hour .nums
  - section #setting .band.navy.thread
    - p: How a turn is set
    - h2: Hear, set, release.
    - article .step
      - p: 01
      - h3: Hear
      - p: The voice in the room, or one still frame.
    - article .step
      - p: 02
      - h3: Set
      - p: Tokens land on the desk. The clock starts at the first.
    - article .step
      - p: 03
      - h3: Release
      - p: The answer returns. The tail stays on the page.
    - blockquote: “The nine o’clock read stayed inside one breath.” Hale & Morrow, night copy
  - section #close .band.ground.thread
    - article .close-sheet.sheet
      - p: Evening book
      - h2: Open the evening desk.
      - p: Write to the desk. The note opens in your mail.
      - a: Open a desk → mailto:desk@quoin.example?subject=Evening%20desk
- footer .foot
  - a: desk@quoin.example → mailto:desk@quoin.example

## Images in the page
- `assets/sun-medallion.png — Silver sun medallion`
- `assets/coin-bird.png — Silver coin engraved with a bird`
- `assets/coin-hound.png — Silver coin engraved with a hound`
- `assets/coin-wave.png — Silver coin engraved with a wave`
- `assets/sun-medallion.png`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/coin-bird.png`
- `assets/coin-hound.png`
- `assets/coin-wave.png`
- `assets/sun-medallion.png`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
