/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        slide: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        slide: 'slide 15s linear infinite alternate'
      }
    },
  },
  plugins: [],
}

