// const user={
//     userName:"Ramesh",
//     password:"123",
//     getuserDetails:function(){
//         console.log("Hello User")
//         console.log(`Hello ${this.userName}`)
//         console.log(this)
//     }
// }
// console.log(user.userName)
// console.log(user.getuserDetails())
// console.log(this.userName)
function user(userName,isLoggedIn,password){
    this.userName=userName
    this.isLoggedIn=isLoggedIn
    this.password=password
    this.greetings=function(){
        console.log(`${this.userName}`)
    }
    return this
}
const userOne= new user("Ramesh", true, "123")
const userTwo= new user("Hello",false,"234")
console.log(userOne)
console.log(userTwo)
