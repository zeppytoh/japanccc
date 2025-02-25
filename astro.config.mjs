import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  // Configure Astro here
  site: "https://japanccc.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});
