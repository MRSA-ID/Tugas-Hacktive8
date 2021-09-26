module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.5), rgba(0,0,0,0.9)), url('https://assets.nflxext.com/ffe/siteui/vlv3/5a27cb25-33a9-4bcc-b441-95fefabcbd37/1001c11d-58cb-4e1a-b8f7-abc9b12c2cca/ID-en-20210823-popsignuptwoweeks-perspective_alpha_website_small.jpg')"
      },
      zIndex:{
        '-10':'-10'
      },
      colors:{
        gray:{
          550:'#303030'
        },
        red:{
          650:'#e50914'
        }
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
