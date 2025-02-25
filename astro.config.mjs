import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Configure Astro here
  site: "https://japanccc.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
