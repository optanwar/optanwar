/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark_gray: "#101010", // pinkish-red
          red: "#ff0008", // pinkish-red
          gray: "#181818", // dar
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        home: "linear-gradient(to right, rgba(18, 18, 18, 0.95), rgba(18, 18, 18, .95)), url('/assets/bg.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
