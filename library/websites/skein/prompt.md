# Rebuild prompt — Skein (`skein`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/skein/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Dusk meadow operations desk: paper onboarding flow window with routing nodes, trust indicators, and three-step floor mechanics.

## Title
Skein — Turn tangled work into a route you can trust.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;0,600;1,500&family=Karla:wght@400;500;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-field: #0C0C0E;
  --surface-card: #16161A;
  --text: #F4F1EA;
  --muted: #B7B2A8;
  --line: rgba(244, 241, 234, .28);
  --paper: #F7F6F3;
  --ink: #141414;
  --muted-ink: #5C5854;
  --ring: #E3944A;
  --line-ink: rgba(20, 20, 20, .14);
  --font-display: "EB Garamond", Palatino, "Palatino Linotype", serif;
  --font-ui: "Karla", "Avenir Next", "Segoe UI", sans-serif;
  color-scheme: dark;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to the floor → #why
- header .nav
  - a: Skein → #top
  - button: Menu
  - nav #nav-links .nav-links “Sections”
    - a: Product → #onboarding
    - a: Use → #why
    - a: Routes → #routes
    - a: Price → #price
    - a: Notes → #notes
  - a: Login → #notes
  - a: Get started → mailto:hello@skein.example
- p: Routes for the floor
- h1: Turn tangled work into a route you can trust.
- p: Keep each check on the step it guards, and hold the send until the floor agrees.
- a: Explore the floor → #routes
- p: 4.8 · 500 notes
- figure #onboarding .window
  - figcaption: Onboarding
  - nav .rail “Floor rail”
    - a: Now → #onboarding
    - a: Hire → #route-hire
    - a: Pay → #route-pay
    - a: Close → #route-close
  - ol .nodes “Onboarding route”
    - li: Trigger
    - li: Check
    - li: Write
    - li: Wait
    - li: Send
  - p: good flow
  - p: Check
  - label: Passes if
  - label: If it fails
- p: Powering routes across the floor
- ul .marks “Floors on Skein”
  - li: Dace
  - li: Yarrow
  - li: Kemp
  - li: Voss
  - li: Brindle
- main
  - section #why .why “Why Skein”
    - p: Why Skein
    - h2: As the route grows, most tools get hard to trust.
    - figure .flow-card
      - p: nice flow
    - p: A short route is easy to trust. Skein keeps that honesty as steps are added: the check stays on the step it guards, and a send cannot skip the wait.
    - a: View the routes → #routes
  - section #routes .routes
    - h2: Routes
    - ol .route-list
      - li: 01 Hire Open the role, collect the packet, and send the offer only after each check has passed.
      - li: 02 Pay Write the amount when the period ends, wait for a person, and send pay on the named day.
      - li: 03 Close Record what cleared, what is waiting, and which route needs a hand before the next cycle.
  - section #close .close
    - h2: Turn tangled work into a route you can trust.
    - a: Get started → mailto:hello@skein.example
    - p: Price follows the floor you describe. Start with a note.
- footer #notes
  - a: Skein → #top
  - nav .foot-links “Footer”
    - a: Product → #onboarding
    - a: Use → #why
    - a: Routes → #routes
    - a: Price → #price
    - a: Notes → #notes
  - a: hello@skein.example → mailto:hello@skein.example
  - p: Sample template

## Images in the page
- `assets/bloom.jpg`

## Fields
Keep these controls, including ids and placeholders.
- input[text]

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/bloom.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
