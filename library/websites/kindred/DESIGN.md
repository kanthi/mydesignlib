# Kindred — Design System Specification

## Brand Overview
**Kindred** is an umbrella technology collective crafting calm, intentional digital products for the rhythm of modern family life. Rooted in dignity, patience, and generational care, Kindred builds enduring tools across parenting, co-parenting coordination, household scheduling, and family communication.

## Visual Tone & Principles
- **Editorial Warmth:** High-contrast editorial display serif (`Cormorant Garamond` / `Playfair Display`) paired with clean geometric sans (`DM Sans`).
- **Warm Tactile Canvas:** Warm linen background (`#F8F4EE`), deep rich plum ink (`#421721`), vibrant peach/coral accents (`#FDA76E` and `#FCAB72`), and a calming taupe-greige section backdrop (`#E6DED5`).
- **Authentic Candid Photography:** Real, candid human photography of everyday family life (cooking, laughing, playing outdoors, walking to school) framed as corner bookends and full-bleed split cards.
- **50/50 Split Pastel Product Cards:** Curated four-product portfolio displayed in 50/50 horizontal split cards pairing real photography with muted pastel color blocks (slate blue `#A7AEBA`, sage green `#B0B490`, dusty mauve `#C9ACAA`, and soft butter yellow `#F5E795`).

---

## Design Tokens

### Color Palette
```css
:root {
  /* Canvas & Ink */
  --color-canvas: #F8F4EE;         /* Warm pale linen canvas */
  --color-ink: #421721;            /* Deep plum ink for text, rules, and borders */
  --color-peach-card: #FDA76E;     /* Warm apricot-peach for About card */
  --color-brands-bg: #E6DED5;      /* Warm taupe-greige canvas for Brands section */
  --color-careers-bg: #FCAB72;     /* Warm apricot-coral for Join Our Team banner */
  --color-footer-bg: #FAF6F1;      /* Clean neutral linen footer */

  /* Brand Cards Pastel Themes */
  --color-card-blue: #A7AEBA;      /* HearthCare: Slate Blue */
  --color-card-green: #B0B490;     /* Nook: Sage Green */
  --color-card-mauve: #C9ACAA;     /* KinLink: Dusty Mauve */
  --color-card-yellow: #F5E795;    /* RouteCare: Soft Butter Yellow */

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
}
```

### Typography Scale
- **Display Serif:** `Cormorant Garamond`, `Playfair Display`, serif
  - Hero Headline: `clamp(52px, 6.2vw, 84px)`, `line-height: 1.12`
  - Section Headings: `clamp(40px, 4.4vw, 58px)`, `line-height: 1.18`
  - Product Card Headings: `26px`, `line-height: 1.28`
- **Body Sans:** `DM Sans`, -apple-system, sans-serif
  - Kickers: `13px`, uppercase, `0.12em` letter-spacing with leading horizontal rule `—`
  - Body Text: `17px`, `line-height: 1.6`
  - Navigation & Buttons: `14px`–`15px`, `font-weight: 500`

---

## Component Architecture

1. **Global Header:**
   - Left: Wordmark in serif (`Kindred`).
   - Center: Inline navigation (`About`, `Brands`, `Careers`).
   - Right: "View Open Roles" button with 1px plum border and solid linen fill.

2. **Hero Display with Real Corner Photo Framing:**
   - Top-left photo: Mother carrying daughter on back laughing outdoors (`border-radius: 0 16px 16px 0`).
   - Top-right photo: Parents and daughter baking pizza in kitchen (`border-radius: 0 0 0 16px`).
   - Center headline: "We believe in / putting families first" in 80px display serif.
   - Lead copy block: 1.5px vertical plum rule with indented paragraph and dual inline text links with filled circular arrow badges (`↗`).
   - Right photo: Portrait tile of father carrying child on shoulders with smiling grandmother.

3. **About Section (Two Equal Cards):**
   - Left card: Father and son playing soccer on green grass (`border-radius: 18px`).
   - Right card: Solid `#FDA76E` peach card with `— ABOUT` kicker, 52px serif headline ("Working in harmony with families to simplify daily life"), and thoughtful body paragraph.

4. **Brands Section (Warm Taupe `#E6DED5`):**
   - Header with `— BRANDS` kicker and two-column layout.
   - 2x2 grid of 50/50 split cards pairing candid photos with solid pastel color blocks:
     - **HearthCare**: Slate Blue (`#A7AEBA`) — "The world's leading co-parenting app"
     - **Nook**: Sage Green (`#B0B490`) — "The leading family organization app"
     - **KinLink**: Dusty Mauve (`#C9ACAA`) — "The top global family communication & coordination app"
     - **RouteCare**: Soft Yellow (`#F5E795`) — "The fast & simple way to create personalized parenting schedules"
   - Each card features a bottom divider with brand wordmark and circular arrow badge `↗`.

5. **Careers Section (#FCAB72 Apricot-Peach):**
   - Centered "Join our Team" headline and subhead with `Open Roles ↗` link button.
   - Horizontal team photo strip (`team-stairs.jpg`, `team-event.jpg`, `team-chat.jpg`).
   - 8 pagination dots.

6. **Global Footer (#FAF6F1):**
   - Columns for Brands, Contact, and geometric optical pinwheel SVG brand mark.
   - Bottom row with copyright, Site Credits link, and LinkedIn icon.
