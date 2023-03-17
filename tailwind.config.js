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
        'glisse': 'glisse 15s infinite ease-in-out',
            
      },

        

      keyframes: {
        glisse: {
          // largeur de reference de base 650px
          '100%': {transform: 'translatex(-3900px)'}
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
