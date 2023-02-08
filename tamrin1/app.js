"use strict";
//static object(tamrin)

// let user = {};

// function setterGenerator(key) {
//   return function(value){
//     user[key]=value
//   }
// }

// const nameSetter = setterGenerator("name");
// nameSetter("masoud");
// console.log(user);

// dynamic object
// let user={}

// function setterGenerator(object){
//     return function(key,value){
//         object[key]=value
//     }
// }

// setterGenerator(user)("name","masoud")
// console.log(user)


/////with this

let user ={}

function setterGenerator(key){
  let x =function(value){
    this[key]=value
  }
  return x.bind(user)
}

let nameSetter =setterGenerator("name")
nameSetter("masoud")

console.log(user)


