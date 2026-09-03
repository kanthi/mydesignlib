import { useState, useEffect } from 'react'
import {
  Sparkles,
  Search,
  Inbox,
  Star,
  Send,
  FileText,
  Archive,
  Trash2,
  Reply,
  Forward,
  MoreHorizontal,
  Paperclip,
  Menu,
  X,
  Check,
  Zap,

  Apple
} from 'lucide-react'

interface Message {
  id: string
  sender: string
  subject: string
  preview: string
  time: string
  unread: boolean
  tag: string
  tagColor: string
  avatarBg: string
  avatarInitial: string
  summary: string
  body: string[]
  attachment?: string
}

const MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'Linear',
    subject: 'Weekly product digest',
    preview: 'Your team shipped 23 issues this week...',
    time: '9:41 AM',
    unread: true,
    tag: 'Work',
    tagColor: '#00d2ff',
    avatarBg: 'from-[#00d2ff] to-[#0B2551]',
    avatarInitial: 'L',
    summary: 'Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.',
    body: [
      'Hi team,',
      'Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.',
      'Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.',
      'Let me know if you would like a deeper breakdown by project or contributor.',
      '— The Linear team'
    ],
    attachment: 'digest-may-6.pdf'
  },
  {
    id: '2',
    sender: 'Sophia Chen',
    subject: 'Re: Q3 roadmap review',
    preview: 'Thanks for sending the deck over. I had a few thoughts...',
    time: '8:12 AM',
    unread: true,
    tag: 'Work',
    tagColor: '#00d2ff',
    avatarBg: 'from-[#a855f7] to-[#3b82f6]',
    avatarInitial: 'S',
    summary: 'Sophia reviewed the roadmap slides. Requests 10min sync before tomorrow 2 PM executive call.',
    body: [
      'Hey everyone,',
      'Thanks for sending the deck over. I had a few thoughts on the architecture slide, specifically around our caching layer.',
      'Could we align for 10 minutes prior to the 2 PM partner demo?',
      'Best, Sophia'
    ]
  },
  {
    id: '3',
    sender: 'Figma',
    subject: 'Marcus commented on your file',
    preview: 'Love the new direction on the landing hero.',
    time: 'Yesterday',
    unread: false,
    tag: 'Work',
    tagColor: '#00d2ff',
    avatarBg: 'from-[#f43f5e] to-[#fb923c]',
    avatarInitial: 'F',
    summary: 'Design feedback: hero video approved, adjust padding on mobile viewport.',
    body: [
      'Marcus left a comment on "Zephyr Desktop v3":',
      '"Love the new direction on the landing hero! The liquid glass borders make the interface feel tangible."'
    ]
  },
  {
    id: '4',
    sender: 'Stripe',
    subject: 'Payout of $12,480.00 sent',
    preview: 'Your payout is on its way to your bank account...',
    time: 'Yesterday',
    unread: false,
    tag: 'Finance',
    tagColor: '#10b981',
    avatarBg: 'from-[#6366f1] to-[#4338ca]',
    avatarInitial: 'S',
    summary: 'Automated transfer of $12,480.00 initiated to Silicon Valley Bank ending in ••8842.',
    body: [
      'Your automatic scheduled payout has been processed.',
      'Amount: $12,480.00 USD. Estimated arrival: 1-2 business days.'
    ]
  },
  {
    id: '5',
    sender: 'Vercel',
    subject: 'Deployment ready for zephyr-web',
    preview: 'Preview is live at zephyr-web-g3f.vercel.app',
    time: 'Mon',
    unread: false,
    tag: 'Updates',
    tagColor: '#A4F4FD',
    avatarBg: 'from-[#ffffff] to-[#71717a]',
    avatarInitial: 'V',
    summary: 'Production build succeeded in 8.2s. Edge network caches warmed globally.',
    body: [
      'Build completed without warnings.',
      'Domains updated: zephyr-mail.app'
    ]
  },
  {
    id: '6',
    sender: 'GitHub',
    subject: '[zephyr/core] PR #482 approved',
    preview: 'david-lim approved your pull request.',
    time: 'Mon',
    unread: false,
    tag: 'Updates',
    tagColor: '#A4F4FD',
    avatarBg: 'from-[#22c55e] to-[#15803d]',
    avatarInitial: 'G',
    summary: 'PR #482 passed all continuous integration checks and was merged into main.',
    body: [
      'david-lim approved pull request #482 (feat: zero-latency thread hydration).',
      'All 142 tests passed.'
    ]
  }
]

