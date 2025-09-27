import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import replace from '@rollup/plugin-replace'

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
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true
    }),
    react()
  ],
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['ethers'],
    force: false,
    esbuildOptions: {
      target: 'es2015'
    }
  },
  define: {
    global: 'globalThis',
    'process.env.NODE_ENV': '"development"'
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