let myDate= new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)
let mynewDate=new Date("11-01-2023")
console.log(mynewDate)
console.log(mynewDate.toDateString())
let myanotherDate=new Date(2023,10,1,13,18)
console.log(myanotherDate.toLocaleString())
let newDate=new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth()+1)
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleString('default',{
    "hourCycle":"h12"
}))
