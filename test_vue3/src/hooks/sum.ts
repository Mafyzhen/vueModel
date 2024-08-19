import {ref} from 'vue'

export default function(){
    let sums = ref(1)
    function add (){
        sums.value+=1
    }

    return {sums,add}
}
