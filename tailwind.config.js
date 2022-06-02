module.exports = {
  content: [
    './components/**/*.{ts,tsx}',
    './global-stores/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './styles/**/*.{ts,tsx}',
    './utils/**/*.{ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
