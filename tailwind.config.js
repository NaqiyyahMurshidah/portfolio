/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,css}"],
  theme: {
    extend: {
      colors: {
        "neon-white": "#FAFAFA", // or any other shade you prefer
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(10%)" },
        },
        moveLeft: {
          "0%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-10%)" },
        },
      },
      animation: {
        moveRight: "moveRight 5s ease-in-out infinite alternate",
        moveLeft: "moveLeft 5s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

