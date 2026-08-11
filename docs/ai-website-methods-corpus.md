# AI website design & build methods — corpus

Captured: **2026-08-05**  
Seed post: [@bateshkaaa — agencies vs Claude, constraint pipeline](https://x.com/bateshkaaa/status/2079218516150862086)  
Repo skills: `premium-site` · `anti-slop-frontend` · `design-system-first` · `ship-template`

This file indexes **similar X posts** about designing/building websites with AI coding agents (Claude Code, Cursor, etc.) so methods can be reused without re-researching the feed.

---

## Shared thesis (every serious post)

| Default AI output | Fix |
|-------------------|-----|
| Inter / system display fonts | Distinctive display + body pairing |
| Purple / indigo gradients | Context-specific palette from subject |
| 3 equal feature cards, centered hero | Editorial asymmetry, thesis hero |
| “Make it premium / beautiful” | Constraints, ban lists, references, separate polish passes |
| One mega-prompt | Skills + design system **before** code, then multi-pass QA |

---

## Tier A — full pipelines (document + skill)

### 1. Bateshkaaa constraint pipeline (seed)

- **URL:** https://x.com/bateshkaaa/status/2079218516150862086  
- **Author:** @bateshkaaa  
- **Engagement (at capture):** ~337 likes · 1.2k bookmarks · 531k views  
- **Method:** Load design skills → 3 screenshot refs → 5-block build prompt → separate type / spacing / motion passes → mobile → ship  
- **Skill:** `premium-site`  
- **Notes:** `docs/premium-site-method.md`, `references/source-post.md`

### 2. Bateshkaaa — Yashica Jain 8-step polish walkthrough

- **URL:** https://x.com/bateshkaaa/status/2084278546126532906  
- **Author:** @bateshkaaa (amplifying Yashica Jain process)  
- **~165 likes · 301 bookmarks**  
- **Method:** Kill Inter + purple defaults; load design skills; feed real inspiration; purposeful micro-interactions; hierarchy; sticky/scroll motion that feels expensive  
- **Maps to:** `premium-site` Part 4 + `anti-slop-frontend` ban list  

### 3. CloudAI-X — modern-frontend-design skill (full SKILL.md)

- **URL:** https://x.com/cloudxdev/status/1993449864756437414  
- **Author:** @cloudxdev  
- **~433 likes · 967 bookmarks**  
- **Method:** Context → concept → commit **one** aesthetic; tokens before code; anti-AI-look checklist; orchestrated motion; quality checklist  
- **Skill:** `anti-slop-frontend`  
- **Notes:** `references/cloudxdev-modern-frontend.md`

### 4. CloudAI-X — award-style landing prompt (fill-in template)

- **URL:** https://x.com/cloudxdev/status/2002526815022190985  
- **Author:** @cloudxdev  
- **~1.6k likes · 4.3k bookmarks · 155k views**  
- **Method:** System role as CD; ban AI slop; pick ONE aesthetic; required sections; single HTML; thinking outline before code  
- **Skill:** folded into `anti-slop-frontend` “award prompt” mode  
- **Notes:** `references/cloudxdev-award-prompt.md`

### 5. Prajwal Tomar — taste-first / design system before code

- **URLs:**  
  - https://x.com/PrajwalTomar_/status/2082081647252685163  
  - https://x.com/PrajwalTomar_/status/2082504676252229999  
  - https://x.com/PrajwalTomar_/status/2084647555074502804  
  - Article: https://x.com/i/article/2082058290817822720  
  - Related: https://x.com/PrajwalTomar_/status/2056775212763598946  
- **Author:** @PrajwalTomar_  
- **Method:** Same model + brief, different inputs → purple template vs studio quality.  
  1) Cultivate taste (references, not adjectives)  
  2) Give tools (skills / design system)  
  3) Build the right way (system → template → skill → one-shot)  
  “Stop blaming the model; upgrade what you feed it.”  
- **Skill:** `design-system-first`  
- **Notes:** `references/prajwal-taste-first.md`

### 6. monokern — Claude Design → design system → Claude Code

- **URL:** https://x.com/monokern/status/2083610099549954330  
- **Author:** @monokern  
- **~63 likes · 42 bookmarks** (article parent much larger)  
- **Method:** Upload refs/brand assets → extract type, palette, radii, elevation → apply site-wide → export spec into code agent without losing fidelity  
- **Skill:** `design-system-first`  
- **Notes:** `references/monokern-design-system.md`

### 6b. UX Planet — 7 DESIGN.md mistakes (actionable specs for AI)

- **URL:** https://freedium-mirror.cfd/uxplanet.org/7-design-md-mistakes-that-make-ai-generated-ui-worse-9ec2dfcc44cd  
- **Method:** DESIGN.md fails when it is a mood board, raw hex dump, foundations-only, missing responsive *behaviour*, silent on motion/icons/content, too long/contradictory, or **never loaded** into agent context. Fix with semantic tokens, component rules, layout logic by breakpoint, short rules (~200 lines), and explicit read/attach before UI work. Optional: `npx @google/design.md lint`.  
- **Skill:** `design-system-first` (required sections + 7-mistake table)  
- **Notes:** `docs/method-design-md-for-ai.md` · `.grok/skills/design-system-first/references/method-design-md-7-ai-mistakes.md`

### 7. Sam AI — goal-first brief (10-minute website)

