/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    colors: {
    
      /** CSS DARK THEME PRIMARY COLORS */
      "primary-100": "#520202",
      "primary-200": "#922b1b",
      "primary-300": "#a34734",
      "primary-400": "#b3614e",
      "primary-500": "#c27b69",
      "primary-600": "#d09585",
  
      /** CSS DARK THEME SECONDARY COLORS */
      "secondary-100": "#c78812",
      "secondary-200": "#d09535",
      "secondary-300": "#d8a150",
      "secondary-400": "#dfae69",
      "secondary-500": "#e6bb81",
      "secondary-600": "#ecc99a",
  
      /** CSS DARK THEME SURFACE COLORS */
      "dark-surface-100": "#121212",
      "dark-surface-200": "#282828",
      "dark-surface-300": "#3f3f3f",
      "dark-surface-400": "#575757",
      "dark-surface-500": "#717171",
      "dark-surface-600": "#8b8b8b",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
