# Tansy

A flower house on the coast. Baskets, stems, and the long table. Wordmark TANSY. Display word Tansy.

## Palette

- Field `#C6A40E`
- Cream `#FEF3BB`
- Paper `#F6F1D8`
- Ink `#2A2408`
- Nav pill `rgba(254, 243, 187, 0.22)` with hairline `rgba(254, 243, 187, 0.35)`

## Type

- Display: Nunito 800, tracking −0.045em, `clamp(92px, 18vw, 280px)`
- Nav wordmark: Yellowtail, about 28px
- Nav links: Nunito 700, 12px, uppercase, tracking 0.12em
- Footer and prices: Nunito 500, about 15px

## Mark

Five rounded petals around a small disc. `currentColor`. Not a letter. Lockups: horizontal, stacked, mono (`#2A2408`), reverse (`#FEF3BB`), app icon, favicon.

## Motion

The hero word is a canvas of cream specks. They ease from a loose cloud into the letter in 0.9 seconds. A pointer over the word pushes nearby specks away; they spring home in about 0.6 seconds. `prefers-reduced-motion` shows the finished word and skips the canvas. Landing discover titles and cards fade up in 0.7 seconds with GSAP ScrollTrigger.

## Files

- `index.html` hub
- `replica/` hero, discover, `styles.css`, `hero.js`, assets, exports
- `extended/guidelines.html`, `landing.html`, `social.html`, `merch.html`, `email-signature.html`, `reveal.html`
- `extended/shared.css` tokens
- Contact `mailto:desk@tansy.example` — the page does not keep a copy
