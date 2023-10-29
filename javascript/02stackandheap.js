//stack
let myName = "Ramesh"
let mynickName=myName
mynickName= "Rammi"
console.log(myName);
console.log(mynickName)

//heap
let userOne={
    emailId:"ramesh@gmail.com",
    city:"Siricilla"
}
let userTwo=userOne
userTwo.emailId="polasa@gmail.com"
console.log(userOne.emailId)
console.log(userTwo.emailId)
console.log(userOne.city)
console.log(userTwo.city)