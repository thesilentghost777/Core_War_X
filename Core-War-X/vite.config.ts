import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build:{
    outDir:'WarZoneWeb/static/js',
    emptyOutDir:true,
  },
  server:{
    proxy:{
      '/api':'http://localhost:5000', //proxy flask
    },
  },
});
