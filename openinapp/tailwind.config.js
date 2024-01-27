/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#645cfc',
      },
      textColor: {
        'primary': '#645cfc',
      },
      fontFamily: {
        sans: ['"Montserrat"']
      }
    },
  },
  plugins: [],
}

