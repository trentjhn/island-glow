import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import WindiCSS from "vite-plugin-windicss"; // ✅ Import WindiCSS

export default defineConfig({
  plugins: [react(), WindiCSS()], // ✅ Add WindiCSS as a plugin
});