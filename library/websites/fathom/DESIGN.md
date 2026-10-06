# DESIGN — Fathom

## Overview
- Audience: a finance team that already keeps shop books.
- Single CTA: “Open the desk” → `mailto:desk@fathom.example`. Repeat once in the close band. “Sign in” is the same mailto, secondary.
- Emotion: a careful analyst at a quiet desk, not a launch hype page.
- Create this feeling through:
  - One vertical wash: `surface-void` held through the top ~40%, then `surface-electric` at mid-hero, `surface-mid`, `surface-lilac`, landing on `surface-page`.
  - A white notch nav (shoulders meet the top edge). One bright `action-primary` button with a soft glow. No second accent color.
  - Ruled job rows, not a trio of equal cards.
  - Urbanist only, tight display tracking, short sentences.

## Source of truth
- This file + CSS `:root` in `index.html`. If they diverge, prefer the code and fix this file.

## Aesthetic commitment
- Name: Electric desk wash.
- Signature element: the white hanging notch (inverted shoulder curves) over the black-to-#1219F0 wash, with the composer card sitting in the blue.

## Uniqueness
- The notch-plus-electric-wash is the page. A generic centered SaaS hero without that notch, or a purple indigo system, fails the brief.
- Not the default clusters: no cream/serif/terracotta, no acid green, no hairline broadsheet.

## Colors (semantic)
- `surface-void` #0B0D12 — hero top ~40% and the close band. Not a card fill.
- `surface-electric` #1219F0 — gradient midpoint only. Not a button, not body text.
- `surface-mid` #5257F4 — gradient step only.
- `surface-lilac` #8A8EF7 — gradient step only. Not purple #6366F1.
- `surface-page` #E9EAFE — hero end, jobs ground, footer.
- `surface-card` #FFFFFF — prompt outer frame.
- `surface-well` #F0F0F1 — prompt inner well.
- `surface-badge` #1A1C22 — intro pill. Border `line-badge` #2A2D35.
- `surface-inverse` #24262C — “Sign in” and send.
- `text-on-dark` #FFFFFF — headline, pills, close.
- `text-muted` #C9CCD4 — hero subtext only, on the dark/blue wash.
- `text-ink` #0B0D12 — nav, jobs, wordmarks, answer.
- `action-primary` #1A8CFF — “Open the desk” only, plus its glow. Ink label on this fill (white fails contrast).
- Usage: gradient stops are not UI chrome. Do not recolor links electric. Do not add a second brand blue.

## Typography
- Family: Urbanist (400, 500, 600, 700) for every role. No Inter, no second face.
- Display: 600, `clamp(2rem, 3.6vw, 3.5rem)`, leading 1.08, tracking -0.03em. Forced two lines at expanded width.
- Body / sub: 400, 15px, leading 1.5, measure 460px.
- Label: 500, 14px nav; 12px badge and chips.
- Wordmark: 700, 15px.

## Space
- Hero is a 1000px column at ≥1100px so nav, headline, buttons, and the prompt card sit inside a 1440×1000 frame.
- Gaps: 8 / 12 / 16 / 22 / 28. Jobs padding 72px 0 32px. Close padding 88px 0.
- Wrap: jobs 880px. Card 592px. Nav 900×60.

## Layout and responsiveness
### Compact (<720px)
- Notch becomes a full-width white bar: brand + “Menu”. Links hide until `aria-expanded`.
- Headline uses the clamp. Buttons wrap. Card and pills full width and wrap. Job rows stack. Wordmarks wrap.
### Medium (720–1099px)
- Notch stays, width `min(900px, calc(100% - 48px))`. Hero height follows content (no forced 1000px).
### Expanded (≥1100px)
- Hero `min-height: 1000px`. Wordmarks pin to the bottom of the wash. Card fixed 592px. Jobs stay one ruled measure.

## Shape & elevation
- CTA radius 6px. Pills and badge fully round. Card outer radius 16px; well 12px.
- One elevation: card shadow `0 20px 50px` at electric 18% plus a tight ink shadow. Primary glow `0 8px 28px` at action 45%. No shadow on job rows.

## Components
### Notch nav
- White tab, 60px, bottom radius 22px. Shoulders: 36px inverted radial fillets so the curve meets the top edge. Not a plain rectangle.
- Links 14px/500, `text-ink`. Left: Books, Notes, each with a 12px chevron. Center: geometric F (three bars, `surface-electric`) + “Fathom” 700. Right: Desk, Pricing.
- Hover: opacity 0.65. Focus-visible: 2px outline. Compact: Menu controls the link panel.

### Badge
- `surface-badge` pill, 1px `line-badge`, 12px. Inner black pill “Introducing”, then “Fathom 2” and a 12px diagonal arrow.

### Buttons
- Primary: `action-primary`, ink label, radius 6px, min-height 44px, glow. Hover: lighten to #47A3FF. One primary per band.
- Secondary “Sign in”: `surface-inverse`, white label, same radius and height, no glow. Hover: #34373F.
- Both mailto the desk. Disabled: not used.

### Prompt card
- 592px, `surface-card` frame, 5px padding, elevation above. Well `surface-well`, min-height 108px, real textarea.
- Chips (Draft the week, Find a line, Search the books): gray #E4E5E8, ink, 12px, pill, min-height 36px.
- Send: `surface-inverse`, white paper-plane, min-height 40px.
- Send, chips, and suggestion pills write the sample reading locally. Never say a server received it.
- Answer region `aria-live="polite"`. Empty until a trigger. Text is the flour-and-rent note only.

### Suggestion pills
- Two rows: Read the market, Sync the books / Compare the years, Write a rule, Look at spend.
- Fill `text-on-dark` at 10%, border white at 22%, radius pill, white 14px label, 16px outline icon.
- Click fills the textarea with that ask and writes the same sample reading.

### Wordmarks
- Harbeck, Lowell, Pindar, Brant, Moth. Original 16px geometric marks + 700 word. Ink on the pale end of the wash. No real companies.

### Job list
- Three rows with an index: the week letter, the forecast line, the spend question.
- Hairline `line-rule` (ink 16%). Not cards, not equal columns. Index in `surface-electric`.

### Close
- `surface-void` band. One sentence. Same primary button.

### Footer
- `surface-page`. “Fathom · Sample template · desk@fathom.example”.

## Motion
- Purpose: hover and the reading appearing. 200ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`.
- Answer: opacity + 8px translate. No `transition: all`.
- `prefers-reduced-motion: reduce`: no animation, no transition.

## Iconography
- Inline SVG only, stroke 1.5, round caps. Sizes 12 / 16. Outline icons on pills; solid geometric F. No emoji.

## Content
- Sentence case. Buttons are verbs. Sample reading is fictional and local.
- Contact only `desk@fathom.example`. Footer includes “Sample template”.
- No reference product names, and no real venture, payments, or software logos.

## Ban list
- Inter, Roboto, purple #6366F1, three equal feature cards, emoji icons, scraped media, lookalike marks, `transition: all`, a second display face.

## Accessibility
- Ink on `action-primary` (white is ~3.3:1). White on `surface-inverse` and on the dark wash.
- `:focus-visible` outline 2px, offset 3px. Tap targets ≥44px on the two CTAs and Menu.
- Textarea has a visually hidden label. Live region announces the reading.
