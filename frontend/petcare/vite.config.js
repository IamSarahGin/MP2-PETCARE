import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
  },
  build: {
    target: "es2022" // Ensure lowercase 'es' and '2022'
  } ,
esbuild: {
    target: 'es2022'
  }
})
