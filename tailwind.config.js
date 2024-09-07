module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'secondary': '#2c3e50',
        'light-bg': '#f5f7fa',
      },
      boxShadow: {
        'custom-light': '0 4px 8px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 8px 16px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'marker': ['Permanent Marker', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        'custom': '15px',
      },
    },
  },
  plugins: [],
}
