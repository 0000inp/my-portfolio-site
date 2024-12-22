/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        hoverLoop: 'hoverLoop 1.5s ease-in-out infinite',
      },
      keyframes: {
        hoverLoop: {
          '0%': { transform: 'translateX(0) scale(1.1) rotate(6deg)' },
          '50%': { transform: 'translateY(1px) scale(1.1) rotate(6deg)' },
          '100%': { transform: 'translateX(0) scale(1.1) rotate(6deg)' },
        },
      },
    },
  },
  plugins: [],
}

