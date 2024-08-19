<template>
    <div class="nm">
        <ur>
            <li v-for="itm in list">{{ itm.name }}--{{ itm.age }}</li>
        </ur>
        <!-- <RouterLink :to="{path:'/hooks'}" active-class="">外部引入ts</RouterLink> -->
         <h1 >active-class="" 是RouterLink路由路径的一个样式属性   被选中的标签会默认拥有这个样式
            点击菜单时，标签颜色变化  更好看
         </h1>
    </div>
</template>


<script setup lang="ts" name="testIndex-001">
import { type Persons } from './index';
    //接受父组件的数据
    // defineProps(['list'])
    
    
    //接受父组件的数据 并将值保存起来--可以操作
    // let lt = defineProps(['list'])
    // console.log(lt)



    //接受父组件的数据 + 限制类型 (Persons) index.ts中定义好的泛型
    defineProps<{list:Persons}>()


    //接受父组件的数据 + 限制类型 +限制必要性 + 指定默认值
    //限制必要性--设置后可以不传值  所以需要一个默认值  不然没数据
    // withDefaults(defineProps<{list?:Persons}>(),{
    //     list:()=>[{id:'001',name:'无名',age:'1000'}]
    // })







</script>
<style scoped>
   .nm{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    height: 60vh;
    padding: 20px;
}
</style>