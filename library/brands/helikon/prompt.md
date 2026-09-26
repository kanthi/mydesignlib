# Rebuild prompt — Helikon (`helikon`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/helikon/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Heritage studio identity — crimson, antique gold, forest, ember; Greek meander frames; engraving plates and a human-first voice.

## Title
Helikon — Brand identity system

## Description meta
Fictional heritage studio identity. Crimson, antique gold, forest, and ember. Greek meander frames, engraving plates, human-first voice.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Oswald:wght@500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-crimson: #B42328;
  --surface-gold: #C9A03A;
  --surface-ochre: #A88B32;
  --surface-forest: #2E5A3C;
  --surface-ember: #C86A22;
  --surface-parchment: #E8E2D4;
  --surface-smoke: #1C1B18;
  --text-primary: #1A1612;
  --text-on-field: #F4EFE3;
  --text-muted: #6A6154;
  --font-word: "Oswald", "Arial Narrow", sans-serif;
  --font-display: "Cinzel", "Times New Roman", serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --font-body: "Source Serif 4", "Georgia", serif;
  --text-display: clamp(2.4rem, 5vw, 3.6rem);
  --text-3xl: clamp(1.7rem, 3vw, 2.25rem);
  --text-xl: 1.35rem;
  --text-base: 1.05rem;
  --text-sm: 0.82rem;
  --text-xs: 0.68rem;
  --leading-body: 1.6;
  --section-y: clamp(3.5rem, 7vw, 5.5rem);
  --wrap: min(1180px, 100% - 2.5rem);
  --board-wrap: min(1280px, 100% - 1.5rem);
  --radius: 4px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }

  :root { --wrap: min(1180px, 100% - 2.3rem); --board-wrap: min(1280px, 100% - 1.15rem); }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Helikon → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Voice → #voice
    - a: Rules → #rules
  - a: Applications → #applications
  - a: Request the kit → mailto:brand@helikon.example
