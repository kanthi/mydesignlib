import { useState, useEffect } from 'react'
import {
  Wallet,
  Menu,
  X,
  Activity
} from 'lucide-react'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const [connectedWallet] = useState('0x71a4...f4e2')
  const [depositAmount, setDepositAmount] = useState('50000')

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
        setTerminalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Lock body scroll when mobile menu or modal is active
  useEffect(() => {
    if (mobileMenuOpen || terminalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen, terminalOpen])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white font-manrope selection:bg-[#AFDDFF] selection:text-black select-none">
      {/* =========================================================================
          LAYER 0: BACKGROUND VIDEO (Bioluminescent jellyfish organisms)
          ========================================================================= */}
      <video
        className="absolute inset-0 w-full h-full object-cover anim-fade-in pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260813_115057_94c3699b-0fd1-4124-bcf3-3626bb8c1f77.mp4"
        poster="./assets/poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* =========================================================================
          LAYER 1: CONTENT LAYER (GRID LINES, NODES, TOP NAV, H1, BOTTOM ROW)
          ========================================================================= */}
      <div className="relative z-10 w-full h-full">
        {/* =======================================================================
            TOP NAVIGATION STRIP
            ======================================================================= */}
        <nav className="absolute top-0 left-0 w-full flex items-center px-5 md:px-[35px] py-5 md:py-[27px] z-40">
          <div className="flex items-center gap-[40px]">
            {/* Wordmark */}
            <a
              href="#top"
              className="font-display text-white text-[18px] md:text-[21px] leading-[21px] tracking-wide whitespace-nowrap anim-fade-up no-underline flex items-center gap-2.5 group"
              style={{ animationDelay: '200ms' }}
            >
              <span className="w-2.5 h-2.5 bg-[#AFDDFF] rounded-sm transform rotate-45 group-hover:rotate-90 transition-transform" />
              <span>VALEUR // ÍNDEX</span>
            </a>

            {/* Nav links (Desktop) */}
            <div className="hidden lg:flex items-center gap-[40px]">
              {[
                { number: '01', label: 'ECOSYSTEM', delay: '350ms' },
                { number: '02', label: 'LIQUIDITY_POOLS', delay: '450ms' },
                { number: '03', label: 'VALEUR_INDEX', delay: '550ms' },
                { number: '04', label: 'GOVERNANCE', delay: '650ms' },
              ].map((item) => (
                <div
                  key={item.number}
                  onClick={() => setTerminalOpen(true)}
                  className="flex items-center gap-[3px] anim-fade-up cursor-pointer group"
                  style={{ animationDelay: item.delay }}
                >
                  <span className="font-manrope text-[#AFDDFF]/80 text-[13px] leading-[15.6px]">
                    {item.number}.
                  </span>
                  <span className="font-manrope text-white text-[13px] leading-[15.6px] group-hover:text-[#AFDDFF] transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Group: Wallet Strip (Desktop) */}
          <div
            className="hidden lg:flex items-center gap-[12px] ml-auto anim-slide-right cursor-pointer"
            style={{ animationDelay: '600ms' }}
            onClick={() => setTerminalOpen(true)}
          >
            <Wallet className="w-[15px] h-[15px] text-[#AFDDFF]" strokeWidth={1.5} />
            <span className="font-manrope text-white text-[13px] leading-[15.6px] font-mono">
              {connectedWallet}
            </span>
            <span className="font-manrope text-[#AFDDFF] text-[13px] leading-[15.6px] tracking-wider">
              [ CONNECTED ]
            </span>
            <span className="text-white/40 text-[13px]">·</span>
            <span className="font-manrope text-white/50 text-[13px] leading-[15.6px]">STATUS:</span>
            <span className="bg-[#AFDDFF] text-black text-[10px] font-bold px-[5px] py-[2px] rounded-[3px] tracking-wider uppercase">
              PRIME_MEMBER
            </span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden ml-auto w-[40px] h-[40px] flex items-center justify-center text-white cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </nav>

        {/* =======================================================================
            MAIN HEADLINE
            ======================================================================= */}
        <h1
          className="font-display text-white font-normal leading-[1.04] absolute anim-fade-up text-[34px] sm:text-[48px] md:text-[68px] top-[140px] sm:top-[160px] md:top-[178px] left-5 md:left-[35px] max-w-[300px] sm:max-w-[420px] md:max-w-[554px]"
          style={{ animationDelay: '400ms' }}
        >
          Liquid Assets.<br />
          Luminous Returns.
        </h1>

        {/* =======================================================================
            GRID LINES + PLUS MARKS
            ======================================================================= */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Vertical Grid Lines */}
          {['12.6%', '37.5%', '61.9%', '86.2%'].map((left, i) => (
            <div
              key={left}
              className="absolute top-0 h-full w-px bg-white/[0.04] anim-grid-v"
              style={{ left, animationDelay: `${600 + i * 100}ms` }}
            />
          ))}

          {/* Horizontal Grid Lines */}
          {['32.7%', '71.4%'].map((top, i) => (
            <div
              key={top}
              className="absolute left-0 w-full h-px bg-white/[0.04] anim-grid-h"
              style={{ top, animationDelay: `${800 + i * 150}ms` }}
            />
          ))}

          {/* 8 Intersecting Plus Marks */}
          {['32.7%', '71.4%'].map((top, hi) =>
            ['12.6%', '37.5%', '61.9%', '86.2%'].map((left, vi) => (
              <div
                key={`${top}-${left}`}
                className="absolute anim-scale-in"
                style={{
                  top,
                  left,
                  animationDelay: `${1000 + (hi * 4 + vi) * 80}ms`,
                }}
              >
                <div className="absolute w-[10px] h-px bg-white/70 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute w-px h-[10px] bg-white/70 -translate-x-1/2 -translate-y-1/2" />
              </div>
            ))
          )}
        </div>

        {/* =======================================================================
            CENTRAL NODES — SQUARES, LABELS, ELBOW CONNECTOR LINES
            (Visible on md+ screens per specification)
            ======================================================================= */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {/* Square Node 1 (CORE_ENTITY) */}
          <div
            className="absolute top-[27%] left-[60%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-white/80 anim-scale-in"
            style={{ animationDelay: '1500ms' }}
          />

          {/* Square Node 2 (LUMINOUS_INSIGHT) */}
          <div
            className="absolute top-[58%] left-[32%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-white/80 anim-scale-in"
            style={{ animationDelay: '1800ms' }}
          />

          {/* Square Node 3 (CONNECTIVITY) */}
          <div
            className="absolute top-[63%] left-[50%] w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] border border-white/80 anim-scale-in"
            style={{ animationDelay: '2100ms' }}
          />

          {/* Label 1: CORE_ENTITY */}
          <div
            className="absolute top-[11%] left-[26%] anim-slide-left"
            style={{ animationDelay: '1100ms' }}
          >
            <span className="font-manrope text-white text-[13px] leading-[15.6px] whitespace-nowrap font-medium tracking-wide">
              [ CORE_ENTITY ]
            </span>
            <p className="font-manrope text-white/50 text-[11px] leading-[14px] mt-[4px] max-w-[160px]">
              Neural node processing real-time liquidity streams.
            </p>
          </div>

          {/* Label 2: LUMINOUS_INSIGHT */}
          <div
            className="absolute top-[76%] left-[3%] anim-slide-left"
            style={{ animationDelay: '1400ms' }}
          >
            <span className="font-manrope text-white text-[13px] leading-[15.6px] whitespace-nowrap font-medium tracking-wide">
              [ LUMINOUS_INSIGHT ]
            </span>
            <p className="font-manrope text-white/50 text-[11px] leading-[14px] mt-[4px] max-w-[160px]">
              Deep-learning engine synthesizing algorithmic yield vectors.
            </p>
          </div>

          {/* Label 3: CONNECTIVITY */}
          <div
            className="absolute top-[50%] left-[78%] anim-slide-right"
            style={{ animationDelay: '1700ms' }}
          >
            <span className="font-manrope text-white text-[13px] leading-[15.6px] whitespace-nowrap font-medium tracking-wide">
              [ CONNECTIVITY ]
            </span>
            <p className="font-manrope text-white/50 text-[11px] leading-[14px] mt-[4px] max-w-[180px]">
              Latency-free transmission across sovereign distributed ledgers.
            </p>
          </div>

          {/* 6 SVG Elbow Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none anim-fade-in" style={{ animationDelay: '1200ms' }}>
            {/* Line 1 (CORE_ENTITY Horizontal) */}
            <line x1="38%" y1="14%" x2="52%" y2="14%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {/* Line 2 (CORE_ENTITY Diagonal into square top-left) */}
            <line x1="52%" y1="14%" x2="60%" y2="27%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {/* Line 3 (LUMINOUS_INSIGHT Diagonal from square top-left) */}
            <line x1="32%" y1="58%" x2="20%" y2="74%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {/* Line 4 (LUMINOUS_INSIGHT Horizontal) */}
            <line x1="20%" y1="74%" x2="6%" y2="74%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {/* Line 5 (CONNECTIVITY Horizontal) */}
            <line x1="78%" y1="53%" x2="63%" y2="53%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            {/* Line 6 (CONNECTIVITY Diagonal into square top-left) */}
            <line x1="63%" y1="53%" x2="50%" y2="63%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>

        {/* =======================================================================
            BOTTOM ROW: CTA BUTTON + INFO / TELEMETRY CARD
            ======================================================================= */}
        <div className="absolute bottom-5 md:bottom-[35px] left-5 md:left-[35px] right-5 md:right-[35px] flex flex-col md:flex-row items-start md:items-end justify-between gap-5 md:gap-0 z-30">
          {/* Left CTA Button */}
          <button
            type="button"
            onClick={() => setTerminalOpen(true)}
            className="bg-[#AFDDFF] px-[16px] md:px-[20px] py-[10px] md:py-[12px] flex items-center gap-[10px] hover:bg-[#c8e8ff] transition-colors anim-fade-up cursor-pointer shadow-lg shadow-[#AFDDFF]/10 active:translate-y-0.5"
            style={{ animationDelay: '900ms' }}
          >
            <span className="text-black text-[16px] leading-none">&#10022;</span>
            <span className="font-manrope text-black font-semibold text-[12px] md:text-[13px] leading-[15.6px] uppercase tracking-wider">
              Explore Private Banking
            </span>
          </button>

          {/* Right Info / Telemetry Card */}
          <div
            className="bg-black/60 backdrop-blur-md border border-white/15 p-[20px] rounded-lg max-w-[340px] anim-fade-up"
            style={{ animationDelay: '1000ms' }}
          >
            <div className="flex items-center justify-between mb-[10px]">
              <span className="bg-white/10 text-[#AFDDFF] text-[10px] font-bold px-[6px] py-[2px] rounded tracking-wider uppercase">
                NOT A BANK — AN ECOSYSTEM
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-white/70 text-[12px] leading-[16px] mb-[18px]">
              Valeur manages algorithmic yield indexing through decentralized vault routing, guaranteeing private-tier execution.
            </p>
            <div className="grid grid-cols-3 gap-3 pt-3 border-t border-white/10 text-center font-mono">
              <div>
                <span className="block text-[10px] text-white/40">TVL</span>
                <strong className="text-[12px] text-white font-bold">$1.42B</strong>
              </div>
              <div>
                <span className="block text-[10px] text-white/40">APY</span>
                <strong className="text-[12px] text-[#AFDDFF] font-bold">14.8%</strong>
              </div>
              <div>
                <span className="block text-[10px] text-white/40">LATENCY</span>
                <strong className="text-[12px] text-white font-bold">4.2ms</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE MENU OVERLAY
          ========================================================================= */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="relative w-full h-full flex flex-col pt-24 pb-10 px-6 z-10">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-5 right-5 w-[40px] h-[40px] flex items-center justify-center text-white cursor-pointer"
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          <div className="flex flex-col gap-8 my-auto">
            {[
              { number: '01', label: 'ECOSYSTEM' },
              { number: '02', label: 'LIQUIDITY_POOLS' },
              { number: '03', label: 'VALEUR_INDEX' },
              { number: '04', label: 'GOVERNANCE' },
            ].map((item, i) => (
              <div
                key={item.number}
                onClick={() => { setMobileMenuOpen(false); setTerminalOpen(true); }}
                className="flex items-center gap-3 cursor-pointer"
                style={{ transitionDelay: `${150 + i * 75}ms` }}
              >
                <span className="font-manrope text-[#AFDDFF]/80 text-[14px] leading-none">
                  {item.number}.
                </span>
                <span className="font-display text-white text-[28px] leading-[1.2] tracking-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Pinned Wallet Block */}
          <div className="mt-auto pt-10 border-t border-white/10">
            <div className="flex items-center gap-[10px] mb-3">
              <Wallet className="w-[15px] h-[15px] text-[#AFDDFF]" strokeWidth={1.5} />
              <span className="font-mono text-sm text-white">{connectedWallet}</span>
              <span className="text-[#AFDDFF] text-xs font-bold">[ CONNECTED ]</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-white/50 text-xs">STATUS:</span>
              <span className="bg-[#AFDDFF] text-black text-[10px] font-bold px-[5px] py-[2px] rounded-[3px] uppercase">
                PRIME_MEMBER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE TERMINAL / DEPOSIT MODAL
          ========================================================================= */}
      {terminalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setTerminalOpen(false)}
          />

          <div className="relative bg-[#0c0d10] border border-white/20 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setTerminalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="text-[11px] font-mono font-bold text-[#AFDDFF] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Activity size={14} />
              <span>SOVEREIGN ALLOCATION GATEWAY</span>
            </div>
            <h3 className="font-display text-2xl text-white font-medium mb-2">
              Valeur Private Yield Pool
            </h3>
            <p className="text-xs text-white/50 mb-6 leading-relaxed">
              Allocate capital to automated multi-chain market maker index vaults with instant exit liquidity.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert(`Allocated $${Number(depositAmount).toLocaleString()} into Valeur Index Pool!`)
                setTerminalOpen(false)
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">
                  Connected Account
                </label>
                <div className="flex items-center justify-between bg-white/5 px-4 py-2.5 rounded-lg border border-white/10 text-xs font-mono text-white/90">
                  <span>{connectedWallet}</span>
                  <span className="text-[#AFDDFF] text-[10px] font-bold">VERIFIED TIER-1</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1">
                  Allocation Capital (USDC)
                </label>
                <input
                  type="number"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-2.5 rounded-lg text-sm text-white font-mono focus:border-[#AFDDFF] outline-none"
                />
              </div>

              <div className="p-3 bg-[#AFDDFF]/5 border border-[#AFDDFF]/20 rounded-lg text-xs space-y-1 text-white/80">
                <div className="flex justify-between">
                  <span>Projected Yield:</span>
                  <span className="text-[#AFDDFF] font-mono font-bold">14.8% APY</span>
                </div>
                <div className="flex justify-between">
                  <span>Audit Assurance:</span>
                  <span className="text-white font-mono">Formal Verification (CertiK)</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#AFDDFF] hover:bg-[#c8e8ff] text-black font-bold py-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Authorize Deposit Vector →
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
