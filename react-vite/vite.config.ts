import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// vite-env.d.ts
// <reference types="vite/client" />

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "swiper/css"; @import "swiper/css/navigation";`,
      },
    },
  },
});
