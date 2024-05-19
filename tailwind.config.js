/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './path/to/your/style.css'],
  theme: {
    extend: {
      colors: {
        "neon-white": "#FAFAFA", // or any other shade you prefer
      },
    },
  },
  plugins: [],
};

