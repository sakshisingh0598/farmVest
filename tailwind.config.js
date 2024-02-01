/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        agrivest: { DEFAULT: '#2d9f86', 100: '#d2f5e8' },
        sunflower: {
          DEFAULT: '#ffda79',
          100: '##fff0c6'
        },
        zinc: "#fafafa"

      }
    }
  },
  plugins: [],
}

