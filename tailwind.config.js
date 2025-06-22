module.exports = {
  darkMode: 'class', // Required for toggling dark mode using a class
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-light': '#fffdd0',
        'background-dark': '#0f172a',
        'text-light': '#1e293b',
        'text-dark': '#f8fafc',
        'accent-light': '#3b82f6',
        'accent-dark': '#0ea5e9',
      },
      fontFamily: {
        signature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
};
