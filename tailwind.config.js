/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-gray': 'rgba(51, 51, 51, 0.8)'
      },
      backgroundImage: {
        'my-backDrop': `linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)`
      }
    },
  },
  plugins: [],
}

