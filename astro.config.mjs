import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
site: "https://example.com";

// https://astro.build/config
export default defineConfig({
  integrations: [preact()]
});