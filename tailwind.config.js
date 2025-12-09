module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "swiper-slide",
    "swiper-slide-active",
  ],
  theme: {
    extend: {
      animation: {
        // 🔵 NEW Text slider animations
        slideLeft: "slideLeft 18s linear infinite",
        slideRight: "slideRight 18s linear infinite",

        // 🔥 Keep your slow rotation animation
        spinSlow: "spinSlow 12s linear infinite",
      },

      keyframes: {
        // ▶️ Right → Left Slide
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },

        // ◀️ Left → Right Slide
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },

        // 🔥 Keep your slow rotation
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
