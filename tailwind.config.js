/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 0 1px rgba(125, 211, 252, 0.15), 0 30px 80px rgba(0, 0, 0, 0.45)',
      },
      colors: {
        ink: {
          950: '#020817',
          900: '#07111d',
          800: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.25), transparent 0 26%), radial-gradient(circle at 80% 15%, rgba(74, 222, 128, 0.16), transparent 0 22%), linear-gradient(180deg, rgba(2, 8, 23, 0.95), rgba(15, 23, 42, 0.95))',
      },
    },
  },
  plugins: [],
};
