import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'pipi-tools',
    target: 'esnext',
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
    force: true,
    esbuildOptions: {
      target: 'esnext',
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
    logOverride: { 
      'this-is-undefined-in-esm': 'silent',
      'direct-eval': 'silent'
    },
    target: 'esnext',
    keepNames: true,
    minifyIdentifiers: false,
    minifySyntax: true,
    minifyWhitespace: true
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    hmr: {
      overlay: false,
      port: 3001
    },
    watch: {
      usePolling: true,
      interval: 1000
    }
  },
  worker: {
    format: 'es'
  }
})