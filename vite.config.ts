import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // 禁止 HMR 错误覆盖
    },
  },
  base: '/ts/', // 设置基准路径，确保指向 GitHub Pages 子路径
  build: {
    outDir: 'dist', // 构建输出目录
    // 删除 input 配置，让 Vite 默认处理入口文件
  },
});