/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0c0f10',
        'panel-dark': '#121416',
        'muted': '#9aa3a6',
        'neon': {
          DEFAULT: '#00FF7A',
          light: '#66FFC0',
          dark: '#00C76A'
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Montserrat', 'Inter','sans-serif']
      },
      boxShadow: {
        'neon': '0 8px 30px rgba(0,255,122,0.04)'
      },
      borderRadius: {
        'xl-2':'1.125rem'
      }
    },
  },
  plugins: [],
}

