# Holt

A small privacy desk. Wordmark HOLT. Routes, a device board, and three plans. The page is a dark marketing site: a green banner, a split-ring mark, a drawn globe, and pill controls.

## Palette

- Page `#080808`
- Banner `#05754D`, banner type `#F4FFF8`
- Hairline `#1C1C1C`
- Ink `#F4F7F5`
- Muted `#A3A8A6`
- Accent `#3DDC97`
- Pale button `#E9F8F3`, label `#08110E`
- Dark pill `#161616`, border `#2A2A2A`
- Card `#101010`, border `#222222`, radius 16px
- Held line `#E7A23A`

## Type

- Inter 400 and 500
- Headlines 500, uppercase, tracking about `0.04em`, line-height `0.95`
- Hero about `clamp(40px, 4.6vw, 56px)` on wide screens
- Eyebrows 12px, accent, tracking `0.16em`
- Body 15px, muted, max about 46ch

## Mark

A split ring: a circle stroke with a gap at the top. Not a shield, not a triangle, not a letter. Mono is `#F4F7F5`. Reverse is `#080808` for the pale button. App icon is a `#05754D` field with a cream ring.

## Files

- `index.html` hub
- `replica/` full page, `styles.css`, `site.js`, assets, exports
- `extended/guidelines.html`, `landing.html`, `social.html`, `merch.html`, `email-signature.html`, `reveal.html`
- `extended/shared.css` tokens
- Contact `mailto:desk@holt.example` — the page does not keep a copy

## Motion

Globe rotation 40s linear, still under reduced motion. Landing: GSAP + ScrollTrigger fade-ups, 0.7s, on titles and cards. `prefers-reduced-motion` shows the finished page and skips the timeline. Nav panels and questions are instant.
