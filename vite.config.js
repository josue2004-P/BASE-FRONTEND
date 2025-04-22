import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                  // Permite usar funciones como "describe", "it", "expect" sin importar
    environment: 'jsdom',           // Simula el DOM en Node.js
    setupFiles: './src/setupTests.js', // Archivo de configuración inicial (se crea abajo)
    include: ['src/**/*.test.jsx'], // Patrón de archivos que quieres testear
    coverage: {
      reporter: ['text', 'json', 'html'], // Genera cobertura en varios formatos
      exclude: ['src/setupTests.js'],     // Excluye archivos que no quieres medir
    },
  },
})
