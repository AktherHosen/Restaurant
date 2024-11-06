/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b72b1d",
      },
      backgroundColor: {
        primary: "#b72b1d",
      },
    },
  },
  plugins: [require("daisyui")],
};
