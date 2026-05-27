/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vortex: {
          black: '#0A0A0A',
          white: '#F5F5F5',
          red: '#C8102E',
          'red-hover': '#A00D25',
          muted: '#9CA3AF',
          card: '#141414',
          border: '#262626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'check-pop': 'checkPop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        pulseCTA: 'pulseCTA 2s ease-in-out infinite',
        rocket: 'rocket 2.2s ease-in-out infinite',
      },
      keyframes: {
        checkPop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseCTA: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200, 16, 46, 0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(200, 16, 46, 0)' },
        },
        rocket: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};
