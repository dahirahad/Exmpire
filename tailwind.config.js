/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        empire: {
          navy: '#061A33',
          navyDark: '#030E1D',
          deepBlue: '#17243A',
          cardDark: '#0C2242',
          gold: '#F5A000',
          goldHover: '#DF9100',
          goldLight: '#FFF5DF',
          goldSoft: '#FEF9EC',
          lightGrey: '#F4F6F9',
          border: '#E2E7EF',
          borderDark: '#1E3658',
          textDark: '#102033',
          textMuted: '#687386',
          textPale: '#B9C7DA',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-light': '0 4px 20px -2px rgba(6, 26, 51, 0.05), 0 2px 6px -1px rgba(6, 26, 51, 0.03)',
        'card-dark': '0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(226, 231, 239, 0.08)',
        'gold-glow': '0 4px 20px 0 rgba(245, 160, 0, 0.28)',
      },
    },
  },
  plugins: [],
}
