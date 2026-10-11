# MintQX: neon fintech SaaS landing template

A single-page website template made with plain HTML, CSS and JS. There is no build step. The hero has a
framed header, a neon colour field and a large interactive dashboard mock. Below it are modular sections
(features bento, how it works, metrics, integrations, security, testimonials, pricing, FAQ, CTA and footer).
The demo content is a fictional payments company called **MintQX**.

- Three theme presets: **Mint** (cyan → lime, the default), **Violet** (indigo → pink) and **Ember** (red → amber).
  Switch them with one `data-theme` attribute.
- The dashboard mock is real HTML, CSS and SVG. Its moon/sun buttons switch it between dark and light mode.
  Numbers count up, the line chart draws in, and the bars grow.
- Every colour, font, radius and spacing value lives in `css/tokens.css`. Behaviour switches live in `js/config.js`.
- Sections are self-contained blocks that you can delete or reorder.
- Responsive from 320 to 1600px+. Contrast meets WCAG AA, focus states are visible, and `prefers-reduced-motion` is respected.

## Quick start

```bash
cd mintqx
python3 -m http.server 8093      # any static server works
# open http://localhost:8093   (try ?theme=violet or ?theme=ember)
```

## Structure

```
index.html          markup. Each block is wrapped in SECTION comments; swappable copy is marked <!-- CONTENT -->
css/tokens.css      ALL design tokens and the theme presets (edit this to rebrand)
css/style.css       layout and components (reads tokens only)
js/config.js        window.TEMPLATE_CONFIG: motion, dashboard and pricing switches
js/theme.js         picks the theme (?theme=, config, saved choice, <html data-theme>) and draws the demo switcher
js/dashboard.js     dashboard mock module (light/dark toggle, segmented controls)
js/main.js          sticky nav, card pointer glow, pricing toggle, Lenis + GSAP/ScrollTrigger/SplitText motion
assets/             logo mark, favicon, star-speck texture (stars.svg)
```

Libraries come from CDNs: GSAP 3.15 (+ScrollTrigger, SplitText), Lenis 1.3.26, and Google Fonts (Instrument
Sans with its width axis, Inter and Inter Tight). To self-host them, download the files and change the URLs in
`<head>` and at the end of `<body>`.

## How the hero scales

The hero and the dashboard are drawn in **design units**: `--u` equals 1px of a 1440px-wide design. It is set
with container units on `.hero`, so the whole composition scales 1:1 with the viewport on desktop. For
example, at 1638px wide everything is 1.1375× larger. Below 900px the hero switches to a fluid layout
(`--u: 1px`). The dashboard sidebar is hidden there and the cards stack: two columns on tablet, one column on phones.

## Rebrand in 5 minutes

1. **Colours:** edit `:root` in `css/tokens.css`.
   - `--c1` / `--c2` are the left and right neon colours (glow, frame, CTA, accents) and `--c-mid` is the
     blend in the middle. Keep the `-rgb` twins in sync.
   - `--hero-l`, `--hero-c`, `--hero-r` and `--hero-glow-l/-r` paint the hero colour field. `--hero-top` darkens its top edge.
   - `--logo-1` / `--logo-2` colour the two halves of the logo mark.
   - `--d-*` are the dashboard mock colours. The light variant is in `css/style.css` under `.dash[data-mode="light"]`.
   - `--ink*`, `--mut` and `--dim` are text colours. Keep at least 4.5:1 contrast against the dark surfaces.
2. **Type:** set `--font-display`, `--display-stretch` and `--display-weight` (the headline uses Instrument
   Sans at about 75% width and weight 650), plus `--font-ui`, `--font-sans` and `--font-dash`. Update the
   Google Fonts link if you change families.
3. **Shape and space:** `--r-*`, `--pad`, `--sec-y` and `--frame` (the outer gutter where the frame lines sit).
4. **Logo:** the mark is an inline SVG `<symbol id="logo">` at the top of `index.html`, used everywhere with
   `<use href="#logo">`. Replace its two polygons, or swap in your own SVG. Also update `assets/favicon.svg` and `assets/logo-mark.svg`.
5. **Copy:** search `index.html` for `<!-- CONTENT` and edit the text. Also update `<title>` and the meta description.
6. **Production:** set `themeSwitcher: false` in `js/config.js`.

## Themes

The presets are `[data-theme="violet"]` and `[data-theme="ember"]` in `css/tokens.css`. Mint is the default (no attribute).

