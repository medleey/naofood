module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2f2e41',
        secondary: '#f8781f'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
