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
      backgroundImage: {
        'hero': "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v349-binn-02-halftonebackground_2.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=c9fd93558517209e7fc9f6aa89dbf192')",

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
