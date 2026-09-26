# Rebuild prompt — Brinekeep (`brinekeep`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/brinekeep/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Atlantic salt-keep construction study — Three.js clip-plane build, time-of-day and weather, salt pointer trail, editorial prospectus.

## Title
Brinekeep — The keep that builds with the tide

## Description meta
Fictional North Atlantic salt-works keep. A Three.js construction study: clip-plane build, weather, and a prospectus for Skerry Holm.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Newsreader", "Times New Roman", serif;
  --font-body: "Source Serif 4", Georgia, serif;
  --font-label: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #e6e1d4;
  --surface-ink: #12181c;
  --text-primary: #161d22;
  --text-on-ink: #e8e2d4;
  --text-secondary: #5c6870;
  --border-default: #c4bdaa;
  --action-primary: #1f6f68;
  --copper: #c56a3a;
  --lantern: #e0b25a;
  --fog: #7a8b94;
  --text-display: clamp(3.2rem, 8vw, 6.4rem);
  --text-3xl: clamp(2.1rem, 4vw, 3.1rem);
  --text-2xl: clamp(1.6rem, 2.6vw, 2.1rem);
  --text-xl: 1.35rem;
  --text-base: 1.05rem;
  --text-sm: 0.82rem;
  --text-xs: 0.68rem;
  --leading-body: 1.62;
  --section-y: clamp(4.5rem, 10vw, 8rem);
  --wrap: min(1180px, 100% - 2.5rem);
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to writing → #chapters
- header .mast
  - a: Brinekeep → #top
  - nav .mast-nav “Chapters”
    - a: Method → #method
    - a: Stages → #stages
    - a: Weather → #weather
    - a: Request a berth → mailto:hello@brinekeep.example
- section #top .study “Construction study”
  - p: FRAME / 028 · SKERRY HOLM
  - p: “The viewpoint never leaves the skerry. Stone, timber and copper rise from the tide line until the lantern holds.”
  - p: 0%
  - p: Space play · R rebuild · T time · W weather · C centre
  - button: Play
  - button: Morning
  - button: Noon
  - button: Sunset
  - button: Night
  - button: Clear
  - button: Spray
  - button: Storm
  - button: Snow
  - button: Rebuild
- main #chapters
  - section #method .band
    - p: 01 — The tide line
    - h2: Everything exists from the first frame.
    - p: A plane faces the sea and travels up the keep. Below it, work is finished. Above it, only scaffolding — always one course ahead of the masonry.
    - p: Brinekeep is a fictional salt-works and signal hold on Skerry Holm. The model is not a mesh file. Granite, copper pans, timber gallery and lantern are assembled from a small set of prisms, rings and boxes, then clipped by that single plane. Drag to orbit. The wheel zooms. Double-click recentres.
    - figure .plate
      - figcaption: Plinth — granite courses above the surge
  - section #stages .band
    - p: 02 — Five stages
    - h2: Four and a half seconds of weather-allowed work.
    - article
      - p: 00 Reidy
      - h3: Ready
      - p: Survey marks on wet stone. The plane sits at the tide line. Scaffolding already stands.
    - article
      - p: 01 Stein
      - h3: Granite
      - p: An octagonal plinth and the drum. Courses clip solid because a cap fills the section.
    - article
      - p: 02 Timmer
      - h3: Timber
      - p: A gallery ring and posts. Pine grain is scaled in world units so a brace does not read as a beam.
    - article
      - p: 03 Koparr
      - h3: Copper
      - p: Eight evaporating pans and the lantern house. Verdigris is a metal, not a button colour.
  - section #weather .band
    - figure .plate
      - figcaption: Pans — brine held for the wind
    - p: 03 — Weather is one system
    - h2: Spray, then storm, then snow that stays.
    - p: Spray is rain leaned toward the sea. Storm is the same pool drawn in full, falling faster, slanting harder, with lightning on a light of its own. Thunder — if you imagine it — arrives late. Snow builds a pack on the skerry instead of resetting every flake.
    - p: Salt motes follow the pointer by distance, not by the clock, so a flick and a crawl draw the same ribbon. On a still hand they breathe. Touch devices keep the trail parked.
  - section .band
    - p: 04 — Afterlight
    - h2: The lantern is the last course.
    - p: Night is not a filter. The sun drops, the fog pulls in, and the glass in the octagon begins to carry its own heat. The keep does not glow along the silhouette — only the house that is meant to burn.
    - p: This is a sample in a private library. Names, the holm, and the berth list are invented. Mail goes to hello@brinekeep.example.
    - figure .plate
      - figcaption: Lantern — oil, salt, eight panes
  - section #berth .cta-band
    - p: Berth
    - h2: Come when the plane has reached the lantern.
    - p: Ninety minutes on the holm. You watch one rebuild, walk the gallery, and leave with the smell of copper and wet granite. Capacity is four.
    - p: Request a berth
- footer .site.wrap
  - a: hello@brinekeep.example → mailto:hello@brinekeep.example

## Images in the page
- `plate-spray.jpg — Granite plinth of the keep standing in Atlantic spray and kelp`
- `plate-pans.jpg — Circular copper brine pans on a granite terrace at dusk`
- `plate-lantern.jpg — Interior of the octagonal copper lantern house with an oil lamp and salt on the glass`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `plate-lantern.jpg`
- `plate-pans.jpg`
- `plate-spray.jpg`
- `preview.jpg`
- `tex-copper.jpg`
- `tex-granite.jpg`
- `tex-pine.jpg`
- `three.module.js`
- `world.js`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
