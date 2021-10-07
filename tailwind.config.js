module.exports = {
  node:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderColor: ['active','hover','focus'],
      borderWidth:['active','hover','focus']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
