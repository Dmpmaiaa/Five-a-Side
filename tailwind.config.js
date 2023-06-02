/** @type {import('tailwindcss').Config} */
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
        

      }
    },
  },
  plugins: [],
}