/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia'],
        timesnewroman: ['Times New Roman'],
      },
    },
  },
  plugins: [],
}

