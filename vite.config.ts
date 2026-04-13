import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

const buildHash = Date.now().toString(36);

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'sw-cache-bust',
      closeBundle() {
        const swPath = resolve(__dirname, 'dist/sw.js');
        try {
          const fs = require('fs');
          const content = fs.readFileSync(swPath, 'utf-8');
          fs.writeFileSync(swPath, content.replace('seonmun-v1', `seonmun-${buildHash}`));
        } catch { /* sw.js may not exist in dev */ }
      },
    },
  ],
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
