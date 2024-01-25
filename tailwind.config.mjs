/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
        home: "linear-gradient(to right, rgba(18, 18, 18, 0.92), rgba(18, 18, 18, .92)), url('/assets/bg.svg')",
        tools:
          "linear-gradient(to right, rgba(18, 18, 18, 0.50), rgba(18, 18, 18, .50)), url('/assets/bg-2.svg')",
      },
    },
  },
  plugins: [],
};
