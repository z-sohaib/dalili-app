module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'manara': "url('/imgs/manara.png')",
        'mosala': "url('/imgs/mosala.png')",
        'musee': "url('/imgs/musee.png')",
        'salat': "url('/imgs/salat.png')",
        'tajwid': "url('/imgs/tajwid.png')",
        'mohadara': "urm('/imgs/mohadara.png')"
      }
    },
  },
  plugins: [],
}