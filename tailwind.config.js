/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/navbar.js",
  ],
  theme: {
    extend: {
      colors: {
        "sandy-beach": "rgba(254,231,202,.7)",
      },
    },
    fontFamily: {
      serif: ["ui-serif", "Georgia", "Times New Roman", "Times", "serif"],
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
};
