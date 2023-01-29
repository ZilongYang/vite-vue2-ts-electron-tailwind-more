import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import electron from 'vite-plugin-electron'
import electronRenderer from 'vite-plugin-electron-renderer'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    electron({
      entry: [
        'electron/main.ts',
        'electron/preload.ts',
      ]
    }),
  ],
})
