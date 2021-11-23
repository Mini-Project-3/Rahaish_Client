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
        'dash': "url('https://wallpaperaccess.com/full/1966849.jpg')",
        'plot': "url('https://www.wallpapertip.com/wmimgs/49-491881_retro-city-wallpaper-4k.jpg')",
        'flat': "url('https://hdwallpaperim.com/wp-content/uploads/2017/08/23/473369-cityscape-neon-New_Retro_Wave-748x419.jpg')",
        'property': "url('https://cdn4.vectorstock.com/i/1000x1000/80/33/cityscape-retro-style-vector-24198033.jpg')",

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
