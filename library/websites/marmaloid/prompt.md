# Rebuild prompt — Marmaloid (`marmaloid`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/marmaloid/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Tactile soft-body jelly playground with raw WebGL physics, real-time cleaver mesh slicing, PBD deformation, and procedural studio lighting.

## Title
Marmaloid — viscous / lab

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root{
  --ink:#121214;
  --text:#5d5e66;
  --muted:#8b8c94;
  --pill:#ffffff;
  --line:rgba(18,18,20,.07);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- h1: MARMALOID
- button: Fruit
- button: Bloom
- button: Citrus
- button: Melon
- button: Berry
- button: Hard
- button: Soft
- button: Cleaver
- button: Scale
- button: Shake
- button: Reset
- button: Tags
- button: View
- p: A soft study of viscous mass, jiggle physics, and procedural studio lighting. Pick one up, slice with the cleaver, and watch it settle.

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
