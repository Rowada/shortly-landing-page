/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "hsl(180, 66%, 49%)",
        background: "hsl(257, 27%, 26%)",
        secondary: "hsl(0, 87%, 67%)",
        body: "hsl(0, 0%, 75%)",
        accent: "hsl(257, 7%, 63%)",
        text: "hsl(255, 11%, 22%)",
        foreground: "hsl(260, 8%, 14%)",
      },
    },
  },
  plugins: [],
};
