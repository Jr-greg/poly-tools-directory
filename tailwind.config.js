/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0118',
        foreground: 'hsl(280, 20%, 98%)',
        card: '#1a0f2e',
        'card-foreground': 'hsl(280, 20%, 98%)',
        primary: '#c026d3',
        'primary-foreground': '#ffffff',
        secondary: 'hsl(280, 40%, 15%)',
        muted: 'hsl(280, 15%, 65%)',
        'muted-foreground': 'hsl(280, 15%, 65%)',
        accent: 'hsl(280, 40%, 18%)',
        border: 'hsl(280, 35%, 20%)',
        'border-subtle': 'hsl(280, 30%, 18%)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
