import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/gold': {
        target: 'https://www.goodreturns.in/gold-rates/chennai.html',
        changeOrigin: true,
        rewrite: () => ''
      },
      '/api/silver': {
        target: 'https://www.goodreturns.in/silver-rates/chennai.html',
        changeOrigin: true,
        rewrite: () => ''
      }
    }
  }
})
