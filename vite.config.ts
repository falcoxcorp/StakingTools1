import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'pipi-tools',
    target: 'es2020',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          web3: ['ethers', '@usedapp/core']
        }
      }
    },
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false
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
      target: 'es2020',
      supported: {
        bigint: true
      }
    }
  },
  define: {
    global: 'globalThis',
    'process.env': {}
  },
  esbuild: {
    target: 'es2020',
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  },
  server: {
    port: 3000,
    open: false,
    host: true,
    hmr: false,
    watch: {
      usePolling: false,
      interval: 1000
    }
  },
  worker: {
    format: 'es'
  }
})