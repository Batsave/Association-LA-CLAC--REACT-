import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'app.js',  // Nom du fichier JS d'entrée
        chunkFileNames: 'chunk-[name].js',  // Nom des fichiers JS de chunk
        assetFileNames: 'app.css',  // Nom du fichier CSS
      },
    },
  },
})
