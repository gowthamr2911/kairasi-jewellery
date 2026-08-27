/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-maroon': {
          DEFAULT: '#3B0A11',
          dark: '#230509',
        },
        'warm-gold': {
          DEFAULT: '#D4AF37',
          dark: '#C5A059',
          light: '#F3E5AB',
        },
        'cream': '#FAF8F5'
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
