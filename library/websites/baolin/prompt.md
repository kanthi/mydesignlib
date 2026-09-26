# Rebuild prompt — Baolin (`baolin`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Restaurant
- Folder: `library/websites/baolin/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Modern Asian gastronomy & bistro — vibrant golden ochre and cinnabar red palette, traditional Chinese lattice frames, interactive stepped hero dish showcase, signature plates tasting gallery, scalloped review stamp badge, and instant table reservation concierge.

## Title
Baolin — Modern Asian Gastronomy & Bistro

## Description meta
Where tradition meets trend. Experience elevated Sichuan and Cantonese culinary artistry, flaming wok hei mastery, and handcrafted dim sum.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&family=Shojumaru&family=Zhi+Mang+Xing&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Color Palette */
  --bg-hero: #EAA628;
  --bg-hero-dark: #DF991C;
  --bg-cream: #F8F3EA;
  --bg-parchment: #F2E9DC;
  --bg-parchment-border: #E8D9C0;
  --color-cinnabar: #D3231B;
  --color-cinnabar-dark: #B31710;
  --color-cinnabar-soft: rgba(211, 35, 27, 0.08);
  --color-cinnabar-border: #D3231B;
  --color-ink: #161412;
  --color-ink-light: #2D2825;
  --color-muted: #6E645D;
  --color-gold: #E5A93C;
  --color-gold-light: #F7D070;
  /* Typography */
  --font-display: 'Shojumaru', cursive, serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-chinese: 'Zhi Mang Xing', cursive;
  /* Dimensions */
  --container-max: 1140px;
  --container-pad: clamp(1.25rem, 3.5vw, 2.5rem);
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-pill: 9999px;
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #siteHeader .site-header
  - a: 宝 BAOLIN → #hero
  - ul .nav-menu
    - li: Home
    - li: Food & Drink
    - li: Reservations
    - li: Pages ▾
    - li: Contact
  - a: Make Booking → #reserve
  - button: ☰ Menu
- section #hero .hero-section
  - h1: Where Tradition
  - a: Make A Reservation → → #reserve
- section #signature .signature-section
  - h2: Signature Plates
  - p: Famous roasted duck with crispy skin, served with pancakes.
  - p: Stir-fried beef with broccoli in oyster sauce with fresh vegetable.
  - p: Stuffed with pork, vegetables, or shrimp steamed or fried.
  - p: Famous roasted duck with crispy skin, served with pancakes.
  - button: Explore All Item →
- section #soul .soul-section
  - h2: The Soul In Every Dish
  - p: Each plate captures the heart of Chinese culinary art a harmony of flavor, color, and tradition, telling a story of culture and passion beyond food.
- section .testimonial-banner-section
  - button: ‹
  - button: ›
  - blockquote: From the first bite to the last, the food was rich, flavorful, and comforting. My new favorite spot
- section #culture .culture-section
  - h2: Where Culture Becomes Cuisine
  - p: Each dish reflects the essence of Chinese heritage blending timeless recipes with authentic spices and modern presentation. Every simmer, wok toss, and hand-folded wrapper carries four generations of mastery.
- section #reserve .reservation-section
  - h2: Table Reservation
  - p: Book your dining experience in advance for lunch, dinner, or private banquet rooms.
  - form #resForm
    - label: Guests
    - option: 2 Guests
    - option: 4 Guests
    - option: 6 Guests
    - option: 8+ Guests (Private)
    - label: Date
    - label: Time
    - option: 5:30 PM
    - option: 6:30 PM
    - option: 7:30 PM
    - option: 8:30 PM
    - label: Your Name
    - label: Email
    - label: Seating Zone
    - option: Main Dining Room
    - option: Chef's Wok Counter
    - option: Private Tea Pavilion
    - button: Confirm Instant Table Booking →
  - h3: Reservation Confirmed!
- footer .site-footer
  - p: Elevated Asian cuisine celebrating heritage recipes, wok hei fire artistry, and handcrafted artisanal dim sum.
  - h4: Opening Hours
  - ul .footer-list
    - li: Lunch: 11:30 AM – 3:00 PM
    - li: Dinner: 5:00 PM – 11:00 PM
    - li: Weekend Dim Sum: 10:00 AM
  - h4: Location
  - ul .footer-list
    - li: 188 Imperial Pavilion Way
    - li: Lantern District, Suite 400
    - li: info@baolin.example
  - h4: Reservations
  - ul .footer-list
    - li: +1 (555) 888-2390
    - li: Valet Parking Available
    - li: Private Dining Inquiries
- button: ✕
- h3: FULL MENU
- h4: CHEF'S SPECIALS
- h4: DIM SUM & SMALL PLATES
- a: Book A Table → #reserve

## Images in the page
- `images/beef_broccoli_plate.jpg — Dish detail`
- `images/beef_broccoli_plate.jpg — Kung Pao Chicken Specialty`
- `images/beef_broccoli_plate.jpg — Signature dish preview`
- `images/sushi_piece.jpg — Chopsticks lifting delicacy`
- `images/hot_sichuan_dish.jpg — Cast iron skillet dish`
- `images/crispy_pork_sizzle.jpg — Glistening glazed wok dish`
- `images/dim_sum_steamer_macro.jpg — Steaming dim sum in bamboo basket`
- `images/dining_table_feast.jpg — Dining feast ambiance`
- `images/noodle_soup_chopsticks.jpg — Chinese culinary specialty`

## Fields
Keep these controls, including ids and placeholders.
- select #guests
- input[date] #bookingDate
- select #bookingTime
- input[text] #cName placeholder='e.g. Eleanor King'
- input[email] #cEmail placeholder='eleanor@example.com'
- select #seating

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `images/bao_buns.jpg`
- `images/beef_broccoli.jpg`
- `images/beef_broccoli_plate.jpg`
- `images/cast_iron_steak.jpg`
- `images/chef_cooking.jpg`
- `images/chef_portrait.jpg`
- `images/chili_chicken_wok.jpg`
- `images/chinese_kungpao_dish.jpg`
- `images/cocktail_tea.jpg`
- `images/colorful_stirfry.jpg`
- `images/crispy_pork_sizzle.jpg`
- `images/dim_sum.jpg`
- `images/dim_sum_steamer_macro.jpg`
- `images/dining_ambiance.jpg`
- `images/dining_table_feast.jpg`
- `images/dumpling_basket.jpg`
- `images/dumplings_steamer.jpg`
- `images/flaming_wok_action.jpg`
- `images/flaming_wok_chef_fire.jpg`
- `images/gourmet_sichuan_dish.jpg`
- `images/hot_sichuan_dish.jpg`
- `images/kung_pao.jpg`
- `images/kung_pao_authentic.jpg`
- `images/kung_pao_dark.jpg`
- `images/kung_pao_sichuan_wok.jpg`
- `images/noodle_soup_chopsticks.jpg`
- `images/noodles_spicy.jpg`
- `images/peking_duck.jpg`
- `images/peking_duck_lacquered.jpg`
- `images/peking_duck_plate.jpg`
- `images/peking_duck_roast.jpg`
- `images/sichuan_chicken.jpg`
- `images/sichuan_stirfry.jpg`
- `images/sichuan_wok_chicken.jpg`
- `images/skillet_dish.jpg`
- `images/skillet_sizzle.jpg`
- `images/spicy_chili_chicken.jpg`
- `images/stir_fry_pao.jpg`
- `images/sushi_chopstick.jpg`
- `images/sushi_chopsticks_lift.png`
- `images/sushi_piece.jpg`
- `images/wok_fire.jpg`
- `images/wok_fire_flame.jpg`
- `images/wok_tossed_chili.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
