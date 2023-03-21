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
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(18deg)' },
          '20%': { transform: 'rotate(36deg)' },
          '30%': { transform: 'rotate(70deg)' },
          '40%': { transform: 'rotate(100deg)' },
          '50%': { transform: 'rotate(130deg)' },
          '60%': { transform: 'rotate(150deg)' },
          '70%': { transform: 'rotate(190deg)' },
          '80%': { transform: 'rotate(160deg)' },
          '90%': { transform: 'rotate(250deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  
  plugins: [],
};