export default function App() {
  const [activeMessage, setActiveMessage] = useState<Message>(MESSAGES[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState('Wed May 6 1:09 PM')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: '2-digit'
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 60000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white selection:bg-[#3D81E3]/30 selection:text-white">
      {/* Fixed Fullscreen Looping Video Canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
          poster="./assets/poster.jpg"
        />
      </div>

      {/* 36rem Visual Guideline Lines */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      <div className="relative z-10">
        {/* =======================================================================
            SECTION 1: NAVBAR
            ======================================================================= */}
        <header className="max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#3D81E3] to-[#A4F4FD] flex items-center justify-center shadow-lg shadow-[#3D81E3]/20 group-hover:scale-105 transition-transform">
              <Zap size={16} className="text-black fill-black" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Zephyr</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {['Solutions', 'Features', 'Triage', 'Pricing', 'Documentation'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/70 text-sm font-medium hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => alert('Downloading Zephyr for macOS (Universal Binary)...')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-[#ededed] transition-colors cursor-pointer shadow-lg shadow-white/10"
            >
              <Apple size={14} className="fill-black" />
              <span>Download Zephyr</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </header>

        {/* =======================================================================
            SECTION 2: HERO STAGE
            ======================================================================= */}
        <section className="pt-16 md:pt-28 pb-16 text-center flex flex-col items-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs text-white/80 mb-6 backdrop-blur-md">
            <Sparkles size={13} className="text-[#A4F4FD]" />
            <span>AI-Native Mail Architecture</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-6">
            Your email.<br />
            <span className="shiny-gradient">Revitalized.</span>
          </h1>

          <p className="text-white/60 max-w-md text-base sm:text-lg leading-[1.5] mb-8">
            Zephyr is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize, and refine your messages into total clarity.
          </p>

          <div className="flex flex-col items-center gap-2.5">
            <button
              type="button"
              onClick={() => alert('Starting Zephyr for Mac installer...')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-[#ededed] transition-all hover:scale-102 cursor-pointer shadow-xl shadow-white/15"
            >
              <Apple size={16} className="fill-black" />
              <span>Download for macOS</span>
            </button>
            <span className="text-xs text-white/40">Requires macOS Sonoma or later · Apple Silicon &amp; Intel</span>
          </div>
        </section>

        {/* =======================================================================
            SECTION 3: macOS MENU BAR STRIP
            ======================================================================= */}
        <div className="w-full border-t border-b border-white/10 bg-black/40 backdrop-blur-md h-10 flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between text-xs text-white/80">
            <div className="flex items-center gap-4">
              <Apple size={13} className="fill-white" />
              <strong className="font-semibold text-white">Zephyr</strong>
              <span className="hidden sm:inline text-white/60">File</span>
              <span className="hidden sm:inline text-white/60">Edit</span>
              <span className="hidden md:inline text-white/60">View</span>
              <span className="hidden md:inline text-white/60">Message</span>
              <span className="hidden md:inline text-white/60">Help</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px] text-white/60">
              <Search size={12} />
              <span>{currentTime}</span>
            </div>
          </div>
        </div>

        {/* =======================================================================
            SECTION 4: INBOX MOCKUP
            ======================================================================= */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0e1014]/90 backdrop-blur-2xl shadow-2xl">
            {/* Window Chrome Titlebar */}
            <div className="h-10 px-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-white/50 font-medium font-mono">Zephyr — Inbox (12 unread)</span>
              <div className="w-10" />
            </div>

            {/* Client Interface Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[540px]">
              {/* Sidebar */}
              <div className="hidden md:flex md:col-span-3 border-r border-white/10 p-4 flex-col gap-5 bg-black/20">
                <button
                  type="button"
                  onClick={() => alert('Opening AI Compose Composer...')}
                  className="w-full py-2.5 px-3 rounded-lg bg-white text-black text-xs font-semibold flex items-center justify-center gap-2 hover:bg-[#ededed] transition-colors cursor-pointer"
                >
                  <Sparkles size={13} />
                  <span>Compose with Zephyr</span>
                </button>

                <div className="space-y-1">
                  {[
                    { icon: Inbox, label: 'Inbox', count: '12', active: true },
                    { icon: Star, label: 'Starred', count: '3', active: false },
                    { icon: Send, label: 'Sent', count: '', active: false },
                    { icon: FileText, label: 'Drafts', count: '2', active: false },
                    { icon: Archive, label: 'Archive', count: '', active: false },
                    { icon: Trash2, label: 'Trash', count: '', active: false },
                  ].map((tab) => (
                    <div
                      key={tab.label}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs cursor-pointer transition-colors ${
                        tab.active
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <tab.icon size={14} />
                        <span>{tab.label}</span>
                      </div>
                      {tab.count && (
                        <span className="text-[10px] font-mono text-white/50">{tab.count}</span>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block mb-2 px-3">
                    Smart Folders
                  </span>
                  <div className="space-y-1 text-xs text-white/70">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/5 cursor-pointer">
                      <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
                      <span>Work</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/5 cursor-pointer">
                      <span className="w-2 h-2 rounded-full bg-[#A4F4FD]" />
                      <span>Personal</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded hover:bg-white/5 cursor-pointer">
                      <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                      <span>Finance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message List */}
              <div className="col-span-12 md:col-span-4 border-r border-white/10 flex flex-col bg-black/10">
                <div className="p-3 border-b border-white/10 flex items-center gap-2 text-xs text-white/50">
                  <Search size={14} />
                  <input
                    type="text"
                    placeholder="Search mail (⌘K)..."
                    className="w-full bg-transparent border-0 outline-none text-xs text-white"
                  />
                </div>

                <div className="overflow-y-auto max-h-[500px] divide-y divide-white/5">
                  {MESSAGES.map((msg) => (
                    <div
                      key={msg.id}
                      onClick={() => setActiveMessage(msg)}
                      className={`p-3.5 cursor-pointer transition-colors text-left ${
                        activeMessage.id === msg.id
                          ? 'bg-white/10 border-l-2 border-[#3D81E3]'
                          : 'hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs ${msg.unread ? 'font-semibold text-white' : 'text-white/70'}`}>
                          {msg.sender}
                        </span>
                        <span className="text-[10px] text-white/40 font-mono">{msg.time}</span>
                      </div>
                      <div className={`text-xs mb-1 truncate ${msg.unread ? 'text-white font-medium' : 'text-white/80'}`}>
                        {msg.subject}
                      </div>
                      <p className="text-[11px] text-white/50 line-clamp-1">
                        {msg.preview}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reader Panel */}
              <div className="col-span-12 md:col-span-5 p-5 flex flex-col justify-between bg-black/30">
                <div>
                  {/* Toolbar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-1 text-white/60">
                      <button type="button" className="p-1.5 hover:bg-white/10 rounded" title="Reply">
                        <Reply size={15} />
                      </button>
                      <button type="button" className="p-1.5 hover:bg-white/10 rounded" title="Forward">
                        <Forward size={15} />
                      </button>
                      <button type="button" className="p-1.5 hover:bg-white/10 rounded" title="Archive">
                        <Archive size={15} />
                      </button>
                      <button type="button" className="p-1.5 hover:bg-white/10 rounded" title="Delete">
                        <Trash2 size={15} />
                      </button>
                    </div>
                    <button type="button" className="p-1.5 hover:bg-white/10 rounded text-white/60">
                      <MoreHorizontal size={15} />
                    </button>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${activeMessage.avatarBg} flex items-center justify-center font-bold text-xs text-white`}>
                      {activeMessage.avatarInitial}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-white">{activeMessage.sender}</h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-mono">
                          {activeMessage.tag}
                        </span>
                      </div>
                      <span className="text-[11px] text-white/50">to me · {activeMessage.time}</span>
                    </div>
                  </div>

                  {/* AI Summary Card */}
                  <div className="liquid-glass rounded-xl p-3.5 mb-5 border border-white/10">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A4F4FD] mb-1.5">
                      <Sparkles size={13} />
                      <span>Summary by Zephyr</span>
                    </div>
                    <p className="text-xs text-white/80 leading-relaxed">
                      {activeMessage.summary}
                    </p>
                  </div>

                  {/* Message Body */}
                  <div className="space-y-3 text-xs text-white/70 leading-relaxed">
                    {activeMessage.body.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>

                  {/* Attachment if present */}
                  {activeMessage.attachment && (
                    <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-xs text-white/80 cursor-pointer hover:bg-white/10">
                      <Paperclip size={13} />
                      <span>{activeMessage.attachment}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 flex justify-between items-center text-[11px] text-white/40">
                  <span>Press <kbd className="px-1 py-0.5 rounded bg-white/10 font-mono">E</kbd> to Archive</span>
                  <span><kbd className="px-1 py-0.5 rounded bg-white/10 font-mono">⌘R</kbd> Quick Reply</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            SECTION 5: FEATURE TRIAGE
            ======================================================================= */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center" id="features">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3D81E3] block mb-3">
              ZERO-INBOX TRIAGE
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
              Clear your inbox<br />
              in a single pass.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">
              Zephyr reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward — the rest handles itself.
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-white/80">
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5">Auto-categorize</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5">Snooze for later</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5">Silent newsletters</span>
              <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5">One-tap unsubscribe</span>
            </div>
          </div>

          <div className="liquid-glass rounded-2xl p-6 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-white/60 mb-2">
              <span className="font-semibold text-white">Today · 42 messages triaged</span>
              <span className="text-[#A4F4FD]">100% automated</span>
            </div>

            <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-center justify-between">
              <div>
                <strong className="text-xs text-white block">Priority (4)</strong>
                <span className="text-[11px] text-white/50">Sophia Chen, David Lim, Contract Signoff</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>

            <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-center justify-between">
              <div>
                <strong className="text-xs text-white block">Follow-up (7)</strong>
                <span className="text-[11px] text-white/50">Marcus design feedback, Figma thread</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#00d2ff]" />
            </div>

            <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-center justify-between">
              <div>
                <strong className="text-xs text-white block">Updates &amp; Alerts (18)</strong>
                <span className="text-[11px] text-white/50">Vercel deploy ready, GitHub PR merged</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            </div>

            <div className="liquid-glass rounded-xl p-3 border border-white/10 flex items-center justify-between">
              <div>
                <strong className="text-xs text-white block">Archived Noise (13)</strong>
                <span className="text-[11px] text-white/50">Stripe payout notifications, Receipts</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-white/30" />
            </div>
          </div>
        </section>

        {/* =======================================================================
            SECTION 6: TESTIMONIALS
            ======================================================================= */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <p className="text-sm text-white/80 leading-relaxed italic mb-6">
                "Zephyr gave our leadership team four hours of their week back. It reads like email from the future."
              </p>
              <div className="pt-4 border-t border-white/10">
                <strong className="text-xs text-white block">Parker Wilf</strong>
                <span className="text-[11px] text-white/50 block">Group Product Manager, MERCURY</span>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <p className="text-sm text-white/80 leading-relaxed italic mb-6">
                "The command palette alone has changed how I process messages. I can't imagine going back to a traditional client."
              </p>
              <div className="pt-4 border-t border-white/10">
                <strong className="text-xs text-white block">Andrew von Rosenbach</strong>
                <span className="text-[11px] text-white/50 block">Senior Eng Program Manager, COHERE</span>
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <p className="text-sm text-white/80 leading-relaxed italic mb-6">
                "Triage that actually understands context. Our team stopped dreading Monday morning inboxes."
              </p>
              <div className="pt-4 border-t border-white/10">
                <strong className="text-xs text-white block">Mathies Christensen</strong>
                <span className="text-[11px] text-white/50 block">Engineering Manager, LUNAR</span>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================================
            SECTION 7: PRICING
            ======================================================================= */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-t border-white/10" id="pricing">
          <div className="text-center max-w-lg mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A4F4FD] block mb-2">
              TRANSPARENT VALUE
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Simple pricing for focused thinkers.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs text-white/50 font-semibold block mb-2">STARTER</span>
                <div className="text-3xl font-bold mb-4">$0 <span className="text-xs text-white/40 font-normal">/ forever</span></div>
                <p className="text-xs text-white/60 mb-6">Essential email management for individuals wanting zero-noise simplicity.</p>
                <div className="space-y-2 text-xs text-white/80 mb-8">
                  <div className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Up to 2 accounts</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Basic AI summaries</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> macOS client</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => alert('Starter account initiated.')}
                className="w-full py-2.5 rounded-lg border border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Pro */}
            <div className="liquid-glass rounded-2xl p-6 border border-[#3D81E3] bg-[#3D81E3]/5 flex flex-col justify-between relative shadow-xl shadow-[#3D81E3]/10">
              <span className="absolute -top-3 right-6 bg-[#3D81E3] text-black text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                MOST POPULAR
              </span>
              <div>
                <span className="text-xs text-[#3D81E3] font-semibold block mb-2">PRO TIER</span>
                <div className="text-3xl font-bold mb-4">$16 <span className="text-xs text-white/40 font-normal">/ month</span></div>
                <p className="text-xs text-white/60 mb-6">Autonomous triage and infinite context reasoning for high-output professionals.</p>
                <div className="space-y-2 text-xs text-white/80 mb-8">
                  <div className="flex items-center gap-2"><Check size={14} className="text-[#3D81E3]" /> Unlimited email accounts</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-[#3D81E3]" /> Multi-step autonomous triage</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-[#3D81E3]" /> Command palette search (⌘K)</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-[#3D81E3]" /> VIP sender prioritizing</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => alert('Opening Pro checkout...')}
                className="w-full py-2.5 rounded-lg bg-white text-black font-semibold text-xs hover:bg-[#ededed] transition-colors"
              >
                Upgrade to Pro
              </button>
            </div>

            {/* Team */}
            <div className="liquid-glass rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs text-white/50 font-semibold block mb-2">ENTERPRISE</span>
                <div className="text-3xl font-bold mb-4">$28 <span className="text-xs text-white/40 font-normal">/ seat</span></div>
                <p className="text-xs text-white/60 mb-6">Shared inbox delegation, SOC2 compliance, and dedicated LLM inference clusters.</p>
                <div className="space-y-2 text-xs text-white/80 mb-8">
                  <div className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Everything in Pro</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> Shared workspace dispatch</div>
                  <div className="flex items-center gap-2"><Check size={14} className="text-emerald-400" /> SSO &amp; custom data retention</div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => alert('Contacting Enterprise sales team...')}
                className="w-full py-2.5 rounded-lg border border-white/20 text-white font-semibold text-xs hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* =======================================================================
            FOOTER
            ======================================================================= */}
        <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Zephyr Mail</span>
            <span>· The intelligent workspace for communication.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white">Privacy</a>
            <a href="#terms" className="hover:text-white">Terms</a>
            <a href="#security" className="hover:text-white">Security</a>
          </div>
        </footer>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-8 justify-between">
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">Zephyr</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-2xl font-semibold">
            {['Solutions', 'Features', 'Triage', 'Pricing', 'Documentation'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#3D81E3]"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false)
              alert('Downloading Zephyr for Mac...')
            }}
            className="w-full py-3.5 rounded-full bg-white text-black font-semibold text-sm"
          >
            Download Zephyr for Mac
          </button>
        </div>
      )}
    </div>
  )
}
