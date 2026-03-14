import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import viteCompression from 'vite-plugin-compression';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    plugins: [
        react(), // ✅ React plugin
        viteCompression({ algorithm: 'brotliCompress' }) // ✅ Brotli compression for smaller files
    ],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@data': path.resolve(__dirname, 'src/components/data'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react') // ✅ Fix lucide-react import
        },
    },
    optimizeDeps: {
        include: ['lucide-react'], // ✅ Ensure lucide-react is pre-bundled
    },
    esbuild: {
        loader: 'tsx', // ✅ Ensure TSX loader is used
        include: /src\/.*\.[tj]sx?$/, // ✅ Apply to `.js`, `.ts`, `.jsx`, `.tsx` files
    },
    server: {
        port: 3000,
        hmr: {
            overlay: false, // ✅ Optional: Disable HMR overlay for errors
        },
    },
    build: {
        outDir: 'dist', // ✅ Output folder
        sourcemap: false, // ✅ Reduce build size in production
        minify: 'esbuild', // ✅ Use esbuild for minification
        chunkSizeWarningLimit: 1500, // ✅ Prevent warning for large chunks
        rollupOptions: isProduction
            ? {
                  output: {
                      manualChunks: undefined, // 🚨 Disable chunking
                      inlineDynamicImports: true, // 🚀 Merge all imports into one
                      entryFileNames: 'bundle.js', // ✅ Custom bundle filename
                      assetFileNames: 'style.css', // ✅ Custom CSS filename
                  },
              }
            : {},
    },
    base: '/',

});
