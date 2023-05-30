/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Noto Sans JP"', 'sans-serif'],
      'display': ['Orbitron', 'sans-serif'],
    },
    extend: {
      colors: {
        'main-bg': '#1a1a1a',
        'ares-red': '#e60013'
      },
      keyframes: {
        'up-down': {
          '0%': { transform: 'translateY(0)', opacity: 0.4 },
          '45%': { transform: 'translateY(-40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 0.4 },
        },
        'emerge1': {
          '0%': { opacity: 0 },
          '20%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'emerge2': {
          '0%': { opacity: 0 },
          '60%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'emerge3': {
          '0%': { opacity: 0 },
          '80%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
      },
      animation: {
        'arrow-up-down': 'up-down 5s infinite',
        'fade-in': 'fade-in 1s ease-in',
      },
    },
  },
  plugins: [],
}
