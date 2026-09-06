/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F7F7F5',
        ink: '#111827',
        violet: '#6D5DFB',
        blue: '#4F8CFF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17,24,39,.08)',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 70% 30%, rgba(109,93,251,.18), transparent 28%), radial-gradient(circle at 82% 58%, rgba(79,140,255,.14), transparent 28%)',
      },
    },
  },
  plugins: [],
}
