# Rebuild prompt — Cineflow (`cineflow`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/cineflow/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Operating system for independent cinema (Filmbot rebrand): top IND/EX news ticker marquee, full-bleed 35mm portrait with physical film-strip sprocket stencil cutout overlay, 5-photo asymmetric indie cinema gallery (Vidiots, Davis, Nitehawk, Frida), 15-feature breakdown table, 54% vs 36% audience survey bar diagram, bold repertory website MacBook spotlight, 75% circular SVG odometer progress meter, and horizontal cultural initiatives carousel.

## Title
Cineflow — Operating System for Independent Cinema

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --f-display: 'Cinzel', serif;
  --f-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --f-mono: 'Space Mono', monospace;
  --c-bg: #0D0E12;
  --c-bg-card: #14151B;
  --c-bg-card-hover: #1A1C24;
  --c-hairline: #222530;
  --c-hairline-bright: #323646;
  --c-text: #F4EFE6;
  --c-text-muted: #8E93A0;
  --c-text-subtle: #565A68;
  --c-gold: #D4A574;
  --c-amber: #F59E0B;
  --c-red: #E63946;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - a: CINEFLOW → index.html
  - a: ← Library → ../../index.html
  - a: Festival Info → #initiatives
  - a: Contact us ↗ → #partner
- section .stage
  - h1: Ticketing for the new era of independent cinemas
  - p: More than a platform, we're your partner. Crafted in collaboration with the independent theaters and film festivals restoring cultural community.
- section .intro-section
  - h2: This is a time of rebirth for collective film culture. We empower the cinema teams leading this movement with a modern point-of-sale system designed for ease and versatility.
- section .features-section
  - h2: Seamless Suite of Features
  - p: By truly listening to cinema teams and valuing their insights, we uncover opportunities to introduce more refined solutions, easing their demanding workflows and elevating the audience experience.
  - ul .features-list
    - li: Customizable Website01
    - li: Ticket Sales & Reserved Seating02
    - li: Easy 1-Click Checkout03
    - li: Showtimes Scheduler04
    - li: Film Series & Retrospectives05
    - li: Interactive Calendar06
    - li: iPad Box Office Station07
    - li: Sales Reports & Charts08
  - ul .features-list
    - li: Memberships & Donor Tiers09
    - li: Campaigns & Promotion Codes10
    - li: Donations & Cultural Grants11
    - li: Gift Cards & Concessions12
    - li: Ticket Scanner Mobile App13
    - li: Festival Pass Extension14
    - li: 24/7 Dedicated Concierge Support15
  - h3: Moviegoers rely on theater websites
  - p: more than social media to find out about movies
- section .spotlight-section
  - h2: Bold Websites
  - p: Captivate audiences with bold immersive layouts that celebrate the art of curation through visual tracks of new releases, repertory titles, film series, retrospectives, and special events.
- section .engine-section
  - h2: Versatile Memberships
  - p: Attract a vibrant and devoted base of members through monthly and annual membership plans that reward their long-term support with tailored discounts and premium benefits.
  - h3: Increase in ticketing & F&B sales
  - p: when engaging "lapsed" customers who had not returned to the theater in the past year with automated marketing campaigns
  - h2: Smarter Promotions
  - p: Inspire audiences to return more frequently with compelling discount codes delivered through advanced marketing campaigns based on visit history and past movie attendance.
- section #initiatives .projects-section
  - h2: Initiatives & Projects
  - button: ←
  - button: →
  - article .project-card
    - h3: Lead Sponsor of AHC 2025
  - article .project-card
    - h3: Lost Films of Covid Series
  - article .project-card
    - h3: Movies Never Die
- section .quote-section
  - p: "Cineflow has been instrumental in the growth of the Davis Theater with flexible tools, dedicated support, and innovative ticketing features."
- footer #partner .footer
  - a: Festivals → #initiatives
  - a: Initiatives → #initiatives
  - a: Contact us → mailto:info@cineflow.cinema

## Images in the page
- `assets/hero_portrait.jpg — Vintage 35mm Cinema Still`
- `assets/sprocket_stencil.svg — Sprocket Stencil Overlay`
- `assets/vidiots_marquee.jpg — Vidiots Cinema Marquee`
- `assets/davis_theater.jpg — Davis Theater Interior`
- `assets/nitehawk_cinema.jpg — Nitehawk Dine-in Cinema`
- `assets/frida_cinema.jpg — The Frida Cinema Audience`
- `assets/macbook_frame.svg — Cineflow MacBook Website Interface`
- `assets/davis_theater.jpg — Audience Membership Screening`
- `assets/project_ahc.jpg — Art House Convergence`
- `assets/project_covid.jpg — Lost Films of Covid`
- `assets/project_mnd.jpg — Movies Never Die`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/conduit_lines.svg`
- `assets/davis_theater.jpg`
- `assets/frida_cinema.jpg`
- `assets/hero_cinema.jpg`
- `assets/hero_portrait.jpg`
- `assets/macbook_frame.svg`
- `assets/nitehawk_cinema.jpg`
- `assets/project_ahc.jpg`
- `assets/project_covid.jpg`
- `assets/project_festival.jpg`
- `assets/project_mnd.jpg`
- `assets/project_never_die.jpg`
- `assets/project_restoration.jpg`
- `assets/project_soundtrack.jpg`
- `assets/sprocket_stencil.svg`
- `assets/vidiots_marquee.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
