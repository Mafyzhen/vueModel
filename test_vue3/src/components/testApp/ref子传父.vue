<template>
    <div class="index">
        <h2 ref="title2">你好</h2>
        <ElButton type="warning" @click="setNumber">测试传值</ElButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import '@/assets/css/index.css'
   let title2 = ref()
   let a = ref(0)
   let b = ref(1)
   let c = ref(2)
   function setNumber(){
    console.log(title2.value)
   }
   defineExpose({a,b,c})
</script>


