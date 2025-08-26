/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#181A21",
          light: "#d49417",
          yellow: "#facc15",
          orange: "#eba51c",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