- Pick a theme in one of three ways: `<html data-theme="violet">`, `TEMPLATE_CONFIG.theme = "violet"`, or `?theme=violet` in the URL.
- From script, call `window.setTemplateTheme('ember')`. The page fires a `template:theme` event.
- To add a preset, copy a block, rename it, change the values, and add it to the `THEMES` list in `js/theme.js`.

## Configure the modules (`js/config.js`)

| key | default | what it does |
|---|---|---|
| `smoothScroll` | `true` | Lenis smooth scrolling |
| `revealAnimations` | `true` | GSAP section reveals (SplitText headings, staggered cards) |
| `dashboard.tilt` / `tiltAngle` | `true` / `18` | dashboard rises from a perspective tilt into flat as it scrolls into view (flat once its top reaches 55% of the viewport) |
| `dashboard.modeToggle` | `true` | moon/sun buttons switch the mock between dark and light |
| `dashboard.defaultMode` | `'dark'` | starting mode |
| `dashboard.countUp` / `animateCharts` | `true` | count-ups, line draw and bar growth inside the mock |
| `glow.breathe` | `true` | neon frame and CTA line slowly pulse |
| `glow.cardPointer` | `true` | cards light up under the pointer |
| `pricing.defaultBilling` | `'monthly'` | starting billing period |

Dashboard data is plain markup. Bars use `style="--v:35"` (a value out of 50K), the progress bar uses
`style="--p:64%"`, the gauge uses `style="--g:62"` (percent), and count-ups use `data-count`, `data-prefix`,
`data-suffix` and `data-decimals`. The line chart is an SVG path in the "Customer Ratings" card. Pricing values
come from `data-monthly` and `data-yearly`.

## Add, remove or reorder sections

Each block in `index.html` looks like this:

```html
<!-- ================= SECTION: pricing (...). Self-contained ================= -->
<section class="sec" id="pricing"> ... </section>
<!-- /SECTION: pricing -->
```

The blocks are sticky-nav, hero, logos, features, how, metrics, integrations, security, testimonials, pricing, faq, cta and footer.

- **Remove a section:** delete the block. Every script checks whether its section exists before running.
  Also remove links to it from the header, sticky nav and footer.
- **Reorder:** cut and paste whole blocks. Everything between the hero and the footer sits inside
  `<div class="shell">`, which draws the continuous frame lines.
- **Add a section:** use `<section class="sec">` with a `.sec-head` (`.eyebrow`, `h2.h2.metal.split`,
  `.lede`). Use `.card` (add `.neon` for the gradient edge) for tiles. Any element with `data-reveal` fades in on scroll.

## Accessibility and motion

- Text contrast is AA in all presets. The dashboard mock is a labelled `role="group"`, and its toggles are
  real buttons with `aria-pressed`.
- The page includes a skip link, a visible `:focus-visible` ring (`--focus`), native `<details>` for the FAQ, and
  `aria-hidden` on decorative layers.
- `prefers-reduced-motion: reduce` turns off Lenis, reveals, the tilt, count-ups, the breathing glow and the marquee.
  Final values are already in the markup, so nothing is missing.

## Deploy

The site is fully static, so upload the folder (without `screenshots/`).

- **Netlify:** drag the folder onto app.netlify.com/drop, or connect the repo with publish directory `.` and no build command.
- **Vercel:** run `npx vercel` in the folder, or import the repo with Framework "Other", no build command and output directory `.`.
- **GitHub Pages:** push to a repo, then go to Settings → Pages → Deploy from branch → `main` / root.
- **Anything else:** any static host or CDN works. Serve `index.html` and the `css/`, `js/` and `assets/` folders.

## Credits

- The hero and dashboard design are inspired by **Simoom (@simoomdesign)**:
  https://x.com/simoomdesign/status/2108566018788573598. The original visual design is theirs. This
  template is an independent HTML/CSS rebuild. If you use the look publicly, please credit them.
- Libraries: GSAP with ScrollTrigger and SplitText (free under GSAP's standard license), Lenis (MIT), and
  fonts via Google Fonts: Instrument Sans, Inter and Inter Tight (SIL OFL). Icons are hand-drawn inline SVG.
- "MintQX", "colehardik.com", the customer names and all figures are placeholder demo content.

## License

See `LICENSE`. The license has not been chosen yet.
