/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  //Specify the file formats where tailwind shoudl work
  content: ["./src/**/*.{html,js,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
      },
    },
  },
  plugins: [],
}
