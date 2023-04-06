
let numbers= [34, 5, 56, 20, 78, 4, 1, 400];
let max= -Infinity
for(let i =0; i< numbers.length; i++){
    if(max < numbers[i]){
        max =  numbers[i]
    }
}

console.log(max)

let min= Infinity
for(let i =0; i< numbers.length; i++){
    if(min > numbers[i]){
        min =  numbers[i]
    }
}

let i=0
let whilemin = Infinity
while(i< numbers.length){
    if(whilemin > numbers[i]){
        whilemin =  numbers[i]
    }
    i++
}
console.log(whilemin)
let average = (max + whilemin)/2
console.log(average)