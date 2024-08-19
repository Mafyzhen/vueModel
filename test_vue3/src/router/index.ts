import { createRouter, createWebHistory } from 'vue-router'
import menu from '@/views/menu.vue'
import index from '@/components/testApp/index.vue'
import hooks from '@/components/testApp/hooks.vue'
import props from '@/components/testApp/props父传子.vue'
import propsSun from '@/components/testApp/propsSun.vue'
import refReactive from '@/components/testApp/ref-reactive.vue'
import ref子传父 from '@/components/testApp/ref子传父.vue'
import torefsComputed from '@/components/testApp/torefs-computed.vue'
import watch from '@/components/testApp/watch监视.vue'
import routerQuery from '@/components/testApp/routerQuery.vue'
import routerQuery01 from '@/components/routerQuery01.vue'
import pinia from '@/components/testApp/pinia.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/menu',
      name:'menu',
      component:menu
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: hooks
    },
    {
      path:'/props',
      name:'props',
      component:props
    },
    {
      path:'/propsSun',
      name:'propsSun',
      component:propsSun
    },
    {
      path:'/refReactive',
      name:'refReactive',
      component:refReactive
    },
    {
      path:'/ref子传父',
      name:'ref子传父',
      component:ref子传父
    },
    {
      path:'/torefsComputed',
      name:'torefsComputed',
      component:torefsComputed
    },
    {
      path:'/watch',
      name:'watch',
      component:watch
    },
    {
      path:'/routerQuery',
      name:'routerQuery',
      component:routerQuery,
      // 内部路由 使用路由传值Query
      children:[
        {
          path:'routerQuery01',
          component:routerQuery01
        }
      ]
    },
    {
      path:'/routerQuery',
      name:'routerQuery',
      component:routerQuery,
      // 内部路由 使用路由传值params  title? 后面加？表示可以不传值
      children:[
        {
          path:'routerQuery01/:id/:name/:title?',
          name:'params01',
          component:routerQuery01,
          //props第一种写法 路由组件要使用params传参 <routerLink :to="{name:"/",params:{id:""}}">  
          // 路由组件直接使用
          props:true
          //props第二种函数写法写法
        }
      ]
    },
    {
      path:'/routerQuery01',
      name:'routerQuery01',
      component:routerQuery01
    },
    // {
    //   // 重定向  让一个页面path跳转到另一个指定页面redirect
    //   path:'/',
    //   redirect:'/watch'
    // },
    {
      path:'/pinia',
      name:'pinia',
      component:pinia
    },



    
  ]
})

export default router
