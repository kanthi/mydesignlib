# Rebuild prompt — Hexdock (`hexdock`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: component · Studio
- Folder: `library/components/hexdock/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Floating capsule dock navigation bar: obsidian pill container, acid-lime active state capsule, circular dark tool buttons, animated tooltip popovers, and annotated spec callouts.

## Title
Hexdock — Floating Capsule Navigation Web Component

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-main: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  /* Reference Colors */
  --bg-studio: #F5F5F7;
  --dock-shell: #0E0E10;
  --dock-button-disc: #1F2024;
  --dock-button-disc-hover: #292A30;
  --lime-active: #B4FF39;
  --lime-active-hover: #A5F526;
  --lime-dark-icon: #0E0E10;
  --icon-inactive: rgba(255, 255, 255, 0.72);
  --icon-inactive-hover: #FFFFFF;
  --tooltip-bg: #D8D8DC;
  --tooltip-text: #262628;
  --guide-line: rgba(0, 0, 0, 0.28);
  --guide-label: #3A3D42;
  --dur: 280ms;
  --ease-spring: cubic-bezier(0.19, 1, 0.22, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: ← Library → ../../
- main #showcaseStage .showcase-stage
  - header .top-brand-lockup
  - nav #dockBar .dock-bar “Hexdock Navigation”
    - button: Home
    - button: Services
    - button: Portfolio
    - button: Pricing
    - button: FAQ FAQ
    - button: Blog
    - button: Contact
- footer .bottom-toolbar
  - button: Guide Callouts
  - button: Dock: Center
  - button: Dark Mode
  - button: Copy Snippet

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
