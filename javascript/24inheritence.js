// class user{
//     constructor(username){
//         this.username=username
//     }
//     logMe(){
//         console.log(`${this.username} is LoggedIn`)
//     }
// }
// class Teacher extends user{
//     constructor(username,email,city){
//         super(username)
//         this.email=email
//         this.city=city
//     }
//     addCourse(){
//         console.log(`A new course added ${this.email}`)
//         console.log(`${this.username}`)
//     }
// }

// const details=new Teacher("Ramesh", "Js","234")
// details.logMe()
// details.addCourse()
// const newDetails= new user("Suvarna")
// newDetails.logMe()
// // newDetails.addCourse()
// console.log(Teacher instanceof user)
// console.log( user instanceof Teacher)
// console.log(details instanceof Teacher)
// console.log(newDetails instanceof Teacher)
// console.log(newDetails instanceof user)