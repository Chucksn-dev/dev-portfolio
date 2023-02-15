/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        itim: ["Itim", "cursive"],
        prosto: ["'Prosto One'", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        robotoMono: ["'Roboto Mono'", "monospace"],
        ubuntu: ["Ubuntu", "sans-serif"],
        unbounded: ["Unbounded", "cursive"],
      },

      textShadow: { "text-shadow-1": "0 0 2px  rgb(234, 179, 8)" }, //yellow glow

      animation: {
        "spin-slow": "spin 2s linear infinite",
      },

      minHeight: (theme) => ({
        ...theme("spacing"),
      }),

      maxWidth: (theme) => ({
        ...theme("spacing"),
      }),
    },
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
