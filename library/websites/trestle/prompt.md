# Rebuild prompt — Trestle (`trestle`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/trestle/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Square dark work desk: dotted frame, icy button, hatch band, and a divided row of Thursday desks.

## Title
Trestle

## Description meta
Trestle drafts the next step for a team. A quieter desk that joins the tools already in use.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font: "Geist", "Helvetica Neue", sans-serif;
  --surface-page: #1A1B1E;
  --surface-secondary: #38393D;
  --text-primary: #DCDCDF;
  --text-nav: #D6D7DA;
  --text-secondary: #C6C7CB;
  --text-quiet: #8E8F94;
  --text-logo: #8D8E92;
  --text-on-action: #141518;
  --text-on-secondary: #E8E8EA;
  --border-default: #2A2B2F;
  --border-badge: #3A3C42;
  --border-strong: #5A5B60;
  --action-primary: #FFFFFF;
  --action-ice: #C9E6F2;
  --mark: #E7E7E4;
  --text-display: clamp(2.5rem, 5vw, 5rem);
  --inset-x: 64px;
  --radius-none: 0;
  --dur: 160ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  color-scheme: dark;
  }

  :root {
  --inset-x: 16px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #product
- header
  - a: Trestle → #product
  - nav #site-nav “Primary”
    - a: Product → #product
    - a: Method → #method
    - a: Pricing → #pricing
    - a: Company → #company
  - button: Menu
  - a: Get started → mailto:hello@trestle.example
- main
  - section #product .frame.rail
    - p: Introducing Trestle 2, a quieter way to work
    - h1: Work that keeps the next step.
    - p: Trestle learns the way your team already works, joins the tools on the desk, and turns the busy hour into a finished page.
    - a: Start free → mailto:hello@trestle.example?subject=Start%20free
    - a: Book a desk → mailto:hello@trestle.example?subject=Book%20a%20desk
  - p: Trusted by desks that ship on Thursday
  - ul “Desks that ship on Thursday”
    - li: Calder
    - li: Hempstead
    - li: Marlow
    - li: Pell
    - li: Ostler
  - section #method .sheet.rail
    - h2: Method
    - article .row
      - p: 01
      - h3: The brief
      - p: Reads the notes already on the desk and names the job in one line.
    - article .row
      - p: 02
      - h3: The draft
      - p: Lays the next page into the tools the team already keeps open.
    - article .row
      - p: 03
      - h3: The handoff
      - p: Leaves owners, open questions, and Thursday's date on the finished page.
  - section #pricing .price.rail
    - h2: Pricing
    - article .panel
      - h3: Bench
      - p: $0
      - p: A single desk for the quiet draft.
      - a: Start free → mailto:hello@trestle.example?subject=Start%20free
    - article .panel
      - h3: Room
      - p: $24/mo
      - p: A shared room for the draft and the handoff.
      - a: Start free → mailto:hello@trestle.example?subject=Start%20free
- footer #company
  - p: Trestle · Sample template · hello@trestle.example

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
