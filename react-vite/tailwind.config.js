// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Quét tất cả file js, jsx, ts, tsx trong thư mục src
    "./public/index.html", // Quét file HTML nếu có
  ],
  theme: {
    extend: {
      animation: {
        "zoom-out": "zoomOut 3s ease-in-out infinite",
      },
      keyframes: {
        zoomOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
