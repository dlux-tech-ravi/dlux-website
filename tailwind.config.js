/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/components/pages/VideoLibrary.js",

    "./src/components/pages/VideoTailwind.css",
    "./src/components/VideoLibrary/*.{html,js}",
     "./src/components/pages/WebinarPage.css",
    "./src/components/Webinar/*.{html,js}",
    "./src/components/contents/Resources/Blogs/Blogs_Detail/Blogs_Detail.js"

  ],

  // content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      screens: {
        '2xl': '2000px', // Custom breakpoint for screen widths >= 2000px
        "tablet": { "min": "768px", "max": "1250px" },
        "desktop": { "min": "1250px" },
      },
       fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // replace default sans with Open Sans
        opensans: ['"Open Sans"', 'sans-serif'], // custom class if you want
      },
    },
  },
  plugins: [],
}
