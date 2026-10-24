import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dev middleware to handle /php/contact.php and /contact.php during Vite development
function phpDevPlugin() {
  return {
    name: 'php-dev-middleware',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const cleanUrl = req.url ? req.url.split('?')[0] : ''
        if (req.method === 'POST' && (cleanUrl === '/php/contact.php' || cleanUrl === '/contact.php')) {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({
            success: true,
            message: 'Thank you! Your message has been sent successfully to EmpireX Business Academy.'
          }))
          return
        }
        next()
      })
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), phpDevPlugin()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'motion': ['framer-motion'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: false,
  },
})
