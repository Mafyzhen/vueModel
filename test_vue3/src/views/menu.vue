<template>
    <el-row class="tac">
      <el-col :span="12">
        <div class="menuID">
            <HomeFilled style="width: 2em; height: 1em; margin-right: 20px"/>
            <RouterLink to="/" style="text-decoration: none;color: black;">  首页</RouterLink>
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo dark-mode"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1" popper-class="dark-mode">
            <template #title>
              <el-icon><Notebook /></el-icon>
              <!-- <el-icon><IconFile/></el-icon> -->
              <span>vue3-基础笔记</span>
            </template>
            <!-- <el-menu-item-group title="Group One"> -->
              <el-menu-item index="1-1"><RouterLink :to="{path:'/hooks'}" style="text-decoration: none;color: black;">外部引入ts</RouterLink></el-menu-item>
              <el-menu-item index="1-2"><RouterLink to="/refReactive" style="text-decoration: none;color: black;">响应式集合</RouterLink></el-menu-item>
            <!-- </el-menu-item-group> -->
            <!-- <el-menu-item-group title="Group Two"> -->
              <el-menu-item index="1-3"><RouterLink to="/ref子传父" style="text-decoration: none;color: black;">ref传值</RouterLink></el-menu-item>
              <el-menu-item index="1-3"><RouterLink to="/torefsComputed" style="text-decoration: none;color: black;">计算属性</RouterLink></el-menu-item>
              <el-menu-item index="1-3"><RouterLink to="/watch" style="text-decoration: none;color: black;">watch监视</RouterLink></el-menu-item>
              <el-menu-item index="1-4"><RouterLink to="/routerQuery" style="text-decoration: none;color: black;">路由传值query</RouterLink></el-menu-item>
            <!-- </el-menu-item-group> -->
            <el-sub-menu index="1-4">
              <template #title>props&pinia</template>
              <el-menu-item index="1-4-1"><RouterLink to="/props" style="text-decoration: none;color: black;">props父传子</RouterLink></el-menu-item>
              <el-menu-item index="1-4-2"><RouterLink to="/propsSun" style="text-decoration: none;color: black;">props子</RouterLink></el-menu-item>
              <el-menu-item index="1-4-3"><RouterLink to="/pinia" style="text-decoration: none;color: black;">pinia仓库取值</RouterLink></el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <!-- <el-menu-item index="2">
            <el-icon><icon-menu/></el-icon>
            <span>Navigator Two</span>
          </el-menu-item> -->
          <!-- <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item> -->
          <el-menu-item index="4">
            <el-icon class="is-loading"><Loading /></el-icon>
            <span>待定.....</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </template>
  
<script setup lang="ts">
import { RouterLink} from 'vue-router';
    const handleOpen = (Key:string,KeyPath:string[])=>{
        console.log(Key,KeyPath)
    }
    const handleClose = (Key:string,KeyPath:string[])=>{
        console.log(Key,KeyPath)
    }
</script>
<style>
.menuID{
    background-color: rgb(111, 114, 114);
    width: 200px;
    height: 10vh;
    /* 行内元素的高度 */
    line-height: 10vh;
    font-size: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 71vh;
  background-color: #D3DCE6;
  /* 隐藏滑块 */
  overflow: auto;
  scrollbar-width: none;

}
</style>