module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#064E3B",
        secondary: "#afdeab"
      },
      textColor: {
        yellow: {
          DEFAULT: '#b69100',
        }
      },
      backgroundColor: theme => ({
        'forgot': '#A629C2',
        'forgotI': '#A32EFF',
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
      variants: {
        extend: {},
      },
      plugins: [],
    }
  }
}
