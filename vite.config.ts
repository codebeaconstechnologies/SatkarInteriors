import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { siteImages } from './vite-plugins/site-images';

export default defineConfig({
  plugins: [react(), siteImages()],
  build: {
    target: 'es2022',
    cssMinify: true,
    reportCompressedSize: false,
  },
  server: {
    port: 5173,
  },
});
