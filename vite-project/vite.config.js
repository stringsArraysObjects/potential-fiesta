import {resolve} from 'path'
import { defineConfig } from 'vite'
import React from 'react'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   build:{
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname,'nested/index.html'),
      },
    },
   },
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
