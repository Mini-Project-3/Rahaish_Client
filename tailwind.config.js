module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        primary: "#064E3B",
        secondary: "#afdeab"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
