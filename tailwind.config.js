/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      TTF: ["TTF", "sans-serif"],
      TTFb: ["TTFb", "sans-serif"],
      TTFr: ["TTFr", "sans-serif"],
    },
    skew: {
      '5': '5deg',
    }
  },
  plugins: [],
}