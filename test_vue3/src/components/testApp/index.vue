<template>
    <div class="index" style="position: relative;">
        <!-- <h3>hello Wrode</h3> -->
        <ur>
            <li v-for="itm in list">{{ itm.name }}--{{ itm.age }}</li>
            <!-- :(String)key="itm.id" -->
        </ur>
        <textarea id="textarea" class="textarea" oninput="autoResizeTextarea(this)" style="font-size: 17px;color:black;">
    </textarea>
    <ElButton type="warning" @click="addText" style="float: left;">保存编辑内容</ElButton>
    </div>
</template>


<!-- npm i vit-plugin-vue-setup-extend -D   安装此依赖 可以给组件重新起名 在script标签中重写name属性 -->
<script setup lang="ts" name="testIndex-001">
import '@/assets/css/index.css'
import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
//vue3的生命周期ref创建  onBeforeMount挂载前   onMounted挂在后  onBeforeUpdate更新前  onUpdated更新后   onBeforeUnmount卸载前   onUnmounted卸载完毕
import { type Persons } from './index';
import { withDefaults } from 'vue';
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

    function addText(){
        let text1 = document.getElementById("textarea") as HTMLTextAreaElement
        console.log(text1.value)
    }

</script>

<!-- 局部组件 在<script setup lang="ts">  加setup就默认全部导出  在需要使用的vue文件中 import导入后 在<template>中写<Index/>标签即可 -->
<style scoped>
.textarea{
    background-color: #ddd;
    /* 定位在左边 */
    /* display: flex; */
    /*隐藏滑块 可以滑动 */
    scrollbar-width: none;
    width: 100%;
    height: 95%;
    /* 不超出外边的div */
    box-sizing: border-box;   
    /* 边框颜色 */
    border: 1px solid #ddd;
}
</style>