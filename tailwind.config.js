/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0864B7',
        'light-blue': '#F3F9FF',
      },
    },
    fontFamily: {
      TTF: ["TTF", "sans-serif"],
      TTFb: ["TTFb", "sans-serif"],
      TTFr: ["TTFr", "sans-serif"],
      TTFl: ["TTFl", "sans-serif"],
      TTFn: ["TTFn", "sans-serif"],
    },
    skew: {
      5: "5deg",
    },
  },
  plugins: [],
};
