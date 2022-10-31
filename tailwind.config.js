/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      },
      animation: {
        'arrow-up-down': 'up-down 5s infinite',
      },
    },
  },
  plugins: [],
}
