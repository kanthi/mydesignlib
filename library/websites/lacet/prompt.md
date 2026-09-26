# Rebuild prompt — Lacet (`lacet`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/lacet/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Dark teal link platform: cyan generate-beam hero, branded short links, tracking, two-tier pricing.

## Title
Lacet — Generate links that hold

## Description meta
Create, brand, and track short links. One lace from destination to download — QR, PNG, SVG, live.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500;600&family=Syne:wght@700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Syne", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #070B12;
  --surface-raised: #0C131C;
  --surface-card: #111A26;
  --surface-paper: #F4F8FB;
  --text-primary: #F3F7FB;
  --text-secondary: #8B9AAB;
  --text-faint: #5C6B7A;
  --text-on-paper: #0C131C;
  --text-on-accent: #06241E;
  --border-default: rgba(46, 230, 198, 0.14);
  --border-subtle: rgba(243, 247, 251, 0.08);
  --action-primary: #2EE6C6;
  --action-primary-hover: #5AF0D4;
  --glow-teal: rgba(46, 230, 198, 0.38);
  --status-danger: #E24B4B;
  --text-display: clamp(2.35rem, 5vw, 3.85rem);
  --text-3xl: clamp(2.0rem, 4.2vw, 3.2rem);
  --text-2xl: clamp(1.5rem, 2.4vw, 2.0rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --leading-display: 0.98;
  --leading-body: 1.62;
  --tracking-display: -0.04em;
  --tracking-label: 0.12em;
  --section-y: clamp(4.5rem, 10vw, 7.25rem);
  --wrap: min(1120px, 100% - 2.5rem);
  --hero-wrap: min(1180px, 100% - 2rem);
  --radius-card: 18px;
  --radius-panel: 14px;
  --radius-chip: 10px;
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-nav
  - a: Lacet → #top
  - nav .nav-links “Primary”
    - a: How it works → #how
    - a: Use cases → #cases
    - a: Link types → #types
    - a: Pricing → #pricing
  - a: Contact → #contact
  - button: Create a link
  - a: How it works → #how
  - a: Use cases → #cases
  - a: Link types → #types
  - a: Pricing → #pricing
  - a: Contact → #contact
  - button: Create a link
- main #main
  - section #top .hero
    - h1: We generate links that hold
    - p: Create, brand, and track short links without a developer. Destination in — QR, PNG, SVG, and a live slug out.
    - button: Create a link
  - section .trust
    - p: Our trusted brands
  - section .spine-intro
    - h2: One lace across every channel
    - p: Create, customize, and track branded links in a few clicks.
  - section .spine
    - nav .rail “Product sections”
      - a: How it works → #how
      - a: Use cases → #cases
      - a: Link types → #types
      - a: Integrations → #integ
    - article #how .block
      - h3: Create, customize, and track your links in a few clicks.
      - h4: 01 Generate your link
      - p: Paste a site, image, or vCard. Lacet mints a unique short URL in a second — ready to share, no queue, no code.
      - h4: 02 Customize & brand it
      - p: Lock a slug, wrap it in your domain, and lace QR, UTM, and preview cards so every click still looks like you.
      - h4: 03 Share anywhere
      - p: Drop the same lace into mail, social, print, or a slide. JPG, PNG, and SVG exports sit next to the live redirect.
      - h4: 04 Track & optimize
      - p: Watch clicks, devices, and geos as they land. Reroute a dead dest without reprinting the QR on the crate.
    - article #cases .block
      - h3: Unlock the full potential of every click
      - h4: Marketers
      - p: Spin campaign laces for paid, CRM, and field kits. Keep one destination, many wrappers, clean attribution.
      - h4: Creators & studios
      - p: Ship a bio link that still looks like the work. Swap the dest mid-drop without breaking the QR on merch.
      - h4: Brands & commerce
      - p: Custom domains, geo routes, and device splits — so a poster in Lisbon and a story in Seoul both convert.
      - p: Define the prompt and conversation settings
    - article #types .block
      - h3: Build the right kind of link for every use case.
      - h4: Short lace
      - p: Turn a long dest into a concise slug. Built for bios, print, and anything that has to be typed out loud.
      - h4: Campaign / UTM lace
      - p: Source, medium, and content baked in. Generate unique, tracked URLs per placement without a spreadsheet.
    - article #integ .block
      - h3: Connect with the tools you already use
      - h4: Marketing & analytics
      - p: Push click streams into the warehouse you already trust. Tag, cohort, and close the loop on spend.
      - h4: Automation & productivity
      - p: Mint laces from a form submit, a sheet row, or a deploy hook. Keep routing in one place.
      - h4: Social & creator tools
      - p: Sync bios, stories, and live descriptions so the dest can move while the lace stays put.
  - section .stats
    - h2: Trusted by thousands, built for results
    - p: Create, customize, and track your links in just a few clicks.
    - article .stat
      - p: Clicks routed last year across 62 countries, without a missed resolve.
    - article .stat
      - p: Workspaces lacing campaigns, merch, and product dests from one desk.
    - article .stat
      - p: Resolve uptime on the edge. Dead dests reroute without reprinting the QR.
    - article .stat
      - p: Median redirect. Fast enough that the click never feels like a hop.
  - section #pricing .pricing
    - h2: Simple pricing no surprises
    - p: Create, customize, and track your links in just a few clicks.
    - article .price.price-starter
      - p: For personal use and getting started.
      - ul
        - li: 50 active short links
        - li: Basic click analytics
        - li: QR + PNG / SVG export
        - li: 1 workspace
        - li: lacet.link slug preview
      - button: Start generating
    - article .price.price-pro
      - p: For teams lacing campaigns at volume.
      - ul
        - li: Unlimited links & redirects
        - li: 3 custom domains
        - li: UTM builder & campaign lacing
        - li: Smart routes (geo, device, date)
        - li: Team seats & analytics desk
      - button: Start generating
    - h4: Need something custom?
    - p: We’ll lace a plan around your workflow — agencies, enterprise teams, or high-volume print programs.
    - a: Contact us → #contact
  - section .tools
    - h2: Empowering teams with tools that just fit
    - p: Plays with your site, warehouse, and the rest of the stack — cloud or on-prem.
  - section #quotes .quotes
    - h2: What our users are saying
    - p: Create, customize, and track your links in just a few clicks.
    - article .q.rating
      - p: We routed $2.4m in attributed campaigns last quarter without a single dest collision.
      - button: Leave a review
    - article .q
      - blockquote: “Since switching to Lacet, my paid clicks stopped leaking. I can finally show the board a dest map that looks like the brand.”
    - article .q
      - blockquote: “As an agency, link tracking used to be a spreadsheet. Now we lace multiple brands under one desk and export white-label reports in minutes.”
    - article .q.span2
      - blockquote: “I used to juggle five different tools for bios and tracking. Now it’s all one lace — and easy enough that merch can reprint QRs without paging engineering.”
    - article .q
      - blockquote: “The generate beam is not a metaphor. Paste a vCard, get PNG, SVG, and a live slug before the meeting ends.”
    - article .q
      - blockquote: “Geo routes for Lisbon vs Seoul used to be a ticket. Lacet made it a toggle. 140ms later, the poster still works.”
  - section .final
    - h2: Start generating links that hold
    - p: Mint your first lace in under a minute. No card, no code, no waiting on a developer.
    - button: Create a link
- footer #contact
  - a: Lacet → #top
  - p: Branded short links with a current through every channel. Sample template — not a live product.
  - h5: Product
  - ul
    - li: How it works
    - li: Link types
    - li: Pricing
    - li: Integrations
  - h5: Company
  - ul
    - li: Customers
    - li: Contact
    - li: hello@lacet.example
  - h5: Legal
  - ul
    - li: Privacy
    - li: Terms
    - li: Status
- h3: Create a link
- p: Paste a destination. Lacet mints a lace you can brand, export, and track.
- form #gen-form
  - label: Destination
  - label: Custom slug
  - button: Close
  - button: Generate lace
- p: PNG, SVG, and QR queued. Tracking is on.

## Images in the page
- `assets/face-nara.jpg`
- `assets/face-jun.jpg`
- `assets/face-mira.jpg`
- `assets/face-nara.jpg — Portrait of Nara Okello`
- `assets/face-mira.jpg — Portrait of Mira Holst`
- `assets/face-jun.jpg — Portrait of Jun Park`
- `assets/face-rafa.jpg — Portrait of Rafa Mendes`
- `assets/face-leela.jpg — Portrait of Leela Shah`

## Fields
Keep these controls, including ids and placeholders.
- input[url] #dest name=dest placeholder='https://studio.pinion.example/drop'
- input[text] #slug name=slug placeholder='q3-drop'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/face-jun.jpg`
- `assets/face-leela.jpg`
- `assets/face-mira.jpg`
- `assets/face-nara.jpg`
- `assets/face-rafa.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
