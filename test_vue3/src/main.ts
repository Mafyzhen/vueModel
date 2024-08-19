// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios';
import ElementPlus from 'element-plus' //引入ElementPlus组件/
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue' //引入ElementPlus图标/

// import index from './components/testApp/index.vue'

// createApp(App).mount('#app')  
//createApp创建了一个应用 然后将#app挂在（mount）到了index.html文件中的div中

const app = createApp(App)  //这个也是app挂在方式
const pinia = createPinia()
app.use(pinia)
app.use(router)
// app.use(axios)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}                      //ElementPlus图标挂载/
app.use(ElementPlus)  //引入ElementPlus组件后 挂载到全局使用

//app.component('index',index)//定义全局组件的方式

//局部组件 在<script setup lang="ts">  加setup就默认全部导出  在需要使用的vue文件中 import导入后 在<template>中写<Index/>标签即可

app.mount('#app')
