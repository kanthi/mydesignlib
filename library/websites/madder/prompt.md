# Rebuild prompt — Madder (`madder`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/madder/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Loud dye-plant bath brand — scroll-scrubbed pigment film, no video tag, range slabs, fictional press, foam type on vat teal.

## Title
Madder — Run the loudest bath of your day

## Description meta
Fictional dye-plant bath bombs from Port Silt. One sphere, a hot tap, ten loud minutes. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Anton&family=Figtree:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Anton", Impact, sans-serif;
  --font-body: "Figtree", "Helvetica Neue", sans-serif;
  --font-label: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #0a3d42;
  --text-on-film: #f3eee4;
  --text-primary: #102226;
  --text-secondary: #c9d4d2;
  --border-default: rgba(243, 238, 228, 0.28);
  --action-primary: #e23a28;
  --signal: #c6f04a;
  --plum: #5c3478;
  --text-display: clamp(4.2rem, 14vw, 11rem);
  --text-3xl: clamp(2.4rem, 6vw, 4.2rem);
  --text-xl: 1.35rem;
  --text-base: 1.05rem;
  --wrap: min(1120px, 100% - 2rem);
  --radius-pill: 999px;
  --dur: 200ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #cover
- header .mast
  - a: Madder → #cover
  - nav .mast-nav “Shop”
    - a: The vat → #range
    - a: What goes in → #why
    - a: Press → #press
    - a: Shop the vat → #shop
- section #cover .chapter
  - p: 01 / Cover · Port Silt
  - h1: Madder
  - p: Run the loudest bath of your day.
  - p: Hand-pressed spheres for people who think wellness beige is boring. Drop one in. The whole tub goes loud.
- section #why .chapter
  - p: 02 / What goes in
  - h2: A fistful of colour the second it hits the water.
  - p: Cold-pressed botanicals, mineral salts and a skin-kind fat. No synthetic dye that does not earn its place, no drying SLS, nothing tested on anyone with whiskers.
- section #range .chapter
  - p: 03 / Pick your loud
  - p: Three spheres, three moods. Choose by the day you had, not the colour you like.
  - article .slab.root
    - p: The wake-up · 01
    - h3: Root riot
    - p: Madder, bitter orange and a pepper snap. Steam goes citrus in seconds.
    - p: £9.50 · 95g
  - article .slab.weld
    - p: The sunday · 02
    - h3: Weld light
    - p: Yellow weld, lemon peel and a slow amber base. Morning fuel.
    - p: £9.50 · 95g
  - article .slab
    - p: The late one · 03
    - h3: Night vat
    - p: Plum leaf, cassis heart, not remotely subtle.
    - p: £11.00 · 118g
- section #press .chapter
  - p: 04 / As seen in
  - h2: In 120 bathrooms-worth of good shops.
  - p: Stocked in fourteen countries. Refills at every counter. The holm still has one vat.
- section #shop .chapter
  - p: 05 / Run one tonight
  - h2: Run a brighter bath.
  - p: One sphere, a hot tap and ten loud minutes. Free shipping over £30. Refills for life.
  - p: Shop the vat
  - p: hello@madder.example · Inez Cald, founder
- footer .site
  - a: hello@madder.example → mailto:hello@madder.example

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`
- `products.jpg`
- `seq/f01.jpg`
- `seq/f02.jpg`
- `seq/f03.jpg`
- `seq/f04.jpg`
- `seq/f05.jpg`
- `seq/f06.jpg`
- `seq/f07.jpg`
- `seq/f08.jpg`
- `seq/f09.jpg`
- `seq/f10.jpg`
- `seq/f11.jpg`
- `seq/f12.jpg`
- `seq/f13.jpg`
- `seq/f14.jpg`
- `seq/f15.jpg`
- `seq/f16.jpg`
- `seq/f17.jpg`
- `seq/f18.jpg`
- `seq/f19.jpg`
- `seq/f20.jpg`
- `still-mix.jpg`
- `still-root.jpg`
- `still-vat.jpg`
- `still-weld.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
