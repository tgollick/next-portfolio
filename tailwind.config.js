/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F7F7",
        maincolor: "#54BC73",
        lightmain: "#49A96A",
        darkmain: "#3B9C64",
        darkbackground: "#081b1b",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
