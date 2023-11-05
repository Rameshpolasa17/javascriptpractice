// This keywords

// const user={
//     username:"Ramesh",
//     city:"Siricilla",
//     paasword:"abc",
//     address:function(){
//         console.log(`Hi ${this.username}, Welcome to website`)
//         console.log(this)
//     }
// }
// user.address()
// console.log(user.city)
// user.username="Suvarna"
// user.address()
// console.log(user.username)
// console.log(this)

// function chai(){
//     let username="Ramesh"
//     console.log(`Hi ${this.username}, Welcome`) //This kaeyword cannot be accessed in the functions and arrow functions
// }
// chai()

// const chai=function(){
//     let username="Ramesh"
//     console.log(this.username)
// }
// chai()

//Arrow functions-----------------------

// const chai=()=>{
//     let username="Ramesh"
//     console.log(username)
// }
// chai()

// let chai=() => {
//     let username="Ramesh"
//     console.log(this.username)//This keyword cannot be accessed
// }
// chai()
// let chai=(num1 , num2)=>{
//     return num1 + num2
// }
// console.log(chai(6,6))

//Implicit return

// let chai=(num1 , num2)=> (num1+num2)
// console.log(chai(6,5))

// let chai=(num1,num2)=>({username:"Ramesh"})
// console.log(chai())