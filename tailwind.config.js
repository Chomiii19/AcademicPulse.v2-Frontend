/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#101010',
        pinkish: '#ED6161',
      },
      transitionDuration: {
        1500: '1500ms',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        ptSans: ['PT Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(1686.42% 113.39% at 83.25% 2.56%,rgba(237, 97, 97, 0.1),#bd34fe00)',
      },
      width: {
        custom: '1360px',
      },
      height: {
        custom: '690px',
      },
    },
  },
  plugins: [],
};
