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
        "sandy-beach": "#fee7ca",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
};
