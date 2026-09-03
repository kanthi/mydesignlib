import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Shield,
  Heart,
  Compass,
  Feather,
  Menu,
  X,
  Activity,
} from 'lucide-react'

// Clinical Specializations
const SPECIALIZATIONS = [
  {
    icon: Compass,
    title: 'Individual Psychotherapy',
    focus: 'Anxiety, Depression & Emotional Regulation',
    desc: 'Evidence-based cognitive and psychodynamic inquiry to untangle persistent thought loops, cultivate self-compassion, and restore emotional buoyancy.',
    duration: '50 Min / Session',
    badge: 'Core Clinical'
  },
  {
    icon: Activity,
    title: 'Somatic Grounding & Nervous System',
    focus: 'Vagal Regulation & Stress Reset',
    desc: 'Reconnecting somatic physiology with psychological peace. Utilizing gentle vagus-nerve pacing, breath integration, and tension release.',
    duration: '60 Min / Session',
    badge: 'Mind-Body'
  },
  {
    icon: Feather,
    title: 'Executive & Creative Burnout',
    focus: 'High-Stakes Decision Fatigue',
    desc: 'Tailored sanctuary for founders, physicians, and creatives navigating intense external pressure, chronic exhaustion, or pivotal life transitions.',
    duration: '75 Min / Deep Dive',
    badge: 'Leadership'
  },
  {
    icon: Heart,
    title: 'Relational & Attachment Depth',
    focus: 'Boundaries, Intimacy & Communication',
    desc: 'Uncovering internalized relationship scripts and fostering authentic, resilient connections with loved ones and colleagues.',
    duration: '50 Min / Session',
    badge: 'Relational'
  }
]

// Patient Stories
const STORIES = [
  {
    quote: "Working with Althea felt less like clinical interrogation and more like entering an intentional, quiet sanctuary. In four months, my chronic panic subsided into steady inner stillness.",
    author: "Elena M.",
    role: "Architect & Partner",
    city: "Zurich"
  },
  {
    quote: "The dual approach of somatic pacing and cognitive clarity changed how I lead my team and how I sleep at night. The fog finally lifted.",
    author: "Julian R.",
    role: "Biotech Founder",
    city: "London"
  },
  {
    quote: "I spent years thinking burnout was just the cost of ambition. Here, I discovered how to pursue excellence without sacrificing my sanity.",
    author: "Maya S.",
    role: "Creative Director",
    city: "San Francisco"
  }
]

