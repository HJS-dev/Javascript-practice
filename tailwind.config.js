module.exports = {
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: (theme) => ({
        '1':'1%'
      }),
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
        Oswald: [
          "'Oswald'", 'sans-serif'
        ]

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
