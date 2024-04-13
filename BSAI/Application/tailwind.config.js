module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        gray: { 50: "#faf9f9", 300: "#e5e6e4" },
        black: { 900: "#0a0908", "900_a3": "#0a0908a3" },
        teal: { 600: "#248277" },
      },
      boxShadow: { xs: "0px 4px 6px -2px #000000" },
      fontFamily: { opensans: "Open Sans", roboto: "Roboto" },
      opacity: { 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
