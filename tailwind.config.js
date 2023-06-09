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
        darkBlueBtn:"#0E273A",
        contrastOffWhite:'#F4F4F9',
        secondaryGreen:'#13AE5C',
        secondaryRed: '#F34822',
        secondaryYellow: "#FFD500",
        gradientAlpha: "rgba(2,14,12,0.7)"
      },
      backgroundImage : {
          "login-bg" : "url('/images/login2.png')"
      },
      grayscale: {
        75: '75%',
      },
      fontFamily : {
        "rift": ["Rift"],
        "riftItalic":["RiftItalic"],
        "riftRegular":["RiftRegular"],
        "favoritC":["FavoritC"],
        "favoritHeavy":["FavoriteHeavyC"],
        "robotoThin":["Roboto-Thin"],
        "robotoThinItalic":["Roboto-ThinItalic"],
        "robotoRegular":["Roboto-Regular"],
        "robotoBold":["Roboto-Bold"]
        
      }
    },
  },
  darkMode: "class"
    
    
  
}


