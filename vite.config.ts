import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'pipi-tools',
    target: 'es2015',
    sourcemap: false,
    minify: false,
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
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: []
      }
    })
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'ethers', '@usedapp/core'],
    exclude: [],
    force: false,
    esbuildOptions: {
      target: 'es2015'
    }
  },
  define: {
    global: 'globalThis',
    'process.env': {}
  },
  server: {
    port: 3000,
    open: false,
    host: true,
    hmr: false,
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  worker: {
    format: 'es'
  }
})