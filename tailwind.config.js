/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'moon_mist': '#E4DCCF',
        'red-primary': '#150506',
        'main': '#EA5455',
        'about': '#14121C',
        'comment': '#002B5B',
        'green': '#4CA887',
        'orange': '#FFA500'
      },
      backgroundImage: {
        'background-start': "url('../public/images/background.png')",
      },
      fontFamily: {
        'stm': ['Sometype Mono', 'monospace'],
        'ls': ['League Spartan', 'sans-serif']
      },
      fontSize: {
        '16': '1rem',
        '18': '1.125rem',
        '20': '1.25rem',
        '22': '1.375rem',
        '24': '1.5rem',
        '26': '1.625rem',
        '28': '1.75rem',
        '30': '1.875rem',
        '32': '2rem',
        '34': '2.125rem',
        '36': '2.25rem',
        '38': '2.375rem',
        '40': '2.5rem',
        '42': '2.625rem',
        '44': '2.75rem',
        '46': '2.875rem',
        '48': '3rem',
        '50': '3.125rem',
      }
    }
  },
  plugins: [],
}
