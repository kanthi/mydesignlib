import React, { useState, useEffect } from 'react'
import { ArrowRight, ArrowDown, ChevronUp, Info, X } from 'lucide-react'
import { useVideoScrub } from './useVideoScrub'

const DARK = '#1D3045'
const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260821_114821_a8ca298f-be2c-4613-a4dd-51b69e16bbde.mp4'

const NAV_LINKS = [
  { name: 'VECTRUS ENERGY', active: true },
  { name: 'VECTRUS UPSTREAM', active: false },
  { name: 'VECTRUS MARKETS', active: false },
  { name: 'VECTRUS SYSTEMS', active: false },
  { name: 'VECTRUS+', active: false },
]

export default function App() {
  const {
    containerRef,
    videoRef,
    canvasRef,
    scrollProgress,
    canvasLive,
  } = useVideoScrub(VIDEO_URL)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navEntered, setNavEntered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setNavEntered(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const p = scrollProgress
  const isLight = p > 0.55
  const navColor = isLight ? '#ffffff' : DARK

  // Sequential Section Opacities
  // s1Opacity: p < 0.20 -> 1, else -> max(0, 1 - (p - 0.20) / 0.08)
  const s1Opacity = p < 0.20 ? 1 : Math.max(0, 1 - (p - 0.20) / 0.08)

  // s2Opacity: p < 0.32 -> 0, p < 0.40 -> (p - 0.32) / 0.08, p < 0.55 -> 1, else -> max(0, 1 - (p - 0.55) / 0.08)
  const s2Opacity =
    p < 0.32
      ? 0
      : p < 0.40
      ? (p - 0.32) / 0.08
      : p < 0.55
      ? 1
      : Math.max(0, 1 - (p - 0.55) / 0.08)

  // s3Opacity: p < 0.67 -> 0, p < 0.75 -> (p - 0.67) / 0.08, else -> 1
  const s3Opacity = p < 0.67 ? 0 : p < 0.75 ? (p - 0.67) / 0.08 : 1

  const s1Visible = s1Opacity > 0.3
  const s2Visible = s2Opacity > 0.3
  const s3Visible = s3Opacity > 0.3

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Inner sticky scene: full-viewport, overflow hidden */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* 1) <video> full cover */}
        <video
          ref={videoRef}
          src={VIDEO_URL}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        />

        {/* 2) <canvas width=1920 height=1080> absolute inset-0 object-cover */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-300 ${
            canvasLive ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* 3) Overlay absolute inset-0 pointer-events-none containing Navbar + 3 sequential sections */}
        <div className="absolute inset-0 pointer-events-none">
          {/* NAVBAR */}
          <nav
            className="absolute top-0 left-0 right-0 z-50 pointer-events-auto px-6 sm:px-8 md:px-12 pt-8 sm:pt-12 pb-6 flex items-center justify-between transition-colors duration-500"
            style={{ color: navColor }}
          >
            {/* Desktop lg+: left cluster of 5 links */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((link, i) => (
                <a
                  key={link.name}
                  href="#"
                  className={`relative text-xs tracking-[0.15em] uppercase font-medium transition-opacity hover:opacity-70 ${
                    navEntered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
                  }`}
                  style={{
                    transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: `${i * 80 + 100}ms`,
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  {link.name}
                  {link.active && (
                    <span
                      className="absolute left-0 right-0 -bottom-3 h-[2px] w-full transition-colors duration-500"
                      style={{ backgroundColor: navColor }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Mobile <lg: hamburger left, 3 bars */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="flex flex-col justify-center cursor-pointer p-1"
                aria-label="Open mobile menu"
              >
                <span
                  className="block h-[2px] w-[24px] mb-[5px] transition-colors duration-500"
                  style={{ backgroundColor: navColor }}
                />
                <span
                  className="block h-[2px] w-[24px] mb-[5px] transition-colors duration-500"
                  style={{ backgroundColor: navColor }}
                />
                <span
                  className="block h-[2px] w-[16px] transition-colors duration-500"
                  style={{ backgroundColor: navColor }}
                />
              </button>
            </div>

            {/* Right cluster (hidden below sm) */}
            <div
              className={`hidden sm:flex items-center gap-6 ${
                navEntered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
              }`}
              style={{
                transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '500ms',
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs tracking-[0.2em] uppercase font-medium">NEWS</span>
                <div
                  className="w-[20px] h-[20px] rounded-full flex items-center justify-center transition-colors duration-500"
                  style={{ backgroundColor: navColor }}
                >
                  <Info
                    size={10}
                    style={{ color: isLight ? DARK : '#ffffff' }}
                    className="transition-colors duration-500"
                  />
                </div>
              </div>

              {/* MENU label: lg+: span, below lg: button that opens overlay */}
              <span className="hidden lg:inline text-xs tracking-[0.2em] uppercase font-medium">
                MENU
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden inline text-xs tracking-[0.2em] uppercase font-medium cursor-pointer"
              >
                MENU
              </button>
            </div>
          </nav>

          {/* =========================================================================
              SECTION 1 (Hero, left aligned, vertically centered)
              ========================================================================= */}
          <div
            className="absolute inset-0 flex items-center px-6 sm:px-8 md:px-20 lg:px-32 pointer-events-none"
            style={{
              opacity: s1Opacity,
              transition: 'opacity 0.1s ease-out',
            }}
          >
            <div className="max-w-4xl text-left">
              <h1
                className="font-light uppercase leading-[1.2]"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 5rem)',
                  color: DARK,
                  opacity: s1Visible ? 1 : 0,
                  transform: s1Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '0ms',
                }}
              >
                Advancing resources for a cleaner future
              </h1>
              <p
                className="mt-6 text-sm tracking-[0.3em] uppercase"
                style={{
                  color: 'rgba(29, 48, 69, 0.9)',
                  opacity: s1Visible ? 1 : 0,
                  transform: s1Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '150ms',
                }}
              >
                Sustainable power with purpose
              </p>
            </div>

            {/* Bottom-right button */}
            <div
              className="absolute bottom-12 right-6 sm:right-8 md:right-12 pointer-events-auto"
              style={{
                opacity: s1Visible ? 1 : 0,
                transform: s1Visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '300ms',
              }}
            >
              <button
                type="button"
                className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-70"
                style={{
                  border: `1px solid rgba(29, 48, 69, 0.5)`,
                  color: DARK,
                }}
                aria-label="Next slide"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* =========================================================================
              SECTION 2 (Center aligned)
              ========================================================================= */}
          <div
            className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 pointer-events-none"
            style={{
              opacity: s2Opacity,
              transition: 'opacity 0.1s ease-out',
            }}
          >
            <div className="max-w-[900px] text-center">
              <h2
                className="font-extralight tracking-wide leading-[1.3] uppercase"
                style={{
                  fontSize: 'clamp(1.5rem, 4.5vw, 4.5rem)',
                  color: DARK,
                  opacity: s2Visible ? 1 : 0,
                  transform: s2Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '0ms',
                }}
              >
                We build lasting partnerships with vision{' '}
                <span style={{ color: 'rgba(29, 48, 69, 0.8)' }}>and precision</span>{' '}
                <span style={{ color: 'rgba(29, 48, 69, 0.5)' }}>across every frontier</span>
              </h2>
            </div>

            {/* Right column */}
            <div
              className="absolute bottom-16 right-6 sm:right-8 md:right-12 pointer-events-auto flex flex-col items-center gap-4"
            >
              <button
                type="button"
                className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-opacity hover:opacity-70"
                style={{
                  border: `1px solid rgba(29, 48, 69, 0.4)`,
                  color: DARK,
                  opacity: s2Visible ? 1 : 0,
                  transform: s2Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '200ms',
                }}
                aria-label="Scroll down"
              >
                <ArrowDown size={18} />
              </button>

              {/* Three dots */}
              <div
                className="flex flex-col items-center gap-2 mt-4"
                style={{
                  opacity: s2Visible ? 1 : 0,
                  transform: s2Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '350ms',
                }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: DARK }} />
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(29, 48, 69, 0.4)' }} />
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(29, 48, 69, 0.4)' }} />
              </div>

              {/* Chevron Up */}
              <button
                type="button"
                className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer mt-2 transition-opacity hover:opacity-70"
                style={{
                  border: `1px solid rgba(29, 48, 69, 0.3)`,
                  color: 'rgba(29, 48, 69, 0.8)',
                  opacity: s2Visible ? 1 : 0,
                  transform: s2Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '500ms',
                }}
                aria-label="Back to top"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <ChevronUp size={16} />
              </button>
            </div>
          </div>

          {/* =========================================================================
              SECTION 3 (Right aligned, white type — video is dark here)
              ========================================================================= */}
          <div
            className="absolute inset-0 flex items-center justify-end px-6 sm:px-8 md:px-20 lg:px-32 pointer-events-none"
            style={{
              opacity: s3Opacity,
              transition: 'opacity 0.1s ease-out',
            }}
          >
            <div className="max-w-2xl text-left">
              <p
                className="text-white/60 text-lg tracking-wide mb-4"
                style={{
                  opacity: s3Visible ? 1 : 0,
                  transform: s3Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '0ms',
                }}
              >
                Halder | Nordvik
              </p>
              <h2
                className="font-light text-white leading-[1.2] uppercase tracking-wide mb-8"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 4rem)',
                  opacity: s3Visible ? 1 : 0,
                  transform: s3Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '150ms',
                }}
              >
                Fueling ambition,<br />shaping tomorrow.
              </h2>

              <div
                className="flex items-center gap-4 pointer-events-auto"
                style={{
                  opacity: s3Visible ? 1 : 0,
                  transform: s3Visible ? 'translateY(0)' : 'translateY(24px)',
                  transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                  transitionDelay: '300ms',
                }}
              >
                <span className="text-sm tracking-[0.3em] text-white/80 uppercase">
                  Contact Nordvik
                </span>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer text-gray-800 transition-transform duration-300 hover:scale-110"
                  aria-label="Contact Nordvik"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE MENU OVERLAY
          ========================================================================= */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 visible pointer-events-auto'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{
          backgroundColor: DARK,
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className={`w-full h-full flex flex-col justify-between transition-transform duration-500 ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-8'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {/* Close button top-right */}
          <div className="flex justify-end px-6 sm:px-8 pt-8 sm:pt-12">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white transition-colors hover:border-white cursor-pointer"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links centered vertically */}
          <div className="flex flex-col items-center justify-center my-auto px-8 sm:px-12">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                }}
                className={`py-3 text-2xl sm:text-3xl font-light tracking-wide uppercase transition-all duration-500 ${
                  link.active ? 'text-white' : 'text-white/60 hover:text-white'
                } ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Footer: NEWS and CONTACT */}
          <div className="flex justify-between items-center text-xs tracking-[0.2em] uppercase text-white/60 px-8 sm:px-12 pb-10">
            <span>NEWS</span>
            <span>CONTACT</span>
          </div>
        </div>
      </div>
    </div>
  )
}
