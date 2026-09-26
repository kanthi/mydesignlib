# Rebuild prompt — Presage (`presage`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · SaaS
- Folder: `library/brands/presage/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Analytics intelligence identity: five-ray dawnburst over a dotted datawave, ember-on-coal system, posters and night billboard.

## Title
Presage — Brand Identity System

## Description meta
Presage is a fictional analytics brand identity: dawnburst mark, ember-on-coal system, pattern device and applications. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --ember:#E8441B; --coal:#141414; --ice:#DCE4EC; --cream:#F7F3EC; --steel:#4A5560;
  --grot:'Space Grotesk',sans-serif; --serif:'Instrument Serif',serif; --mono:'IBM Plex Mono',monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .wrap
  - nav .nav “Primary”
    - a: Presage → #top
    - a: Mark → #mark
    - a: Color → #color
    - a: Voice → #voice
    - a: Applications → #applications
    - a: Get assets → #downloads
- main #top
  - section .wrap
    - h1: Presage
    - p: Numbers that speak first.
  - section #mark .block.wrap
    - p: 01 — The mark
    - h2: The Dawnburst Wave.
    - p: Five rays of first light over a datastream of dots. The signal, breaking before sunrise — analytics that speaks before the meeting starts.
    - p: FIG. 01 — CONSTRUCTION / 8PX GRID
    - ul .callouts
      - li: AFive rays — 9-unit strokes, round caps, 30° fan
      - li: BHorizon bar — 64 units, fully rounded
      - li: CDatawave — five 5.5-unit dots, alternating rhythm
    - p: FIG. 02 — APP ICONS
    - p: 22px radius · glyph at 62% · never on photography
    - p: FIG. 03 — DOT-ASTERISK PATTERN
  - section #color .block.wrap
    - p: 02 — Color
    - h2: Ember on coal.
    - p: A night ledger warmed by one flare. Ice fields for daylight surfaces; ember reserved for the signal.
    - p: #E8441B · flare
    - p: #141414 · field
    - p: #DCE4EC · ground
    - p: #F7F3EC · editorial
    - p: #4A5560 · annotation
  - section #voice .block.wrap
    - p: 03 — Voice
    - h2: Serious machine, irreverent mouth.
    - p: DISPLAY — SPACE GROTESK 700
    - p: Know before it shows in the numbers.
    - p: PULL-LINE — INSTRUMENT SERIF ITALIC
    - p: the reader of dashboards.
    - h3: Not another dashboard.
    - p: The reader of dashboards.
    - h3: Data that tells you something.
    - p: Presage catches the wobble before the quarter does.
    - button: Join the waitlist
    - button: Stay guessing
  - section #applications .block.wrap
    - p: 04 — Applications
    - h2: First impressions.
    - p: Your brand is the first thing backers and users judge you on. Here's what that first impression looks like — all rebuilt in CSS/SVG.
    - p: PRESAGE
    - h4: What the numbers are about to say.
    - p: Presage reads your metrics the way a night editor reads copy — flagging the sentence that will embarrass you tomorrow, tonight.
    - p: PRESAGE.EXAMPLE · SAMPLE IDENTITY
    - p: DAWN DEVICE · MARK POSTER
    - p: PRESAGE
    - h4: Built to notice what you'd miss.
    - p: Small drifts, early bends, quiet churn — surfaced with the sentence that explains them, before the review.
    - p: PRESAGE.EXAMPLE · SAMPLE IDENTITY
    - p: PRESAGE — ANALYTICS INTELLIGENCE
    - h3: Know before it shows in the numbers.
    - p: Presage watches every metric and taps your shoulder the moment the story changes — with the cause attached, not just the chart.
    - button: Join the waitlist
    - button: Stay guessing
    - p: White / Coal
    - p: Coal / Ice
    - p: White / Ember
    - p: Ember / Cream
    - a: ↓ logo-mark.svg → assets/logo-mark.svg
    - a: ↓ logo-primary.svg → assets/logo-primary.svg
- footer .wrap
  - a: Back to top ↑ → #top

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/logo-mark.svg`
- `assets/logo-primary.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
