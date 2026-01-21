import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Use /microscript-navigator/ for GitHub Pages, / for Vercel
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/microscript-navigator/' : '/',
})
