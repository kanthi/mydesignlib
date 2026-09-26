# Rebuild prompt — Roamora (`roamora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Travel
- Folder: `library/websites/roamora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI travel itinerary — mid-century editorial landmark hero, paper grain, trip prompt card, discover, pricing, FAQ. Living-illustration motion.

## Title
Roamora — Where will you go next?

## Description meta
AI trip planner with a mid-century travel journal look. Fictional product sample using original editorial illustration.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --paper: #f6f0e6;
  --paper-deep: #efe6d8;
  --ink: #1c1712;
  --muted: #6b5f52;
  --brown: #8b5e3c;
  --terracotta: #b06a45;
  --olive: #6b7a52;
  --line: rgba(28, 23, 18, 0.1);
  --font: "DM Sans", system-ui, sans-serif;
  --display: "Fraunces", Georgia, serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #top .hero
  - a: roamora → #top
  - button: Menu
  - nav .nav-links
    - a: Discover → #discover
    - a: Pricing → #pricing
    - a: FAQs → #faq
  - a: Login → #contact
  - a: Plan my trip → #contact
  - h1: Where will you go next?
  - p: Tell our AI where you’re going and what you love. We’ll create a personalized itinerary for you.
  - form #tripForm .prompt-card
    - button: ↑
    - button: Plan my trip
- section #discover .discover.center
  - p: Discover
  - h2: Trips that feel hand-illustrated
  - p: Roamora plans like a travel journal — warm, specific, and human — not a list of tourist traps.
  - article .dest
    - h3: Hidden tables
    - p: Neighborhood cafés, market mornings, and reservations that match your pace.
  - article .dest
    - h3: Quiet trails
    - p: Scenic hikes timed for light crowds and golden hour returns.
  - article .dest
    - h3: Story first
    - p: Museums, craft streets, and day-by-day arcs that actually make sense.
- section #pricing .pricing.center
  - p: Pricing
  - h2: Plan freely. Upgrade when you roam more.
  - article .price
    - ul
      - li: 1 active itinerary
      - li: AI day-by-day draft
      - li: Export as PDF
    - a: Start free → #contact
  - article .price.featured
    - ul
      - li: Unlimited itineraries
      - li: Live re-planning on the road
      - li: Shared trip boards
      - li: Priority generation
    - a: Go Voyager → #contact
- section #faq .faq.center
  - p: FAQs
  - h2: Questions before you pack
  - button: How does Roamora build my itinerary?+
  - button: Can I avoid crowds and tourist traps?+
  - button: Does it work offline on the trip?+
- section #contact .cta
  - h2: Ready for the next chapter?
  - p: Start with a free itinerary — no passport required yet.
  - a: Plan my trip → mailto:hello@roamora.example
- p: Technique (from the tutorial thread): mid-century editorial illustration as hero art → subtle “living illustration” motion (gentle scale/drift) → soft paper veil for type readability. Original AI artwork; fictional brand. Type: Fraunces + DM Sans.
- footer
  - a: hello@roamora.example → mailto:hello@roamora.example

## Fields
Keep these controls, including ids and placeholders.
- textarea #tripPrompt name=prompt placeholder="I'm planning a 7-day trip to Japan in October. I love food, hidden cafés, scenic hikes, and want to avoid crowds…"

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `hero-art.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
