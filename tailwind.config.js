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
        sans: ["Raleway", "sans-serif"],  // default body font
        signature: ["Great Vibes", "cursive"], // handwriting logo font
      },
      animation: {
        blob: "blob 8s infinite", // floating orb effect
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};
