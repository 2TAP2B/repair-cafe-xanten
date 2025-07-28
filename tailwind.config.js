/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'repair': {
          'burgundy': '#c2004d',
          'olive': '#738a2e', 
          'gray': '#6b7280'
        }
      }
    },
  },
  plugins: [],
  darkMode: ['class', '.darkmode'],
}
