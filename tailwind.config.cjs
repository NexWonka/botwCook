/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(42,48,60, 100)), url('/bg.gif')",
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: 'dark'
  }
}
