module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0F172A',      // Deep blue-black
        primary: '#1E293B',     // Rich navy
        secondary: '#334155',   // Steel blue
        accent: '#3B82F6',      // Vibrant blue
        'accent-light': '#60A5FA', // Lighter blue for hover states
        'dark-text': '#E2E8F0',  // Light gray for main text
        'dark-text-muted': '#94A3B8', // Muted text
        'card-bg': '#1E293B',   // Card background
        'hover-bg': '#2D3B4F',  // Hover state background
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to right bottom, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.9))',
      },
    },
  },
  plugins: [],
} 
