<template>
    <div class="index">
        <h1>{{ store.count }}</h1>
        <h1>{{ store.doubleCount }}</h1>
        <ElButton type="warning" @click="sum">求和</ElButton>
        <ElButton type="warning" @click="stoerFn">重置</ElButton>
    </div>
</template>
<script setup lang="ts">
import "@/assets/css/index.css"
import {useCounterStore} from '@/stores/counter'
import { storeToRefs } from "pinia";
const store = useCounterStore();
// const {count} =storeToRefs(store)
const sum = ()=>{ store.increment()}

// $reset()  重置为初始值
const stoerFn = ()=>{store.count=0 }

//修改pinia仓库中的数据
  store.count+=1;
  //批量修改
  store.$patch({
    count:6,
    count2:8,
    count3:9
  })
</script>
<style></style>