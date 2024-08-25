/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: "Inter, Oswald, ui-serif", // Adds a new `font-display` class
      },
    },
    colors: {
      black: "#27292D",
    },
  },
  plugins: [],
};
