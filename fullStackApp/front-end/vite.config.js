import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // vite uses this as a prevfix for href and src urls
  base: '/static/',
  build:{
    //where vite places all js files and pages into
    outDir:'../server/static',
  
  emptyOutDir:true,
  sourceMap:true,
},
  plugins: [react()]
})
