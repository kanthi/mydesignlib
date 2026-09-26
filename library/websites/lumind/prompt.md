# Rebuild prompt — Lumind (`lumind`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/lumind/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Personal AI second-brain and cognitive operating system landing page, featuring ambient stream-of-consciousness capture, vector memory connectome, and interactive 40Hz binaural focus audio synthesizer.

## Title
Lumind — Your mind, upgraded. AI Second Brain & Cognitive OS

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Page outline
Reading order. Text after the colon is exact copy.
- header .fixed.top-5.inset-x-0
  - nav .pointer-events-auto.flex.items-center
    - a: Lumind AI OS → #hero
    - a: Features → #features
    - a: Capture → #capture
    - a: Neural Graph → #graph
    - a: Focus Audio → #focus
    - a: Pricing → #pricing
    - a: Sign In → #demo
    - a: Get Lumind → #cta
- section #hero .relative.pt-36.pb-28
  - h1: Your mind, upgraded.
  - p: Lumind helps you capture ideas, organize your world, and turn thoughts into action — with the effortless power of personalized cognitive AI.
  - a: Start thinking in Lumind → #capture
  - a: Experience Focus Mode (40Hz) → #focus
  - p: "Turn chaotic spontaneous thoughts into structured execution blueprints."
  - p: Clarity in chaos. 14 linked references synchronized across your neural graph.
  - p: Less noise. More you. Ambient neural tone active.
  - p: Voice whispers, messy thoughts, screenshots, and PDFs synthesized instantly into atomic insights.
  - p: No complex folder hierarchies. AI automatically clusters context, associations, and recall hooks.
  - p: Convert passive knowledge into structured daily agendas, drafts, and proactive milestone triggers.
- section #capture .py-24.border-t.border-white/5
  - h2: Dump your stream of consciousness. Lumind structures it instantly.
  - p: Record a 2-minute raw voice memo while walking, snap a whiteboard scribbled with equations, or paste an unformatted transcript. Lumind's multimodal inference extracts core insights, action items, and cross-references them with your historical knowledge base.
  - p: "...we need to rethink the token compression layer because latency is bottlenecking the visual reasoning agent on mobile..."
  - a: Neural Engine v2 Roadmap → #
- section #graph .py-24.border-t.border-white/5
  - h2: Your thoughts, mapped like synapses.
  - p: Lumind builds a live vector memory graph of everything you learn, read, and write. Discover serendipitous connections you never knew existed.
- section #focus .py-24.border-t.border-white/5
  - h3: Binaural Frequency Sanctuary
  - button: 40Hz Gamma Hyper Focus
  - button: Deep Brown Mental Calm
  - button: 10Hz Alpha Creative Flow
  - button: Start Focus Session
  - h2: Silence the digital noise. Lock into deep flow.
  - p: Lumind features a zero-dependency Web Audio neural synthesizer configured with peer-reviewed binaural protocols. Gamma 40Hz synchronizes frontal cortical firing for technical problem-solving, while low-frequency Brown noise shields against office distractions.
- section .py-24.border-t.border-white/5
  - h2: Notes shouldn't go to die in a digital drawer.
  - p: Lumind's background autonomous agents monitor your commitments, draft replies, schedule deadlines, and proactively flag overdue deliverables.
  - h3: Calendar Telepathy
  - p: Mentions like "let's review benchmark numbers next Tuesday morning" automatically resolve to Google or Apple Calendar hold blocks with briefing docs attached.
  - h3: First Draft Synthesis
  - p: Need an investor memo or technical spec? Lumind synthesizes your bullet points into a polished executive-ready prose draft in seconds.
  - h3: Proactive Guardrails
  - p: Flagging conflicting priorities before you overcommit. Lumind alerts you when your scheduled bandwidth breaches sustainable cognitive load.
- section .py-24.border-t.border-white/5
  - h2: Loved by the world's most productive minds.
  - p: Researchers, engineers, venture partners, and novelists share how Lumind reshaped their cognition.
  - p: "I used to lose 40% of my research ideas because note-taking friction was too high. With Lumind's ambient capture and neural graph, everything connects like magic."
  - p: "The binaural 40Hz focus generator alone is worth the subscription. Combined with instant speech-to-spec, Lumind is my full-time executive co-pilot."
  - p: "I wrote my entire second novel using Lumind's semantic node map. Finding character arcs and callbacks across 400 pages took seconds instead of days."
- section #pricing .py-24.border-t.border-white/5
  - h2: Invest in your mind.
  - p: Transparent pricing. 14-day full refund guarantee. Cancel anytime.
  - p: Essential cognitive capture for solo knowledge workers.
  - ul .space-y-3.text-xs.text-zinc-300
    - li: Up to 1,000 thoughts & notes
    - li: Basic audio transcription (30m/mo)
    - li: Local SQLite encrypted storage
  - a: Get Started Free → #cta
  - p: Full cognitive operating system with unlimited multimodal power.
  - ul .space-y-3.text-xs.text-zinc-200
    - li: Unlimited neural notes & vector graph
    - li: Unlimited 40Hz binaural focus sessions
    - li: Automated calendar & task synthesis
    - li: Cross-device instant sync (Mac/iOS/Web)
  - a: Upgrade to Pro (14-Day Trial) → #cta
  - p: Shared organizational second brain for startups and labs.
  - ul .space-y-3.text-xs.text-zinc-300
    - li: Shared team connectome graphs
    - li: Role-based access & SOC2 compliance
    - li: Dedicated vector cluster deployment
  - a: Contact Enterprise → #cta
- section .py-24.border-t.border-white/5
  - h2: Frequently Answered Questions
  - p: Everything you need to know about your private AI second brain.
  - summary: Is my personal knowledge base kept private? ▼
  - p: Yes, uncompromisingly. All embeddings and notes are end-to-end encrypted with your private key. We never train frontier AI models on your notes, and you can export your entire database as raw Markdown anytime.
  - summary: How does the binaural 40Hz focus generator work?
  - p: Our audio engine utilizes the Web Audio API to play two slightly offset sine wave frequencies (e.g., 200Hz left ear, 240Hz right ear). The brain perceives an illusory 40Hz beat frequency which promotes gamma-band neuronal coherence, clinically linked to working memory enhancement.
  - summary: Can I import my existing notes from Notion or Apple Notes? ▼
  - p: Yes! Lumind offers 1-click importers for Notion, Obsidian, Roam, and Apple Notes zip archives. It immediately builds the neural graph connections across your historical library.
- section #cta .py-24.border-t.border-white/5
  - h2: A calmer mind builds a brighter future.
  - p: Join 100,000+ creators who have upgraded their daily cognition. Start organizing your thoughts today with zero setup required.
  - a: Get Started Free → #hero
- footer .py-12.border-t.border-white/5
  - a: Top → #hero
  - a: Features → #features
  - a: Pricing → #pricing
  - a: Focus Audio → #focus

## Images in the page
- `assets/thinker_hero.jpg — Lumind Cognitive Intelligence Core`
- `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80 — Avatar`
- `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80 — Avatar`
- `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80 — Avatar`
- `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80 — Avatar`
- `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80 — Elena Rostova`
- `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80 — Marcus Chen`
- `https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80 — Devon Sterling`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #audio-volume

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/thinker_hero.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
