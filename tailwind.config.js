const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Causten', ...defaultTheme.fontFamily.sans],

      },
  
      screens: {
        '2xl': '1537px',
      }
    },
  },
  plugins: [],
}
