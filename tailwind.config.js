/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: 'var(--text-color)',
        border: 'var(--border)',
        background: 'var(--bg-color)',
        secondary: 'var(--secondary)',
        hover: 'var(--hover)',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}