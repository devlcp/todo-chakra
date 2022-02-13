import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],  
      manifest: {
        "name": "My ToDo",
        "short_name": "Todo Task",
        "description": "Estoy desde VitePWA",
        "background_color": "#3182ce",
        "theme_color": "#3182ce",
        "start_url": "./",
        "scope": "./",
        "lang": "es-MX",
        "display": "fullscreen",
        "orientation": "portrait"
      }
    })
  ]
})
