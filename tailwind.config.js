/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: { 
        ptsans: ['PT Sans'],
        ptSansCaption: ['PT Sans Caption']
       }, 
    },
  },
  plugins: [],
}

