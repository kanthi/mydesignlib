# Rebuild prompt — Wale (`wale`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: system · Product
- Folder: `library/systems/wale/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Footer-only sock-shop specimen — orange field, serif invite, three uppercase columns, giant cropped wordmark.

## Title
Wale — Footer specimen

## Description meta
Footer-only specimen for a fictional sock shop. Orange field, serif invite, three link columns, giant cropped wordmark.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow+Condensed:wght@500;600&family=Fraunces:opsz,wght@9..144,500&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-haul: #e85a32;
  --text-primary: #111111;
  --font-invite: "Fraunces", "Iowan Old Style", Georgia, serif;
  --font-ui: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-word: "Archivo Black", "Arial Black", sans-serif;
  --wrap: min(1120px, 100% - 3rem);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- p: Footer specimen · fictional sock shop
- footer
  - p: Stay in the know
  - button: EN
  - nav “Shop”
    - h2: Shop
    - ul
      - li: Socks
      - li: Sock packs
      - li: New releases
      - li: Gift card
      - li: Sale
  - nav “Explore”
    - h2: Explore
    - ul
      - li: Journal
      - li: Reviews
      - li: About us
      - li: Wholesale
      - li: Store locator
      - li: Custom socks
  - nav “Support”
    - h2: Support
    - ul
      - li: Help centre
      - li: Track your order
      - li: Returns/exchanges
      - li: Warranty policy
  - p: Wale

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
