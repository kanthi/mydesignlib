/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.src.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f4f7f5',
          100: '#e5ece7',
          200: '#cedcd2',
          300: '#abc4b4',
          400: '#83a691',
          500: '#608070',
          600: '#4d6958',
          700: '#3d5245',
          800: '#324238',
          900: '#2a372f',
          950: '#151d18',
        },
        ink: {
          900: '#141a17',
          800: '#222925',
          700: '#38423c',
          600: '#525e57',
        }
      }
    },
  },
  plugins: [],
}
