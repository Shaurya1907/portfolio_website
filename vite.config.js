import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    dedupe: ['three', 'react', 'react-dom'],
  },

  optimizeDeps: {
    // Let Vite pre-bundle react-globe.gl and all its CJS deps normally
    include: ['react-globe.gl'],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-three':  ['three', '@react-three/fiber', '@react-three/drei', 'maath'],
          'vendor-globe':  ['react-globe.gl'],
          'vendor-gsap':   ['gsap', '@gsap/react'],
          'vendor-phaser': ['phaser'],
          'vendor-misc':   ['@emailjs/browser', 'react-responsive', 'webfontloader'],
        },
      },
    },
  },
})