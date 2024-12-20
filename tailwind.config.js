/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/aceternity-ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* WebKit browserlar uchun */
          "&::-webkit-scrollbar": {
            display: "none",
          },
          /* Standart scrollbars */
          "-ms-overflow-style": "none" /* Internet Explorer */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],
};
