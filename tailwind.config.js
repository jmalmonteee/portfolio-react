/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ IMPORTANT: enables dark: utilities via <html class="dark">
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        morph: {
          "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
        },
      },
      animation: {
        morph: "morph 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
