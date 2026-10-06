# Rebuild prompt — Kindred (`kindred`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Wellness
- Folder: `library/websites/kindred/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Faithful editorial serif recreation on warm linen canvas with candid family photography corner bookends, 1px plum rule callouts, peach About card, 50/50 split pastel product cards, and a warm coral team showcase.

## Title
Kindred — Putting Families First

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Colors */
  --color-canvas: #F8F4EE;
  --color-ink: #421721;
  --color-peach-card: #FDA76E;
  --color-brands-bg: #E6DED5;
  --color-careers-bg: #FCAB72;
  --color-footer-bg: #FAF6F1;
  /* Brand Card Pastel Colors */
  --color-card-blue: #A7AEBA;
  --color-card-green: #B0B490;
  --color-card-mauve: #C9ACAA;
  --color-card-yellow: #F5E795;
  /* Typography */
  --font-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-sans: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Kindred → #hero
  - nav “Primary Navigation”
    - ul .nav-links
      - li: About
      - li: Brands
      - li: Careers
  - a: View Open Roles → #careers
- section #hero .hero-section
  - h1: We believe in putting families first
  - p: As a global technology platform, we're building solutions that foster connection, organization, and peace-of-mind throughout key stages and milestones of family life.
  - a: Our Brands ↗ → #brands
  - a: Open Roles ↗ → #careers
- section #about .about-section
  - h2: Working in harmony with families to simplify daily life
  - p: We believe technology can champion deeper connections within families, strengthen bonds, and improve communication. At Kindred, we empower families with tools that help them navigate the challenges of modern life with confidence, calm, and ease.
- section #brands .brands-section
  - h2: Get to know our family of brands
  - p: Our brands provide a range of solutions to streamline daily routines, offer resources and guidance during challenging times, and promote overall peace-of-mind.
  - article .brand-split-card
    - h3: The world's leading co-parenting app
  - article .brand-split-card
    - h3: The leading family organization app
  - article .brand-split-card
    - h3: The top global family communication & coordination app
  - article .brand-split-card
    - h3: The fast & simple way to create personalized parenting schedules
- section #careers .careers-section
  - h2: Join our Team
  - p: Be a part of our journey to build powerful tools that support daily life for modern families.
  - a: Open Roles ↗ → #careers
- footer .site-footer
  - ul .footer-links-list
    - li: HearthCare
    - li: Nook
    - li: KinLink
    - li: RouteCare
  - ul .footer-links-list
    - li: hello@kindredcare.co
  - a: Site Credits → #hero
  - a: in → https://linkedin.com

## Images in the page
- `assets/hero-left.jpg — Mother carrying daughter on her back outdoors laughing`
- `assets/hero-right.jpg — Parents and young daughter baking homemade pizza together in sunlit kitchen`
- `assets/lead-portrait.jpg — Father carrying toddler on shoulders with grandmother smiling in summer sunlight`
- `assets/about-soccer.jpg — Father in plaid shirt and son playing soccer together on green park lawn`
- `assets/brand-1-cooking.jpg — Father and young daughter wearing striped aprons baking together at kitchen table`
- `assets/brand-2-studying.jpg — Mother and daughter sitting together smiling while reviewing school tablet`
- `assets/brand-3-hugging.jpg — Mother and laughing daughter in plaid shirt embracing warmly outdoors`
- `assets/brand-4-backpacks.jpg — Father and child carrying backpacks walking up sunny stone stairs`
- `assets/team-stairs.jpg — Kindred team members gathered together for group photo on wide wooden stairs`
- `assets/team-event.jpg — Two colleagues smiling warmly at company summit welcome table`
- `assets/team-chat.jpg — Colleagues laughing and chatting over coffee in bright modern office`
- `assets/brand-mark.svg — Kindred optical geometric brand mark`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/about-soccer.jpg`
- `assets/brand-1-cooking.jpg`
- `assets/brand-2-studying.jpg`
- `assets/brand-3-hugging.jpg`
- `assets/brand-4-backpacks.jpg`
- `assets/brand-mark.svg`
- `assets/hero-left.jpg`
- `assets/hero-right.jpg`
- `assets/lead-portrait.jpg`
- `assets/team-chat.jpg`
- `assets/team-event.jpg`
- `assets/team-stairs.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
