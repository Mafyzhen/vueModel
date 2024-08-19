//泛型  定义一个接口限制数据的属性
export interface PersonInter{
    id:String,
    name:String,
    age:String,
    sex?:String
}
export type Persons = PersonInter[]



// //属性后面加？  表是属性可以有 也可以没有
// 使用时候 import  {type PersonInter} from './index';  引入
// let a = reacctive<PersonInter>([{数据}])
