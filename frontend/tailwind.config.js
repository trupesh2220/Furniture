const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: colors.white,
      'firstColor': '#ff324d',
      'SecondColor': 'blue',
    },
    extend: {},
  },
  plugins: [],
};
