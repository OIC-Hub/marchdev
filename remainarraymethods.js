
let nums =[20, 45, 56, 78, 90, 5];

 let isgreater= nums.every((value, index, arry)=>{
    return value < 10
})
console.log(isgreater)

const checksome = (value)=>{
    return value > 80
}

let somevalue = nums.some(checksome)
console.log(somevalue)

// Map
const cities =['Osogbo', 'Jos', 'Kano', 'Ibadan', 'Okeho', 'Lagos']

 const newCities=  cities.map(function(value, index, arry){
    return value.toUpperCase()
})

const evenorOdd = nums.map((value, index, arr)=>{
 let position;
 if(value % 2 == 0 ){
    position=`${value} is even `
 }else{
    position=`${value} is Odd `
 }
 return position
})

console.log(evenorOdd)


const users = [
    {name:'Sunday Opeyemi ', age: 12, address:'Lagos', socialMedia:['twitter']},
    {name:'Ojo', age: 23, address:'Osogbo', socialMedia:['facebook', 'twitter']},
    {name:'Kabir', age: 40, address:'Ibadan', socialMedia:['twitter', 'facebook', 'linkedin']},

]


let newUsrs = users.filter((value, index, arra)=>{
   return   value.socialMedia[1] == 'facebook'
})

console.log(newUsrs)
// for(let user of users){
//    console.log(user.socialMedia[1])
// }
 
// let newnumber = nums.filter((value)=>{
//     return value > 50
// })
// console.log(newnumber)

//reduce 
let totalnum=nums.reduce((total, value)=>{
   return total - value
}, 100)

console.log(totalnum)

 let findValue=  nums.find((value, index)=>{
                     return value >20
})

let findIndex=  nums.findIndex((value, index)=>{
    return value >20
})
console.log(findIndex)
