---
name: clean-interface
description: >
  Build calm, high-clarity marketing and product UI: abundant whitespace, one soft accent,
  centered thesis hero, product-as-proof, floating benefit chips, restrained type, soft
  elevation. Use when the user says clean design, clean SaaS, minimal landing, whitespace,
  privacy analytics look, soft product UI, quiet interface, or /clean-interface. Complements
  anti-slop (direction) and design-system-first (tokens); does not replace brand rebrand rules.
---

# Clean interface

Synthesized from clean SaaS / privacy-product landings (e.g. community shares such as
[@UXRishi clean design](https://x.com/UXRishi/status/2087364187643420869) — structure only;
never copy real brands). Notes: `references/src-uxrishi-clean-saas.md`.

**Core rule:** Clean is not “empty.” It is **hierarchy + air + one accent + product proof**.
Adjectives alone (“clean, minimal”) fail — use the checklist below.

Respect `AGENTS.md` (fictional brands, original assets, vanilla static).

## When to use

| Intent | Action |
|--------|--------|
| Privacy / analytics / devtools / B2B SaaS landing | Prefer this direction after DS-first |
| User wants “clean like that screenshot” | Extract structure; rebrand; apply tokens |
| Page feels noisy or salesy | Strip sections; keep thesis + product + proof |
| After anti-slop | Soft minimal is one valid commitment — execute fully |

## Route

```
design-system-first  → tokens + DESIGN.md
anti-slop-frontend   → ban list (no Inter/purple-mesh defaults)
clean-interface      → this checklist while building
premium-site polish  → type / space passes (critical for clean)
interface-craft      → radii, hit areas, focus
```

Do not stack maximalist award modes with this skill in the same pass.

## Design plan (before HTML)

1. **One job** of the page (e.g. start trial for privacy analytics)  
2. **Thesis headline** — two short lines max; concrete, not “all-in-one platform”  
3. **One accent color** + paper + ink + muted (4–5 tokens total for chrome)  
4. **Product proof** — dashboard / editor / map as the visual hero (HTML/CSS mock, not stock)  
5. **Signature soft detail** — ambient glow *behind* product, or one annotation arrow — not both fighting  

Uniqueness check: if the plan is only “white + purple + 3 cards,” revise (different accent, product-first layout, or chip annotations).

## Principles (do these)

### Space & structure
1. **Air first** — large section padding (`section-y` ≥ 4–6rem); hero copy block with generous gap before product  
2. **Center the thesis** for marketing heroes; left-align product UI chrome inside the frame  
3. **One primary CTA** above the fold; secondary is outline/ghost only  
4. **Nav is quiet** — logo, 3–5 links, Sign in text, one outline or soft primary CTA  

### Type
5. **One family** (or display + body from the same geometric sans) — not Inter as display  
6. **Large H1**, tight tracking, high contrast on paper  
7. **Short subcopy** (≤ 2 lines) in muted ink; max measure ~40–45ch  

### Color
8. **Paper-first** — white / near-white field; accent used for CTAs, active nav, chart, and soft glow only  
9. **Soft accent glow** behind product (radial, low opacity) — never a full-page purple mesh gradient  
10. **Semantic deltas** — green/red only for up/down metrics, never decorative  

### Product-as-proof
11. Build a **believable UI mock** (browser chrome, sidebar, metric row, one chart) in HTML/CSS  
12. Prefer **real-looking numbers** (tabular-nums) over lorem  
13. **Floating chips** around the product (“No cookies”, “Script &lt; 1KB”) beat a 3-card feature grid  

### Trust & footer of hero
14. **Monochrome logo strip** of *fictional* partners — low contrast, equal optical weight  
15. Skip dense footer above the fold; keep social proof light  

### Motion
16. Optional: fade/slide product once; chip float is static or 1 subtle rise  
17. Honor `prefers-reduced-motion`  

## Anti-patterns (don’t)

- Inter + `#6366F1` gradient hero as the whole brand  
- Three equal feature cards as the only proof  
- Dark mode chrome on a “clean light” page without commitment  
- Stock photos of smiling teams above the product  
- Five CTAs competing in the hero  
- Busy illustration systems when the product UI can carry the story  
- Copying real analytics brands (Plausible, etc.) — structure only  

## Compact token starter

```css
:root {
  --paper: #ffffff;
  --paper-soft: #fafbfc;
  --ink: #0f172a;
  --muted: #64748b;
  --line: #e2e8f0;
  --accent: #5b5bd6;      /* pick per brand — not mandatory indigo */
  --accent-soft: #eef0ff;
  --success: #16a34a;
  --danger: #dc2626;
  --radius: 12px;
  --radius-pill: 999px;
  --shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
  --font: "Plus Jakarta Sans", system-ui, sans-serif;
  --section-y: clamp(3.5rem, 8vw, 5.5rem);
}
```

## Section spine (marketing)

1. Quiet nav  
2. Optional pill + annotation line  
3. Centered H1 + muted lead  
4. Primary + secondary CTAs  
5. Product stage (glow + mock + chips)  
6. Logo / trust strip  
7. Optional deeper sections below fold (how it works, pricing) — same air and type scale  

## Done checklist

- [ ] Named aesthetic: soft clean SaaS (or hybrid)  
- [ ] 4–6 tokens; one accent  
- [ ] Thesis H1 + short lead + one primary CTA  
- [ ] HTML product mock as visual center  
- [ ] Floating chips or equivalent proof labels  
- [ ] No Inter-as-display; no emoji icons  
- [ ] Fictional brand; brand audit clean  
- [ ] Mobile: nav drawer, stacked CTAs, readable mock  
- [ ] Reduced-motion respected  

## Related

- `/design-system-first` — tokens + DESIGN.md first  
- `/anti-slop-frontend` — ban list  
- `/premium-site` — type/space polish passes  
- `/interface-craft` — micro feel  
- Example ship: `library/websites/quietly/`  
