import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  User,
  MoreHorizontal,
  Play,
  Pause,
  Menu,
  X,
  Shield,
  Lock,
  Award,
  Globe,
  Database,
  GitPullRequest,
  Users,
  CheckCircle2,
  ChevronDown
} from 'lucide-react'

// Trusted fictional enterprise brands
const TRUST_BRANDS = [
  { name: 'kinetiq', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
  { name: 'synthetix', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
  { name: 'aether', icon: 'M12 2L2 22h20L12 2z' },
  { name: 'vanguard', icon: 'M4 4h16v16H4z' },
  { name: 'lumina', icon: 'M12 2v20M2 12h20' },
  { name: 'hyperion', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
]

export default function App() {
  // Mobile drawer state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Free trial modal state
  const [modalOpen, setModalOpen] = useState(false)

  // Hero video playhead state
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoProgress, setVideoProgress] = useState(38) // percentage
  const [activeSidebarTab, setActiveSidebarTab] = useState('Overview')

  // Feature 1: Leave Request Simulator state
  const [leaveTypology, setLeaveTypology] = useState('Secure Storage')
  const [leaveReason, setLeaveReason] = useState('Sprint delivery covered by team')
  const [leaveCategory, setLeaveCategory] = useState('annual')
  const [leaveSubmitted, setLeaveSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Feature 2: Shift Scheduling Department filter
  const [department, setDepartment] = useState('Administration')
  const [activeTab, setActiveTab] = useState('Calendar')

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalOpen(false)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when mobile menu or modal is active
  useEffect(() => {
    if (modalOpen || mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen, mobileMenuOpen])

  // Handle leave request confirmation
  const handleConfirmLeave = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setLeaveSubmitted(true)
      setTimeout(() => setLeaveSubmitted(false), 4000)
    }, 450)
  }

  // Toggle video play state
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-white text-ink-900 font-sans selection:bg-coral selection:text-white">
      {/* =========================================================================
          HERO & DEEP WINE HEADER SECTION
          ========================================================================= */}
      <header className="relative wine-radial-bg text-white pt-6 pb-24 lg:pb-32 overflow-hidden">
        {/* Glowing crimson horizon arc behind title */}
        <div
          className="hero-arc-glow absolute top-[16%] left-1/2 -translate-x-1/2 w-[900px] max-w-full h-[450px] rounded-full pointer-events-none z-0"
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 relative z-10">
          {/* Nav bar */}
          <nav className="flex items-center justify-between pb-12" aria-label="Main Navigation">
            {/* Brand Logo */}
            <a href="#top" className="flex items-center gap-2.5 text-white no-underline group">
              <svg className="w-7 h-7 transition-transform group-hover:scale-105" viewBox="0 0 100 100" fill="none">
                <path d="M 18 24 L 42 76 C 45 82 55 82 58 76 L 82 24 C 85 18 78 12 72 17 L 50 48 L 28 17 C 22 12 15 18 18 24 Z" fill="#eb4438"/>
                <circle cx="50" cy="38" r="4.5" fill="#ffffff"/>
              </svg>
              <span className="font-extrabold text-xl tracking-tight">
                velora<span className="text-coral">.hr</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <div className="relative group py-2">
                <button className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer">
                  Product <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-wine-elevated border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl z-50">
                  <a href="#features" className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Employee Panels</a>
                  <a href="#scheduling" className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Shift Scheduling</a>
                  <a href="#reports" className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Records &amp; Payroll</a>
                  <a href="#control-center" className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">HR Control Center</a>
                </div>
              </div>
              <a href="#features" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Solutions</a>
              <a href="#metrics" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#control-center" className="text-sm font-medium text-white/80 hover:text-white transition-colors">About</a>
              <div className="relative group py-2">
                <button className="flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors cursor-pointer">
                  Resources <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-wine-elevated border border-white/10 rounded-xl p-2 min-w-[180px] shadow-2xl z-50">
                  <a href="#metrics" className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Client ROI Metrics</a>
                  <a href="#security" className="px-3 py-2 text-xs font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors">Security &amp; Trust</a>
                </div>
              </div>
            </div>

            {/* Nav Actions */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="hidden sm:inline text-sm font-semibold text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center bg-white text-wine-base font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md hover:bg-gray-100 transition-all cursor-pointer hover:-translate-y-0.5"
              >
                Try 14 days for free
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>

          {/* Hero Headline & Subtitle */}
          <div className="text-center max-w-3xl mx-auto pt-6 pb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.12] mb-6 text-white text-balance">
              Manpower your workforce<br />with an HR system
            </h1>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-8">
              Velora HR gives you full control, automation, and visibility, so you can build stronger teams, simplify workflows, and focus on growth.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg shadow-coral/30 hover:shadow-coral/50 transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-6 py-3 sm:py-3.5 rounded-full border border-white/30 hover:border-white/60 transition-all cursor-pointer"
              >
                <span>Schedule A Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Floating Dark Dashboard / Video Stage Window */}
          <div className="max-w-[1080px] mx-auto bg-[#11141a] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 overflow-hidden">
            {/* Window Chrome Topbar */}
            <div className="flex items-center justify-between bg-[#161a22] px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              <div className="hidden sm:flex items-center gap-3 text-xs text-gray-400 font-medium">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span className="text-white font-semibold">Executive Strategy Briefing</span>
                <span>Archive</span>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="text-xs bg-white/10 hover:bg-white/20 text-white font-medium px-3 py-1 rounded-md transition-colors cursor-pointer"
              >
                Export Stream ↗
              </button>
            </div>

            {/* Inner Dashboard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] min-h-[440px]">
              {/* Sidebar Channels */}
              <div className="hidden lg:flex flex-col gap-1 bg-[#13171f] border-r border-white/5 p-4 text-xs font-medium">
                {['Overview', 'Team Clips', 'Highlights', 'Projects', 'Channels', 'Settings'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveSidebarTab(tab)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-colors text-left cursor-pointer ${
                      activeSidebarTab === tab
                        ? 'bg-coral/15 text-coral font-bold'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{tab}</span>
                  </button>
                ))}
              </div>

              {/* Video Player Frame */}
              <div className="relative bg-[#090b0e] flex items-center justify-center overflow-hidden min-h-[380px] sm:min-h-[460px]">
                <img
                  src="./assets/hero_presenter.jpg"
                  alt="Elena Rostova presenting Velora workforce strategy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e]/90 via-[#090b0e]/30 to-transparent pointer-events-none" />

                {/* Live stream badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-mono font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                  <span>ALL-HANDS KEYNOTE · LIVE 4K</span>
                </div>

                {/* Interactive Play Button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute w-16 h-16 rounded-full bg-coral hover:bg-coral-hover text-white flex items-center justify-center shadow-xl shadow-coral/50 transition-transform hover:scale-105 active:scale-95 cursor-pointer z-10"
                  aria-label={isPlaying ? 'Pause keynote video' : 'Play keynote video'}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
                </button>

                {/* Scrubber & Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                  {/* Progress bar */}
                  <div
                    className="w-full h-1 bg-white/20 rounded-full mb-3 cursor-pointer overflow-hidden"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect()
                      const clickX = e.clientX - rect.left
                      setVideoProgress(Math.min(100, Math.max(0, (clickX / rect.width) * 100)))
                    }}
                  >
                    <div
                      className="h-full bg-coral transition-all"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-gray-300">
                    <div className="flex items-center gap-3">
                      <span className="text-white font-medium">04:18 / 12:45</span>
                      <span className="hidden sm:inline text-gray-400">· Elena Rostova (VP People &amp; Culture)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px]">
                      <span className="bg-white/15 px-1.5 py-0.5 rounded">1080p 60fps</span>
                      <span className="bg-white/15 px-1.5 py-0.5 rounded">AUDIO OPTIMIZED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SOCIAL PROOF LOGO TICKER
          ========================================================================= */}
      <section className="bg-white py-12 border-b border-gray-100" aria-label="Trusted companies">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 text-center">
          <p className="text-sm font-medium text-gray-500 mb-8">
            Trusted by leading <strong className="text-ink-900 font-bold">companies</strong> worldwide
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-14 flex-wrap opacity-80">
            {TRUST_BRANDS.map((b) => (
              <div key={b.name} className="flex items-center gap-2 text-gray-500 hover:text-ink-900 transition-colors font-bold text-base sm:text-lg tracking-tight">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={b.icon} />
                </svg>
                <span>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MANIFESTO INTRO
          ========================================================================= */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-ink-900 mb-5 leading-tight">
            Less time managing, more time achieving.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Automate manual work, simplify HR processes, and free up your team's time to focus on what really matters: growing your business. Velora HR handles the paperwork.
          </p>
        </div>
      </section>

      {/* =========================================================================
          ALTERNATING 2-COLUMN FEATURE SUITE
          ========================================================================= */}
      <section className="py-12 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 flex flex-col gap-24 lg:gap-32">
          {/* Feature 1: Employee Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-coral font-bold text-xs uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-coral" />
                <span>Employee panels</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-900 mb-4 leading-tight">
                Working time and leave requests? Employees
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Automate manual work, simplify HR processes, and free up your team's time to focus on what really matters: growing your business.
              </p>
              <a
                href="#modalTrial"
                onClick={(e) => { e.preventDefault(); setModalOpen(true); }}
                className="inline-flex items-center gap-2 text-coral font-bold text-sm hover:gap-3 transition-all"
              >
                <span>Learn more explore</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Coral Form Shell with Interactive Form */}
            <div className="bg-coral rounded-3xl p-6 sm:p-8 shadow-xl shadow-coral/20">
              {/* Shell icon bar */}
              <div className="flex items-center gap-3 mb-5">
                <button type="button" className="w-9 h-9 rounded-full bg-white text-coral flex items-center justify-center shadow-sm">
                  <CalendarIcon size={16} />
                </button>
                <button type="button" className="w-9 h-9 rounded-full bg-white/25 hover:bg-white/40 text-white flex items-center justify-center transition-colors">
                  <Clock size={16} />
                </button>
                <button type="button" className="w-9 h-9 rounded-full bg-white/25 hover:bg-white/40 text-white flex items-center justify-center transition-colors">
                  <User size={16} />
                </button>
                <button type="button" className="w-9 h-9 rounded-full bg-white/25 hover:bg-white/40 text-white flex items-center justify-center transition-colors">
                  <MoreHorizontal size={16} />
                </button>
              </div>

              {/* White Inner Request Box */}
              <form onSubmit={handleConfirmLeave} className="bg-white rounded-2xl p-6 sm:p-7 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-extrabold text-lg text-ink-900">Add request</h4>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  </div>
                </div>

                <div className="mb-4">
                  <select
                    value={leaveCategory}
                    onChange={(e) => setLeaveCategory(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium focus:border-coral outline-none bg-white cursor-pointer"
                  >
                    <option value="annual">Leave request (Paid Annual)</option>
                    <option value="sick">Medical &amp; Sick Absence</option>
                    <option value="remote">Flexible Remote Day</option>
                  </select>
                </div>

                {/* Typology Chips */}
                <div className="flex gap-2.5 mb-4 flex-wrap">
                  {['Absence', 'Secure Storage', 'Remote work'].map((typ) => (
                    <button
                      key={typ}
                      type="button"
                      onClick={() => setLeaveTypology(typ)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                        leaveTypology === typ
                          ? 'border-coral bg-coral/10 text-coral'
                          : 'border-gray-200 text-gray-600 hover:border-coral/50'
                      }`}
                    >
                      {typ}
                    </button>
                  ))}
                </div>

                <div className="mb-5">
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Handover / Team Note
                  </label>
                  <input
                    type="text"
                    value={leaveReason}
                    onChange={(e) => setLeaveReason(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm focus:border-coral outline-none"
                    placeholder="Brief note for manager..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-coral hover:bg-coral-hover text-white font-bold rounded-xl text-sm transition-all cursor-pointer shadow-md shadow-coral/20"
                >
                  {isSubmitting ? 'Verifying with Payroll...' : 'Confirm'}
                </button>

                {leaveSubmitted && (
                  <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>✓ {leaveTypology} request recorded and synchronized with manager!</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Feature 2: Work Scheduling (Reversed: Table Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center" id="scheduling">
            {/* Shift Calendar Table Card */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-7 shadow-xl shadow-gray-100 order-2 lg:order-1">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-gray-700">Department:</span>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="text-xs px-2.5 py-1.5 rounded-lg border border-gray-200 font-medium focus:border-coral outline-none bg-white cursor-pointer"
                  >
                    <option>Administration</option>
                    <option>Engineering</option>
                    <option>Operations</option>
                    <option>Design</option>
                  </select>
                  <button
                    type="button"
                    onClick={() => alert(`Showing shift overview for: ${department}`)}
                    className="text-xs px-3 py-1.5 bg-coral text-white font-semibold rounded-lg hover:bg-coral-hover transition-colors cursor-pointer"
                  >
                    Filter
                  </button>
                  <button
                    type="button"
                    onClick={() => setDepartment('Administration')}
                    className="text-xs px-2.5 py-1.5 bg-gray-100 text-gray-600 font-semibold rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-4">
                {['Calendar', 'List of requests', 'List of employees'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setActiveTab(t)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeTab === t ? 'bg-gray-100 text-ink-900' : 'text-gray-400 hover:text-gray-700'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* KPI Chips */}
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <div className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-md text-xs font-mono">
                  <span className="text-gray-400 mr-1.5">Total:</span>
                  <strong className="text-ink-900 font-bold">260</strong>
                </div>
                <div className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-md text-xs font-mono">
                  <span className="text-gray-400 mr-1.5">Planned:</span>
                  <strong className="text-ink-900 font-bold">80.5H</strong>
                </div>
                <div className="bg-gray-50 border border-gray-200 px-3 py-1 rounded-md text-xs font-mono">
                  <span className="text-gray-400 mr-1.5">Overtime:</span>
                  <strong className="text-ink-900 font-bold">80.5H</strong>
                </div>
                <div className="ml-auto text-xs font-mono font-bold text-coral">
                  January - 2026
                </div>
              </div>

              {/* Shift Table Matrix */}
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-center border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-semibold">
                      <th className="text-left pb-2 font-semibold">Member</th>
                      <th className="pb-2">Mon 1</th>
                      <th className="pb-2">Tue 2</th>
                      <th className="pb-2">Wed 3</th>
                      <th className="pb-2">Thu 4</th>
                      <th className="pb-2">Fri 5</th>
                      <th className="pb-2">Sat 6</th>
                      <th className="pb-2">Sun 7</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="text-left py-2.5 font-bold text-ink-900 whitespace-nowrap">Sarah Chen</td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-800">08-16</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-800">08-16</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-800">08-16</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-cyan-100 text-cyan-800">09-17</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-cyan-100 text-cyan-800">09-17</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono text-gray-400 bg-gray-100">OFF</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono text-gray-400 bg-gray-100">OFF</span></td>
                    </tr>
                    <tr>
                      <td className="text-left py-2.5 font-bold text-ink-900 whitespace-nowrap">Marcus Vance</td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-cyan-100 text-cyan-800">09-17</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-cyan-100 text-cyan-800">09-17</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-800">08-16</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-800">08-16</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-purple-100 text-purple-800">12-20</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-purple-100 text-purple-800">12-20</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono text-gray-400 bg-gray-100">OFF</span></td>
                    </tr>
                    <tr>
                      <td className="text-left py-2.5 font-bold text-ink-900 whitespace-nowrap">Amara Okafor</td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono text-gray-400 bg-gray-100">OFF</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-800">08-16</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-800">08-16</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-cyan-100 text-cyan-800">09-17</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-cyan-100 text-cyan-800">09-17</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono font-bold bg-cyan-100 text-cyan-800">09-17</span></td>
                      <td><span className="inline-block px-1.5 py-0.5 rounded font-mono text-gray-400 bg-gray-100">OFF</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Feature 2 Text */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-coral font-bold text-xs uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-coral" />
                <span>Work scheduling</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-900 mb-4 leading-tight">
                Plan shifts without confusion or endless follow-ups
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Set up the schedule and share it with your team — everyone sees when and how they're working. Leave and remote work requests flow automatically along a predefined approval path. You get clarity, up-to-date data, and no more sad spreadsheets.
              </p>
              <a
                href="#modalTrial"
                onClick={(e) => { e.preventDefault(); setModalOpen(true); }}
                className="inline-flex items-center gap-2 text-coral font-bold text-sm hover:gap-3 transition-all"
              >
                <span>Learn more explore</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Feature 3: Records & Reports */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center" id="reports">
            <div>
              <div className="inline-flex items-center gap-2 text-coral font-bold text-xs uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-coral" />
                <span>Records and reports</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-ink-900 mb-4 leading-tight">
                From manual to magical: automate and manual calculations in Excel
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Set up the schedule and share it with your team — everyone sees when and how they're working. Leave and activity records flow automatically along a predefined approval path. You get clarity, up-to-date data, and no more sad spreadsheets.
              </p>
              <a
                href="#modalTrial"
                onClick={(e) => { e.preventDefault(); setModalOpen(true); }}
                className="inline-flex items-center gap-2 text-coral font-bold text-sm hover:gap-3 transition-all"
              >
                <span>Learn more explore</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Timesheet Ledger Card */}
            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-8 shadow-xl shadow-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-rose-100 text-coral font-extrabold flex items-center justify-center text-sm">
                    JB
                  </div>
                  <div>
                    <h5 className="font-bold text-ink-900 text-sm">James Brown</h5>
                    <span className="text-xs text-gray-500">HR Manager</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-coral/10 text-coral font-bold text-xs rounded-full">
                  Work time
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-gray-400 font-semibold">
                      <th className="text-left pb-2">Date</th>
                      <th className="text-left pb-2">Start time</th>
                      <th className="text-right pb-2">End time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="py-2.5 font-mono text-ink-900">01.04.2026 (TUE)</td>
                      <td className="py-2.5 font-mono text-coral font-bold">08:00 - 16:00</td>
                      <td className="py-2.5 font-mono font-bold text-right text-gray-700">04:00</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono text-ink-900">02.04.2026 (WED)</td>
                      <td className="py-2.5 font-mono text-coral font-bold">08:00 - 16:00</td>
                      <td className="py-2.5 font-mono font-bold text-right text-gray-700">08:00</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono text-ink-900">03.04.2026 (THU)</td>
                      <td className="py-2.5 font-mono text-coral font-bold">08:00 - 16:00</td>
                      <td className="py-2.5 font-mono font-bold text-right text-gray-700">08:00</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono text-ink-900">04.04.2026 (FRI)</td>
                      <td className="py-2.5 font-mono text-coral font-bold">08:00 - 14:00</td>
                      <td className="py-2.5 font-mono font-bold text-right text-gray-700">06:00</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 font-mono text-ink-900">05.04.2026 (SAT)</td>
                      <td className="py-2.5 font-mono text-coral font-bold">09:00 - 13:00</td>
                      <td className="py-2.5 font-mono font-bold text-right text-gray-700">04:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RESULTS & 3D ISOMETRIC PROOF SECTION (DEEP WINE SECTION)
          ========================================================================= */}
      <section className="results-radial-bg text-white py-24 sm:py-32 relative overflow-hidden" id="metrics">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight mb-5 leading-tight">
              These aren't promises.<br />
              These are real results from our client
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8">
              Automate manual work, simplify HR processes, and free up your team's time to focus on what really matters: growing your business.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white font-bold text-sm px-6 py-3 rounded-full shadow-lg shadow-coral/40 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>See Case Studies</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* 3D Isometric Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 max-w-[900px] mx-auto pt-6 items-end">
            {/* Column 1 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-[130px] h-[260px] transition-transform duration-300 group-hover:-translate-y-3">
                {/* Top face */}
                <div
                  className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-br from-[#ff7a6e] to-coral shadow-[0_0_25px_rgba(235,68,56,0.6)]"
                  style={{ transform: 'skewX(-45deg) translateY(-20px)' }}
                />
                {/* Front face */}
                <div
                  className="absolute top-[20px] left-0 w-full h-[calc(100%-20px)] bg-gradient-to-b from-[#c72920] to-[#851310] flex items-center justify-center border-l border-white/20"
                >
                  <span
                    className="font-extrabold text-sm tracking-[0.2em] text-white/50 uppercase"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    80% HR DEPARTMENT
                  </span>
                </div>
                {/* Side face */}
                <div
                  className="absolute top-0 -right-[20px] w-[20px] h-[calc(100%-20px)] bg-gradient-to-b from-[#851310] to-[#470605]"
                  style={{ transform: 'skewY(-45deg) translateY(10px)' }}
                />
              </div>
              <p className="mt-8 text-xs sm:text-sm text-white/80 max-w-[200px] leading-relaxed">
                <strong className="text-white font-bold">80% Reduction</strong> in routine repetitive onboarding paperwork
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-[130px] h-[300px] transition-transform duration-300 group-hover:-translate-y-3">
                {/* Top face */}
                <div
                  className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-br from-[#ff7a6e] to-coral shadow-[0_0_25px_rgba(235,68,56,0.6)]"
                  style={{ transform: 'skewX(-45deg) translateY(-20px)' }}
                />
                {/* Front face */}
                <div
                  className="absolute top-[20px] left-0 w-full h-[calc(100%-20px)] bg-gradient-to-b from-[#c72920] to-[#851310] flex items-center justify-center border-l border-white/20"
                >
                  <span
                    className="font-extrabold text-sm tracking-[0.2em] text-white/50 uppercase"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    65% OF MANAGERS' HOURS
                  </span>
                </div>
                {/* Side face */}
                <div
                  className="absolute top-0 -right-[20px] w-[20px] h-[calc(100%-20px)] bg-gradient-to-b from-[#851310] to-[#470605]"
                  style={{ transform: 'skewY(-45deg) translateY(10px)' }}
                />
              </div>
              <p className="mt-8 text-xs sm:text-sm text-white/80 max-w-[200px] leading-relaxed">
                <strong className="text-white font-bold">65% Saved</strong> on weekly manager scheduling follow-ups
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-[130px] h-[240px] transition-transform duration-300 group-hover:-translate-y-3">
                {/* Top face */}
                <div
                  className="absolute top-0 left-0 w-full h-[40px] bg-gradient-to-br from-[#ff7a6e] to-coral shadow-[0_0_25px_rgba(235,68,56,0.6)]"
                  style={{ transform: 'skewX(-45deg) translateY(-20px)' }}
                />
                {/* Front face */}
                <div
                  className="absolute top-[20px] left-0 w-full h-[calc(100%-20px)] bg-gradient-to-b from-[#c72920] to-[#851310] flex items-center justify-center border-l border-white/20"
                >
                  <span
                    className="font-extrabold text-sm tracking-[0.2em] text-white/50 uppercase"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    12X REPETITIVE WORK
                  </span>
                </div>
                {/* Side face */}
                <div
                  className="absolute top-0 -right-[20px] w-[20px] h-[calc(100%-20px)] bg-gradient-to-b from-[#851310] to-[#470605]"
                  style={{ transform: 'skewY(-45deg) translateY(10px)' }}
                />
              </div>
              <p className="mt-8 text-xs sm:text-sm text-white/80 max-w-[200px] leading-relaxed">
                <strong className="text-white font-bold">12X Faster</strong> payroll calculation &amp; export pipelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTROL CENTER ARCHITECTURE (3-CARD GRID)
          ========================================================================= */}
      <section className="py-24 bg-white" id="control-center">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 mb-3">
              Your HR control center.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Whether you're a startup or enterprise, we have a solution for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Data */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-1 hover:border-coral/40 transition-all shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h4 className="text-xl font-extrabold text-ink-900 mb-4">Data</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>All employee data organized in one place</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>Automated reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>Export leave and working time data to payroll systems</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Processes */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-1 hover:border-coral/40 transition-all shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                <GitPullRequest size={24} />
              </div>
              <h4 className="text-xl font-extrabold text-ink-900 mb-4">Processes</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>Clear communication/information flow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>Create, approve, and archive documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>No more spreadsheets printouts or dimension paperwork</span>
                </li>
              </ul>
            </div>

            {/* Card 3: People */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:-translate-y-1 hover:border-coral/40 transition-all shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-extrabold text-ink-900 mb-4">People</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>Full overview of each team's records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>Easy access to execution statistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral font-bold text-base leading-none">•</span>
                  <span>Fast leave, working hours and flexible work schedules</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECURITY & TRUST
          ========================================================================= */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-200" id="security">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold text-ink-900 mb-2">
            Data security is our top priority.
          </h3>
          <p className="text-sm text-gray-500 mb-8">
            Enterprise-grade encryption and global data privacy standards built into every layer.
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-ink-900 shadow-sm">
              <Shield size={16} className="text-coral" />
              <span>SOC2 Type II</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-ink-900 shadow-sm">
              <Lock size={16} className="text-coral" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-ink-900 shadow-sm">
              <Award size={16} className="text-coral" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-gray-200 text-xs font-bold text-ink-900 shadow-sm">
              <Globe size={16} className="text-coral" />
              <span>256-Bit SSL Encryption</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONVERSION BANNER
          ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="wine-radial-bg rounded-3xl p-10 sm:p-16 text-center text-white shadow-2xl shadow-wine-dark/40">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
              Ready to manpower your workforce?
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-8">
              Join forward-thinking companies scaling faster with Velora HR automation.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-coral hover:bg-coral-hover text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-coral/40 transition-all cursor-pointer hover:-translate-y-0.5"
            >
              <span>Start Free 14-Day Trial</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
          ========================================================================= */}
      <footer className="bg-[#0f0208] text-white pt-20 pb-10 border-t border-white/10">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
            <div>
              <a href="#top" className="flex items-center gap-2.5 text-white no-underline mb-4">
                <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
                  <path d="M 18 24 L 42 76 C 45 82 55 82 58 76 L 82 24 C 85 18 78 12 72 17 L 50 48 L 28 17 C 22 12 15 18 18 24 Z" fill="#eb4438"/>
                  <circle cx="50" cy="38" r="4.5" fill="#ffffff"/>
                </svg>
                <span className="font-extrabold text-lg tracking-tight">
                  velora<span className="text-coral">.hr</span>
                </span>
              </a>
              <p className="text-xs text-white/60 leading-relaxed max-w-xs mb-4">
                Next-generation workforce operating system. Unifying shift planning, leave automation, and labor intelligence.
              </p>
              <div className="text-[11px] text-white/40">Zurich · San Francisco · London</div>
            </div>

            <div>
              <h5 className="font-bold text-sm mb-4 text-white">Product</h5>
              <ul className="space-y-2.5 text-xs text-white/60">
                <li><a href="#features" className="hover:text-coral transition-colors">Employee Panels</a></li>
                <li><a href="#scheduling" className="hover:text-coral transition-colors">Shift Scheduling</a></li>
                <li><a href="#reports" className="hover:text-coral transition-colors">Records &amp; Payroll</a></li>
                <li><a href="#control-center" className="hover:text-coral transition-colors">Control Center</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-sm mb-4 text-white">Solutions</h5>
              <ul className="space-y-2.5 text-xs text-white/60">
                <li><a href="#features" className="hover:text-coral transition-colors">Scaleups &amp; Enterprises</a></li>
                <li><a href="#scheduling" className="hover:text-coral transition-colors">Shift-Based Teams</a></li>
                <li><a href="#reports" className="hover:text-coral transition-colors">Automated Payroll</a></li>
                <li><a href="#security" className="hover:text-coral transition-colors">Enterprise Security</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-sm mb-4 text-white">Company</h5>
              <ul className="space-y-2.5 text-xs text-white/60">
                <li><a href="#control-center" className="hover:text-coral transition-colors">About Us</a></li>
                <li><a href="#metrics" className="hover:text-coral transition-colors">Client Outcomes</a></li>
                <li><a href="#security" className="hover:text-coral transition-colors">Security &amp; Trust</a></li>
                <li><a href="mailto:contact@velora.example" className="hover:text-coral transition-colors">Contact Sales</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
            <div>© 2026 Velora HR Inc. All rights reserved. (Design Library Specimen: velora-agy)</div>
            <div>Engineered with Vite, React 18, TypeScript &amp; Tailwind CSS</div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          MOBILE DRAWER OVERLAY
          ========================================================================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-[280px] h-full bg-wine-base border-l border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
              <span className="font-extrabold text-lg tracking-tight text-white">
                velora<span className="text-coral">.hr</span>
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-col space-y-4 text-sm font-semibold text-white/80">
              <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Product &amp; Features</a>
              <a href="#scheduling" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Shift Scheduling</a>
              <a href="#reports" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Records &amp; Payroll</a>
              <a href="#metrics" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Client Results</a>
              <a href="#control-center" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Control Center</a>
              <a href="#security" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Security</a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); setModalOpen(true); }}
            className="w-full py-3 bg-coral text-white font-bold text-xs rounded-full shadow-lg cursor-pointer text-center"
          >
            Start 14-Day Free Trial →
          </button>
        </div>
      </div>

      {/* =========================================================================
          FREE TRIAL / CONSULTATION MODAL
          ========================================================================= */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />
          <div className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-ink-900 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            <div className="text-[11px] font-mono font-bold text-coral uppercase tracking-wider mb-2">
              FREE 14-DAY INSTANT TRIAL
            </div>
            <h3 className="text-2xl font-extrabold text-ink-900 mb-2">
              Launch Your Velora Workspace
            </h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Experience seamless employee scheduling, automatic leave workflows, and unified labor telemetry.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Workspace provisioned! Welcome to Velora HR.')
                setModalOpen(false)
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="elena@company.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-coral outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="Acme Technologies"
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-coral outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">Workforce Size</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:border-coral outline-none bg-white cursor-pointer">
                  <option>10 - 50 Employees</option>
                  <option>50 - 250 Employees</option>
                  <option>250 - 1,000 Employees</option>
                  <option>1,000+ Enterprise</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-coral hover:bg-coral-hover text-white font-bold rounded-xl text-sm transition-all cursor-pointer shadow-lg shadow-coral/30 hover:shadow-coral/50"
              >
                Provision Instance →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
