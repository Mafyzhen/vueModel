<template>
    <!-- query传参 -->
    <!-- <ul>
        <li>编号:{{ query.id }}</li>
        <li>姓名:{{ query.name }}</li>
        <li>城市:{{ query.title }}</li>
    </ul> -->
    <ul>
        <li>编号:{{ id }}</li>
        <li>姓名:{{ name }}</li>
        <li>城市:{{ title }}</li>
    </ul>
    <textarea id="textarea" style="font-size: 17px;color:black;">    
        query和params 路由传参的两种方式 index.ts文件下的路由不一样 列表的RouterLink :to= 的写法不一样
    子路由页面接收参数不一样

    1.props的两种写法 在路由文件中使用 详情见index.ts
        第一种 路由组件使用props+params传值 路由文件{}内写props:trun 
        第二种 路由组件使用props+query传值  路由文件{}内写props(route){return route.query}

    3.路由组件和一般组件
        通过路由路径 在RouterView显示的组件
        一般组件  通过import引入  写<--index/->标签 显示的组件
        路由传值的意义是因为路由组件没机会写标签 只能通过路由传值

    4.RouterLink的push和replace属性 默认为push 网页能回退     replace属性页面无法后退
         使用：RouterLink replace :to={patn:"/"}
    </textarea>
    <ElButton type="warning" @click="addText">保存编辑内容</ElButton>
</template>
<script setup lang="ts">
   import { useRoute ,} from 'vue-router';
   import { toRefs,ref } from 'vue';

   defineProps(['id','name','title'])  //路由组件使用props+params传值 详情见index.ts路由文件

   let route = useRoute()
   let {query} = toRefs(route)

   let {params} = toRefs(route)
   console.log(params.value)



   function addText(){
    var lt =document.getElementById('textarea') as HTMLTextAreaElement;
    console.log(lt.value)
   }
</script>
<style scoped>
textarea{
    background-color: #afeeab;
    width: 63vw;
    height: 60vh;
}
</style>