/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ksu: {
          black: '#000000',
          gold: '#FFC72C',
          white: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
