import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
  // Configure Astro here
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
});
