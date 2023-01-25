/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // default breakpoints but with 40px removed
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
        },
      },
    },
  },
  plugins: [],
};
