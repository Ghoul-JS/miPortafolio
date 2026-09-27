/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0e27',
          800: '#111633',
          700: '#1a1f3a',
          600: '#252d47',
        },
        blue: {
          primary: '#0066ff',
          secondary: '#00a3ff',
          accent: '#0099ff',
        },
      },
    },
  },
  plugins: [],
};
