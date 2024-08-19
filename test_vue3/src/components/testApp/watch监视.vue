<template>
    <div class="index">
        <h1>情况一:监视ref定义的基本数据类型</h1>
       <h2>当前求和为:{{sum}}</h2>
       <ElButton type="warning" @click="sumNumber">点我sum+1</ElButton>
    </div>
</template>


<script setup lang="ts" >
import router from '@/router';
import { Stopwatch } from '@element-plus/icons-vue';
import { ref , reactive , watch , watchEffect} from 'vue';
let sum = ref(0)
let person = ({name:'zhangsan',age:'21'})

function sumNumber(){
    sum.value+=1
}

//情况一  监视普通数据  let sum = ref(0)
const stopWatch = watch(sum,(newValue,oldValue)=>{
    console.log('sun变化了',newValue,oldValue)
    if(newValue>=10){ //当新值为10的时候 停止sum数据的监视
        stopWatch()
    }
})
//  情况二  监视ref定义的对【象类型数据】不开启监视配置项{deep:true,immediate:true}时
//  就只会监视整个对象地址是否改变，
//  deep:true开启深度监视，person的属性改变也会监视  immediate立即监视
watch(person,(newValue,oldValue)=>{
    console.log('sun变化了',newValue,oldValue)
},{deep:true,immediate:true})

/*情况三：reactive定义数据是默认开启深度监视的，无法关闭
 */
let cat = reactive({name:'小黄鱼',age:'5'})
function changReactive(){
    Object.assign(cat,{name:'逆子',age:'8'})
}
watch(cat,(newValue,oldValue)=>{
    console.log(newValue,oldValue)
})

/** 情况四: 监视reactive定义的对象，数据源需要写成函数式
 */
let car = reactive({
    name:"宝马",
    money:"80W",
    newCar:{
        name:"红旗",
        money:"150W"
    }
})
//监视对象中一个基本属性变化
watch(()=>{return car.name},(value)=>{
    console.log(value)
},
// {deep:true}
)
//监视对象中一个对象属性变化 此时只监视对象的地址 要监视内部对象的一个基本属性 要开启深度监视{deep:true}
//
watch(()=> car.newCar,(value)=>{
    console.log(value)
},{deep:true})
//情况五：监视reactive定义的对象数据中的多个数据[]包裹多个数据
watch([()=>car.name,car.newCar],(value)=>{
    console.log(value)
},{deep:true})

//watchEffect 立即运行，响应式的追踪数据源 不用明确指出腰间是的数据
watch([car.name,car.money],(value)=>{
    let [newValue,oldValue]=value
    if(newValue=="宝马"&&oldValue=="80W"){
        console.log("给服务器发请求")
    }
})
//watch和watchEffect效果相同 但是代码简化了  操作更方便
watchEffect(()=>{
    if(car.name=="宝马"&&car.money=="80W"){
        console.log("给服务器发请求")
    }
})

</script>

<style>
.index{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>