import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
//pinia 公共仓库
export const useCounterStore = defineStore('counter', () => {
  const count = ref(1)
  const count2 = ref(0)
  const count3 = ref(2)


  const doubleCount = computed(() => count.value * 3)

  function increment() {
    count.value++
  }

  return { count,count2,count3, doubleCount, increment }
})
