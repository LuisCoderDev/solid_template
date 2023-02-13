import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    open: './public/index.html'
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        app: './public/index.html'
      }
    }
  }
});