/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,svelte}"],
  theme: {
    extend: {
      colors: {
        main: "#945edf",
        health: "#F5171E",
        shield: "#0071FF",
      },
    },
  },
  plugins: [],
};
