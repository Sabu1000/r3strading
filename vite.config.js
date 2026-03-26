import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-staticwebapp-config',
      apply: 'build',
      writeBundle() {
        const source = path.resolve(__dirname, 'staticwebapp.config.json')
        const dest = path.resolve(__dirname, 'dist', 'staticwebapp.config.json')
        if (fs.existsSync(source)) {
          fs.copyFileSync(source, dest)
        }
      },
    },
  ],
  build: {
    outDir: 'dist', 
  },
})
