<template>
    <div class="index" style=" background-color: skyblue;">
        <h3>姓名:{{ name1.name}}</h3>
        <h3>别名:{{ name1.age }}</h3>
        <el-button type="success" @click="changBody">变身</el-button><br>
        姓:  <el-input class="et" style="width: 30%;" type="text" v-model="fn"></el-input><br>
        名:  <el-input class="et" style="width: 30%;" type="text" v-model="ln"></el-input><br>
        全名： <el-button @click="changefullname">{{fullname}}</el-button>
    </div>
</template>
<script setup lang="ts">
import '@/assets/css/index.css'
import { ref ,toRef, toRefs,reactive, computed} from 'vue';
//toRefs 使解构后的数据依然是响应式的   数据重新赋值就不是响应式的了  所以需要toref
//toRefs 同时改变数条数据    toref一次只能改一条
     let name1 = reactive({name:"轩辕狗蛋",age:"21"});
     let {name,age} = toRefs(name1)

     function changBody(){
        name1.name = "轩辕拓跋" 
        name1.age = "永远18"
     }

     let fn = ref("zhang")
     let ln = ref("san")

     //computed计算属性复制 双向绑定   changefullname只是触发computed的set方法
     let fullname = computed({
        get(){
            return fn.value+"-"+ln.value
        },
        //是changefullname函数给计算属性函数赋的值‘li-si’ (fullname.value='li-si')
        set(val){
            const [str1,str2] = val.split('-')
            fn.value=str1
            ln.value=str2
            console.log(str1+str2)
        }
     })

     function changefullname(){
        fullname.value='li-si'
     }

</script>
<style>
.et{
    width: 20%;
}

</style>