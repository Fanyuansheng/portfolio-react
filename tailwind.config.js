/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'site': '#0A0A0A',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 