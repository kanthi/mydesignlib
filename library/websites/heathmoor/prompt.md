# Rebuild prompt — Heathmoor (`heathmoor`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/heathmoor/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Literary archive and authorial estate rendered in warm antique parchment and letterpress typography, featuring Heather Crimson accents, wind-swept thistle-down canvas particles, real-time Web Audio moorland gales, an interactive 4-volume poetry manuscript reader, 3D tactile carte-de-visite, and Yorkshire cartography telemetry.

## Title
Heathmoor — The Literary Monograph of Evelyn Heath

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Crisp Pure White Canvas & Soft Archival Card Surfaces */
  --bg-base: #ffffff;
  --bg-surface: #f9f9fb;
  --bg-surface-soft: #f4f4f6;
  --bg-card: #ffffff;
  --bg-card-hover: #fafafa;
  /* Refined Ink Lines */
  --border-ink: rgba(24, 22, 20, 0.08);
  --border-strong: rgba(24, 22, 20, 0.16);
  --border-focus: rgba(125, 24, 48, 0.45);
  /* Typography */
  --text-primary: #181614;
  --text-secondary: #524d45;
  --text-muted: #827b6f;
  /* Distinctive Victorian Botanical Accents */
  --accent-crimson: #7d1830;
  --accent-crimson-hover: #621225;
  --accent-crimson-glow: rgba(125, 24, 48, 0.18);
  --accent-gold: #b8860b;
  --accent-gold-dark: #8c6508;
  --accent-gold-glow: rgba(184, 134, 11, 0.2);
  --accent-moss: #3b4836;
  --accent-moss-light: rgba(59, 72, 54, 0.1);
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --container-max: 1240px;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .navbar
  - a: H Heathmoor ESTATE OF EVELYN HEATH → #
  - nav “Primary Navigation”
    - ul .nav-menu
      - li: Poetry
      - li: Musings
      - li: Artifact
      - li: Moorlands
      - li: Decision Path
  - button: Wind on the Heath
  - a: Archivist → #inquire
- section .hero-section
  - h1: Untamed Heather, Restless Spirit.
  - p: A solitary sanctuary inspired by the desolate moors of Yorkshire and the haunting verse of Evelyn Heath. Victorian melancholy reimagined through modern typographic restraint, warm antique parchment, and wind-swept motion.
  - a: Read Selected Works → #poetry
  - button: Listen to the Gales
- section #poetry .section
  - h2: Verses From the Solitary Ridge
  - p: Transcribed from leather-bound manuscripts penned during the biting winters of 1845–1848.
  - button: 1845 • VOL. I The Night-Wind on the Ghyll
  - button: 1846 • VOL. II No Coward Soul Is Mine
  - button: 1847 • VOL. III Remembrance of the Cold Heath
  - button: 1848 • VOL. IV Heather and Blackened Stone
  - button: Manuscript
  - button: Typeset
  - h3: The Night-Wind on the Ghyll
- section #musings .section
  - h2: Musings of a Moorland Hermit
  - p: Reflections on isolation, the wild northern landscape, and the boundary between consciousness and nature.
  - article .musing-card
    - h3: On the Loneliness of the High Crag
    - p: There is an intoxicating quietude when the fog settles so heavily upon the valley that all signs of human settlement vanish. Only the gray gritstone pillars remain, indifferent to all centuries.
  - article .musing-card
    - h3: When the Gale Rattles the Casement
    - p: The hearth fire gutters as the chimney draws like an angry beast. I have often wondered whether wind possesses memory; whether it carries the lamentations of those who walked these tracks before us.
  - article .musing-card
    - h3: Ink That Freezes Before the Stanza Ends
    - p: The quill is stiff with frost. One must breathe upon the nib every four lines to thaw the iron-gall medium. Even the words themselves feel crystallized into permanent winter.
  - article .musing-card
    - h3: Ghosts That Dwell in the Heather Roots
    - p: I have never seen an apparition in white satin; my ghosts are made of peat, wet wool, and the smell of bracken burned in early autumn. They ask for nothing except to be remembered.
- section #artifact .section
  - h2: The Carte-de-Visite Talisman
  - p: Engineered in pure CSS/SVG. Hover and tilt your cursor to witness the parallax letterpress relief and reflective gold foil shimmer across hot-pressed cotton parchment.
- section #meteorology .section
  - h2: Live Telemetry Across the High Moors
  - p: Antiquarian cartographic stream tracking the tempestuous barometric currents that dictate life and solitary creation.
- section #wizard .section
  - h2: The Path Across the Heath
  - p: Navigate your mood across the Victorian moorlands to reveal the stanza inscribed specifically for your wanderings.
  - h3: Step 1: Where does your spirit wander tonight?
  - p: Select the landscape that mirrors your present disposition.
  - h3: Step 2: What tone shall the verse evoke?
  - p: Choose the emotional current of your inquiry.
  - h3: Step 3: What element shall guide your path?
  - p: The talisman that guards you across the bog.
  - button: ← Previous
  - button: Next Step →
  - button: Walk the Heath Again
- button: ×
- button: ×
- h3: Inquire with the Archivist
- form
  - label: Scholarly Name / Affiliation
  - label: Return Post / Electronic Address
  - label: Manuscript or Stanza Inquiry
  - button: Send Sealed Dispatch →
- footer .footer
  - blockquote: “Whatever our souls are made of, his and mine are the same; and Linton’s is as different as a moonbeam from lightning.”
  - p: The literary portfolio & archival estate of Evelyn Heath. Victorian melancholy, warm antique parchment, and wind-swept moorland kinetic choreography.
  - h4: Archive Sections
  - ul .footer-links
    - li: Selected Verses
    - li: Moorland Musings
    - li: Carte-de-Visite Talisman
    - li: Atmospheric Telemetry
    - li: Decision Tree Reader
  - h4: Location & Coordinates
  - p: 53°49'48"N • 1°57'00"W Haworth Moor Ridge West Riding of Yorkshire archivist@heathmoor.example

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Professor E. Rochester, Oxford'
- input[email] placeholder='scholar@university.example'
- textarea placeholder='Regarding the unpublished drafts of winter 1848...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/wind-mist.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
