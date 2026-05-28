const path = require("path");
const sourceRoot = path.resolve(__dirname, "../../packages/source");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    path.join(sourceRoot, "app/**/*.{js,jsx,ts,tsx}"),
    path.join(sourceRoot, "components/**/*.{js,jsx,ts,tsx}"),
    path.join(sourceRoot, "hooks/**/*.{js,jsx,ts,tsx}"),
    path.join(sourceRoot, "layouts/**/*.{js,jsx,ts,tsx}"),
  ],
  presets: [require("nativewind/preset")],
  plugins: [],
  theme: {},
};
