# Rebuild prompt — Tecton (`tecton`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/tecton/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Architectural and spatial engineering practice template — bold geometric typography, rotating circular contact stamp badge, Lenis smooth scroll, interactive project filter gallery, and Corten steel sculptural CTA banner.

## Title
Tecton — Architects with a Different Approach

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas: #FAFAF9;
  --color-surface: #FFFFFF;
  --color-surface-subtle: #F4F5F7;
  --color-surface-dark: #0F172A;
  --color-surface-darker: #090D16;
  --color-border: #E5E7EB;
  --color-border-dark: #1E293B;
  --color-ink-primary: #0F172A;
  --color-ink-secondary: #475569;
  --color-ink-muted: #94A3B8;
  --color-ink-inverse: #F8FAFC;
  --color-cobalt: #1D4ED8;
  --color-cobalt-hover: #2563EB;
  --color-cobalt-soft: #EFF6FF;
  --color-cobalt-border: rgba(29, 78, 216, 0.25);
  --font-display: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --transition-smooth: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-spring: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  --container-max: 1320px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #navbar .header
  - nav
    - ul .nav-menu
      - li: About
      - li: Services
      - li: Projects
      - li: Process
      - li: Team
  - button: Contact Us Now
- main
  - section #hero .hero-section
    - h1: ARCHITECTS WITH DIFFERENT APPROACH
    - p: Designing with the future in mind means creating solutions that are not only innovative and functional today but also sustainable and adaptable.
  - section #about .about-section
    - h2: We design and build your vision into reality.
    - p: At Tecton, we believe that great architecture is the intersection of art and science. Our philosophy is rooted in the understanding that every project is unique, requiring a tailored approach that considers the specific needs, climate, and site morphology.
    - button: Explore Studio →
    - p: Tecton has been at the forefront of architectural and structural innovation worldwide.
    - p: From bespoke residential residences to complex monumental civic infrastructures.
    - p: Sustained institutional and private partnerships delivering enduring spatial equity.
  - section #projects .projects-section
    - h2: Take a look at our recent projects.
    - button: All
    - button: Cultural & Civic
    - button: Residential
    - button: Commercial
    - h3: The Sinuous Canopy
    - h3: Kensington Tower
    - h3: Monolith Pavilion
    - h3: Vauxhall Spire
  - section #services .services-section
    - h2: A comprehensive set of services.
    - h3: Architectural Design
    - p: Architectural design is the cornerstone of any spatial project, encompassing the creative and technical processes required to shape buildings and spaces that harmonize function, beauty, and context.
    - h3: Urban Planning and Design
    - p: Urban planning and design shapes the sustainable growth and development of cities and communities, optimizing circulation, public transit networks, and vibrant civic gathering nodes.
    - h3: Sustainable Design
    - p: Embrace the future with our sustainable design services, where bioclimatic orientation, circular timber systems, and renewable microgrids achieve verified carbon neutrality.
    - h3: Project Management
    - p: Effective project management ensures architectural commissions are executed strictly on schedule and budget, upholding rigorous contractor oversight and building envelope warranties.
    - h3: Interior Design
    - p: Interior architecture balances sensory materiality, custom millwork, and bespoke lighting choreographies to produce restorative, high-performance environments tailored for human well-being.
    - h3: Landscape Architecture
    - p: Landscape architecture integrates local biodiversity, natural stormwater sponges, and contemplative outdoor living courtyards that merge architecture seamlessly into its terrain.
  - section #consultation-banner .banner-cta-section
    - h2: Reach out for architectural solutions.
    - p: Reaching out for architectural solutions is an essential step for anyone looking to bring their vision of a building or space to life. Whether you're planning a bespoke private residence, a commercial headquarters, or a civic cultural masterplan.
    - button: Book A Consultation
  - section #team .team-section
    - h2: Meet our team of expert architects and designers.
    - h3: Robert Fox
    - p: Principal Architect • Founding Director
    - a: robert.fox@tecton.studio → #contact
    - h3: Guy Hawkins
    - p: Principal Architect • Design Director
    - a: guy.hawkins@tecton.studio → #contact
    - h3: Jacob Jones
    - p: Technical Director • Structural Lead
    - a: jacob.jones@tecton.studio → #contact
    - h3: Devon Lane
    - p: Principal Architect • Sustainability Director
    - a: devon.lane@tecton.studio → #contact
  - section #process .process-section
    - h2: Discover how our process works.
    - h3: Context & Feasibility
    - p: We begin with exhaustive topographical, environmental, and climatic audits to uncover the deep contextual DNA of your site.
    - h3: Computational Design
    - p: Parametric massing iterations simulate sunlight trajectories, structural loads, and energy efficiency prior to physical prototyping.
    - h3: Documentation & Permits
    - p: Comprehensive BIM engineering schematics, structural calculus, and environmental permits prepared for municipal approvals.
    - h3: Spatial Execution
    - p: On-site construction oversight and material calibration ensuring flawless alignment between conceptual intent and built reality.
- footer #contact .footer
  - p: Tecton is an international architectural practice engineering human-centered, sustainable, and enduring built environments.
  - ul .footer-links
    - li: London • 14 Berkeley Sq
    - li: Zurich • Dufourstrasse 28
    - li: Tokyo • Minami-Aoyama 5
    - li: New York • 520 West 28th St
  - ul .footer-links
    - li: About Studio
    - li: Practice Areas
    - li: Selected Works
    - li: Design Method
    - li: Leadership
  - p: Quarterly monographs on computational architecture and bioclimatic engineering.
  - form .newsletter-form
    - button: Join
- h3: Initiate Project
- button: ✕
- form
  - label: Client / Organization Name
  - label: Email Address
  - label: Project Typology
  - option: Bespoke Private Residence
  - option: Civic & Cultural Facility
  - option: Commercial Office & Headquarters
  - option: Urban Planning & Masterplan
  - option: Adaptive Reuse & Heritage
  - label: Estimated Gross Area (sq m / sq ft)
  - label: Project Vision & Brief
  - button: Submit Consultation Request →

## Images in the page
- `assets/logo.svg — Tecton Logo`
- `assets/stamp-contact.svg — Contact Us Badge`
- `images/hero-building.jpg — Tecton Modern Angular Facade Architecture`
- `images/project-sinuous.jpg — The Sinuous Canopy`
- `images/project-terracotta.jpg — Kensington Brick Tower`
- `images/project-bronze.jpg — Monolith Assembly Pavilion`
- `images/project-glass-spire.jpg — Vauxhall Glass Spire`
- `images/banner-corten.jpg — Sculptural Corten Architecture`
- `images/team-1.jpg — Robert Fox`
- `images/team-2.jpg — Guy Hawkins`
- `images/team-3.jpg — Jacob Jones`
- `images/team-4.jpg — Devon Lane`
- `assets/logo-white.svg — Tecton Logo`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Enter your email'
- input[text] placeholder='e.g. Katherine Sterling'
- input[email] placeholder='name@company.com'
- select
- input[text] placeholder='e.g. 1,200 sq m'
- textarea placeholder='Describe your site parameters, timeline, and architectural ambitions...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/logo-white.svg`
- `assets/logo.svg`
- `assets/stamp-contact.svg`
- `images/banner-corten.jpg`
- `images/hero-building.jpg`
- `images/project-bronze.jpg`
- `images/project-glass-spire.jpg`
- `images/project-sinuous.jpg`
- `images/project-terracotta.jpg`
- `images/team-1.jpg`
- `images/team-2.jpg`
- `images/team-3.jpg`
- `images/team-4.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
