/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    
    extend: {
      colors:{
        "primary": 'FE5D26',
         "secondary": 'B0DB9C',
          "ternary": 'B0DB9C',
     },
     
   },
},
  plugins: [],
  
}

