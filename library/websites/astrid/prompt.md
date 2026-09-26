# Rebuild prompt — Astrid Vance (`astrid`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/astrid/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-end editorial & commercial photography portfolio — cinematic desert landscape hero, electric chartreuse typography, dot-kicker hierarchy, editorial manifesto, service accordions, photography stats bento grid, and curated photo vaults.

## Title
Astrid Vance — Editorial & Commercial Photographer

## Description meta
Official portfolio and visual atelier of Astrid Vance. Editorial portraiture, commercial campaigns, fashion, and architectural photography based in New York.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Syne:wght@700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Color Palette */
  --bg-page: #F5F1E9;
  --bg-card: #FFFFFF;
  --bg-dark: #121212;
  --bg-dark-card: #18181C;
  --bg-sand: #EDE7DC;
  --bg-yellow: #EBFF00;
  --text-main: #121212;
  --text-muted: #666666;
  --text-faded: #9E9E9E;
  --text-light: #F5F1E9;
  --text-yellow: #EBFF00;
  --border-subtle: rgba(18, 18, 18, 0.1);
  --border-dark: rgba(255, 255, 255, 0.12);
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --font-syne: 'Syne', sans-serif;
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
  --container-max: 1320px;
  --container-pad: clamp(1.25rem, 3.5vw, 2.5rem);
  --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .hero-frame
  - nav .hero-nav-bar “Main Navigation”
    - ul .hero-nav-links
      - li: HOME PROJECTS
      - li: SERVICES COLLECTIONS
      - li: ABOUT US CONTACT
  - h1: ASTRID VANCE
- main
  - section #about .about-section
    - p: It's a time where improvisation reigns, allowing me to surrender to the moment and embrace all the elements that surround me. While organization is key in my life, photography offers me freedom to escape into a different world for a few hours.
    - button: Learn More About Me
    - h3: MY VISION
    - p: Whether you're looking for professional headshots, lifestyle portraits, or creative editorial-style photos, we craft visual moments that transcend time.
    - h3: MY MISSION
    - p: Your love story and authentic truth to be told beautifully. We create warm, candid, and heartfelt photos that reflect the genuine connection between you and your world.
  - section #services .services-section
    - h2: Portraits Shoot
    - ul .service-bullets-list
      - li: • 1-2 Hour Session at a location of your choice
      - li: • Professional retouching on selected images
      - li: • High-resolution digital gallery download
    - h2: Event Photography
    - ul .service-bullets-list
      - li: • Full-day & multi-day coverage options
      - li: • Real-time press select deliverables
      - li: • Multi-camera synchronized coverage
    - h2: Commercial & Editorial
    - ul .service-bullets-list
      - li: • Full production creative direction
      - li: • Studio & on-location lookbooks
      - li: • Global commercial usage licensing
  - section #why .why-section
    - h2: Why choose me
    - p: Every frame captures raw emotion and genuine presence.
  - section #portfolio .portfolio-section
    - h2: Photography offers freedom — escape into a different world for a few hours.
    - button: See All Projects
  - section #packages .packages-section
    - h2: Flexible options
    - ul .package-features-list
      - li: ✓ 8-Hour Full Production Day
      - li: ✓ Two Lead Photographers + Assistant
      - li: ✓ 80+ Master Retouched Selections
      - li: ✓ Online High-Res Client Proofing Vault
      - li: ✓ Full Commercial & Print Rights
    - button: Book Experience
    - p: Ideal for personal branding, corporate executive portraits, and magazine editorial features.
- footer #contact .site-footer
  - h2: Let's create something unforgettable together.
  - button: Start a Conversation
- button: ✕
- h3: Book a Session
- p: Tell us about your project vision, timeline, and location.
- form #inquiryForm
  - label: Full Name
  - label: Email Address
  - label: Service Type
  - option: Portraits Shoot
  - option: Event Photography
  - option: Commercial & Editorial
  - option: Full Day Immersion ($4,099)
  - label: Project Details
  - button: Send Inquiry

## Images in the page
- `images/portrait_wheat_field.jpg — Astrid Vance in Golden Hour Field`
- `images/photographer_camera.jpg — Photographer in Action`
- `images/camera_lens.jpg — Professional Camera Lens`
- `images/portfolio_cheerful_girl.jpg — Cheerful Daylight Portrait`
- `images/portfolio_fashion_editorial.jpg — Editorial Fashion Cover`
- `images/portfolio_architecture.jpg — Architectural Monolith`
- `images/portrait_wheat_field.jpg — Golden Hour Sunset Landscape`
- `images/client_avatar.jpg — Client Reviewer`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Jane Doe'
- input[email] placeholder='jane@example.com'
- select
- textarea placeholder='Tell us about the location, mood, and target date...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `images/camera_lens.jpg`
- `images/client_avatar.jpg`
- `images/hero_desert_monument.jpg`
- `images/photographer_camera.jpg`
- `images/portfolio_architecture.jpg`
- `images/portfolio_cheerful_girl.jpg`
- `images/portfolio_couple_moody.jpg`
- `images/portfolio_fashion_editorial.jpg`
- `images/portrait_wheat_field.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
