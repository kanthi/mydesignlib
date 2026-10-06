# Rebuild prompt — Vitalis (`vitalis`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/vitalis/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
3-step clinical health coaching & chronic condition care platform featuring soft sage green ground, torn paper collage accents, glassmorphic 3D icons, interactive coaching chat, and video insights library.

## Title
Vitalis — Health Coaching & Clinical Care in 3 Simple Steps

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-lawn: #619934;
  --card-sage: #DFE8DA;
  --card-cream: #F9FBF8;
  --card-dark: #162617;
  --text-green-dark: #123116;
  --text-body: #475B4A;
  --highlight-lime: #D0EE6B;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- h1: Vitalis works in 3 simple steps
- h2: Support
- p: Doctors, health coaches and fitness experts; one-to-one, all day, every day, from your device.
- h2: Resources
- p: Videos on understanding chronic recovery, and how others like you have improved their quality of life.
- h2: Health
- p: Share your exercise routines, log daily symptoms, and get personal coaching adjustments.

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
