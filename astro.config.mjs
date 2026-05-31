// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',      // Static export — deploy to Cloudflare Pages, no server needed
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
