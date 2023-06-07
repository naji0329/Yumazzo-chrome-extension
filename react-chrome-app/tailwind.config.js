/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      placeholder: ["focus", "hover"],
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      placeholderOpacity: {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
      },
      fontFamily: {
        "helvetica-neue": ["Helvetica Neue", "sans-serif"],
        // ...
      },
    },
    colors: {
      primary: "#0D1119",
      black: "#000000",
      white: "#ffffff",
      transparent: "transparent",
      label: "#7185AA",
    },
  },
  plugins: [],
};
