# Rebuild prompt — Lumenport (`lumenport`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Services
- Folder: `library/brands/lumenport/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Trade-logistics brand system — ocean blues & signal gold, geometric L-route mark, tote/tablet/tag applications, type and usage rules.

## Title
Lumenport — Brand identity system

## Description meta
Fictional trade-logistics brand system. Deep ocean blues, signal gold, geometric L-route mark, applications and type.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --navy-deep: #014a73;
  --navy: #165672;
  --ocean: #2b6377;
  --steel: #3c7382;
  --gold: #d89a00;
  --gold-bright: #f3b200;
  --ink: #0a1e2c;
  --paper: #f4f7f9;
  --muted: #5a7380;
  --white: #ffffff;
  --font: "Plus Jakarta Sans", system-ui, sans-serif;
  --display: "Space Grotesk", system-ui, sans-serif;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 220ms;
  --wrap: min(1120px, 100% - 2rem);
  --section-y: clamp(3.25rem, 6vw, 4.75rem);
  --radius: 4px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Lumenport → #top
  - nav .nav-links “Primary”
    - a: Board → #board
    - a: Mark → #mark
    - a: Color → #color
    - a: Type → #type
    - a: Voice → #voice
    - a: Rules → #rules
  - a: Applications → #applications
  - a: Brand kit → mailto:brand@lumenport.example
- main
  - section .hero
    - p: Brand identity system · 2026
    - h1: Trade clarity, signaled.
    - p: Lumenport is a fictional import and logistics brand. Deep ocean blues and signal gold mark routes, ports, and the handoff between systems — built as a complete visual identity specimen.
    - a: View identity board → #board
    - a: Color system → #color
  - section #board .board-section
    - h2: Identity board
    - p: Primary lockup, construction, applications, palette — the working face of Lumenport.
  - section #mark .system
    - p: Mark
    - h2: L-route beacon
    - p: The mark is an original geometric path: a solid L-stem, a route leg, and a square node — reading as port, path, and signal. Clear space equals half the mark height on every side.
  - section #color .system.alt
    - p: Color
    - h2: Ocean depth, signal gold
    - p: Four blues for structure and depth. Two golds for action and light. Never invert gold fields with low-contrast navy text at small sizes.
  - section #type .system
    - p: Typography
    - h2: Geometric display, human body
    - p: Space Grotesk carries the wordmark and titles. Plus Jakarta Sans handles long-form and UI.
    - h3: Display · Space Grotesk
    - p: Lumenport routes trade.
    - p: 600–700 · tracking −0.02em · titles & lockups
    - h3: Body · Plus Jakarta Sans
    - p: Clear documentation for handoffs, bay schedules, and partner portals — written for operators, not slogans.
    - p: 400–600 · 1.55 line-height · product & long copy
  - section #applications .system.alt
    - p: Applications
    - h2: Soft goods, screens, tags
    - p: Same mark language across physical and digital touchpoints — gold on navy, navy on gold.
  - section #voice .system
    - p: Voice
    - h2: How Lumenport speaks
    - p: Operators first. Short sentences. Numbers over adjectives.
    - article
      - h3: Clear
      - p: State the bay, the ETA, the handoff. Skip “seamless” and “next-gen.”
    - article
      - h3: Steady
      - p: Confidence without hype. We move freight and data — not vibes.
    - article
      - h3: Signal
      - p: One primary action per surface. Gold is the call — never decoration alone.
  - section #pattern .system.alt
    - h3: Pattern language
    - p: Staggered node grid derived from the mark’s square terminal. Use on tags, packing inserts, and empty states — gold nodes on ocean or navy only.
  - section #rules .system
    - p: Usage
    - h2: Do and don’t
    - h3: Do
    - ul
      - li: Use gold mark on navy-deep or navy fields
      - li: Keep clear space ≥ 0.5× mark height
      - li: Pair Space Grotesk titles with Jakarta body
      - li: One primary gold action per major view
      - li: Scale mark proportionally — never stretch
    - h3: Don’t
    - ul
      - li: Recolor the mark in gradients or multicolor fills
      - li: Place gold mark on gold-bright fields
      - li: Use Inter, purple, or emoji as brand marks
      - li: Outline the filled mark with thin strokes
      - li: Reference real logistics trademarks or client marks
- footer
  - p: Fictional brand system · Sample template · brand@lumenport.example

## Images in the page
- `tote.jpg — Navy tote bag on gold background`
- `tablet.jpg — Hands holding a tablet with blue screen`
- `tote.jpg — Lumenport tote mockup base`
- `tablet.jpg — Tablet mockup base`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`
- `tablet.jpg`
- `tags.jpg`
- `tote.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
