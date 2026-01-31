import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

/**
 * Vite Configuration
 * - Tailwind CSS v4 mit Vite Plugin
 * - React Router 7 Development Tools
 */
export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
});
