const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      purple: {
        DEFAULT: '#753AD8'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.inline-block-href-http': {
          display: 'inline-block'
        }
      };

      addUtilities(newUtilities);
    })
  ],
}
