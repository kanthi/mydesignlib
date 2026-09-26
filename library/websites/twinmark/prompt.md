# Rebuild prompt — Twinmark (`twinmark`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/twinmark/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Ecommerce brand agency — cream grid, yellow metrics, project cards with conversion stats, serif about.

## Title
Twinmark — Brand-first experiences that convert

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #faf8f4;
  --ink: #1a1a1a;
  --muted: #6b6b6b;
  --blue: #2563eb;
  --blue-soft: #dbeafe;
  --yellow: #eef58a;
  --line: #e8e4dc;
  --font: "Segoe UI", system-ui, -apple-system, sans-serif;
  --serif: Georgia, "Times New Roman", serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- p: Are we even ecom experts without a promo bar?
- header
  - a: twinmark → #
  - nav .nav-links
    - a: Projects → #projects
    - a: Services → #services
    - a: Approach → #approach
    - a: Team → #team
    - a: Shop → #shop
  - a: Work with us → #contact
- main
  - section .wrap.hero
    - h1: We design and develop brand-first experiences built to convert visitors into revenue.
    - p: ▣ Platform Plus Partner
    - p: Conversion optimized doesn’t mean design comes second.
  - section #projects .wrap.launches
    - a: View all projects → #projects
    - article .project
      - h3: Good Harbor
    - article .project
      - h3: Lumen Jar
  - section #approach .metrics
  - section #team .wrap.about
    - p: Twinmark builds exceptional storefronts and the brands behind them. We combine senior talent and an efficient process to deliver work that’s considered, cohesive, and built to convert. In a world noisier than ever, trust is built or lost in just 0.05 seconds. Great design is how you earn it.
    - a: Meet the team → #contact
  - section #services .wrap.services
    - h2: What we deliver
    - article .svc
      - h3: Brand systems
      - p: Identity, voice, and visual language that scale across every product page.
    - article .svc
      - h3: Conversion design
      - p: UX and UI tuned for clarity, speed, and revenue — not just awards.
    - article .svc
      - h3: Storefront builds
      - p: Headless or platform-native builds with clean handoff and training.
    - article #shop .svc
      - h3: Retainers
      - p: Ongoing design, CRO tests, and seasonal campaigns for growing brands.
  - section #contact .wrap
    - h2: Ready for a storefront that earns trust?
    - p: Tell us about your brand, timeline, and goals.
    - a: Work with us → mailto:hello@twinmark.studio
- footer

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
