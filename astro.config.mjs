import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bigwalkwiki.com",
  vite: {
    plugins: [tailwindcss()]
  }
});
