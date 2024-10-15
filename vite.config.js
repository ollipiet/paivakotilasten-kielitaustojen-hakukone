import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/paivakotilasten-kielitaustojen-hakukone/',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['wa-card'].includes(tag), // You can define custom elements here
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})