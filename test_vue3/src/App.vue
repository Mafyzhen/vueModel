<template>
    <!-- <refs ref="nb"/>
    <ElButton type="warning" @click="getNumber">获取子组件的值</ElButton> -->
    <div class="app">
        <ElContainer>
        <ElHeader>vue3 - 详 细 实 例 讲 解 </ElHeader>
        <ElContainer>
            <ElAside width="200px">
                <menus/>
                <!-- <ur>
                    <ul><RouterLink to="/">首页测试</RouterLink></ul>
                    <ul><RouterLink to="/hooks">外部引入ts</RouterLink></ul>
                    <ul><RouterLink to="/props">props父传子</RouterLink></ul>
                    <ul><RouterLink to="/refReactive">响应式集合</RouterLink></ul>
                    <ul><RouterLink to="/ref子传父">ref传值</RouterLink></ul>
                    <ul><RouterLink to="/torefsComputed">计算属性</RouterLink></ul>
                    <ul><RouterLink to="/watch监视">watch监视数据</RouterLink></ul>
                    <ul><RouterLink to="/menu">menu</RouterLink></ul>
                </ur> -->
            </ElAside>
            <ElMain>
                <router-view></router-view>
            </ElMain>
        </ElContainer>
    </ElContainer>
    </div>
</template>


<script setup lang="ts">
import { RouterView , RouterLink} from 'vue-router';
import {ref} from 'vue';
import menus from './views/menu.vue';


//通过标签的ref属性传值  子（ref父子组件传值.vue'）传父  （App.vue）
let nb = ref()
function getNumber(){
    console.log(nb.value.c)
}

</script>




<style scoped>
.app{
    box-shadow: 0 0 10px;
    border-radius: 10px;
    /* height: 70vh; */
}
 .el-header {
    background-color: #B3C0D1;
    box-shadow: 0 0 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #333;
    text-align: center;
    line-height: 100px;
    height: 100px;
    font-size: 30px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    border-bottom-left-radius: 10px;
    color: #333;
    text-align:left;
    height: 84vh;
    line-height: 40px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    border-bottom-right-radius: 10px;
    /* 设置内容的上边距 */
    padding-top: 10px;
    color: #333;
    text-align: center;
    /* line-height: 76vh; */
  }

</style>
