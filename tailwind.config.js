/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "netflix": "#e50914",
        'myGray': 'rgba(51, 51, 51, 0.8)',
        'myDarkGray': '#333333',
        'myLightGray': '#b3b3b3',
        "myBlack": "rgba(0, 0, 0, 0.6)",
        "myDarkBlack": "rgba(0, 0, 0, 0.7)",
        "myLightBlack": "rgba(0, 0, 0, 0.4)",
        "error": "#e87c03",
      },
      backgroundImage: {
        'my-backDrop': `linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)`
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

