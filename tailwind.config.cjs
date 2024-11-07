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
      fontFamily: {
        raleway: "'Raleway', sans-serif",
        inter: "'Inter', sans-serif",
        poppins: "'Poppins', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        roboto: "'Roboto', sans-serif",
        bebas: "'Bebas Neue', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
