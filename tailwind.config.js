/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      colors: {
        'primary': '#333333',
        'secondary': '#666666',
        'accent': '#007bff',
        'background': '#ffffff',
        'card-bg': '#ffffff',
        'text-gray': '#666666',
        'text-dark': '#333333',
        'border': '#e9ecef'
      },
      animation: {
        'wave': 'wave 2.5s infinite',
      },
      keyframes: {
        wave: {
          '0%, 20%, 100%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '30%': { transform: 'rotate(-8deg)' },
          '40%': { transform: 'rotate(14deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(10deg)' },
        }
      }
    },
  },
  plugins: [],
}
