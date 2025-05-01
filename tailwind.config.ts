const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {  
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
        inter: ['var(--font-inter)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}