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
      overlay: false,
      port: 3001
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdwaXBpLXRvb2xzJyxcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgIG11aTogWydAbXVpL21hdGVyaWFsJywgJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnXSxcbiAgICAgICAgICB3ZWIzOiBbJ2V0aGVycycsICdAdXNlZGFwcC9jb3JlJ11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KHtcbiAgICAgIGpzeFJ1bnRpbWU6ICdhdXRvbWF0aWMnLFxuICAgICAgYmFiZWw6IHtcbiAgICAgICAgcGx1Z2luczogW11cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdldGhlcnMnLCAnQHVzZWRhcHAvY29yZSddLFxuICAgIGV4Y2x1ZGU6IFtdLFxuICAgIGZvcmNlOiB0cnVlLFxuICAgIGVzYnVpbGRPcHRpb25zOiB7XG4gICAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgICAgc3VwcG9ydGVkOiB7XG4gICAgICAgIGJpZ2ludDogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGVmaW5lOiB7XG4gICAgZ2xvYmFsOiAnZ2xvYmFsVGhpcycsXG4gICAgJ3Byb2Nlc3MuZW52Jzoge31cbiAgfSxcbiAgZXNidWlsZDoge1xuICAgIGxvZ092ZXJyaWRlOiB7IFxuICAgICAgJ3RoaXMtaXMtdW5kZWZpbmVkLWluLWVzbSc6ICdzaWxlbnQnLFxuICAgICAgJ2RpcmVjdC1ldmFsJzogJ3NpbGVudCdcbiAgICB9LFxuICAgIHRhcmdldDogJ2VzbmV4dCcsXG4gICAga2VlcE5hbWVzOiB0cnVlLFxuICAgIG1pbmlmeUlkZW50aWZpZXJzOiBmYWxzZSxcbiAgICBtaW5pZnlTeW50YXg6IHRydWUsXG4gICAgbWluaWZ5V2hpdGVzcGFjZTogdHJ1ZVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLFxuICAgIG9wZW46IHRydWUsXG4gICAgaG9zdDogdHJ1ZSxcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxuICAgICAgcG9ydDogMzAwMVxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIHVzZVBvbGxpbmc6IHRydWUsXG4gICAgICBpbnRlcnZhbDogMTAwMFxuICAgIH1cbiAgfSxcbiAgd29ya2VyOiB7XG4gICAgZm9ybWF0OiAnZXMnXG4gIH1cbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzdCLEtBQUssQ0FBQyxpQkFBaUIscUJBQXFCO0FBQUEsVUFDNUMsTUFBTSxDQUFDLFVBQVUsZUFBZTtBQUFBLFFBQ2xDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixZQUFZO0FBQUEsTUFDWixPQUFPO0FBQUEsUUFDTCxTQUFTLENBQUM7QUFBQSxNQUNaO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLFNBQVMsYUFBYSxVQUFVLGVBQWU7QUFBQSxJQUN6RCxTQUFTLENBQUM7QUFBQSxJQUNWLE9BQU87QUFBQSxJQUNQLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLFFBQ1QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsZUFBZSxDQUFDO0FBQUEsRUFDbEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGFBQWE7QUFBQSxNQUNYLDRCQUE0QjtBQUFBLE1BQzVCLGVBQWU7QUFBQSxJQUNqQjtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsbUJBQW1CO0FBQUEsSUFDbkIsY0FBYztBQUFBLElBQ2Qsa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsTUFDWixVQUFVO0FBQUEsSUFDWjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
