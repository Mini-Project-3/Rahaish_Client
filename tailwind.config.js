module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'greendark': '#064E3B',
        'greenlight':'#afdeab',
        'purple': '#5e23dc',
        'greenHousing': '#1dd38f',
      },
      backgroundColor: theme => ({

        'purple': '#5e23dc',
        'greenlight':'#afdeab',
        'greenHousing': '#1dd38f',

      }),

      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}