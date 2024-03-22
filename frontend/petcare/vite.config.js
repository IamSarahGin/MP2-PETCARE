import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base:"/MP2-PetCare/frontend/petcare",
  server:{
    port:3000,
  },
  
})
