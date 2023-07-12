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
        'main': '#EA5455'
      },
      backgroundImage: {
        'background-start': "url('../public/images/background.png')",
      },
      fontSize: {
        'some_type-medium-30': '30px',
        'some_type-medium-32': '30px',
        '3xl': ['1.875rem', {
          fontWeight: '500',
        }],
      }
    }
  },
  plugins: [],
}
