---
name: anti-slop-frontend
description: >
  Kill generic AI website aesthetics before and during frontend work: ban Inter/purple/3-card
  templates, force one committed aesthetic, intentional type/color/layout, AI-look checklist,
  and optional award-style landing prompt. Use when the user says AI slop, anti-slop, generic
  AI look, purple gradient Inter, make it not look AI, modern-frontend-design, award landing
  prompt, distinctive UI, or /anti-slop-frontend. Complements premium-site polish and
  design-system-first; does not replace ship-template brand rules.
---

# Anti-slop frontend

Synthesized from:

- [@cloudxdev modern-frontend-design skill](https://x.com/cloudxdev/status/1993449864756437414)  
- [@cloudxdev award landing prompt](https://x.com/cloudxdev/status/2002526815022190985)  
- Anthropic frontend-design principles + community AI-look consensus  
- Full notes: `../premium-site/references/cloudxdev-*.md`, `docs/ai-website-methods-corpus.md`

**Core rule:** models regress to the mean of training data (safe SaaS template). Push them to the **edge of a single committed aesthetic** with hard bans.

Respect `AGENTS.md` (fictional brands, original assets, vanilla static for catalog templates).

## When to use

| Intent | Action |
|--------|--------|
| New page about to be coded | Run **Phase 0–2** before writing HTML |
| Existing page looks AI-generated | Run **AI Look audit** → fix violations only, prefer versioned `<id>-v1` |
| User wants “Awwwards-level” one-shot | Use **Award prompt mode** then `premium-site` polish |
| After design-system-first | Verify tokens don’t reintroduce slop defaults |

## Phase 0 — Context, concept, commitment

Before any CSS, state briefly:

1. **Context** — who, problem, emotion  
2. **Concept** — one metaphor / subject vernacular (materials, tools, industry)  
3. **Commitment** — **ONE** primary aesthetic (optional hybrid of 2 max)

### Aesthetic menu (pick one)

Neo-Brutalist · Soft Minimalism · Retro-Futuristic · Editorial/Magazine · Organic/Natural · Glass (only if briefed) · Maximalist · Art Deco · Memphis · Swiss · Dark Academia · Y2K · Custom Hybrid  

If the brief is architecture → Organic/Editorial, not Glass+purple SaaS.  
If fintech dark mode → one accent, not rainbow gradients.

## Phase 1 — Hard ban list (always on)

**Never stack the AI Look kit:**

- Purple / indigo / blue-violet gradients on white (or “AI SaaS purple” primary `#6366F1` / `#667eea`)  
- Inter, Roboto, Open Sans, Arial, bare `system-ui` as **display** face  
- Centered hero + subheading + dual CTAs as the only hero pattern  
- Three equal feature cards as the only content pattern  
- Rounded corners + drop shadows on every card  
- 16px radius everywhere  
- Emoji as icons  
- Generic blob shapes / cliché stock energy  
- “Modern, clean, simple, premium” as the only design direction  
- Bounce / elastic / multi-second looped hero noise without purpose  

## Phase 2 — Tokens before markup

Define and stick to:

```css
:root {
  --font-display: /* distinctive, not Inter */;
  --font-body: /* complementary */;
  /* 4–6 named hex colors from subject, not defaults */
  --ink: ;
  --paper: ;
  --muted: ;
  --accent: ; /* ONE bold accent used sparingly */
  --line: ;
  /* type + space scales — see premium-site */
}
```

Typography pairings (examples, not defaults):

| Mood | Display | Body |
|------|---------|------|
| Editorial | Cormorant Garamond / Instrument Serif | Outfit / Source Serif |
| Tech | Space Grotesk / Satoshi | IBM Plex Sans |
| Bold | Bebas / Archivo Black | Work Sans |
| Luxury | Playfair / Libre Baskerville | Karla |

## Phase 3 — Layout & hero

- Hero is a **thesis**, not a badge row  
- Prefer asymmetric grids, overlapping media/copy, or strong single-column editorial — not always centered-everything  
- Numbered steps only when order is real information  
- One **signature** device; keep the rest quiet  

## Phase 4 — Motion (restrained)

- Orchestrated load stagger **or** scroll reveal — not both fighting  
- 200–300ms ease; translateY ≤20px; hover lift ≤4px  
- `prefers-reduced-motion: reduce` disables motion  
- Nothing bounces  

## Award prompt mode (optional one-shot)

When user wants a full landing from a brief, mentally fill:

```
Company: […] Audience: […] Differentiators: […] Primary CTA: […]
Aesthetic options A–E: […] → pick one unexpected-but-fit choice
Bans: AI Look checklist above
Sections: hero, story, showcase, proof, differentiators, conversion, footer
Stack: vanilla HTML/CSS/JS, templates/<id>/
Before code outline: aesthetic, fonts, hex palette, hero hook, one interactive idea
```

Then build complete page. Follow with `/premium-site` polish passes (type → space → motion → mobile).

## AI Look audit (existing page)

Grep / visual check:

```bash
rg -i 'Inter|Roboto|#6366F1|#667eea|purple|gradient.*667|emoji|❤️|♥' templates/<id>/ || true
```

Fix hits. Prefer shipping as `<id>-v1` if the original is already cataloged.

## Quality checklist (ship gate)

- [ ] One clear aesthetic commitment (named)  
- [ ] Ban list clean  
- [ ] Display font is intentional  
- [ ] Accent color used sparingly  
- [ ] Hero is memorable / not template-centered-only  
- [ ] Motion restrained + reduced-motion  
- [ ] Focus states exist  
- [ ] Realistic copy (no lorem)  
- [ ] Fictional brand / original assets (`AGENTS.md`)  

## Do not

- Call this skill **and** five other design skills in one turn (see skill-routing)  
- Replace `premium-site` multi-pass polish with one “make it beautiful”  
- Introduce React/Vite for a single marketing page in this repo  
