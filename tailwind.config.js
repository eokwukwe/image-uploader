module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        84: '22rem',
        98: '28rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
