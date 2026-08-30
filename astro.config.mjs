import { defineConfig } from 'astro/config';

// Minimal config for now — this is a fully static build, same as what
// GitHub Pages was serving. We'll add the Cloudflare adapter in a later
// phase, once we introduce server-rendered pages backed by D1.
export default defineConfig({
  site: 'https://mesejovilag.hu',
});
