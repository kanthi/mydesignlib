# Nimbrel — rebuild spec

Identity board for a fictional branding studio. One HTML page. The page is the board.

## Name
- Wordmark: Nimbrel, title case, Plus Jakarta Sans 700.
- Headline: WE'RE NIMBREL.
- Domain in the browser chrome: nimbrel.studio
- Tab: Home - Nimbrel
- Do not use the reference studio name, its domain, or a triangle inside a frame.

## Mark
- A thick arch, open at the bottom. `assets/mark.svg`, also inlined.
- Small uses: white arch in a blue rounded square, left of the word.
- Large use: blue arch centered in a white squircle on a `#0A5CFE` field.

## Board
- Ground `#D9D9D9`. Two columns. 16px gaps. Aspect about 1117 / 1200.
- Left: halftone lockup (`assets/field.jpg`), intro with hill scene, strategy banner with star, process card.
- Right: icon field, three columns (Strategy / Identity / Direction), three-column palette, browser chrome.
- Palette labels: `#FFFFFF`, `#000000`, `#0A5CFE`.
- Blues top to bottom: `#CEDEFF` `#9DBFFF` `#6C9CFE` `#3C7DFF` `#0A5CFE` `#094ACC` `#063698` `#042666` `#021233`.
- Neutrals: `#FFFFFF` `#CCCCCC` `#999999` `#666666` `#333333` `#000000`.

## Copy that must stay
- Intro paragraph begins “NIMBREL is an independent branding studio”.
- Banner: “FROM STRATEGY TO FULL / VISUAL IDENTITY, WE GOT / IT SORTED”.
- Kicker: “Looking to get your brand transformed?”
- Buttons: Find out how, View Work, About Us.
- Steps: 01 DISCOVER / STRATEGY, IDENTITY / DEFINE 02, 03 DELIVER / DIRECTION.
- Process: ONBOARD, DISCUSS → DEFINE, CREATE, REFINE → FULL STACK IDENTITY, DELIVERED.
- Mini line: “Let's Make Something / Vivid”.
- Foot line: BRANDING & DESIGN STUDIO.

## Assets
- `assets/scene.jpg` — stippled sky, white clouds, rising hill, solid blue slab with a lighter edge.
- `assets/star.jpg` — four-point halftone star, white center, points on the cardinals.
- `assets/field.jpg` — blue stipple, dense at the corners, open in the middle.
- `assets/mark.svg` — the arch.

## Behavior
- Find out how and the kicker scroll to `#method`. View Work and About Us scroll to `#work` and `#about`.
- Process tiles toggle `aria-pressed`.
- Lockup field drifts. `prefers-reduced-motion` stops the drift and smooth scroll.

## Head
- robots and googlebot noindex metas.
- gtag `G-Z97ZD3EVSF`.
