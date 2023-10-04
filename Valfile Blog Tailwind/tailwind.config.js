/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#dad8f8",
          200: "#b6b1f1",
          300: "#918be9",
          400: "#6d64e2",
          500: "#483ddb",
          600: "#3a31af",
          700: "#2b2583",
          800: "#1d1858",
          900: "#0e0c2c",
        },
        grey4: "#333333",
        grey3: "#515659",
        grey2: "#8D8D8D",
        grey1: "#DFDFDF",
        offwhite: "#FBFBFB",
        white: "#FDFDFD",
        lightpurple: "#E8E7F7",
        purple: "#483DDB",
        darkpurple: "#2C098E",
        blue: "#007BFF",
        green: "#26A042",
        red: "#EB061C",
        lightblue: "#DFEEFF",
        secondarytextgrey: "#717171",
        darkgreen: " #087838",
        darkred: "#B50012",
      },

      screens: {
        "2xl": "2000px",
      },

      boxShadow: {
        normal: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
        hovered: "0px 0px 25px 0px rgba(0, 0, 0, 0.17)",
      },

      fontFamily: {
        open: ["Open Sans"],
        rale: ["Raleway"],
      },
    },
  },
  plugins: [],
};
