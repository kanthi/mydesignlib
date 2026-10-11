# Flowstack: SaaS landing page template

A clean, restrained product homepage where the **product UI sits in front of a procedurally generated pixel-dithered desert**. Real HTML/CSS app preview (interactive), WebGL dune backdrop, GSAP + ScrollTrigger + Lenis motion, three colour themes, no build step.

> Design reference: [Flowstack concept by Hassan (@uixhassan)](https://x.com/uixhassan/status/2108576043800170948): *"A homepage should show the product working before anyone reads the pitch… The dunes stay behind the UI so the product is the thing you see."* This template is an original rebuild of that idea. The dunes aren't a photo: they're drawn by a fragment shader.

---

## Quick start

```bash
cd site
python3 -m http.server 8094   # or: npx serve .
# open http://localhost:8094
```

There's nothing to install or build. Plain HTML, CSS and JS. Opening `index.html` straight from disk works too, but a local server is better because some browsers limit `file://` fonts.

Theme preview: `?theme=night` or `?theme=glacier` in the URL, or use the switcher at the bottom-right.

## Structure

```
site/
├── index.html            all sections, each wrapped in <!-- SECTION: … --> comments; editable copy marked <!-- CONTENT: … -->
├── css/
│   ├── tokens.css        ← REBRAND HERE: fonts, colours, radii, spacing, theme presets
│   └── style.css         layout + components (same section order as index.html)
├── js/
│   ├── config.js         ← CONFIGURE HERE: dune backdrop + motion switches
│   ├── theme.js          applies ?theme= / saved theme before first paint
│   ├── dunes.js          the procedural dune shader module (raw WebGL1, ~10 KB)
│   └── main.js           interactions (app UI, tabs, pricing, rules) + GSAP/Lenis motion
├── vendor/               gsap 3.15, ScrollTrigger, lenis 1.3 (self-hosted, no CDN needed)
├── assets/
│   ├── fonts/            Archivo (display) + Inter (UI) variable woff2, OFL licences
│   ├── dunes-*.png       static fallbacks rendered from the shader (no-WebGL / disabled)
│   ├── logo-mark.svg, favicon.svg
├── dune-lab.html         dev page that renders only the backdrop (used to regenerate fallbacks)
├── tools/render-fallbacks.js  optional Playwright script that re-renders assets/dunes-*.png
├── LICENSE               placeholder: choose your licence
└── README.md
```

## Rebrand in 5 minutes

1. **Name + logo**: search `Flowstack` in `index.html`. The logo is the `<symbol id="logo">` in the icon sprite at the top of `<body>` (also `assets/logo-mark.svg` and `assets/favicon.svg`).
2. **Colours + type**: edit `css/tokens.css`. Most of the look comes from these:
   - `--accent` (blue arrow tile), `--btn` (grey rectangular buttons), `--text`, `--muted`, `--bg`
   - `--font-display` (headlines, buttons, nav) and `--font-ui` (body + app UI)
   - `--radius-btn: 0px` keeps the square button style from the reference. Raise it for a softer brand.
   - `--app-*` and `--chip-*` style the product mock separately from the page.
3. **Copy**: every editable block is marked `<!-- CONTENT: … -->`.
4. **Dune colours**: `js/config.js → backdrop.themes.default` (they feed the shader, so they live in JS).

Accessibility notes: the default palette passes WCAG 2.2 AA (checked with axe-core on all three themes at 1440px and 390px). The reference's brighter app blue (`#3a82f7`) was deepened to `#2b6cf0` so white labels pass. If you change colours, keep white-on-accent text at 4.5:1 or more (`--accent-strong` is used for small white text).

## Configure the dune backdrop

`js/config.js → backdrop`:

| key | default | what it does |
|---|---|---|
| `enabled` | `true` | `false` always shows the static PNG |
| `pixelSize` | `2` | CSS px per dither cell. `1` = fine grain, `3–4` = chunky 8-bit |
| `levels` | `4` | colour steps per RGB channel after dithering (3 = harsh, 8 = smooth) |
| `ditherMode` | `'blue'` | `'blue'` (interleaved-gradient, organic), `'bayer'` (ordered 8×8 grid), `'white'` |
| `speckle` | `0.15` | extra colour noise before quantising: the coloured "sand grain" pixels |
| `drift` | `0.018` | speed of the slow ripple/crest drift (`0` = frozen) |
| `parallax` | `1` | mouse parallax strength (`0` = off). It's always off on touch and with reduced motion |
| `rippleScale` | `1` | density of the wind ripples |
| `fps` | `30` | render cap. Rendering also pauses off-screen and in hidden tabs |
| `fadeBottom` | `0.14` | dithered dissolve into the page at the bottom of the band |
| `themes.{name}` | | 7 colours: `deep, shade, mid, lit, hi` (shadow → highlight ramp), `haze` (far dunes), `tint` (cool speckle in shadows) |

Per-instance markup: `<div class="dunes" data-dunes data-shape="valley|rolling" data-seed="1"><canvas></canvas></div>`. `valley` gives tall dunes at both sides (hero), `rolling` gives a lower band (CTA). Change `data-seed` for a different layout.

**Make your own variant.** Add a key such as `ocean` to `backdrop.themes` with blue-green colours, add a matching `[data-theme="ocean"]` block in `tokens.css`, and you have ocean swells. For snow, try `glacier`. For night, try `night`.

**How the shader works** (`js/dunes.js`): it renders at `1/pixelSize` resolution and is upscaled with `image-rendering: pixelated`. Each pixel works out (a) the skyline of two crescent dunes plus a hazy far range, (b) a sharp ridge from each peak, with a lit windward face on one side and a shadowed slip-face wedge on the other, (c) a perspective-projected floor of asymmetric wind ripples warped by fbm noise, and (d) a 5-stop colour ramp. A per-channel quantise with blue-noise/Bayer thresholds and colour speckle then produces the crunchy coloured pixels. The sky is transparent, so the band sits on whatever page background the theme uses.

**Fallbacks**: with no WebGL, `enabled: false`, or a lost context, the band shows `assets/dunes-{theme}.png` (`-rolling.png` for the CTA band) and follows the theme switch. With reduced motion, a single still frame is drawn and never animated.

**Regenerate fallbacks** after changing colours: serve the site, open `dune-lab.html?theme=night&still=1`, and in the console run
`FlowstackDunes.list.map(d => (d.draw(true), d.canvas.toDataURL()))`, then save the two data-URLs as `assets/dunes-night.png` and `assets/dunes-night-rolling.png`. Or let `tools/render-fallbacks.js` (Playwright) render every theme automatically. Instructions are at the top of that file.

## Motion

`js/config.js → motion`: `smoothScroll` (Lenis), `reveals` (sections fade and rise on scroll), `heroIntro` (headline stagger, then the app UI rises over the dunes). All of it is skipped for `prefers-reduced-motion: reduce`, and content is fully visible without JS.

## The interactive app preview

Real, accessible HTML (not an image), in the hero:

- Sidebar items switch views (Dashboard, Projects, My Task, Chats, Documents, Receipts) with `aria-current`.
- Status chips are buttons. Clicking one cycles Pending → In Progress → Completed and updates the stat counters.
- **Add Task** opens an inline form. Enter adds a row, Esc closes it, and changes are announced through `aria-live`.
- It scales with its container (all sizes are in `em` from `100cqi / 97`). Below 620px it switches to a compact layout with a scrolling tab bar.

Other interactive pieces: product-tour ARIA tabs (arrow keys, Home and End), automation rule switches (`role="switch"`), a monthly/yearly pricing toggle with animated numbers, a native `<details>` FAQ, and a mobile menu (Esc closes it).

## Add, remove or reorder sections

Each section in `index.html` is one self-contained block between `<!-- ================= SECTION: name ================= -->` comments. Delete or move the block, and remove its nav link if it has one. Section styles sit under the same `SECTION:` comment in `style.css`. Scroll reveals hook onto `data-reveal` (single element) or `data-reveal-stagger` (children) automatically.

Remove the demo theme switcher before going live: delete the `.theme-switch` block at the end of `index.html` (and optionally its CSS).

## Deploy

The site is static, so just publish the `site/` folder.

- **Netlify**: drag the `site` folder onto app.netlify.com/drop, or `npx netlify deploy --dir=site --prod`.
- **Vercel**: `npx vercel site --prod` (framework preset "Other", no build command, output dir `.`).
- **GitHub Pages**: push the contents of `site/` to a repo, then go to Settings → Pages → Deploy from branch → `/ (root)`. Every path is relative, so project sub-paths (`user.github.io/repo/`) work.

## Browser support

Current Chrome, Edge, Safari and Firefox. Container queries and `color-mix()` are used, so you need Safari 16.4+ or Firefox 113+. WebGL1 is required for the live backdrop; otherwise the PNG fallback is used.

## Credits

- Design reference: **Hassan, [@uixhassan](https://x.com/uixhassan/status/2108576043800170948)**, Flowstack concept.
- Fonts: Archivo (Omnibus-Type) and Inter (Rasmus Andersson), both SIL OFL 1.1.
- Motion: GSAP + ScrollTrigger (GreenSock), Lenis (darkroom.engineering).
- Partner logos, testimonials, stats and integrations are placeholders. Integration tiles use monograms, not official marks.
- Template: Kanthi N.
