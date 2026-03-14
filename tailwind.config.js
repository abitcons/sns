/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Ensures TailwindCSS scans your files for utility classes
  theme: {
    extend: {
      colors: {
        primary: '#36a0d0',  // Branding colors
        secondary: '#5bb6bb',
        accent: '#6ec6ab',
      },
      fontFamily: {
        sans: ['Neue Haas Grotesk Display', 'Frutiger LT Arabic', 'sans-serif'], // Match HTML
      },
      animation: {
        'fade-in-out': 'fade-in-out 1s ease-in-out both', // TextSlider animation
        'wave': 'wave 8s linear infinite', // Existing wave animation
      },
      keyframes: {
        'fade-in-out': { // Keyframes for fade animation
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        wave: { // Keyframes for wave animation
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      spacing: {
        'icon-lg': '80px', // Custom spacing for larger icons
        'icon-md': '64px', // Custom spacing for medium icons
      },
    },
  },
  plugins: [],
};
