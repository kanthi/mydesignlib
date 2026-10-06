# Rebuild prompt — Serein (`serein`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/serein/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Quiet dark hero: a fern-shadowed face, a soft daisy, and a cream collection bar.

## Title
Serein — Care for a quieter morning

## Description meta
Serein is a fictional morning house for skin. Collection 01 is four steps: water, a thin oil, a green distillate, and a night cream.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Hanken+Grotesk:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Cormorant Garamond", "Iowan Old Style", Palatino, serif;
  --font-body: "Hanken Grotesk", "Avenir Next", sans-serif;
  --surface-field: #0C0A09;
  --surface-raise: #161311;
  --text-cream: #F4EFE6;
  --text-muted: #C9BFB2;
  --line: rgba(244, 239, 230, 0.35);
  --line-strong: rgba(244, 239, 230, 0.7);
  --text-display: clamp(3.15rem, 5.35vw, 5.45rem);
  --text-3xl: clamp(2.4rem, 4.4vw, 3.6rem);
  --text-ritual: clamp(1.85rem, 2.8vw, 2.55rem);
  --text-base: 1.0625rem;
  --leading-body: 1.6;
  --section-y: clamp(4.5rem, 9vw, 7rem);
  --wrap: min(1120px, calc(100% - 80px));
  --inset: clamp(18px, 2.6vw, 42px);
  --radius-pill: 999px;
  --dur: 200ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  :root { --wrap: min(1120px, calc(100% - 40px)); }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to the collection → #collection
- section #top .hero
  - header .bar
    - a: Serein → #top
    - nav .nav “Primary”
      - a: Rituals → #collection
      - a: About → #about
      - a: Journal → #journal
  - ul .stack
    - li: Quiet
    - li: Light
    - li: Leaf
    - li: Skin
  - h1: Care for a quieter morning.
  - p: A short list, pressed at dawn. Leaves, oil, and water. Skin that keeps its own light.
  - a: Explore collection → #collection
  - p: Collection 01 — 2026
- p: The house
- nav .note-links “Sections”
  - a: Rituals → #collection
  - a: About → #about
  - a: Journal → #journal
- p: Collection 01 is open. Four steps, in the order of the morning. Write if you want the next lot held.
- a: hello@serein.example → mailto:hello@serein.example
- main
  - section #collection .collection
    - header .section-head
      - p: Collection 01
      - h2: Four things. Nothing else on the shelf.
    - article #quiet .ritual.is-open
      - h3: 01 Quiet Dawn water. Cool, unscented, one rinse. Close
      - p: Drawn before the room is warm. It does not foam, and it does not scent the towel. The morning starts when the water is gone.
      - p: 40 ml · water
    - article #light .ritual
      - h3: 02 Light Thin oil. Four drops, pressed between the hands. Open
      - p: A light oil, not a coat. Pressed from the palms onto the face while the water is still there. It should disappear before you reach the door.
      - p: 30 ml · oil
    - article #leaf .ritual
      - h3: 03 Leaf Green distillate. The shade you see on the cheek. Open
      - p: A short distillate of garden leaves. Pat it where the day will hit. The color in the bottle is the color of the shade, not a dye.
      - p: 50 ml · distillate
    - article #skin .ritual
      - h3: 04 Skin Night cream. A close, not a mask. Open
      - p: The last step, and only at night. Enough to quiet the skin. Not enough to pillow the face in wax.
      - p: 45 ml · cream
  - section .still “The table”
    - figure
      - figcaption: The table · dawn oil and the night jar
  - section #about .about
    - h2: The list stays short.
    - p: Serein is a morning practice: water, a thin oil, a green distillate, and a cream for when the light goes. Nothing is added to cover the smell of the leaves.
    - p: Collection 01 is pressed in small lots. When a lot ends, this page says so. The next one does not arrive early.
    - p: hello@serein.example
  - section #journal .journal
    - p: Journal
    - h2: Notes from the window.
    - article .entry
      - h3: The shadow of a leaf
      - p: The fern stays in the window. The mark it leaves is the only pattern the house allows on skin.
    - article .entry
      - h3: Why the oil stays thin
      - p: Four drops between the hands. A heavier oil would sit on the skin and hide the water underneath.
  - section .close “Return to the collection”
    - h2: Care for a quieter morning.
    - a: Explore collection → #collection
- footer .foot
  - a: Serein → #top
  - nav “Footer”
    - a: Rituals → #collection
    - a: About → #about
    - a: Journal → #journal
  - a: hello@serein.example → mailto:hello@serein.example
  - p: Sample template · Collection 01 — 2026

## Images in the page
- `assets/face.jpg — Close portrait in warm side light, a fern shadow across the cheek, a white daisy soft at the left.`
- `assets/table.jpg — An amber oil bottle, a stone-lidded jar, and a white daisy on dark stone.`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/face.jpg`
- `assets/table.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
