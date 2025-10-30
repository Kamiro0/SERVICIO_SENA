import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SERVICIO_SENA/', // 👈 importante: debe tener slash inicial y final
})