import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'pipi-tools',
    target: 'es2020',
    sourcemap: false,
    minify: 'esbuild',
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
    include: ['react', 'react-dom', 'ethers', '@usedapp/core'],
    exclude: ['@nomicfoundation/hardhat-toolbox'],
    force: true
  },
  define: {
    global: 'globalThis',
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    }
  }
})