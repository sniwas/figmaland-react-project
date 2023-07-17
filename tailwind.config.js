/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '90': '90px',
      },
      boxShadow: {
        'custom-shadow': '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}