- main
  - section .intro
    - p: Brand identity system · Creative Co. 2018
    - h1: Memory meets method.
    - p: Helikon is a fictional studio that writes brands the way a foundry pours bronze — heat, judgment, then finish. Models draft. Designers decide.
  - section #board .board-section
    - article .cell.cell-crimson
      - p: Memory meets method. Human judgment meets machine sight.
    - article .cell.cell-parchment “Color tiles”
    - article .cell.cell-ochre
      - h2: People first. Tools second. Always.
      - p: We draft in the workshop, not the feed. A model can gather references; it cannot choose the weight of a word.
      - p: This is not costume classicism. Heritage is a method: cut once, finish slowly, and leave a lasting object.
    - article .cell.cell-parchment
      - h3: Potential typography
      - p: Inscriptional serif for theses. Condensed gothic for the lockup. Mono for the desk. A reading serif for the long line.
      - ul .type-list
        - li: Cinzel
        - li: IBM Plex Mono
        - li: Oswald
        - li: Source Serif 4
    - article .cell.apps “Application scatter”
      - p: Heritage field notes · applications
    - article .cell.collage-cell
      - p: Image room
    - article .cell.cell-smoke
      - p: The model drafts. The studio signs. Humans speak first.
    - article .cell.cell-parchment
      - h3: Stories move the room. Tools only carry the load.
      - p: A brand book should feel like an object you keep on the desk — cloth, ink, and a plate that still reads at arm’s length.
    - article .cell.cell-taupe
  - section #mark .system
    - p: Mark
    - h2: Gate lockup
    - p: Two posts and a meander lintel — a mountain pass, not a letterform stunt. Pair it with the condensed wordmark. Clear space equals half the mark height.
  - section #color .system.alt
    - p: Color
    - h2: Crimson, gold, forest, ember
    - p: Four fields, one parchment, one smoke. Ember is a tile — never a page. Gold type sits on crimson; ink sits on gold.
  - section #type .system
    - p: Typography
    - h2: Inscription and condensing
    - p: Oswald carries the lockup. Cinzel carries the thesis. Source Serif reads. Plex Mono labels the desk.
    - h3: Wordmark · Oswald
    - p: Helikon
    - p: 700 · tracking 0.06em · lockups only
    - h3: Display · Cinzel
    - p: People first. Tools second.
    - p: 600 · tracking 0.08–0.12em · theses
    - h3: Body · Source Serif 4
    - p: Write for the desk, not the feed. A sentence should still stand if the picture is taken away.
    - p: 400–600 · leading 1.6 · measure ≤ 48ch
    - h3: Utility · IBM Plex Mono
    - p: #B42328 · CREATIVE CO. 2018
    - p: 400–500 · labels, hex, meta
  - section #applications .system.alt
    - p: Applications
    - h2: Plates, cloth, and the image room
    - p: Engraving for the dark field. Oil studies for the collage. Cloth covers in gold, forest, and crimson.
  - section #voice .system
    - p: Voice
    - h2: How Helikon speaks
    - p: Human first. Specific over grand. Heritage as method, not costume.
    - article
      - h3: Human first
      - p: The model drafts. The studio signs. Never let a tool become the voice in the room.
    - article
      - h3: Specific
      - p: Name the plate, the cloth, the cut. Skip seamless, unleash, and next-gen.
    - article
      - h3: Lasting
      - p: Write as if the line will be cut in stone. Short theses. No costume antiquity.
  - section #pattern .system.alt
    - h3: Meander frame
    - p: The Greek key is structure, not garnish. Run it as a top and bottom band on crimson, gold, and parchment fields. Gold stroke on smoke. Never rainbow.
  - section #rules .system
    - p: Usage
    - h2: Do and don’t
    - h3: Do
    - ul
      - li: Set the wordmark in Oswald, all caps, with the ®
      - li: Frame color fields with the meander, not a drop shadow
      - li: Keep ember as a tile in the four-block palette
      - li: Use engraving on smoke and oil studies on parchment
      - li: Leave clear space ≥ 0.5× the gate height
    - h3: Don’t
    - ul
      - li: Stretch the wordmark or outline it in gold gradients
      - li: Place crimson type on ember or gold type on gold
      - li: Use Inter, purple fields, or emoji as marks
      - li: Fill a page with ember or turn the meander into a rainbow
      - li: Cite real studios, designer handles, or client trademarks
- footer
  - p: Fictional brand system · Sample template · brand@helikon.example

## Images in the page
- `rider.jpg — Steel engraving of a hoplite cavalryman under two moons`
- `cavalry.jpg — Cavalry study used as a poster`
- `book-art.jpg — Vertical hoplite study`
- `ridge.jpg — Ridge watch study`
- `ridge.jpg — Hoplite on a ridge at dusk`
- `lantern.jpg — Bronze lantern still life`
- `phalanx.jpg — Phalanx advancing through gold dust`
- `camp.jpg — Tent interior with hanging lamp`
- `procession.jpg — Figures in crimson cloaks on a road`
- `armor.jpg — Helmet and sword still life`
- `cavalry.jpg — Cavalry charge study`
- `book-art.jpg — Side view of a hoplite`
- `sentinel.jpg — Engraving of a hoplite standing before bronze automatons`
- `book-art.jpg — Gold cloth book with hoplite plate`
- `sentinel.jpg — Sentinel engraving used as a poster field`
- `rider.jpg — Cavalry engraving on parchment`
- `armor.jpg — Helmet still life for the image room`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `armor.jpg`
- `book-art.jpg`
- `camp.jpg`
- `cavalry.jpg`
- `index.html`
- `lantern.jpg`
- `meander.svg`
- `phalanx.jpg`
- `preview.jpg`
- `procession.jpg`
- `rider.jpg`
- `ridge.jpg`
- `sentinel.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
