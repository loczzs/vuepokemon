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
    screens: {
      'mobi': '345px',
      

      '748':{'max': '748px'} ,
      '768':{'max': '768px'} ,
    
      '575':{'max':'575px'},
      
     '992':{'max': '992px'}
     
    },
  },
  plugins: [],
}
