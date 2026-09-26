# Rebuild prompt — Roamio (`roamio`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Travel
- Folder: `library/websites/roamio/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Anime-sky road-trip planner with fully animated beach scene, day-dusk toggle, routes, and scroll rail storytelling.

## Title
Roamio — Travel Farther, Experience More

## Description meta
Roamio is a fictional road-trip planner: inspiring routes, unique stays, one road at a time. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --ink:#101418; --paper:#F6F3EC; --card:#fff;
  --grot:'Space Grotesk',sans-serif; --serif:'Instrument Serif',serif; --mono:'IBM Plex Mono',monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- section #scene .scene
  - a: Roamio → #top
  - nav .nlinks “Primary”
    - a: How it works → #routes
    - a: Trips → #routes
    - a: Contact → #stays
  - button: ☾ DUSK
  - a: Get started → #routes
  - button: MENU
  - a: How it works → #routes
  - a: Trips → #routes
  - a: Contact → #stays
  - h1: Travel fartherExperience more
  - p: Browse inspiring routes, discover unique places to stay, and experience the freedom of exploring the world one road at a time.
  - a: Get started → → #routes
  - p: SCROLL ↓
- main #top
  - section #routes .wrap.block
    - p: 01 — BROWSE ROUTES
    - h2: Pick a road. We'll handle the rest.
    - p: Three signature drives to start with — every route ships with stays, fuel stops, and detours worth taking.
    - p: 1,240 KM · 6 DAYS
    - h3: The Saltline Coast
    - p: Cliff roads, ferry crossings, and sunrise pull-offs from Harborlight to Dunmere.
    - p: 860 KM · 4 DAYS
    - h3: Alpine Switchbacks
    - p: High passes, lake lay-bys, and mountain huts that serve soup at noon.
    - p: 2,010 KM · 8 DAYS
    - h3: Ember Desert Line
    - p: Red sand, dark skies, and roadhouses with the best pie on the continent.
  - section #how .wrap
    - p: 02 — HOW IT WORKS
    - h2: Three steps to the horizon.
    - h3: Choose your rhythm
    - p: Slow coast or dawn-to-dusk miles? Tell Roamio your pace and we sketch the skeleton of the trip.
    - h3: Pin stays & stops
    - p: Unique cabins, beach camps, and farm stays — pre-checked for van clearance and late arrivals.
    - h3: Drive offline-ready
    - p: Maps, fuel math, and backup plans download to your dash. Signal optional from here on.
  - section #stays .wrap.block
    - p: 03 — STAYS
    - h2: Sleep somewhere worth the detour.
    - p: BEACH CAMP · SALTLINE
    - h3: Dune-light cabins
    - p: Solar, surf rinse, and a fire ring ten steps from the tide line.
    - p: FARM STAY · ALPINE
    - h3: Barn lofts & soup
    - p: Park in the meadow, eat at the long table, wake to cowbells.
    - p: “We stopped planning trips and started collecting them. Roamio's Saltline route rewired how our family does summer.”
  - section #contact .wrap
    - p: READY WHEN THE TANK IS FULL
    - h2: One road at a time.
    - a: Get started → → #top
- footer .wrap
  - a: BACK TO TOP ↑ → #top

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
