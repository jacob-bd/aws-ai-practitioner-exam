/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          dark: '#8B4000',
          medium: '#A0522D',
          light: '#D2691E',
          bright: '#FF8C00',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

