import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,   // cambiar puerto de desarrollo
  },
  base: 'http://bolera.eus',     // útil para GitHub Pages
})
