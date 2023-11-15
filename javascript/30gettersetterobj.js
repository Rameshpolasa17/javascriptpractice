// const User = {
//     _email: 'h@hc.com',
//     _password: "abc",


//     get email(){
//         return this._email.toUpperCase()
//     },

//     set email(value){
//         this._email = value
//     }
// }

// const tea = Object.create(User)
// console.log(tea.email);


const user={
    _password:"123",
    _city:"Srcl",

    get password(){
        return this._password
    },

    set password(value){
        this._password=value
    },


    get city(){
        return this._city
    },
     set city(value){
        this._city=value
     }
}

const details=Object.create(user)

console.log(details.password)
console.log(details.city)