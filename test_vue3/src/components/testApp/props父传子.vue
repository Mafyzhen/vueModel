<template>
    <div class="index">
        <h2>父组件---props父传子---将值传递给子组件---index--- </h2>
        <propsSun :list="personList"/>
    </div>
</template>
<script setup lang="ts">
    import { RouterView,RouterLink } from 'vue-router';
    import  {type Persons} from './index';
    import propsSun from './propsSun.vue';
    import { reactive } from 'vue';
    import '@/assets/css/index.css'

    const personList = reactive<Persons>([
        {id:"11",name:"张三", age:"18"},
        {id:"12",name:"李四", age:"21"},
        {id:"13",name:"王五", age:"81"}
        ])
</script>