- **URL:** https://x.com/AIandTechh87/status/2038117959214788640  
- **Author:** @AIandTechh87  
- **~236 likes · 287 bookmarks**  
- **Method:** Goal (what site **does**) → brief template (audience, refs, features, CTA) → 5–10 refs → plan → approve → build → live  
- **Maps to:** `premium-site` Part 3 + `ship-template`  

### 8. typakon4 — skill routing (don’t stack 10 design skills)

- **URL:** https://x.com/typakon4/status/2082869749021565259  
- **Author:** @typakon4  
- **Method:** Agents average contradictory “make it beautiful” skills. Route: **direction → one implementation mode → screenshot QA → release review → design-system memory**. Catalog of skills (impeccable, frontend-design, taste-skill, anti-slop, etc.)  
- **Skill:** routing rules inside `premium-site` + corpus  
- **Notes:** `references/skill-routing.md`

### 9. 7-step prompt framework (strategy → type → space → motion → case → trust → refs)

- **URL:** https://x.com/Info_sam_ai/status/2082792966587109683  
- **Author:** @Info_sam_ai (same structure also posted by others)  
- **Method:**  
  01 Signature Blueprint · 02 Anti-Sameness Type · 03 Breathing Room · 04 Purposeful Motion · 05 Case Study presentation · 06 Trust Signal Sweep · 07 Reference Anchor  
- **Maps to:** extended `premium-site` polish passes (type/space/motion + trust + case)  
- **Notes:** `references/seven-step-framework.md`

### 10. Peter Wang — scroll-world / premium one-shot landings

- **URL:** https://x.com/the_cyw/status/2075033876930724339  
- **Author:** @the_cyw  
- **~3.8k likes · 6.7k bookmarks · 514k views**  
- **Method:** Skill + media pipeline for scroll-heavy premium landings (~$10–15 API cost per one-shot in post). Repo: https://github.com/oso95/scroll-world  
- **Repo use:** optional motion-heavy inspiration; prefer free GSAP/CSS over paid APIs unless user asks  

---

## Tier B — useful fragments (absorb, don’t skill-bloat)

| Source | URL | Takeaway |
|--------|-----|----------|
| @alexisfchpro | https://x.com/alexisfchpro/status/2081404948403683792 | Pull a real-world design system `.md` from Refero-style catalogs; paste before build |
| @neviannn | https://x.com/neviannn/status/2083623309380596127 | Extract design system from reference image; hand off to code |
| @sitinme | https://x.com/sitinme/status/2060319742829990339 | Anthropic `frontend-design` skill = constraints before code; kill purple+cards |
| @PrakashS720 / reposts | frontend-design skill hype | Aesthetic direction **first** (brutalist / editorial / luxury…), then code |
| @NapierHolland | https://x.com/NapierHolland/status/2082042646290178243 | “Clean professional” is now table stakes; new bar = storytelling + human care signals |
| @rammcodes | https://x.com/rammcodes/status/2082505017014227401 | Agentic UI skill packs (type/color/layout/a11y) — load **right** skill, not all |
| @heynavtoor | https://x.com/heynavtoor/status/2034434718175997989 | ui-ux-pro-max: industry rules, palettes, font pairings, landing patterns |
| @techxmanoj | https://x.com/techxmanoj/status/2032081359309820313 | Clone **conversion structure** of winning advertorials (DR beats), rebrand carefully — **not** for this showcase repo’s fiction policy without heavy rebrand |
| @SuperDesignDev | https://x.com/SuperDesignDev/status/2077959240195751998 | One skill line difference: hierarchy + committed palette + empty/error states |

---

## Tier C — engagement bait / low signal

Many “8 Claude prompts for free premium website” clones (e.g. @AiWithIqra, @NadzuAI and reposts). Same structure, often no novel method. Prefer Tier A sources.

---

## Method map → this repo

| Need | Skill / doc |
|------|-------------|
| Full polish pipeline + versioned upgrades | `/premium-site` |
| Kill AI-slop aesthetics at code time | `/anti-slop-frontend` |
| Tokens / DS before HTML | `/design-system-first` |
| Fix weak DESIGN.md (generic AI UI) | `/design-system-first` + `docs/method-design-md-for-ai.md` |
| From design URL → catalog template | `/ship-template` |
| Human-readable overview | `docs/premium-site-method.md` + this corpus |

### Recommended agent order (skill routing)

```
1. design-system-first   → tokens, type, palette, signature (or inherit from brief)
2. anti-slop-frontend    → ban list + aesthetic commitment check
3. ship-template OR premium-site Part 3  → build structure
4. premium-site Part 4   → type-only → space-only → motion-only → mobile
5. ship-template audit   → register, brand audit, HTTP 200
```

**Do not** load every design skill at once (typakon4).

---

## Versioning convention (unchanged)

When testing a method on an existing catalog site:

- Keep `library/websites/<id>/`  
- Ship `library/websites/<id>-v1/` (then `-v2`)  
- Register separately in `data/catalog.json`  

Test case: `atrium` → `atrium-v1` (2026-08-05).

---

## How to extend this corpus

1. Find posts via semantic search: *premium landing Claude Code no AI slop*, *frontend-design skill*, *taste-first website*  
2. `x_thread_fetch` the status ID; save under `.grok/skills/premium-site/references/`  
3. Map takeaways into an existing skill; only create a new skill if the method is a **distinct pipeline**  
4. Add a row to Tier A/B above with URL + one-line method  
