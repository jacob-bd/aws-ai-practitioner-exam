/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#1e3a8a',
        'light-blue': '#f0f7ff',
        'orange-500': '#f97316',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

