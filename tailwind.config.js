// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{html,js}'], // Specify your content paths
  theme: {
    extend: {
      fontSize: {
        xxs: '10px', // Extend or add custom font sizes
      },
      colors: {
        // Extend or customize colors
        DEFAULT: '#4CAF50', // Default text color
        // customFocus: '#4CAF50', // Custom focus color for inputs
        focusBorder: '#d3d3d3', // Custom focus border color (green)
      },
      ringColor: {
        // DEFAULT: '#4CAF50', // Default ring color for focus styles
        // custom: '#4CAF50', // Custom ring color for specific styles
      },
      // outline: {
      //   custom: ['2px solid #4CAF50', '1px'], // Custom outline style (not used here)
      // },
    },
  },
  plugins: [],
};
