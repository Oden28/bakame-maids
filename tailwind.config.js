/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      green: "#568564",
      yellow: "#FDC709",
      gray: "#E3E2E2",
      "gray-light": "#EEEEEE",
      "gray-dark": "#B7B7B7",
      white: "#FFFFFF",
      black: "#000000",
      blue: "2D4059",
    },
    fontFamily: {
      display: ["Poppins"],
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
