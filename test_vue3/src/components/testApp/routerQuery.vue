<template>
    <div>
        <!-- 左侧导航栏 -->
        <div class="leftRout">
            <ur>
                 <!-- 内部路由 使用路由传值Query -->
                <!-- <li v-for="list in routeList">
                    <RouterLink 
                    :to="{path:'/routerQuery/routerQuery01',
                        query:{
                            id:list.id,
                            name:list.name,
                            title:list.title,
                        }
                    }" style="text-decoration: none;color: black;">
                     {{ list.name }}
                    </RouterLink>
                </li> -->
                <li v-for="lt in routeList" style="margin-top: 40px;">
                    <ElButton type="warning" @click="nextPg(lt)">跳转</ElButton>
                    <!-- 内部路由 使用路由传值params -->
                     <RouterLink 
                     :to="{name:'params01',
                        params:{
                            id:lt.id,
                            name:lt.name,
                            title:lt.title
                        }
                     }" style="color: black;text-decoration: none;">
                        {{ lt.id }}
                     </RouterLink>

                </li>
            </ur>
        </div>
        <!-- 右侧展示区 -->
        <div class="viewRout">
            <RouterView></RouterView>
        </div>
    </div>
</template>


<script setup lang="ts" name="testIndex-001">
import '@/assets/css/index.css'
import { reactive,onMounted } from 'vue';
import { RouterView,RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';

const routeList = reactive([
    {id:"001", name:"内瑟斯",title:"弗雷尔卓德"},
    {id:"002", name:"亚托克斯",title:"巨神峰啊"},
    {id:"003", name:"亚索",title:"艾欧尼亚"},
])
const router = useRouter();
//三秒后自动跳转 编程式导航
// onMounted(()=>{
//     setTimeout(()=>{
//         router.push('routerQuery01')
//     },3000)
// })

function nextPg(lt:any){
    // router.replace({})  replace路由跳转网页无法回退
    router.push({
        name:'params01',
        params:{
            id:lt.id,
            name:lt.name,
            title:lt.title
        }
    })
}

</script>
<style scoped>
   .leftRout{
    float: left;
    background-color: #dbeac3;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    height: 75vh;
    padding: 20px;
    text-align: left;
    
   }
   .viewRout{
    margin-left: 160px;
    background-color: #afeeab;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    height: 75vh;
    padding: 20px;
    text-align: left;
   }
</style>