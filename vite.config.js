import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    dedupe: ['three', 'react', 'react-dom'],
  },

  optimizeDeps: {
    // Pre-bundle react-globe.gl and its dependencies
    include: ['react-globe.gl'],
  },

  build: {
    sourcemap: false,
  },
})