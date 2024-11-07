import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 5173,  // Usa el puerto proporcionado por Render o 5173 por defecto
    host: true,                      // Permite acceder a la app desde cualquier IP
  },
})
