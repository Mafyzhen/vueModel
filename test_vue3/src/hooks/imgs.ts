// import axios from 'axios'
import {reactive} from 'vue'

export default function(){
    let dogList = reactive([
        '/src/assets/images/1.jpg'
    ])
    
    // async 
    function getDog(){
        try {
    //         let result = await axios.post(
    //             //这里写url
    //             '@fs/E:/images/1.jpg'
    //         )
            dogList.push('/src/assets/images/1.jpg')
        } catch (error) {
            alert(error)
        }
    }
    return {dogList,getDog}
    // return {dogList}
}