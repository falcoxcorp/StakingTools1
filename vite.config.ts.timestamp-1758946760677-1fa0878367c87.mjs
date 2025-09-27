// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.js";
var vite_config_default = defineConfig({
  build: {
    outDir: "pipi-tools",
    target: "esnext",
    sourcemap: false,
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          mui: ["@mui/material", "@mui/icons-material"],
          web3: ["ethers", "@usedapp/core"]
        }
      }
    }
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
      babel: {
        plugins: []
      }
    })
  ],
  optimizeDeps: {
    include: ["react", "react-dom", "ethers", "@usedapp/core"],
    exclude: [],
    force: true,
    esbuildOptions: {
      target: "esnext",
      supported: {
        bigint: true
      }
    }
  },
  define: {
    global: "globalThis",
    "process.env": {}
  },
  esbuild: {
    logOverride: {
      "this-is-undefined-in-esm": "silent",
      "direct-eval": "silent"
    },
    target: "esnext",
    keepNames: true,
    minifyIdentifiers: false,
    minifySyntax: true,
    minifyWhitespace: true
  },
  server: {
    port: 3e3,
    open: true,
    host: true,
    hmr: {
      protocol: "wss",
      clientPort: 3001
    },
    watch: {
      usePolling: true,
      interval: 1e3
    }
  },
  worker: {
    format: "es"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdwaXBpLXRvb2xzJyxcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgIG11aTogWydAbXVpL21hdGVyaWFsJywgJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnXSxcbiAgICAgICAgICB3ZWIzOiBbJ2V0aGVycycsICdAdXNlZGFwcC9jb3JlJ11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KHtcbiAgICAgIGpzeFJ1bnRpbWU6ICdhdXRvbWF0aWMnLFxuICAgICAgYmFiZWw6IHtcbiAgICAgICAgcGx1Z2luczogW11cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdldGhlcnMnLCAnQHVzZWRhcHAvY29yZSddLFxuICAgIGV4Y2x1ZGU6IFtdLFxuICAgIGZvcmNlOiB0cnVlLFxuICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgICAgc3VwcG9ydGVkOiB7XG4gICAgICAgIGJpZ2ludDogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgZ2xvYmFsOiAnZ2xvYmFsVGhpcycsXG4gICAgJ3Byb2Nlc3MuZW52Jzoge31cbiAgfSxcbiAgZXNidWlsZDoge1xuICAgIGxvZ092ZXJyaWRlOiB7IFxuICAgICAgJ3RoaXMtaXMtdW5kZWZpbmVkLWluLWVzbSc6ICdzaWxlbnQnLFxuICAgICAgJ2RpcmVjdC1ldmFsJzogJ3NpbGVudCdcbiAgICB9LFxuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAga2VlcE5hbWVzOiB0cnVlLFxuICAgIG1pbmlmeUlkZW50aWZpZXJzOiBmYWxzZSxcbiAgICBtaW5pZnlTeW50YXg6IHRydWUsXG4gICAgbWluaWZ5V2hpdGVzcGFjZTogdHJ1ZVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIG9wZW46IHRydWUsXG4gICAgaG9zdDogdHJ1ZSxcbiAgICBobXI6IHtcbiAgICAgIHByb3RvY29sOiAnd3NzJyxcbiAgICAgIGNsaWVudFBvcnQ6IDMwMDFcbiAgICB9LFxuICAgIHdhdGNoOiB7XG4gICAgICB1c2VQb2xsaW5nOiB0cnVlLFxuICAgICAgaW50ZXJ2YWw6IDEwMDBcbiAgICB9XG4gIH0sXG4gIHdvcmtlcjoge1xuICAgIGZvcm1hdDogJ2VzJ1xuICB9XG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU4sU0FBUyxvQkFBb0I7QUFDdFAsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUM3QixLQUFLLENBQUMsaUJBQWlCLHFCQUFxQjtBQUFBLFVBQzVDLE1BQU0sQ0FBQyxVQUFVLGVBQWU7QUFBQSxRQUNsQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLFFBQ0wsU0FBUyxDQUFDO0FBQUEsTUFDWjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxTQUFTLGFBQWEsVUFBVSxlQUFlO0FBQUEsSUFDekQsU0FBUyxDQUFDO0FBQUEsSUFDVixPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxRQUNULFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGVBQWUsQ0FBQztBQUFBLEVBQ2xCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsTUFDWCw0QkFBNEI7QUFBQSxNQUM1QixlQUFlO0FBQUEsSUFDakI7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLG1CQUFtQjtBQUFBLElBQ25CLGNBQWM7QUFBQSxJQUNkLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
