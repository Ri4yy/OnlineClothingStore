/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./*.{html,js}",
    "./pages/*.{html,js}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {},
    container: {
      padding: {
        DEFAULT: '20px',
      },
    }
  },
  plugins: [],
}