export default function App() {
  // Signature Balance Switch state (The central reference interaction!)
  const [isBalanced, setIsBalanced] = useState(false)

  // Modals & Drawers
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  // Interactive Self-Assessment Simulator State
  const [selectedChallenge, setSelectedChallenge] = useState('exhaustion')
  const [selectedFormat, setSelectedFormat] = useState('telehealth')
  const [bookingSuccess, setBookingSuccess] = useState(false)

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setBookingModalOpen(false)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (bookingModalOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [bookingModalOpen, mobileMenuOpen])

  // Handle consultation submission
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingSuccess(true)
    setTimeout(() => {
      setBookingSuccess(false)
      setBookingModalOpen(false)
    }, 2800)
  }

  return (
    <div
      className={`min-h-screen state-transition ${
        isBalanced ? 'bg-[#fafbfa] text-ink-900' : 'bg-[#506a5a] text-white'
      }`}
    >
      {/* =========================================================================
          TOP NAVIGATION
          ========================================================================= */}
      <header className="relative z-30 max-w-[1280px] mx-auto px-6 sm:px-10 pt-6 pb-4">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Logo / Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-2 group text-inherit no-underline"
          >
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                isBalanced ? 'bg-sage-600' : 'bg-white'
              }`}
            />
            <span className="font-serif text-2xl sm:text-3xl tracking-wide lowercase font-medium">
              althea<span className="font-sans text-xs tracking-widest uppercase opacity-70 ml-1.5 font-light">path</span>
            </span>
          </a>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold tracking-[0.18em] uppercase">
            <a
              href="#about"
              className={`transition-colors hover:opacity-100 ${
                isBalanced ? 'text-ink-700 hover:text-sage-700' : 'text-white/80 hover:text-white'
              }`}
            >
              About
            </a>
            <a
              href="#services"
              className={`transition-colors hover:opacity-100 ${
                isBalanced ? 'text-ink-700 hover:text-sage-700' : 'text-white/80 hover:text-white'
              }`}
            >
              Services
            </a>
            <a
              href="#switch-chamber"
              className={`transition-colors hover:opacity-100 ${
                isBalanced ? 'text-ink-700 hover:text-sage-700' : 'text-white/80 hover:text-white'
              }`}
            >
              Balance
            </a>
            <a
              href="#stories"
              className={`transition-colors hover:opacity-100 ${
                isBalanced ? 'text-ink-700 hover:text-sage-700' : 'text-white/80 hover:text-white'
              }`}
            >
              Stories
            </a>
            <a
              href="#sanctuary"
              className={`transition-colors hover:opacity-100 ${
                isBalanced ? 'text-ink-700 hover:text-sage-700' : 'text-white/80 hover:text-white'
              }`}
            >
              Sanctuary
            </a>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer hover:-translate-y-0.5 active:translate-y-0 ${
                isBalanced
                  ? 'bg-sage-700 hover:bg-sage-800 text-white shadow-sage-700/20'
                  : 'bg-white hover:bg-white/90 text-sage-900 shadow-black/10'
              }`}
            >
              <span>Book A Session</span>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-colors cursor-pointer ${
                isBalanced
                  ? 'border-gray-200 text-ink-900 bg-white'
                  : 'border-white/20 text-white bg-white/10'
              }`}
              aria-label="Open mobile menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      {/* =========================================================================
          HERO STAGE: ATMOSPHERIC SAGE MIST & ETHEREAL CONTEMPLATIVE PORTRAIT
          ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden" id="top">
        {/* Background Portrait Composite with Ethereal Lighting */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="./assets/hero_portrait.jpg"
            alt="Contemplative woman in serene sage atmosphere"
            className="w-full h-full object-cover object-right-top transition-opacity duration-700"
            style={{ opacity: isBalanced ? 0.22 : 0.85 }}
          />

          {/* Ambient radial color grading & mist overlay */}
          <div
            className={`absolute inset-0 state-transition ${
              isBalanced
                ? 'bg-gradient-to-r from-[#fafbfa] via-[#fafbfa]/90 to-transparent'
                : 'bg-gradient-to-r from-[#506a5a] via-[#506a5a]/75 to-transparent'
            }`}
          />
        </div>

        {/* Delicate floating architectural / contour aura rings (from reference) */}
        <div className="absolute top-[8%] left-[24%] sm:left-[32%] w-[420px] sm:w-[620px] h-[420px] sm:h-[620px] pointer-events-none z-10 aura-orbit opacity-40">
          <svg viewBox="0 0 500 500" fill="none" className="w-full h-full stroke-white/60">
            <ellipse cx="250" cy="250" rx="220" ry="140" strokeWidth="1" strokeDasharray="3 3" transform="rotate(-30 250 250)" />
            <ellipse cx="250" cy="250" rx="190" ry="110" strokeWidth="1.2" transform="rotate(-15 250 250)" />
            <ellipse cx="250" cy="250" rx="140" ry="80" strokeWidth="1.5" transform="rotate(-5 250 250)" />
          </svg>
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-[1280px] w-full mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-12 flex-1 flex flex-col justify-between">
          {/* Main Title (Left aligned, towering elegant serif) */}
          <div className="max-w-2xl">
            <h1
              className={`font-serif text-5xl sm:text-7xl lg:text-[6.25rem] leading-[1.02] tracking-tight font-normal mb-8 state-transition ${
                isBalanced ? 'text-ink-900' : 'text-white'
              }`}
            >
              A Path That<br />
              <span className="italic font-normal">Shapes Your</span><br />
              Future.
            </h1>
          </div>

          {/* Bottom Row: Context Body Paragraph & Action Pill */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 pt-8">
            <div className="hidden lg:block text-xs font-mono tracking-widest uppercase opacity-70">
              [ REF: PSYCHOLOGICAL RESTORATION &amp; CLARITY ]
            </div>

            {/* Right side text block matching reference */}
            <div className="max-w-md lg:ml-auto">
              <p
                className={`text-sm sm:text-base leading-relaxed mb-6 font-light state-transition ${
                  isBalanced ? 'text-ink-700' : 'text-white/90'
                }`}
              >
                We offer therapy and coaching to help you navigate life's challenges with confidence and care. Together, we'll build personal insight, emotional well-being, and the steps needed for lasting change — at your own pace.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="#switch-chamber"
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer hover:-translate-y-0.5 active:translate-y-0 ${
                    isBalanced
                      ? 'bg-sage-600 hover:bg-sage-700 text-white shadow-sage-600/20'
                      : 'bg-[#6b8979] hover:bg-[#7a9a89] text-white border border-white/20'
                  }`}
                >
                  <span>Start Your Journey</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsBalanced(!isBalanced)}
                  className={`inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border transition-all cursor-pointer ${
                    isBalanced
                      ? 'border-gray-200 text-ink-600 hover:bg-gray-100'
                      : 'border-white/30 text-white/90 hover:bg-white/10'
                  }`}
                >
                  <Sparkles size={14} />
                  <span>Toggle Balance</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE SIGNATURE INTERACTIVE "BALANCE SWITCH" CHAMBER
          (The direct recreation of the central video transformation)
          ========================================================================= */}
      <section
        className={`py-28 sm:py-36 px-6 sm:px-10 state-transition relative overflow-hidden ${
          isBalanced ? 'bg-white' : 'bg-[#486152]'
        }`}
        id="switch-chamber"
      >
        {/* Subtle background rings when in foggy state */}
        {!isBalanced && (
          <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
            <div className="w-[800px] h-[800px] rounded-full border border-white/40 aura-orbit" />
            <div className="absolute w-[600px] h-[600px] rounded-full border border-white/30" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-white/20" />
          </div>
        )}

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* THE INTERACTIVE PILL TOGGLE (Exactly as shown in video frames 05-08) */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span
              className={`text-xs font-bold tracking-[0.2em] uppercase state-transition ${
                isBalanced ? 'text-sage-700' : 'text-white/80'
              }`}
            >
              BALANCE
            </span>

            <button
              type="button"
              onClick={() => setIsBalanced(!isBalanced)}
              className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 relative cursor-pointer shadow-inner focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isBalanced
                  ? 'bg-sage-600 focus:ring-sage-500'
                  : 'bg-white/40 hover:bg-white/50 focus:ring-white'
              }`}
              aria-label={isBalanced ? 'Deactivate balance state' : 'Activate balance state'}
              role="switch"
              aria-checked={isBalanced}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-out ${
                  isBalanced ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* DYNAMIC HEADLINE (Recreating both states from video frames 04-08) */}
          {isBalanced ? (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-ink-900 leading-[1.2] mb-6">
                There may not be a single switch,<br />
                <span className="text-sage-600 font-serif font-normal italic">
                  but there are clear steps forward.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-ink-600 max-w-xl mx-auto leading-relaxed">
                Every path is different. These are the ways we help people move forward with confidence.
              </p>
            </div>
          ) : (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-3xl sm:text-5xl font-sans font-extrabold tracking-tight text-white leading-[1.2] mb-6">
                If only finding balance were<br />
                as simple as flipping a switch.
              </h2>
              <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed mb-6">
                You're closer than you think. And every step you take makes it clearer.
              </p>
              <button
                type="button"
                onClick={() => setIsBalanced(true)}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase bg-white text-sage-900 px-5 py-2.5 rounded-full shadow-lg hover:bg-white/90 transition-all cursor-pointer"
              >
                <span>Click The Switch Above</span>
                <ArrowRight size={14} />
              </button>
            </div>
          )}

          {/* Three Guided Steps (Emerges gracefully when balanced is active) */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-16 state-transition ${
              isBalanced ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-4 pointer-events-none'
            }`}
          >
            <div
              className={`p-6 rounded-2xl border transition-all ${
                isBalanced
                  ? 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                  : 'bg-white/10 border-white/10 text-white'
              }`}
            >
              <div className="text-xs font-mono font-bold text-sage-600 mb-2">STEP 01</div>
              <h4 className="font-serif text-xl font-medium mb-2">Ground the System</h4>
              <p className="text-xs leading-relaxed opacity-80">
                Calming autonomic nervous reactivity through structured somatic pauses and restorative breath anchoring.
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl border transition-all ${
                isBalanced
                  ? 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                  : 'bg-white/10 border-white/10 text-white'
              }`}
            >
              <div className="text-xs font-mono font-bold text-sage-600 mb-2">STEP 02</div>
              <h4 className="font-serif text-xl font-medium mb-2">Name the Pattern</h4>
              <p className="text-xs leading-relaxed opacity-80">
                Illuminating recurring defensive scripts, internalized anxieties, and high-friction self-demands.
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl border transition-all ${
                isBalanced
                  ? 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                  : 'bg-white/10 border-white/10 text-white'
              }`}
            >
              <div className="text-xs font-mono font-bold text-sage-600 mb-2">STEP 03</div>
              <h4 className="font-serif text-xl font-medium mb-2">Chart Your Rhythm</h4>
              <p className="text-xs leading-relaxed opacity-80">
                Establishing steady, sustainable daily rituals that protect your mental energy and nurture enduring vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CARE & PRACTICE OFFERINGS (CLINICAL SPECIALIZATIONS)
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 border-t border-b border-gray-100 bg-[#fbfdfb]" id="services">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage-600 mb-3 block">
                PRACTICE SPECIALIZATIONS
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-ink-900 leading-tight">
                Holistic psychological guidance,<br />
                <span className="italic">tailored to your unique tempo.</span>
              </h2>
            </div>
            <p className="text-sm text-ink-600 max-w-md leading-relaxed">
              Every therapeutic journey at Althea is grounded in contemporary neuroscience, psychodynamic empathy, and somatic resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPECIALIZATIONS.map((spec) => {
              const Icon = spec.icon
              return (
                <div
                  key={spec.title}
                  className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-sage-300 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon size={24} />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-sage-100 text-sage-800">
                        {spec.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 font-medium mb-2">
                      {spec.title}
                    </h3>
                    <div className="text-xs font-semibold text-sage-600 mb-4 tracking-wide">
                      {spec.focus}
                    </div>
                    <p className="text-sm text-ink-600 leading-relaxed mb-6 font-light">
                      {spec.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-gray-400 font-medium">{spec.duration}</span>
                    <button
                      type="button"
                      onClick={() => setBookingModalOpen(true)}
                      className="inline-flex items-center gap-1.5 font-bold text-sage-700 hover:gap-2.5 transition-all cursor-pointer"
                    >
                      <span>Inquire Session</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE JOURNEY ASSESSMENT: "WHERE DO YOU FEEL STUCK?"
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 bg-white" id="about">
        <div className="max-w-[1080px] mx-auto bg-sage-50/60 border border-sage-200/70 rounded-3xl p-8 sm:p-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage-600 mb-2 block">
              CLINICAL TRIAGE EXPLORER
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ink-900 font-medium mb-3">
              Where does your life feel most constricted?
            </h3>
            <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
              Select an area of focus below to explore our clinical pathway recommendations.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {[
              { id: 'exhaustion', label: 'Burnout & Fatigue' },
              { id: 'anxiety', label: 'Overthinking & Rumination' },
              { id: 'transition', label: 'Major Life Transition' },
              { id: 'relational', label: 'Boundary & Relationship Friction' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedChallenge(item.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  selectedChallenge === item.id
                    ? 'bg-sage-700 text-white shadow-md'
                    : 'bg-white text-ink-700 hover:bg-sage-100 border border-sage-200/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Dynamic Recommendation Panel */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sage-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="text-[11px] font-mono font-bold text-sage-600 uppercase tracking-widest mb-1.5">
                RECOMMENDED MODALITY:
              </div>
              <h4 className="font-serif text-2xl text-ink-900 font-medium mb-2">
                {selectedChallenge === 'exhaustion' && 'Nervous System Desensitization & Sustainable Energy Reset'}
                {selectedChallenge === 'anxiety' && 'Cognitive Defusion & Metacognitive Reframing'}
                {selectedChallenge === 'transition' && 'Existential Values Clarification & Milestone Navigation'}
                {selectedChallenge === 'relational' && 'Internal Family Systems & Clear Relational Boundary Protocols'}
              </h4>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-light">
                {selectedChallenge === 'exhaustion' &&
                  'Focuses first on non-verbal somatic decompression, adrenal pacing, and establishing firm digital and professional perimeters before addressing cognitive demands.'}
                {selectedChallenge === 'anxiety' &&
                  'Helps you observe ruminative spirals as physiological weather patterns rather than absolute truths, dissolving catastrophic anticipation.'}
                {selectedChallenge === 'transition' &&
                  'Transforms disorientation into grounded purpose during career exits, relocation, divorce, or entrepreneurial inflection points.'}
                {selectedChallenge === 'relational' &&
                  'Enables you to express vulnerability without defensiveness and enforce respectful limits with family, co-founders, and partners.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="shrink-0 bg-sage-600 hover:bg-sage-700 text-white text-xs font-bold px-6 py-3.5 rounded-full shadow-sm transition-all cursor-pointer hover:-translate-y-0.5"
            >
              Discuss In Consultation →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PATIENT STORIES & RESONANCE
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 bg-[#fafbfa] border-t border-gray-100" id="stories">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage-600 mb-2 block">
              PATIENT VOICES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-ink-900">
              Transformations in stillness.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STORIES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm flex flex-col justify-between"
              >
                <p className="font-serif text-lg sm:text-xl text-ink-800 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-sage-100 text-sage-800 font-serif font-bold flex items-center justify-center text-sm">
                    {item.author[0]}
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm text-ink-900">{item.author}</h5>
                    <span className="text-xs text-gray-500">{item.role} · {item.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SANCTUARY & ETHICS
          ========================================================================= */}
      <section className="py-20 px-6 sm:px-10 bg-white border-t border-gray-100" id="sanctuary">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage-600 mb-2 block">
              CLINICAL STANDARDS
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ink-900 font-medium mb-4">
              Private, accredited, and unhurried.
            </h3>
            <p className="text-sm text-ink-600 leading-relaxed font-light">
              We operate as a boutique private practice. Every clinician is licensed, insured, and committed to complete confidentiality under strict HIPAA and Swiss medical privacy protocols.
            </p>
          </div>

          <div className="flex items-center gap-6 sm:gap-10 flex-wrap">
            <div className="flex items-center gap-3">
              <Shield className="text-sage-600" size={24} />
              <div>
                <strong className="block text-xs font-bold text-ink-900">Encrypted Telehealth</strong>
                <span className="text-[11px] text-gray-500">256-bit HIPAA compliant</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="text-sage-600" size={24} />
              <div>
                <strong className="block text-xs font-bold text-ink-900">Empathetic Matching</strong>
                <span className="text-[11px] text-gray-500">Matched to your temperament</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CALL TO JOURNEY BANNER
          ========================================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-10 bg-[#405649] text-white text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-sage-200 mb-3 block">
            BEGIN YOUR PATH
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal leading-tight mb-6">
            A clearer mind begins with a single conversation.
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8 max-w-xl mx-auto font-light">
            Book an introductory consultation to discuss your challenges, explore our clinicians' approaches, and outline your personalized journey.
          </p>

          <button
            type="button"
            onClick={() => setBookingModalOpen(true)}
            className="inline-flex items-center gap-2.5 bg-white text-sage-950 hover:bg-sage-50 font-bold text-xs sm:text-sm px-8 py-4 rounded-full shadow-xl transition-all cursor-pointer hover:-translate-y-0.5"
          >
            <span>Schedule Initial Consultation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-sage-700" />
          </button>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="bg-[#1f2923] text-white pt-16 pb-12 px-6 sm:px-10 border-t border-white/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-sage-300" />
                <span className="font-serif text-2xl font-medium tracking-wide">althea</span>
              </div>
              <p className="text-xs text-white/60 leading-relaxed max-w-xs mb-4">
                Mindful mental health, cognitive inquiry, and somatic restoration. Helping individuals uncover balance, peace, and lasting direction.
              </p>
              <div className="text-[11px] text-white/40">Zurich · London · Telehealth Worldwide</div>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider uppercase text-white/90 mb-4">Practices</h5>
              <ul className="space-y-2.5 text-xs text-white/60">
                <li><a href="#services" className="hover:text-white transition-colors">Individual Psychotherapy</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Somatic Nervous System</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Executive Burnout</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Couples &amp; Attachment</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider uppercase text-white/90 mb-4">Navigation</h5>
              <ul className="space-y-2.5 text-xs text-white/60">
                <li><a href="#top" className="hover:text-white transition-colors">Home Stage</a></li>
                <li><a href="#switch-chamber" className="hover:text-white transition-colors">Balance Chamber</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Clinical Explorer</a></li>
                <li><a href="#stories" className="hover:text-white transition-colors">Patient Stories</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold tracking-wider uppercase text-white/90 mb-4">Sanctuary Hours</h5>
              <p className="text-xs text-white/60 leading-relaxed mb-3">
                Monday – Friday: 08:00 – 19:00 CET<br />
                Weekend emergency support available for enrolled patients.
              </p>
              <a
                href="mailto:care@althea.example"
                className="text-xs text-sage-300 hover:text-white font-mono transition-colors"
              >
                care@althea.example
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
            <div>© 2026 Althea Wellness Sanctuary Inc. All rights reserved. (Design Library Specimen: althea-agy)</div>
            <div>Crafted with Vite, React 18, TypeScript &amp; Tailwind CSS</div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          MOBILE DRAWER MENU
          ========================================================================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[290px] h-full bg-[#3d5245] text-white p-8 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <span className="font-serif text-2xl font-medium tracking-wide">althea</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center cursor-pointer text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="flex flex-col space-y-5 text-sm font-semibold tracking-wider uppercase">
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-sage-200">About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-sage-200">Services</a>
              <a href="#switch-chamber" onClick={() => setMobileMenuOpen(false)} className="hover:text-sage-200">Balance Chamber</a>
              <a href="#stories" onClick={() => setMobileMenuOpen(false)} className="hover:text-sage-200">Stories</a>
              <a href="#sanctuary" onClick={() => setMobileMenuOpen(false)} className="hover:text-sage-200">Sanctuary</a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); setBookingModalOpen(true); }}
            className="w-full py-3 bg-white text-sage-950 font-bold text-xs rounded-full uppercase tracking-wider shadow-lg cursor-pointer"
          >
            Book A Session •
          </button>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE CONSULTATION BOOKING MODAL
          ========================================================================= */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setBookingModalOpen(false)}
          />

          <div className="relative bg-white text-ink-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-ink-900 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <span className="text-[11px] font-mono font-bold text-sage-600 uppercase tracking-widest mb-1.5 block">
              PRIVATE SANCTUARY INQUIRY
            </span>
            <h3 className="font-serif text-3xl text-ink-900 font-medium mb-2">
              Begin Your Journey
            </h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Every therapeutic path begins with an introductory 25-minute discovery consultation.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Claire Delacroix"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-sage-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="claire@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-sage-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Session Format</label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:border-sage-600 outline-none bg-white cursor-pointer"
                  >
                    <option value="telehealth">Virtual (HIPAA Encrypted)</option>
                    <option value="inperson">In-Person Sanctuary</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Focus Area</label>
                  <select className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs focus:border-sage-600 outline-none bg-white cursor-pointer">
                    <option>Burnout &amp; Exhaustion</option>
                    <option>Anxiety &amp; Worry</option>
                    <option>Life Transition</option>
                    <option>Relational Patterns</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-sage-700 hover:bg-sage-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md mt-2"
              >
                Request Discovery Session →
              </button>

              {bookingSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-medium flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Your confidential inquiry has been scheduled. Check your inbox for confirmation.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
