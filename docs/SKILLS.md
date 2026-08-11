# Agent skills map

Index of Grok skills and method docs for **mydesignlib**.  
Slash: `/<skill-name>` · on disk: `.grok/skills/<skill-name>/SKILL.md`

**Not named `skillme.md`.** Prefer **`SKILLS.md`** (plural, clear) under `docs/` so humans find it next to other ops/method docs.

---

## Skills (agent procedures)

| Skill | Slash | When to use |
|-------|-------|-------------|
| [ship-template](../.grok/skills/ship-template/SKILL.md) | `/ship-template` | Design URL / reference → fictional rebrand → catalog item |
| [design-system-first](../.grok/skills/design-system-first/SKILL.md) | `/design-system-first` | Tokens + DESIGN.md **before** HTML |
| [anti-slop-frontend](../.grok/skills/anti-slop-frontend/SKILL.md) | `/anti-slop-frontend` | Kill generic AI aesthetics / ban list |
| [premium-site](../.grok/skills/premium-site/SKILL.md) | `/premium-site` | Multi-pass “$10K” polish or cold premium build |

### Default route (do not stack every skill)

```
design-system-first
  → anti-slop-frontend (check)
  → ship-template | premium-site build
  → premium-site polish (type → space → motion → mobile)
  → brand audit + HTTP verify
```

Always-on product rules: root [`AGENTS.md`](../AGENTS.md).  
Hosting / deploy: [`OPERATIONS.md`](./OPERATIONS.md).

---

## Method & corpus docs (`docs/`)

| File | What it is |
|------|------------|
| [TEMPLATE_WORKFLOW.md](./TEMPLATE_WORKFLOW.md) | Human ship pipeline for website templates |
| [premium-site-method.md](./premium-site-method.md) | Human premium polish method |
| [method-design-md-for-ai.md](./method-design-md-for-ai.md) | DESIGN.md that agents can execute (7 mistakes) |
| [ai-website-methods-corpus.md](./ai-website-methods-corpus.md) | Index of X/community methods folded into skills |
| [OPERATIONS.md](./OPERATIONS.md) | Pages, privacy, GA, deploy smoke checks |
| **SKILLS.md** (this file) | Skills map + **filename naming scheme** |

---

## Filename naming scheme

Goal: **identify the file’s role from the name alone** (scan `docs/` or `references/` without opening).

### `docs/` prefixes

| Prefix | Meaning | Example |
|--------|---------|---------|
| `method-` | Reusable how-to / checklist for design or build | `method-design-md-for-ai.md` |
| `corpus-` | Multi-source research index *(legacy: `ai-website-methods-corpus.md`)* | prefer `corpus-<topic>.md` for new files |
| `OPERATIONS` / `TEMPLATE_WORKFLOW` | Caps = long-lived ops / pipeline (existing convention) | keep as-is |
| `SKILLS` | Skills map (this file) | `SKILLS.md` |

Avoid vague names: `notes.md`, `skillme.md`, `misc.md`, `new.md`.

### Skill packages (Grok convention)

```
.grok/skills/<skill-name>/
  SKILL.md                 # required entry — agent instructions + triggers
  references/              # optional source distillations
    method-<topic>.md      # method folded into this skill
    src-<author>-<topic>.md  # single X/article distillation
```

| Prefix in `references/` | Meaning | Example |
|-------------------------|---------|---------|
| `method-` | Actionable method (agent + human) | `method-design-md-7-ai-mistakes.md` |
| `src-` | One external source, lightly edited | `src-cloudxdev-award-prompt.md` *(new files; older files may omit `src-`)* |

Existing premium-site refs (`cloudxdev-*.md`, `prajwal-taste-first.md`, …) keep names; **new** refs should use `method-` or `src-`.

### Per-library design systems (not method docs)

| File | Role |
|------|------|
| `library/<type>/<id>/DESIGN.md` | **This item’s** design system (tokens, components, bans) |
| `library/<type>/<id>/index.html` | Implementation (`:root` tokens match DESIGN.md) |

`DESIGN.md` = product/template design system.  
`method-design-md-*.md` = **how to write** a good DESIGN.md for AI.

---

## DESIGN.md quality (quick)

See **[method-design-md-for-ai.md](./method-design-md-for-ai.md)**.

1. Not a mood board — emotion → observable rules  
2. Semantic tokens + usage  
3. Components, not foundations only  
4. Responsive *behaviour*  
5. Motion / icons / content  
6. Short, non-contradictory  
7. **Read** the file before writing UI  

Agent: `/design-system-first`
