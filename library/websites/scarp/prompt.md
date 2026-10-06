# Rebuild prompt — Scarp (`scarp`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/scarp/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Dark rock order desk with lime telemetry: week-against-week revenue area chart, open yard tickets, and four-step book mechanics.

## Title
Area chart. Week two ends higher than week one.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --lime: #D6F34A;
  --lime-ink: #1a1a1a;
  --ink: #161616;
  --paper: #F6F5F2;
  --muted: #5C584F;
  --line: #E3E0D8;
  --cream: #F4EFE6;
  --rock-scrim: rgba(40, 32, 26, .45);
  --stone-bar: rgba(48, 38, 30, .48);
  --sheet: #ffffff;
  --stroke-lime: #3E4A12;
  --font: "Schibsted Grotesk", sans-serif;
  --gutter: 48px;
  }

  :root { --gutter: 28px; }

  :root { --gutter: 16px; }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #capabilities
- main
  - section #top .hero
    - figure .hero-figure
    - header .nav
      - a: Scarp → #top
      - nav #nav-links .nav-links “Sections”
        - a: Platform → #platform
        - a: Capabilities → #capabilities
        - a: Use → #steps
        - a: Solution → #solution
      - a: Sign in → mailto:hello@scarp.example
      - a: Get started → mailto:hello@scarp.example
      - button: Menu
    - p: Orders, read close
    - h1: Read every order before the week turns.
    - p: Scarp sets each open ticket in reading order so a short load or a moved price is caught before the week locks.
    - a: Book a demo → mailto:hello@scarp.example
    - a: Get started → mailto:hello@scarp.example
    - p: Week against week
    - p: $186,400
    - p: Six tickets still open against last week.
    - ul .ticket-list
      - li: ORD-1840$18,240
      - li: ORD-1841$9,610
      - li: ORD-1842$22,400
      - li: ORD-1843$7,880
      - li: ORD-1844$14,050
      - li: ORD-1845$11,320
    - p: Orion desk
    - p: Ione Marek Nia Brant Quill
  - section #capabilities .band
    - h2: Capabilities
    - p: (01) GET CLOSER
    - p: The week is a pile of tickets, not a single total. Scarp keeps material, yard, price, and hold on the same line, so Friday lock does not bury a ticket nobody read.
    - a: Read more → #steps
  - section #platform .platform
    - h2: Start in four steps and keep the book in sight.
    - article .specimen
      - h3: Open tickets
      - table “Open tickets”
        - th: Ticket
        - th: Yard
        - th: Material
        - th: Amount
        - td: ORD-1840
        - td: Ione
        - td: Screened lime
        - td: $18,240
        - td: ORD-1841
        - td: Marek
        - td: Base rock
        - td: $9,610
        - td: ORD-1842
        - td: Nia
        - td: Kiln lime
        - td: $22,400
        - td: ORD-1843
        - td: Brant
        - td: Drainage stone
        - td: $7,880
        - td: ORD-1844
        - td: Quill
        - td: Ag lime
        - td: $14,050
        - td: ORD-1845
        - td: Rook
        - td: Dry harbor
        - td: $11,320
    - article .specimen
      - h3: Week pace
    - article .specimen
      - h3: Average order $48,200
  - section #steps .steps
    - h2: Four steps
    - ol .step-list
      - li: 01 Open the week’s book on one desk.
      - li: 02 Read material, yard, price, and any hold.
      - li: 03 Flag a short load or a price that moved.
      - li: 04 Leave what was read when the week turns.
  - section #solution .solution
    - h2: Read every order before the week turns.
    - a: Book a demo → mailto:hello@scarp.example
- footer
  - a: Scarp → #top
  - nav .foot-links “Footer”
    - a: Platform → #platform
    - a: Capabilities → #capabilities
    - a: Use → #steps
    - a: Solution → #solution
  - a: hello@scarp.example → mailto:hello@scarp.example
  - p: Sample template

## Images in the page
- `assets/rock.jpg — Steep dark rock, warm light raking across the slope.`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/rock.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
