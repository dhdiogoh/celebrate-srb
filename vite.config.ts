import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap'))               return 'vendor-gsap'
            if (id.includes('lenis'))              return 'vendor-lenis'
            if (id.includes('react-helmet-async')) return 'vendor-helmet'
            return 'vendor-react'
          }
        },
      },
    },
  },
})
