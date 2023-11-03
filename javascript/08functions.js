function saymyName(){
    console.log("Ramesh")
    console.log("Polasa")
}
saymyName()

function addtwoNumbers(a,b){
    console.log(a+b)
}
// addtwoNumbers(7,8)
function addnumbers(c,d){
    let result=c+d
    return result
}
let result=addnumbers(6,6)
console.log("Result is",result)

function loginUserName(usename){
    if(usename===undefined){
        return "Please enter the valid username"
        // console.log("Please enter the valid name")
    }
    else{
        return `${usename} just logged in`
    }
}
console.log(loginUserName("Ramesh"))
console.log(loginUserName("Suvarna"))
console.log(loginUserName("Ramya"))
console.log(loginUserName())
loginUserName()

function loginUserName(usename="Ramesh"){
    if(usename===undefined){
        return "Please enter the valid username"
        // console.log("Please enter the valid name")
    }
    // if(!usename){
    //     return "Please enter the valid username"
    //     // console.log("Please enter the valid name")
    // }
    else{
        return `${usename} just logged in`
    }
}
console.log(loginUserName("Ramya"))

function cart(num1){
    return num1
}
console.log(cart(200,300,300,400))
function cartitems(...num1){
    return num1
}
console.log(100,200,300,400)
function cartitem(val1,val2,...num1){
    return val1
}
console.log(cartitem(200,300,100,30))

let user={
    username:"Ramesh",
    city:"Sircilla"
}
function checkDetails(users){
    return `The Username is ${users.username} and the City is ${users.city}`
}
console.log(checkDetails(user))
console.log(checkDetails({
    username:"Suvarna",
    city:"Hyderabad"
}))

let arrays=[100,200,300,400]
function checkArrays(newarrays){
    return `The value is ${newarrays[2]}`
}
console.log(checkArrays(arrays))
console.log(checkArrays([1000,2000,3000,4000]))

let Arrays=[
    {
        user:"Ramesh",
        email:"gamil.com"
    },
    {
        user:"Suvarna",
        email:"gamil.com"
    },
    {
        user:"Ramya",
        email:"gamil.com"
    }
]
function check(newarray){
    return `The name is ${newarray[1].email}`
}
console.log(check(Arrays))