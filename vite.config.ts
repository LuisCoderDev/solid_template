import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import solidSvg from 'vite-plugin-solid-svg';

export default defineConfig({
  publicDir: './public',
  plugins: [
    solidPlugin(),
    solidSvg({
      defaultAsComponent: true,
      svgo: {
        enabled: false
      }
    })
  ],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
});