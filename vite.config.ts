import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  base: '/ts/', // 設定基礎路徑
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/public/index.html',
    },
  },
});

