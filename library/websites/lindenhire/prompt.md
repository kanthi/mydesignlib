# Rebuild prompt — Lindenhire (`lindenhire`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/lindenhire/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Hiring desk under linden trees — forest-green hero, organic photo frame, grove roles.

## Title
Lindenhire — A hiring desk under linden trees

## Description meta
Fictional hiring desk. Find a desk or post a role in the grove. Sample template.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Young+Serif&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Young Serif", Georgia, serif;
  --font-body: "Albert Sans", system-ui, sans-serif;
  --surface-canopy: #12382b;
  --surface-page: #f3f5f1;
  --surface-card: #ffffff;
  --surface-moss-soft: #d6e8b0;
  --text-primary: #14241c;
  --text-on-canopy: #f3f7f1;
  --text-secondary: #5a6b60;
  --text-on-canopy-muted: #b7c9bb;
  --border-default: #dde3da;
  --action-primary: #b4d36a;
  --action-ink: #1b4d3a;
  --status-danger: #9b2c2c;
  --text-display: clamp(2.6rem, 5.4vw, 4.15rem);
  --text-numeral: clamp(3.4rem, 7vw, 5.4rem);
  --text-3xl: clamp(1.85rem, 3.2vw, 2.45rem);
  --text-xl: 1.2rem;
  --text-base: 1.02rem;
  --text-sm: 0.84rem;
  --text-xs: 0.72rem;
  --leading-body: 1.58;
  --section-y: clamp(4.25rem, 8vw, 6.5rem);
  --wrap: min(1140px, 100% - 2.4rem);
  --radius-card: 18px;
  --radius-control: 12px;
  --radius-pill: 999px;
  --shadow: 0 18px 40px rgba(18, 56, 43, 0.08);
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .canopy
  - nav .nav “Primary”
    - a: Lindenhire → #top
    - ul #nav-links .nav-links
      - li: Home
      - li: Grove
      - li: Desks
      - li: Notes
      - li: Contact
      - li: Sign in
      - li: Post a role
    - a: Sign in → #post
    - a: Post a role → #post
  - p: A hiring desk under linden trees
  - h1: Over 4500+ desks waiting in the grove
  - p: Roles listed by shade, hours, and the work itself — not a spray of listings. Sit where the week already has a table.
  - form .search
    - label: Title, grove, or keyword
    - button: Find a desk
  - p: Popular: Product designer · Grove builder · Desk steward
- main #main
  - section #cats
    - p: Trending groves
    - h2: Explore by category
    - a: All categories → #roles
    - a: Grove build 283 desks → #roles
    - a: Canopy 198 desks → #roles
    - a: Timber 241 desks → #roles
    - a: Roots 164 desks → #roles
  - section #roles
    - p: Open this week
    - h2: Sit at a desk this week
    - a: Browse more desks → #roles
    - article .role
      - h3: Product designer
      - p: Alder & Finch
      - p: 12 Aug$84–96kPortlandFull desk
    - article .role
      - h3: Grove builder
      - p: Bramble Court
      - p: 11 Aug$78–88kHudsonShared
    - article .role
      - h3: Brand writer
      - p: Mirelo Studio
      - p: 10 Aug$72–80kRemoteFull desk
    - article .role.is-feature
      - h3: Community lead
      - p: Pollen Yard
      - p: 9 Aug$90–104kBrooklynShared
      - a: Apply this desk → #post
    - article .role
      - h3: Editorial desk
      - p: Hollow Quill
      - p: 8 Aug$70–82kSeattleFull desk
    - article .role
      - h3: Lab steward
      - p: Cedarlane Labs
      - p: 7 Aug$88–98kDurhamFull desk
  - section #about
    - p: About the grove
    - h2: A desk, not a feed
    - p: Lindenhire keeps a short list. Each role names the hours, the city or the remote hour, and who sits next to you. We do not rent attention; we set a table.
    - article .feat
      - p: Filter by shade of hours, city, and the craft — not a keyword dump.
    - article .feat
      - p: A one-page desk: what you make, when you sit, who you write.
    - a: Find a desk → #roles
  - section #how .how
    - p: How it works
    - h2: Three steps to a Monday
    - article .step
      - h3: Name the desk
      - p: Title, grove, city or remote. The bar is the same one in the canopy.
    - article .step
      - h3: Sit with a grove
      - p: Read the hours and the neighbour. Write like a person; they will too.
    - article .step
      - h3: Start the week
      - p: Accept a chair. Or post a role if you keep the table.
  - section #tools
    - p: Under the trees
    - h2: Tools that stay in the drawer
    - p: Only what a desk needs: a range, a letter, a short film of the work, and a lock on the file.
    - article .tool
      - p: Every listing names the band. No “competitive.”
    - article .tool
      - p: A one-page note from your grove profile.
    - article .tool
      - p: Ninety seconds of the room, not a reel.
    - article .tool
      - p: Applications stay with the grove that asked.
  - section #notes
    - p: From the grove
    - h2: Notes from people who sat down
    - figure .quote
      - p: I wanted a desk with a window and a team that still eats lunch. Three groves in a week; I sat at Bramble Court on Monday.
      - figcaption: Owen Hale Product designer
    - figure .quote
      - p: The search is quiet. No spray of roles I already left. I filtered for shared desks under the canopy and found Hollow Quill.
      - figcaption: Nola Vesper Grove writer
    - figure .quote
      - p: We posted a bench on Tuesday. By Thursday two people had written us like humans. That is the whole product.
      - figcaption: Mira Chen Lab steward
  - h2: Shade is ready. Find a desk.
  - p: Or set a chair if you keep the table. No listings fee for the first grove.
  - a: Find a desk → #roles
  - a: Post a role → mailto:hello@lindenhire.example
- footer #contact .site
  - a: Lindenhire → #top
  - p: A hiring desk under linden trees. Sample template — not a live board.
  - h3: Grove
  - ul
    - li: About
    - li: How it works
    - li: Notes
  - h3: Desks
  - ul
    - li: Open this week
    - li: Categories
    - li: Post a role
  - h3: Write
  - ul
    - li: hello@lindenhire.example

## Images in the page
- `hero.jpg — Someone working outdoors at a wooden table, laptop open, trees behind them.`
- `huddle.jpg — Three colleagues gathered around a laptop in a plant-filled office.`
- `desk.jpg — A person at a white desk with a laptop and a small plant, smiling toward the camera.`
- `face-owen.jpg`
- `face-nola.jpg`
- `face-mira.jpg`

## Fields
Keep these controls, including ids and placeholders.
- input[search] #q name=q placeholder='Title, grove, or keyword'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `desk.jpg`
- `face-mira.jpg`
- `face-nola.jpg`
- `face-owen.jpg`
- `hero.jpg`
- `huddle.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
