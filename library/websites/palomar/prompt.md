# Rebuild prompt — Palomar (`palomar`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/palomar/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Keep the stack already in this folder (package.json, source, and built assets). Do not convert it to a different framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Single-viewport ambient video landing page for LLM orchestration: earth-toned cream and moss palette, fixed frosted glass navigation, dynamic announcement pill, diverse typography wordmark trust bar.

## Title
Palomar - One Unified System for LLMs

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Oswald:wght@500&family=Montserrat:wght@700&family=Roboto+Slab:wght@600&family=Raleway:wght@700&display=swap`

## Tailwind colors
Keep these color names and values.

```js
colors: {
        brand: {
          dark: '#2d3a2e',
          green: '#3d5a3e',
          light: '#f5f3ef',
          cream: '#faf8f5',
        },
      }
```

## Page outline
Reading order. Text after the colon is exact copy.
### `index.html`
- header #navbar .fixed.top-0.left-0
  - button: Solutions
  - a: Plans → #plans
  - a: News → #news
  - a: Palomar → #
  - a: Try It Free → #try
- a: Solutions → #solutions
- a: Plans → #plans
- a: News → #news
- a: Try It Free → #try
- section .relative.w-full.h-screen
  - a: Live for everyone today! Offering $1MM in credits. → #announcement
  - h1: One unified system to build, test, ship, and observe LLMs
### `src/App.tsx`
- header
  - button: Solutions
  - a: Plans → #plans
  - a: News → #news
  - a: Palomar → #
  - a: Try It Free → #try
- a: Solutions → #solutions
- a: Plans → #plans
- a: News → #news
- a: Try It Free → #try
- section
  - a: Live for everyone today! Offering $1MM in credits. → #announcement
  - h1: One unified system to build, test, ship, and observe LLMs

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `package.json`
- `preview.jpg`
- `src/App.tsx`
- `src/index.css`
- `src/main.tsx`
- `tailwind.config.js`
- `vite.config.ts`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
