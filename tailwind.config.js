/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        light: {
          text: '#333333',
          background: '#ffffff',
        },
        dark: {
          text: '#f0f0f0',
          background: '#1a1a1a',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
