/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.src.html",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          dark: '#1c040c',
          base: '#260612',
          elevated: '#36091a',
          glow: '#5e0f2b',
        },
        coral: {
          DEFAULT: '#eb4438',
          hover: '#d73328',
          subtle: 'rgba(235, 68, 56, 0.12)',
          glow: 'rgba(235, 68, 56, 0.35)',
        },
        ink: {
          900: '#111827',
          700: '#374151',
          500: '#6b7280',
          300: '#d1d5db',
          100: '#f3f4f6',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
