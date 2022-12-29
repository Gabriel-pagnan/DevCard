/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "bg": "#111927",
        "bgcard": '#b3009a'
      },
      "fontSize": {
        "3x1": '30px'
      }
    },
  },
  plugins: [],
}
