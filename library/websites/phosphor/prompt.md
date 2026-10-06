# Rebuild prompt — Phosphor (`phosphor`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/phosphor/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Black board of six looping diagrams: a lamp sweep, a bolt, a scan line, and a pill that writes a note.

## Title
Phosphor

## Description meta
Phosphor is a dark board where files, tasks, and a lamp turn into one note.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  color-scheme: dark;
  --surface-page: #000000;
  --surface-card: #141414;
  --surface-raise: #1c1c1c;
  --text-primary: #f3f3ee;
  --text-secondary: #8a8a84;
  --border: rgba(255, 255, 255, 0.06);
  --line: rgba(255, 255, 255, 0.2);
  --phosphor: #e6ff55;
  --on-accent: #141414;
  --font: "Manrope", ui-sans-serif, system-ui, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to board → #board
- main #board
  - h1: Phosphor
  - article #capture .card
    - h2: Capture Inputs
    - p: Files, a note, or a source. They land together.
  - article #automate .card
    - h2: Automate Tasks
    - p: When the rule is met, the next step fires.
  - article #collaborate .card.collaborate
    - h2: Collaborate in Real Time
    - p: The group shares one view of the work.
  - article #process .card.process
    - h2: Process Data
    - p: The pile is read, cleaned, and set in order.
  - article #monitor .card
    - h2: Monitor Activity
    - p: Updates, tasks, and how fast the work moves.
  - article #generate-card .card
    - p: Twelve files became one note.
    - button: Click to generate
    - h2: Generate Insights
    - p: A short report, when you ask for it.
- footer .foot
  - p: Sample template · board@phosphor.example

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
