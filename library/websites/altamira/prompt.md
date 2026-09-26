# Rebuild prompt — Altamira (`altamira`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Real Estate
- Folder: `library/websites/altamira/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Ultra-luxury 3D scrollytelling private cliffside villa experience — butter-smooth 60 FPS All-Intra video scrubbing, glassmorphic floating chrome, choreographed interior milestones, and synthesized ocean audio.

## Title
Altamira — Private Cliffside Villa • St. Lucia

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #090d12;
  --bg-surface: #0e1319;
  --bg-card: rgba(18, 24, 33, 0.7);
  --bg-glass: rgba(10, 14, 20, 0.75);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.2);
  --text-white: #ffffff;
  --text-light: #f1f5f9;
  --text-muted: #94a3b8;
  --text-dim: #64748b;
  --sand-gold: #f2eadf;
  --sand-gold-hover: #e5dacf;
  --sand-text: #12161a;
  --emerald-glow: #10b981;
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'Space Grotesk', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- h1: Altamira — Private Luxury Cliffside Villa in Saint Lucia
- header .nav-header
  - a: Altamira St. Lucia → #
  - ul .nav-links
    - li: The Villa
    - li: Architecture
    - li: Suites
    - li: Experiences
    - li: Inquire
  - a: Reserve Your Stay → #inquire
- section #scrollyStage .scrolly-container
  - h2: The Great Room
  - p: Double-height cedar beams, continuous honed volcanic basalt stone, and 18-foot motorized glass pocket doors framing the Caribbean Sea.
  - h2: The Cantilevered Terrace
  - p: Suspended 320 feet above Anse Chastanet bay with direct, unobstructed sightlines to the UNESCO World Heritage Pitons.
  - a: Explore Architecture ↓ → #architecture
  - nav #trackerNav .scrolly-tracker
- main #architecture .content-area
  - h2: Engineered to dissolve the boundary between wild volcanic ridge and secluded interior sanctuary.
  - section #suites
    - h3: Five Bespoke Sanctuaries
    - button: The Piton Master
    - button: Basalt Pavilion
    - button: Azure Perch
    - h4: The Piton Master Suite
    - p: Floating directly above the cliff line with floor-to-ceiling motorized corner glass looking directly toward Gros Piton. Includes a cantilevered heated plunge pool and solid carved stone bath.
    - ul #suiteSpecs .suite-specs-list
      - li: Private Heated Plunge Pool
      - li: Solid Basalt Soaking Tub
      - li: Italian Custom Linen Bed
      - li: Marshall Sound & Teak Desk
    - a: Inquire for Suite → #inquire
  - section #experiences
    - h3: Unrivaled Seclusion & Service
    - h4: Helipad & Yacht Mooring
    - p: Direct private 12-minute helicopter transfer from UVF International Airport directly to the estate's private cliff helipad.
    - a: Learn Details → #inquire
    - h4: Michelin Resident Chef
    - p: Daily customized seasonal tasting menus celebrating line-caught Caribbean kingfish, Saint Lucian cacao, and organic mountain flora.
    - a: Sample Menu → #inquire
    - h4: Volcanic Wine Sanctuary
    - p: A naturally cooled 650-bottle basalt stone vault curated by our estate sommelier, featuring rare Grand Crus and vintage Champagnes.
    - a: View Reserve List → #inquire
  - section #inquire
    - h3: Experience Altamira Firsthand
    - p: Villa Altamira is booked exclusively as an all-inclusive private estate buyout. Full residency includes dedicated butler, private executive chef, full staff, and marine transfers.
    - form #estateInquiryForm
      - label: Check-in
      - label: Guests
      - label: Full Name
      - label: Email or Family Office Contact
      - button: Request Private Dates & Brochure
- footer .site-footer
  - p: 13°51'42.8"N 61°03'21.4"W Soufrière, Saint Lucia, West Indies Private Cliffside Ridge
  - h4: Navigation
  - ul
    - li: Virtual Tour
    - li: Architecture
    - li: Suites & Floorplan
    - li: Island Amenities
  - h4: Estate Concierge
  - ul
    - li: concierge@villa-altamira.com
    - li: Helipad Coordinates
    - li: Superyacht Mooring Specs
    - li: Press & Architectural Kit
  - h4: Design Specimen
  - ul
    - li: ← Back to Design Library
    - li: View DESIGN.md
    - li: 60 FPS All-Intra Engine

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Nov 15, 2026'
- input[text]
- input[text] placeholder='Lord / Lady / Mr. / Ms.'
- input[email] placeholder='representative@office.com'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/suite-piton.jpg`
- `assets/villa-flythrough.mp4`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
