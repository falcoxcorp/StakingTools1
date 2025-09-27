import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'pipi-tools',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          web3: ['ethers', '@usedapp/core']
        }
      }
    }
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['lightweight-charts', 'react', 'react-dom']
  },
  define: {
    global: 'globalThis',
  },
  server: {
    port: 3000,
    open: true
  }
})

