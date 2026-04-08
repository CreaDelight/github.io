/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1628',
        secondary: '#4A5BFF',
        accent: '#00F5FF',
        dark: '#1A1A1A',
      },
    },
  },
  plugins: [],
}