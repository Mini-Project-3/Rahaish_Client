module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5B21B6",
        secondary: "#A78BFA"
      },
      textColor: {
        yellow: {
          DEFAULT: '#b69100',
          'greendark': '#064E3B',
          'greenlight': '#afdeab',
          'purple': '#5e23dc',
          'greenHousing': '#1dd38f',
        },
      },
      backgroundImage: {
        'wel': "url('https://cdnb.artstation.com/p/assets/images/images/019/645/951/medium/jonas-barasch-cityscape-1500x750.jpg?1564419739')",
        'dash': "url('https://wallpaperaccess.com/full/153056.jpg')",
        'plot': "url('https://wallpapercave.com/wp/wp2686720.jpg')",
        'flat': "url('https://wallpaperaccess.com/full/153064.jpg')",
        'property': "url('https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max')",

      },
      backgroundColor: theme => ({
        'forgot': '#A629C2',
        'forgotI': '#A32EFF',
        'purple': '#5e23dc',
        'greenlight': '#afdeab',
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
      variants: {
        extend: {},
      },
      plugins: [],
    }
  }
}
