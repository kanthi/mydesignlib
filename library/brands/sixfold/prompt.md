# Rebuild prompt — Sixfold (`sixfold`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/sixfold/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Studio lookbook of six product identities — Quarto notes, Daybreak skies, Dram color, Sightline red, Baylot parking, Alto loft.

## Title
Sixfold — Six product identities

## Description meta
Fictional lookbook of six product identities: Quarto, Daybreak, Dram, Sightline, Baylot, Alto.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=DM+Sans:wght@400;600;700&family=Figtree:wght@500;600;700&family=Fredoka:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=Instrument+Sans:wght@400;600;700&family=Manrope:wght@500;600;700;800&family=Outfit:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --page: #EDEDED;
  --ink: #141414;
  --muted: #6A6A6A;
  --line: #D4D4D4;
  --paper: #FFFFFF;
  --font: "Figtree", system-ui, sans-serif;
  --q-sky: #2F6BFF; --q-lime: #C6F04C; --q-solar: #FF8A32; --q-bloom: #FF5EA0; --q-paper: #FFF7F0;
  --db-ink: #0B0B0E; --db-paper: #F4F4F6; --db-y: #F5D000; --db-o: #FF6A00; --db-p: #FF3D8A; --db-v: #7A3DFF; --db-b: #2F6BFF; --db-c: #19D0FF;
  --dr-ink: #0A0A0A; --dr-sun: #FFE14A; --dr-punch: #FF4DA1; --dr-leaf: #7CFF4D; --dr-ice: #3D8CFF;
  --si-bright: #FF2A2A; --si-blood: #C10D0D; --si-dark: #6E0909; --si-paper: #F3F3F3;
  --ba-navy: #071A33; --ba-mint: #2FE59A; --ba-paper: #F3F7F4;
  --al-deep: #16081F; --al-violet: #6A1788; --al-mag: #E848FF; --al-paper: #F7EEFA;
  --wrap: min(1200px, 100% - 2.25rem);
  --wall: min(1240px, 100% - 1.4rem);
  --section-y: clamp(3rem, 6vw, 5rem);
  --radius: 6px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  :root { --wrap: min(1200px, 100% - 2.1rem); --wall: min(1240px, 100% - 1.1rem); }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Sixfold → #top
  - nav .nav-links “Primary”
    - a: Wall → #wall
    - a: Quarto → #quarto
    - a: Daybreak → #daybreak
    - a: Dram → #dram
    - a: Sightline → #sightline
    - a: Baylot → #baylot
    - a: Alto → #alto
  - a: Rules → #rules
  - a: Request the kit → mailto:brand@sixfold.example
- main
  - section .intro
    - p: Identity lookbook · six systems
    - h1: Six brands. No shared costume.
    - p: Sixfold is a fictional studio wall: study notes, wallpapers, a color brand, a red agency, a parking finder, and a social loft — each with its own mark and field.
  - section #wall .wall-section
    - article .board “Quarto board”
      - p: Notes, summaries, and the desk you actually keep.
      - h3: Exchange notes, summaries, and resources easily.
      - h3: Study together. Prepare better.
    - article .board “Daybreak board”
      - p: Screens made for minds that create.
      - p: Screens made for minds that create.
      - h3: Beautiful backgrounds. Limitless inspiration.
      - p: New sky dropped. Set it before the meeting.
    - article .board “Dram board”
      - p: Different with Dram.
      - p: A daily color, not a costume.
    - article .board “Sightline board”
      - p: See it clearly. Build it boldly.
      - h3: SEE IT CLEARLY BUILD IT BOLDLY
    - article .board “Baylot board”
      - p: Find an open stall. Keep moving.
      - p: Open stall, navy map, mint pin.
    - article .board “Alto board”
      - h3: ALTO
      - p: The loft where the feed actually lives.
  - section #quarto .system
    - p: Quarto · study notes
    - h2: Candy columns, pinwheel mark
    - p: Outfit wordmark. Sky, lime, solar, bloom — named like paints, used as full fields.
  - section #daybreak .system.alt
    - p: Daybreak · wallpapers
    - h2: Spectrum stripe, aurora field
    - p: Instrument Sans on ink. The horizon mark sits on black; the sky does the selling.
  - section #dram .system
    - p: Dram · daily color
    - h2: Fat capsules, Fredoka lockup
    - p: A daily color brand, not a pharmacy. Two rounded bars make the mark. Stripes never go pastel.
  - section #sightline .system.alt
    - p: Sightline · agency
    - h2: Blood stack, geometric eye
    - p: Archivo Black theses. Five reds and a paper. No grey-on-grey body on black.
  - section #baylot .system
    - p: Baylot · parking
    - h2: Navy map, mint stall
    - p: Manrope. The car glyph tiles the field. Mint is the open bay — never a full page.
  - section #alto .system.alt
    - p: Alto · social loft
    - h2: Twin loft, magenta on violet
    - p: Bebas for the stacked word. Two rotated rounded squares. Magenta is the mark, not the paragraph.
  - section #voice .system
    - p: Voice
    - h2: How each one speaks
    - article
      - h3: Quarto
      - p: Desk language. Notes, summaries, prepare. No “unlock your potential.”
    - article
      - h3: Daybreak
      - p: Short theses about the sky. The picture is the proof.
    - article
      - h3: Dram
      - p: Playful, not cute. “Different with” — then stop talking.
    - article
      - h3: Sightline
      - p: All caps, two beats. See / build. No agency adjectives.
    - article
      - h3: Baylot
      - p: Bay number, minutes, open or taken. Operators first.
    - article
      - h3: Alto
      - p: Loft, feed, hold. Magenta for the mark, quiet for the line.
  - section #rules .system.alt
    - p: Usage
    - h2: Do and don’t
    - h3: Do
    - ul
      - li: Keep each palette inside its own board
      - li: Build phones, social cards, and Aa specimens in HTML
      - li: Use the pinwheel, horizon, capsule pair, eye, car, and twin loft as drawn
      - li: One primary studio CTA: Request the kit
    - h3: Don’t
    - ul
      - li: Cite OVO, Dose, ScreenCheck, Vision Agency, Spaces, or SkyNode
      - li: Mix mint into Alto or bloom into Sightline
      - li: Use Inter as a display face or real OS app icons
      - li: Stretch a mark or outline it in a gradient
- footer
  - p: Fictional brand systems · Sample template · brand@sixfold.example

## Images in the page
- `quarto-study.jpg — Students around a table of notes`
- `daybreak-field.jpg — Figure watching aurora over a field`
- `daybreak-sky.jpg — Aurora sky used as a wallpaper`
- `dram-crowd.jpg — Friends in bright clothes at golden hour`
- `dram-jump.jpg — Person jumping against a clear sky`
- `alto-hands.jpg — Hands holding phones in magenta light`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `alto-hands.jpg`
- `daybreak-field.jpg`
- `daybreak-sky.jpg`
- `dram-crowd.jpg`
- `dram-jump.jpg`
- `index.html`
- `preview.jpg`
- `quarto-study.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
