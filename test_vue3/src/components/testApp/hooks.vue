<template>
    <div class="index">
        <h1 style="height: 10px;">当前的和为:{{ sums }}</h1>
        <ElButton type="success" @click="add">点我sum+1</ElButton>
        <hr>
        <el-button type="success" @click="getDog">再来一个美女</el-button>
        <h2>外部引入ts</h2>
        <img v-for="dog in dogList" :src="dog" style="width: 200px;height: 180px;">
        <br>


    </div>
</template>
<script setup lang="ts">
import sum from '@/hooks/sum';
import imgs from '@/hooks/imgs';
import '@/assets/css/index.css'

const {sums,add} = sum()
const {dogList,getDog} = imgs()
// const {dogList} = imgs()
</script>
