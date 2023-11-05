/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-85': 'rgba(0, 0, 0, 0.85)',
      },
    },
    fontFamily: {
      belwe: ['Belwe', 'sans-serif']
    },
    colors: {
      'yellow-gold': '#FFE164',
      'beige': '#FBDFB2',
      'lighter-black': '#18160A',
      'darker-beige': '#C9B38E'
    },
  },
  plugins: [],
  
}

