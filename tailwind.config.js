/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#0f172a',
        secondary: '#FF0000',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}