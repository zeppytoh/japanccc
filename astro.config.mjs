import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import icon from "astro-icon";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // Configure Astro here
  site: "https://japanccc.netlify.app",
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        ph: ["*"], // all Phosphor icons
      },
    }),
  ],
});
