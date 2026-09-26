# Rebuild prompt — Hearthline (`hearthline`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/hearthline/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Charity nonprofit landing — soft hero with volunteer photo cards, coral/dark/yellow impact metrics, green volunteering band, donation campaigns with progress bars.

## Title
Hearthline — Together for a brighter future

## Description meta
Fictional charity landing. Soft hero with volunteer photo, impact metrics, volunteering benefits, donation campaigns with progress bars.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #eef0f4;
  --shell: #ffffff;
  --ink: #111318;
  --muted: #6b7280;
  --soft: #9ca3af;
  --line: rgba(17, 19, 24, 0.08);
  --green: #22c55e;
  --green-deep: #16a34a;
  --green-soft: #dcfce7;
  --green-banner: #34d399;
  --green-banner-2: #4ade80;
  --coral: #fb923c;
  --coral-soft: #ffedd5;
  --yellow: #facc15;
  --yellow-soft: #fef9c3;
  --dark: #111318;
  --radius: 22px;
  --radius-sm: 16px;
  --shadow: 0 18px 44px rgba(20, 30, 50, 0.08);
  --font: Manrope, system-ui, sans-serif;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #nav .nav
  - a: Hearthline → #top
  - nav .nav-links “Primary”
    - a: What We Do → #programs
    - a: Causes → #volunteer
    - a: Donation → #donate
    - a: Stories → #results
  - a: Donate Now → #donate
- section #top .hero
  - h1: Together for making a brighter future
  - p: Together, we can make a real impact in communities around the world. Help us bring hope and support.
  - a: Donate Now → → #donate
  - a: Learn More → #programs
  - p: Our most loved partners
  - button: ▶ Watch our story reel
  - p: Providing essential resources and aid to those who are in need.
- section #programs .metrics
  - h2: Programs that change lives
  - p: Together, we can make a real impact in communities around the world. Help us bring hope and support.
  - article .metric.coral.reveal
    - p: Ensuring food security for vulnerable families and individuals.
  - article .metric.dark.reveal
    - p: Providing resources and aid to those in need — education and health.
  - article .metric.yellow.reveal
    - p: Giving communities access to safe homes and a restored future.
- section #volunteer .volunteer
  - p: Together, we can make a real impact in the world. Help us bring hope and support.
  - h2: Discover the Impact of Volunteering
- section #donate .campaigns
  - h2: Make a meaningful donation today
  - p: Together, we can make a real impact in communities around the world. Help us bring hope and support.
  - article .camp.reveal
    - h3: Shelter and Safety Housing
    - p: This campaign focuses on rebuilding homes destroyed by natural disasters and restoring safe shelter.
    - a: Donate Now → mailto:hello@hearthline.example
  - article .camp.reveal
    - h3: Medical Aid Campaign
    - p: Supporting clinics and emergency care so families can access treatment without delay.
    - a: Donate Now → mailto:hello@hearthline.example
  - article .camp.reveal
    - h3: Give a Meal Drive
    - p: Packing and delivering nutritious meals to families facing food insecurity this season.
    - a: Donate Now → mailto:hello@hearthline.example
- section #results .results
  - h2: Results that inspire change
  - p: Transparent impact reporting keeps every gift accountable — from meals served to homes rebuilt.
  - ul .checks
    - li: ✓ Field partners vetted for ethics and local leadership
    - li: ✓ Monthly public impact updates for every campaign
    - li: ✓ 85%+ of funds go directly to program delivery
  - h3: Ready to bring hope this week?
  - p: Start with any amount. Join 1,000+ donors already supporting Hearthline programs worldwide.
  - a: Donate Now → → mailto:hello@hearthline.example
- footer .footer

## Images in the page
- `hero-team.jpg — Hearthline volunteers outdoors`
- `metric-child.jpg — Child supported by meal programs`
- `metric-group.jpg — Community members supported`
- `metric-home.jpg — Home rebuild project`
- `volunteer-team.jpg — Volunteer team smiling together`
- `campaign-shelter.jpg — Shelter rebuild campaign`
- `campaign-medical.jpg — Medical aid campaign`
- `campaign-food.jpg — Food security campaign`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `campaign-food.jpg`
- `campaign-medical.jpg`
- `campaign-shelter.jpg`
- `hero-team.jpg`
- `index.html`
- `metric-child.jpg`
- `metric-group.jpg`
- `metric-home.jpg`
- `preview.jpg`
- `volunteer-team.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
