import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// ✅ Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@data': path.resolve(__dirname, 'src/components/data'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Excludes unnecessary dependency optimizations for lucide-react
  },
  server: {
    port: 3000, // Change this to your desired port (e.g., 3000)
    hmr: {
      overlay: false, // Optional: Disable HMR (Hot Module Replacement) overlay for errors if desired
    },
  },
  build: {
    sourcemap: false, // Disable source maps in production to reduce build size
    minify: 'esbuild', // Enable esbuild minification for faster builds in production
    rollupOptions: {
      external: ['lucide-react'], // Exclude lucide-react from being bundled (you can adjust based on your usage)
    },
  },
});
