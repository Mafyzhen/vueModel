import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'  //组件重新起名的依赖

// https://vitejs.dev/config/
//简化路径写法的别名用@ 替代./src
export default defineConfig({
  plugins: [
    vue(),
    VueSetupExtend(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
