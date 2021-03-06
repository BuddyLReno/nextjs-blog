const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: 'currentColor',
      gray: colors.coolGray,
      purple: {
        DEFAULT: '#753AD8'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
