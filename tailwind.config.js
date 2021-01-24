const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: {
        50: "#e6ebee",
        100: "#ccd7dd",
        200: "#b3c4cc",
        300: "#99b0bb",
        400: "#809cab",
        500: "#66889a",
        600: "#4d7489",
        700: "#336178",
        800: "#1a4d67",
        900: "#003956",
      },
    },
    // height: {
    //   height: {
    //     sm: "300px",
    //     md: "600px",
    //   },
    // },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      boxShadow: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
}
