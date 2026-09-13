# Method: 7 DESIGN.md tips for consistent AI UI

**Filename:** `method-design-md-7-ai-tips.md`  
**Human doc:** `docs/method-design-md-for-ai.md`  
**Companion:** `method-design-md-7-ai-mistakes.md` (what fails) — this file is the construction guide.

Source (captured 2026-08-12):  
https://freedium-mirror.cfd/uxplanet.org/7-design-md-tips-for-better-more-consistent-ai-generated-ui-b01736d07748  

Author lineage: Nick Babich / UX Planet · Google DESIGN.md / Stitch framing.  
Tooling: `npx @google/design.md lint` · `diff`

**Repo skill:** `design-system-first`

---

## Thesis

Best DESIGN.md = **exact token values** + **token references in components** + **intent in prose** + **hard do/don’t rules**. YAML answers *what*; Markdown answers *why/when*.

## 7 tips (repo-adapted)

| # | Tip | mydesignlib practice |
|---|-----|----------------------|
| 1 | If it can be a value, record the value | Spacing scale, radii, type roles with size/weight/leading — prefer CSS `:root` as runtime SoT; optional YAML only if linting |
| 2 | Markdown body = intent | Usage bullets: when accent, when muted, when not to use a radius |
| 3 | Token refs inside components | “Primary button = `action-primary` bg + `radius-pill` + type `label`” not raw hex copied thrice |
| 4 | Interaction states explicit | Document hover/focus/disabled (or pressed) for buttons/nav — don’t assume the agent invents them consistently |
| 5 | Concrete Do’s & Don’ts | Operational: “one primary CTA per major content area”; “accent never as decorative full-bleed” |
| 6 | Lint when schema-friendly | `npx @google/design.md lint path/to/DESIGN.md` |
| 7 | Diff when the system evolves | Version folders (`-v1`/`-v2`) + optional `design.md diff`; never silent token drift mid-polish |

### Typography roles (not family alone)

Define roles such as display / h1 / body / label with **family + size + weight + line-height** (and tracking if needed). Family-only specs let the model invent a new hierarchy per section.

### Spacing scale (vocabulary)

Named steps (`space-2` … `space-24`, `section-y`) beat arbitrary 13/18/27px gaps across bands.

## Runtime source of truth in this repo

| Layer | Role |
|-------|------|
| `library/.../DESIGN.md` | Roles, usage, components, bans (agent-readable) |
| CSS `:root` in `index.html` | Implementable values agents paste and reuse |
| Optional YAML frontmatter | Only if you want Google CLI lint; not required for marketing one-pagers |

## Section order (Google-friendly, flexible)

Overview / Brand → Colors → Typography → Layout & spacing → Elevation → Shapes → Components → Do’s and Don’ts  

Marketing compact form may omit multi-theme tables; keep components + do/don’t.

## Related

- Mistakes checklist: `method-design-md-7-ai-mistakes.md`  
- Best practices (3 writing rules): `method-design-md-best-practices.md`  
- Anthropic plan gate: `src-anthropic-frontend-design.md`  
