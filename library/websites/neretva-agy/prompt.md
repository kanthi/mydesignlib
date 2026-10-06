# Rebuild prompt — Neretva (`neretva-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Travel
- Folder: `library/websites/neretva-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cinematic cultural and architectural scroll story for the historic Neretva gorge and Old Bridge. Features multi-depth transparent photographic parallax, custom Ogg serif typography, splitframe bridge separation, historical fact sheets, and an infinite looping sights carousel.

## Title
Neretva — Cultural & Architectural Guide to the Old Bridge

## Description meta
A cinematic three-screen scroll story for the historic Neretva gorge and Old Bridge.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --mx: 0; --my: 0;
  --back-opacity: 1; --back-x: 0px; --back-y: 0px; --back-scale: 0.76;
  --four-y: 10vh; --four-scale: 0.78;
  --bazaar-y: 20vh;
  --blur-px: 0px; --back-brightness: 1;
  --bazaar-blur-px: 0px; --bazaar-brightness: 1; --bazaar-saturation: 1;
  --shade-opacity: 1; --shade-z: 2;
  --shade-top-alpha: 0; --shade-mid-alpha: 0; --shade-bottom-alpha: 0;
  --blur-tint: 74, 181, 224;
  --title-y: 0px; --title-scale: 1; --title-opacity: 1;
  --bridge-x: -50%; --bridge-y: 0px; --bridge-bottom: 5vh;
  --bridge-width: 67.2vw; --bridge-scale: 1.02;
  --split-left-x: -50%;  --split-left-y: 0px;  --split-left-scale: 1;
  --split-right-x: -50%; --split-right-y: 0px; --split-right-scale: 1;
  --frame2-opacity: 0; --frame2-x: -50%; --frame2-y: -50%; --frame2-scale: 1.06;
  --intro-copy-y: 0px; --intro-copy-opacity: 1;
  --panel2-opacity: 0; --panel2-y: calc(-50% + 58px);
  --panel3-opacity: 0; --panel3-y: calc(-50% + 58px);
  --sights-opacity: 0; --sights-controls-opacity: 0; --sights-y: 0px;
  --sights-enter-x: 420vw; --sights-visibility: hidden;
  --sights-shift: 0px; --sights-scale: 1;
  --sights-top: clamp(112px, 19vh, 220px);
  --sights-screen-top: clamp(112px, 19vh, 220px);
  --ink: #111411; --paper: #fdf1e1; --shadow: rgba(0, 0, 0, 0.32);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: var(--paper);
  background: #0b1110;
  letter-spacing: 0;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- h1: MOSTAR
- p: A stone arch, emerald water, and a compact old city made for slow mornings, late light, and one unforgettable crossing.
- section .story-panel.story-panel-bridge “Old Bridge details”
  - h2: The bridge is the city's compass.
  - p: Stari Most links the banks of the Neretva and anchors a historic quarter shaped by Ottoman, Mediterranean, and European layers.
  - dt: 1566
  - dd: Original bridge completed
  - dt: 2005
  - dd: Old Bridge Area inscribed by UNESCO
- section .story-panel.story-panel-bazaar “Old town details”
  - h2: The bazaar keeps Mostar close.
  - p: Stone lanes, mosque courtyards, copper stalls, and riverside coffee stay within a short walk of Stari Most.
  - button: ↗ Open old town notes
- h3: Stari Most
- p: The stone arch over the Neretva and Mostar's main landmark.
- h3: Kujundziluk
- p: Copper shops, souvenirs, and the old bazaar lane by the bridge.
- h3: Koski Mehmed Pasha Mosque
- p: A classic minaret view back toward Stari Most and the river.
- h3: Kajtaz House
- p: A preserved residential house showing Mostar's Ottoman layers.
- h3: War Photo Exhibition
- p: A compact, moving stop for context on the city's recent history.
- button: ←
- button: →
- header .site-header
  - a: Neretva Guide → #top
  - nav .site-nav
    - a: Old Bridge → #bridge
    - a: Bazaar → #bazaar
    - a: Sights → #sights
    - a: Travel Notes → #notes
  - button: EN / BS

## Images in the page
- `https://raft-blast-61784561.figma.site/_assets/v11/16b5007d9c93971e26ffe4e0e3e37946f6bd538c.png`
- `https://raft-blast-61784561.figma.site/_assets/v11/8a7f8af50e0ce92ec2e228e7b0b4112178c51cf1.png`
- `https://raft-blast-61784561.figma.site/_assets/v11/864afe00e41e2fa20a5aa546e15cb807e0f81384.png`
- `https://raft-blast-61784561.figma.site/_assets/v11/c6a6d8ef49bca43f708aa852692942c45ec950d4.png`
- `https://raft-blast-61784561.figma.site/_assets/v11/ba75252bab2b1c510987b74837770f7bc8a6b2d4.png`
- `https://raft-blast-61784561.figma.site/_assets/v11/7536d7b60a1fce482cf6edf3f0bffd3bad5d0f8a.png`
- `https://raft-blast-61784561.figma.site/_assets/v11/392db6a6a6b98e868bd7f8d3f55bb719d51e5028.png`
- `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230438_d526b8b6-8a2e-4e3b-9993-3908acae03a7.png`
- `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230442_140bc25b-b165-4249-904a-f708bff6970e.png`
- `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260730_230448_825949c9-ccdb-4857-b4a6-e349eccc9010.png`

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
