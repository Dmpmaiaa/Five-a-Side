/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0C8CE9',
        primaryDarkerBlue:'#1A1F23',
        primaryDarkestBlue: '#020E16',
        contrastOffWhite:'#FAFFDC',
        secondaryGreen:'#13AE5C',
        secondaryRed: '#F34822'
      },
      backgroundImage : {
          "login-bg" : "url('https://images.unsplash.com/photo-1552318965-6e6be7484ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80')"
      },
      grayscale: {
        75: '75%',
      },
      fontFamily : {
        "favorite": ["Rift"]
      }
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
            fontFamily: 'Rift',
            src: url("/src/assets/Fort\ Foundry\ -\ Rift\ Bold\ Italic.otf")
        }
      })
    }),
  ],
}