# Rebuild prompt — Kindling (`kindling`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/kindling/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Digital studio — motion-blur orange hero, live clock, service chips, client rail, case plates, dark services.

## Title
Kindling — Design that starts heat

## Description meta
Fictional digital studio. Sites, apps, and campaigns for brands that need to move. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&family=Sora:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Sora", system-ui, sans-serif;
  --font-body: "Figtree", system-ui, sans-serif;
  --font-label: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #f7f5f2;
  --surface-ink: #141210;
  --text-primary: #171513;
  --text-on-heat: #f6efe6;
  --text-secondary: #6b6560;
  --border-default: #e4dfd8;
  --action-primary: #e24a1a;
  --text-display: clamp(3.4rem, 8vw, 6.6rem);
  --text-3xl: clamp(2rem, 4vw, 2.8rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --radius: 12px;
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #about
- header #top .hero
  - p: Available for new projects
  - p: Kiln City 09:21 AM
  - a: KINDLING → #top
  - nav #nav .nav-panel
    - a: Studio → #about
    - a: Work → #work
    - a: Services → #services
    - a: Start a project → mailto:hello@kindling.example
  - p: We make sites, apps, and campaigns that actually change what a brand can do next.
  - h1: Design that starts heat
  - p: © 20–26
  - p: As a studio we ship
- main
  - section #about .band
    - p: 01 · About Kindling
    - h2: Sites, products, and campaigns that give a brand something to stand on.
    - p: One bench. Design and build in the same room. We stay on the work until it is live, not until the deck looks finished.
    - article
      - p: Brands that needed a surface, not a slogan.
    - article
      - p: Work that had to survive outside the studio.
    - article
      - p: Partnerships that outlast the first launch.
  - section #work .band
    - p: 02 · Featured work
    - h2: Recent heat
    - article .case
      - p: 01
      - h3: Northspin
      - p: A cycling house that needed a shop as sharp as the kit. Site, lookbook, and a cart that does not apologise.
    - article .case
      - p: 02
      - h3: Vaultnote
      - p: A private-markets desk. Charts first, chrome second. The product is the proof.
    - article .case
      - p: 03
      - h3: Loomcast
      - p: A small studio for people who publish. Identity, site, and a player that stays out of the way.
  - section #services .band.night
    - p: 03
    - h2: Services we keep on the bench
    - summary: Branding
    - p: Names, marks, and the rules so the next person does not invent a second brand.
    - summary: UI & product
    - p: Interfaces for things people actually open twice. Screens, flows, the dull parts that make it ship.
    - summary: Illustration
    - p: Pictures that belong to the brand, not a stock folder.
    - summary: No-code and hand-built sites
    - p: A site you can run. We pick the stack for the work, not for the portfolio.
  - section #start .band.cta
    - h2: Bring the thing that is stuck.
    - p: One conversation. If it is a fit, we start.
    - p: Start a project
- footer .site.wrap
  - a: hello@kindling.example → mailto:hello@kindling.example

## Images in the page
- `work-northspin.jpg — Cyclist in a dark skinsuit on a studio bike`
- `work-vaultnote.jpg — Dark trading dashboard with orange and teal charts`
- `work-loomcast.jpg — Person in a pale shirt under cool studio light`
- `svc-motion.jpg — Motion-blurred figure in orange light`
- `svc-hold.jpg — Silhouette holding a glowing panel`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `hero.jpg`
- `index.html`
- `preview.jpg`
- `svc-hold.jpg`
- `svc-motion.jpg`
- `work-loomcast.jpg`
- `work-northspin.jpg`
- `work-vaultnote.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
