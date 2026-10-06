# Rebuild prompt — Aeterna (`aeterna`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/aeterna/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Celestial memorial sanctuary featuring a majestic golden baroque archway portal floating in sunlit azure clouds, 3D mouse parallax, scroll camera ascension, and interactive Web Audio eternal candle chimes.

## Title
Aeterna — Where Memories Live Forever

## Description meta
Create a beautiful celestial memorial to share their story, photos, cherished moments, and celebrate their life together forever.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --sky-azure: #2c6bb2;
  --sky-deep: #11386d;
  --gold-accent: #f5d378;
  --gold-glow: rgba(245, 211, 120, 0.4);
  --text-white: #ffffff;
  --text-soft: #e2e8f0;
  --text-muted: #94a3b8;
  --card-bg: rgba(255, 255, 255, 0.92);
  --card-dark: #0f1828;
  --border-light: rgba(255, 255, 255, 0.2);
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --max-width: 1200px;
  --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #header .nav-bar
  - a: Aeterna → #
  - ul .nav-menu
    - li: How It Works
    - li: Tributes
    - li: Pricing
    - li: Support
  - a: Sign In → #create
- main
  - section #portalStage .portal-stage
    - h1: Where Memories Live Forever
    - p: Create a beautiful memorial to share their story, photos, cherished moments, and celebrate their life together.
    - a: Create Memorial → → #create
  - section #how .how-section
    - h2: How It Works
    - p: A peaceful, three-step journey to honor a life of significance.
    - h3: Create a Sacred Space
    - p: Begin with a timeless biography, significant milestones, and a collection of cherished portrait photography.
    - h3: Invite Family & Friends
    - p: Share a private link allowing loved ones from across the globe to contribute stories, voicemails, and letters.
    - h3: Light an Eternal Candle
    - p: Every visitor may leave a digital candle, preserving an unbroken flame of remembrance through future generations.
  - section #tributes .tributes-section
    - h2: Cherished Tributes
    - p: Walk through the sanctuary of lives honored by families across the world.
    - h3: Eleanor Vance Sterling
    - p: “She taught three generations that kindness was not an act, but a foundation.”
    - button: 🔥 Light Candle
    - h3: Arthur James Montgomery
    - p: “An architect of stone, and a quiet anchor in every storm.”
    - button: 🔥 Light Candle
    - h3: Clara Huang Chen
    - p: “A luminous soul who brought gardens to bloom and warmth to all she met.”
    - button: 🔥 Light Candle
  - section #pricing .pricing-section
    - h2: Preserved For Generations
    - p: No recurring subscriptions. One single gift guarantees perpetual archival preservation.
    - h3: Perpetual Sanctuary
    - p: Permanent digital memorial for a beloved family member.
    - ul .plan-list
      - li: Lifetime cloud storage preservation
      - li: Unlimited photo and story contributions
      - li: Interactive eternal candle ceremony
      - li: Private family invitation link
      - li: Custom engraved digital plaque
    - a: Create Sanctuary → #create
    - h3: Family Heritage Vault
    - p: Complete multi-generational family tree and oral history vault.
    - ul .plan-list
      - li: Up to 10 interconnected family memorials
      - li: Audio oral history voice recording storage
      - li: High-resolution heirloom document preservation
      - li: Genealogical family tree visualizer
      - li: Physical archival linen QR keepsake card
    - a: Honor Family Legacy → #create
  - section #create .cta-section
    - h2: Begin their memorial today.
    - p: Take the first step in crafting a timeless haven where their laughter, stories, and spirit remain alive.
    - form
      - button: Begin →
- footer
  - a: How It Works → #how
  - a: Tributes → #tributes
  - a: Pricing → #pricing

## Images in the page
- `assets/celestial-arch-master.webp — Celestial Golden Baroque Portal`
- `assets/portrait-eleanor.webp — Eleanor Vance Sterling`
- `assets/portrait-arthur.webp — Arthur James Montgomery`
- `assets/portrait-clara.webp — Clara Huang Chen`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder="Loved one's name..."

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/candle-glow.webp`
- `assets/celestial-arch-alpha.webp`
- `assets/celestial-arch-clean.webp`
- `assets/celestial-arch-master.webp`
- `assets/cloud-mist-front.webp`
- `assets/portrait-arthur.webp`
- `assets/portrait-clara.webp`
- `assets/portrait-eleanor.webp`
- `assets/tribute-aris.webp`
- `assets/tribute-eleanor.webp`
- `assets/tribute-marcus.webp`
- `assets/tribute-sora.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
