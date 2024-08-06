/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:["Playwrite IT Moderna"],
        custom2:["Montserrat"],
        custom3:["Playwrite NO"],
        custom4:["Playwrite NG Modern"],
        custom5:["Rubik"]
      },
    },
  },
  plugins: [],
}

