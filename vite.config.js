import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio-site/',
  assetsInclude: ['**/*.JPG'],
  plugins: [vue()],
})
