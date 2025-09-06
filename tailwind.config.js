/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#030712",
          light: "#d49417",
          yellow: "#facc15",
          orange: "#eba51c",
          transOrange: "rgb(235,165,28, 0.8)",
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
