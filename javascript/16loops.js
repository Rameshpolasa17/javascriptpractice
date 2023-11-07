// const greetings="Hello World"
// for (const greet of greetings) {
//     console.log(greet)
// }

// const map=new Map()
// map.set('In', "India")
// map.set('Us', "America")
// map.set('Fr',"France")
// // for (const key of map) {
// //     console.log(key)
// // }
// for (const [key, values] of map) {
//     console.log(`${key}: ${values}`)
// }

// const myObj={
//     "Js":"Javascript",
//     "Rb":"Ruby",
//     "Py":"Python",
//     "Cpp":"C++"
// }
// for (const key in myObj) {
//     console.log(`${key} for ${myObj[key]}`)
//     console.log(myObj[key])
// }

// const programming=["Js","Py","Rb","Cpp"]
// for (const key in programming) {
//     console.log(programming[key])
// }

// const map=new Map()
// map.set('In', "India")
// map.set('Us', "America")
// map.set('Fr',"France")
// for (const key in map) {  //Maps does not iterate by forin loop
//     console.log(key)
// }

//----------------For each loop------------------
const coding=["Js","Py","Java","Ruby","Cpp","C"]
// coding.forEach( function(index , item,arr){
//     console.log(index)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// const myCoding=[
//     {
//         languageName:"Javascript",
//         FileName:"Js"
//     },
//     {
//         languageName:"Python",
//         FileName:"Py"
//     },
//     {
//         languageName:"Ruby",
//         FileName:"Rb"
//     }
// ]
// myCoding.forEach((item)=>{
//     console.log(item.languageName)
//     console.log(item.FileName)
// })

const nums=[1,2,3,4,5,6,7,8,9]
// let myNums=nums.filter((num)=>num>4)
// console.log(myNums)

// let myNums=nums.filter((num)=>{
//     return num>4
// })
// console.log(myNums)

let newNums=[]
nums.forEach((num)=>{
    if (num>4) {
        newNums.push(num)
    }
})
console.log(newNums)