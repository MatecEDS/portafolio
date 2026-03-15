import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  server: {
    watch: {
      usePolling: false
    },
    host: true,
    port: 2211,
    allowedHosts: ["www.rptr.tech", "rptr.tech", "127.0.0.1"],
  },
});