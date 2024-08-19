<template>
    <div class="index" style="background-color: skyblue">
        <div class="ref-01">
           <h3>姓名:{{ name }}</h3>
           <h3>年纪:{{ age }}</h3>
           <h3>地址:{{ address }}</h3>
           <ElButton type="warning" @click="changeName">修改名字</ElButton>
           <el-button type="warning" @click="changeAge">修改年级</el-button>
          <ElButton type="warning"  @click="changeAddress">修改地址</ElButton>
        </div>
        <div class="ref-02">
            <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
        </ul>
        <ElButton type="warning" @click="changGN">换个游戏</ElButton>
        <ElButton type="warning" @click="changGames">更换所有游戏</ElButton>
        </div>
    </div>
</template>

<script setup lang="ts">
   import { ElButton } from 'element-plus';
   import { ref , reactive} from 'vue';
   import '@/assets/css/index.css'

   let name = ref("尼古拉斯.赵四")
   let age = ref("59")
   let address = ref("山东青岛")

   //响应式reactive适用对象  类的数据
   let cat = reactive({brand:"宝马",price:"100w"})
   let games = reactive([
    {id:'00001',name:'英雄联盟'},
    {id:'00002',name:'地下城与勇士'},
    {id:'00003',name:'QQ炫舞'}
   ])


   function changeName(){
    name.value="铁柱"
   }
   function changeAge(){
    age.value="18"
   }
   function changeAddress(){
    address.value="甘肃平凉"
   }

   function changGN(){
    games[0].name = "和平精英"
   }
   function changGames(){
    Object.assign(games,[
        {id:'00001',name:'永劫无间'},
        {id:'00002',name:'原神'},
        {id:'00003',name:'穿越火线'}])
   }


</script>

<style>
   
    .ref-01{
        width: 50%;
        float: left;
    }
    .ref-02{
        width: 50%;
        float: right;
    }
    .bt-001{
        margin-top: 11%;
    }
</style>