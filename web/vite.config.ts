import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import fs from 'fs'
import path from 'path'

function slidesStaticPlugin() {
  return {
    name: 'slides-static',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const match = req.url?.split('?')[0].match(/^\/slides\/(S-M\d+)\/?$/)
        if (match) {
          const slideId = match[1]
          const indexFile = path.join(__dirname, 'public', 'slides', slideId, 'index.html')
          if (fs.existsSync(indexFile)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8')
            res.end(fs.readFileSync(indexFile))
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), slidesStaticPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mermaid: ['mermaid'],
        },
      },
    },
  },
})
