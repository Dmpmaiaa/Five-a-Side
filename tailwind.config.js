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
        primaryDarkerBlue:'#1E1E1E',
        primaryDarkestBlue: '#020E16',
        offWhite:'#FAFFDC',
        greenButton :'#13AE5C',

      }
    },
  },
  plugins: [],
}