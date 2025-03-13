/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'], // Ensure index.html is scanned
    theme: {
      extend: {
        backdropBlur: {
          xs: '2px',
          sm: '4px',
          md: '8px',
          lg: '12px',
          xl: '16px',
        },
      },
    },
    plugins: [],
  }