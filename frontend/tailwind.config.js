const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
        white: colors.white,
        'firstColor': '#ff324d',
        'SecondColor': 'blue',
      },
    },
  },
  plugins: [],
};
