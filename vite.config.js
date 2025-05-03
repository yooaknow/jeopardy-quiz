import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ 핵심 포인트

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
