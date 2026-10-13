# Halden

Desk-object studio. Wordmark HALDEN. Collection name Ledger. A light shop page: hairline product grid, pill controls, and two stacked hero banners.

## Palette

- Page `#F6F6F6`
- Ink `#111111`
- Hairline `#E4E4E4`
- Sale chip `#E59B3C` (white type on the chip)
- Walnut `#362C28`
- Sage `#C9D2C4`
- White cards `#FFFFFF`
- Black fill button `#111111`, white type

## Type

- Display: Inter Tight 700, uppercase, tight tracking, about 64–88px
- UI and prices: Inter 400/500
- Product names 15px, prices 13px, counts as tiny superscripts

## Mark

Hand-built tray: a thick rounded bar with a small raised lip at each end. `currentColor`. Not a letter. Lockups: horizontal, stacked, mono (`#111111`), reverse (`#F6F6F6`), app icon, favicon.

## Sections

Header, hero slider (two stacked banners, 0.6s crossfade, 5s, pause on hover), sage clock promo, best sellers (4 columns), just arrived, studio line, window banner, Ledger row, back in stock with Walnut/Maple and cart, collections, journal, details, quotes, contact pills, footer.

## Files

- `index.html` hub
- `replica/` shop homepage, `styles.css`, `shop.js`, assets, exports
- `extended/guidelines.html`, `landing.html`, `social.html`, `merch.html`, `email-signature.html`, `reveal.html`
- `extended/shared.css` tokens
- Contact `mailto:desk@halden.example` — the page does not keep a copy

## Motion

Landing: GSAP + ScrollTrigger fade-ups, 0.7s, on titles and product rows. `prefers-reduced-motion` shows the finished page and skips the hero crossfade.
