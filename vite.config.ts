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
        manualChunks: undefined
      }
    }
  },
  plugins: [
    react({
      jsxRuntime: 'automatic'
    })
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['ethers'],
    force: false
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
      usePolling: false
    }
  },
  esbuild: false
})