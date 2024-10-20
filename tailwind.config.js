/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#0981C3',
        'tauple-100': "#333333",
        'tauple-200': "#3B3B3C",
        'tauple-300': "#2D2D2D",
      }
    },
  },
  plugins: [],
};
