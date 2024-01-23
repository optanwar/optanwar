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
        // home: "url('/bg-images/home_bg_img_main.svg')",
      },
    },
  },
  plugins: [],
};
