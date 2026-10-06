# DESIGN — Beryl

## Overview
- Audience: a person who keeps a small coin book and wants prices, notes, and exports on one dark board.
- Single CTA: “Get started” → mailto hello@beryl.example. The nav pill “Sign up free” uses the same destination.
- Emotion: a night desk with one green lamp.
- Create this feeling through:
  - The page is `surface-page`. Cards are `surface-card` with a green hairline, not a white SaaS sheet.
  - One green, `action-green`, for the primary pill, the live plan, checks, and the footer glow.
  - The glass orb is the only photograph. Charts, chat, radar, and the wire globe are HTML/SVG.
  - Type is one sans. Headlines are centered, tight, and white.

## Source of truth
- This file + CSS `:root` in `index.html`. Prefer code if they diverge.

## Aesthetic commitment
- Name: Night-green desk.
- Signature: a glass green orb under a pill nav, then a green-hairline bento.

## Colors (semantic)
- surface-page: `#070807` — full page.
- surface-card: `#101410` — bento, plans, FAQ, footer.
- surface-nav: `rgba(12,16,12,.88)` — the pill bar.
- action-green: `#2BD132` — primary pill, Pro plan, checks, focus. Never a full-bleed field.
- action-green-deep: `#14941A` — hover and the Pro card wash.
- text-primary: `#F4F6F4` — headlines and nav.
- text-muted: `#9AA39A` — subcopy and footer links.
- line: `rgba(43,209,50,.35)` — card borders.
- Usage: side plan buttons are a quiet gray fill (`#2c332c`), not green. The watch control stays a white hairline ghost.

## Typography
- Family: Plus Jakarta Sans, 400/500/600/700. Not the default UI grotesque.
- Display: `clamp(2.4rem, 5vw, 4.1rem)` / 700 / tracking -0.04em / leading 1.05 / centered.
- Section title: `clamp(1.8rem, 3vw, 2.6rem)` / 700.
- Body: 1rem / 1.55 / `text-muted`. Measure of the hero sub ≤ 46ch.
- Label: 0.78rem / 600.
- Plan price: 1.35rem / 700 / tabular numbers.

## Space
- wrap: `min(1120px, calc(100% - 2rem))`
- section-y: `clamp(4.5rem, 8vw, 6.5rem)`
- card padding: 22px
- gap: 14px inside the bento

## Layout and responsiveness
### Compact (< 760px)
- Pill nav keeps the wordmark and “Sign up free”. Links sit behind Menu.
- Hero stacks. Orb width 100%.
- Bento is one column. Plans stack, Pro still green. FAQ full width. Footer columns stack.
### Medium (760–1023px)
- Bento is two columns; the insight row stays split if it fits, else stacks.
- Plans stay three columns until 860px, then stack.
### Expanded (≥ 1024px)
- Pill nav is one row: wordmark, four links, sign-up pill.
- Hero is centered. The orb is about 720px wide and the section crops its lower rim.
- Features: a 1.15fr / 0.85fr top row, then two equal cards.
- Research is a centered radar with two text columns beneath.
- Pricing is three columns; the middle plan is the green one.

## Shape & elevation
- radius-pill: 999px on nav, badge, and buttons.
- radius-card: 18px.
- radius-faq: 14px.
- The orb has no frame. Cards use a 1px `line` and, on Pro and the footer, a soft green outer glow. No gray drop shadow.

## Components
### Nav
- Sticky pill. Wordmark is a green disc plus “Beryl”.
- Links: Market, Features, Pricing, Support.
- Sign-up pill: white fill, ink text, 44px. Hover darkens the fill slightly.
### Buttons
- Primary: `action-green`, ink text `#071107`, 44px, pill. Hover `action-green-deep`. Active scale 0.98. Focus 2px white offset 3px.
- Ghost: transparent, 1px white at 35%, white type. Used for “Watch the desk”.
- Quiet: `#2c332c` fill, light type. Used for the Desk and Room plans.
- One marketing verb: Get started. “Watch the desk” opens a dialog, it does not navigate away.
### Badge
- Small pill, green text, green hairline: “First week · 2% back on the desk”.
### Bento
- Insight card: title, two lines, four checks, primary button.
- Chart card: label, tabular figure, delta, an area line. Decorative; the number is the data.
- Chat card and wire-globe card sit under them. No third equal row.
### Research
- Concentric rings, a small orb at the center, a green horizon line, then a title and two columns.
### Plans
- Three. Middle is Pro: green border, green wash, green button. The side plans use the quiet gray button.
### FAQ
- Five rows. One open. Number in a small green outline. Plus becomes a minus when open. Button is the whole row, min-height 56px.
### Footer
- One rounded card with a green glow edge. Blurb left, four link columns, a row of three icons.
- The footer wordmark is the same green disc plus “Beryl”. `.foot-grid a` is `display: block`, so the wordmark rule sets `display: inline-flex` again or the disc collapses.

## Motion
- Orb drifts 8px under `prefers-reduced-motion: no-preference` only.
- FAQ and dialog use opacity and height, 200ms. Reduced motion shows the final state with transitions off.

## Iconography
- Inline SVG, 1.6px stroke, `currentColor`. Checks are filled green dots. No emoji. No ether mark.

## Content
- Sentence case in prose. Buttons are verbs.
- Fictional. hello@beryl.example. Footer says Sample template.
- The watch dialog does not claim a film is playing on a server.

## Ban list
- The reference wordmark, the reference footer name, the ether mark, designer handles.
- Purple, the default UI grotesque as display, three equal feature cards as the only pattern, emoji icons.
- Real exchange logos and scraped media.

## Accessibility
- White and green on near-black both clear. Green button text is near-black, not white.
- Focus visible. Targets ≥ 44px. Dialog has a name and a close button. FAQ buttons expose `aria-expanded`.
