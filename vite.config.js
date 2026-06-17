import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin()
  ],
  build: {
    lib: {
      entry: 'src/mount.jsx',
      name: 'SovereignComponent',
      formats: ['es'],
      fileName: () => 'bundle.es.js'
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
});