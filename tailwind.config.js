/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'animate': 'animate 15s infinite ease-in-out',
        'carrousel': 'carrousel 15s infinite ease-in-out'
      },

        

      keyframes: {
        animate: {
          // largeur de reference de base 650px          
            '100%': {transform: 'translatex(-600%)'}
        },
        carrousel: {
          '0%, 10%': { transform: 'translatey(0)' },
          '15%, 25%': { transform: 'translatey(-45px)' },
          '30%, 40%': { transform: 'translatey(-90px)' },
          '45%, 55%': { transform: 'translatey(-135px)' },
          '60%, 70%': { transform: 'translatey(-180px)' },
          '75%, 85%': { transform: 'translatey(-225px)' },
          '90%, 100%': { transform: 'translateY(-270px)'}
        },
      },  


      
    },
    screens: {
      // @media (max-width: 2500px) {...}
      '3xl': {'max': '2560px'},
      // @media (max-width: 1440px) {...}
      '2xl': {'max': '1440px'},
      'xl': {'max': '1024px'},
      'lg': {'max': '768px'},
      'md': {'max': '425px'},
      'sm': {'max': '320px'},

    }
  },
  plugins: [],
}
