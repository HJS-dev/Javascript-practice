module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: ['0.50rem', { lineHeight: '1rem' }],
      },
      fontFamily:{
        Josefin: [
          "'Josefin Sans'",
          'sans-serif',
        ],
        Righteous: [
          "'Righteous'",
          
        ],

},
      borderWidth: {
        1:'0.5px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
