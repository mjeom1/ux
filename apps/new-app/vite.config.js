import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs'
import {BASE_REPOSITORY_NAME_PATH} from '../../config/constants.js'

// Copy index.html to 404.html after build
function spaFallback() {
  return {
    name: 'spa-fallback',
    closeBundle: () => {
      const indexPath = resolve(__dirname, 'dist/index.html')
      const fallbackPath = resolve(__dirname, 'dist/404.html')
      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, fallbackPath)
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), spaFallback()],
  base: BASE_REPOSITORY_NAME_PATH + 'new-app/',
})
