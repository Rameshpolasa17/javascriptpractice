let myArr=[0,1,2,3,4,5]
console.log(myArr)
console.log(myArr.pop()) //It removes the data of last index
console.log(myArr.push(6)) //It adds the given data at alst index
console.log(myArr)
console.log(myArr.shift()) //It removes the first element
console.log(myArr.unshift(8)) //It adds the given element at first index
console.log(myArr)
console.log(myArr.includes(8)) //It checks the element present or not
console.log(myArr.indexOf(8)) //It gives the index number of array
console.log(myArr.join()) //It coverts array type into string type
console.log(myArr.slice(1,4))//It gives the index values from strting index value to -1of index value
console.log(myArr.splice(1,5))

let marvel_Heros=["Thor","IronMan","SpiderMan"]
let dc_Heros=["Superman","Batman","Flash"]
// console.log(marvel_Heros.push(dc_Heros))
// console.log(marvel_Heros.concat(dc_Heros))//It combines the both arrays and give op as another array
let all_new_Heros=[...marvel_Heros, ...dc_Heros]//It combines the both arrays and give op as another array
console.log(all_new_Heros)

let anotherArr=[1,2,3,[4,5,[3,2,1]],7,[8,9,4]]
// console.log(anotherArr)
let anotherArray=anotherArr.flat(Infinity)//It removoes inner arrays and gives as single array
console.log(anotherArray)
console.log(Array.isArray(["Ramesh"]))//It check the element as array or not
console.log(Array.from("Ramesh"))//It convert string format into arrays format

let score1=100
let score2="200"
let score3="300"
console.log(Array.of(score1,score2,score3))