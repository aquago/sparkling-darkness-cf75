import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Base path for Cloudflare Pages
  build: {
    outDir: 'dist' // Output directory
  }
});