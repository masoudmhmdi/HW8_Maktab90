"use strict"
const counter=function(){
    let protectCount=0
    return function(num){
        if(typeof(num)==="number") protectCount+=num
        return protectCount
    }
}

const protectCounter=counter()
console.log( protectCounter() ) // 0
console.log( protectCounter() ) // 0
console.log( protectCounter(1) ) // 1
console.log( protectCounter() ) // 1
console.log( protectCounter(3) ) // 4
console.log( protectCounter(7) ) // 11
console.log( protectCounter(-5) ) // 6
