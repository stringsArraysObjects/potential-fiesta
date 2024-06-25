import { defineConfig } from 'vite'
import path, {resolve} from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   build:{
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname,'nested/placeholderPage1.html', 'nested/placeholderPage2.html', 'nested/about.html', 'nested/AdditionalPages.jsx'),
      },
    },
   },
  plugins: [react()],
})
