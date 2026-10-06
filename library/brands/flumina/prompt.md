# Rebuild prompt — Flumina (`flumina`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/flumina/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Modular connectivity brand identity system and complete 9-slide investor pitch deck: 4-fold cross connector mark with concentric tangent halos, 3 app squircles, browser mockup, tote bag merchandise, and interactive 16:9 slide presentation deck with 3x3 overview.

## Title
Flumina — Brand Identity System & Pitch Deck Specimen

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas-cream: #F7F3EA;
  --color-flame-coral: #FC6142;
  --color-bubblegum-rose: #F9B2D7;
  --color-glacier-blue: #CFECF3;
  --color-carbon-black: #1B2226;
  --color-pitch-dark: #0A0D0E;
  --color-slide-bg: #EFEFEF;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --shadow-sm: 0 2px 8px rgba(27, 34, 38, 0.04);
  --shadow-md: 0 12px 32px -8px rgba(27, 34, 38, 0.08);
  --shadow-slide: 0 24px 60px -12px rgba(27, 34, 38, 0.15), 0 0 1px 1px rgba(27, 34, 38, 0.05);
  }

  :root {
  --color-canvas-cream: #F7F3EA;
  --color-flame-coral: #FC6142;
  --color-bubblegum-rose: #F9B2D7;
  --color-glacier-blue: #CFECF3;
  --color-carbon-black: #1B2226;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: Flumina PITCH DECK & BRAND → #
  - button: Pitch Deck (9 Slides)
  - button: Brand Identity
  - button: Copy Color Tokens
- main .container
  - header .hero-header
    - h1: Innovating Media for a Digital Age
    - p: Complete 9-slide investor presentation deck and modular cross-connector brand identity system.
  - section #tabDeck .pitch-deck-container
    - button: ← Prev
    - button: Next →
    - button: 3×3 Grid View
    - h2: INNOVATING MEDIA FOR A DIGITAL AGE
    - h3: +150
    - p: Media Partner
    - h3: +78
    - p: Available country
    - h3: 80k
    - p: Active Network Users
    - h4: Crafting Connections Through Content
    - h2: PRESENTATION CONTENT INDEX
    - h4: Introducing
    - p: Company origin, architecture, and core foundational team.
    - h4: Vision & Mission
    - p: Scaling modular connectivity and intelligent distribution.
    - h4: Our Statement
    - p: Commitment to transparent, performance-driven media.
    - h4: Conclusion
    - p: Strategic partnerships, capital allocation, and 2030 goals.
    - h2: PROBLEM STATEMENT
    - h4: Keeping Up with Technology
    - p: Rapid technological turnover renders traditional media pipelines obsolete.
    - h4: Finding New Revenue Streams
    - p: Ad monetization continues to compress without direct community engagement.
    - h4: Engaging and Retaining Audiences
    - p: Algorithmic noise degrades organic reader retention and attention duration.
    - p: Uncovering Truths, Sparking Conversations, and Driving Impact.
    - h2: OUR SOLUTIONS FOR LASTING IMPACT
    - h4: Embracing New Technology
    - p: Automated content pipelines powered by real-time audience telemetry.
    - h4: Boosting Audience Engagement
    - p: Hyper-personalized delivery across high-intent subscriber segments.
    - h2: MARKET OPPORTUNITY
    - p: Expanding digital publishing infrastructure and consumer attention shift.
    - p: Key opportunities in the media space
    - h2: UNIQUE VALUE PROPOSITION
    - p: Amplifying Voices, Bridging Ideas, and Inspiring Change
    - h4: Engaging Content
    - p: High-affinity editorial formats engineered for organic retention.
    - h4: Innovative Media
    - p: Modular distribution infrastructure with sub-second asset delivery.
    - h4: Amplified Narratives
    - p: Cross-channel publishing synchronized through centralized CMS APIs.
    - h4: Personalized Experiences
    - p: Individualized content streams tailored to reader behavioral telemetry.
    - h2: BUSINESS MODEL
    - h4: 01 Advertising
    - p: Premium native sponsor placements with verified reader telemetry.
    - h4: 02 Subscription
    - p: Tiered recurring memberships with exclusive executive research briefs.
    - h4: 03 Partnerships
    - p: Enterprise syndicated distribution and co-branded intellectual property.
    - p: Leveraging Tech for targeted impact
    - h2: CURATING CONTENT FOR EVERY VIEWER
    - h4: AI Personalization
    - p: Context-aware algorithmic dispatch based on reader habits.
    - h4: Audience Segmentation
    - p: Dynamic cohort clustering for high-converting newsletters.
    - h2: DIVERSE MEDIA OFFERINGS
    - p: From investigative long-form journalism to modular audio dispatches and interactive video series, Flumina syndicates across every modern digital touchpoint.
  - section #tabBrand .brand-system-section
    - h2: Flumina Identity System
    - p: Four-fold cross connector mark, responsive app squircles, web mockup, and merchandise suite.
    - p: Streamline, automate, and scale with clarity.
  - footer
    - p: Flumina Brand Identity & Pitch Deck Specimen Archive · mydesignlib

## Images in the page
- `assets/flumina-spark.svg — Spark`
- `assets/flumina-lockup.svg — Flumina Logo Lockup`
- `assets/flumina-mark.svg — Blue Icon`
- `assets/flumina-mark.svg — Orange Icon`
- `assets/flumina-mark.svg — Pink Icon`
- `assets/flumina-tote.svg — Flumina Canvas Tote Bag`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/flumina-app-icon-blue.svg`
- `assets/flumina-app-icon-orange.svg`
- `assets/flumina-app-icon-pink.svg`
- `assets/flumina-lockup.svg`
- `assets/flumina-mark.svg`
- `assets/flumina-spark.svg`
- `assets/flumina-tote.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
