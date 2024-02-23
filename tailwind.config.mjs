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
        secondary: {
          orchid: "#E879F9", // astro.js
          yellow: "#FACC15", // javaScript
          sky: "#38BDF8", // Tailwind css
          pink: "#FB7185", // TypeScript
          react: "#A78BFA", // React
          web: "#A3E635", // Web design
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
  plugins: [],
};
