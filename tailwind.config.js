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
      keyframes: {
        growShrink: {
          "0%": { transform: "scale(1)", opacity: 0 },
          "50%": { transform: "scale(1.3)", opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        growShrink: "growShrink 1s ease-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
