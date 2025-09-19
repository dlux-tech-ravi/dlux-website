/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '2xl': '2000px', // Custom breakpoint for screen widths >= 2000px
      },
    },
  },
  plugins: [],
}
