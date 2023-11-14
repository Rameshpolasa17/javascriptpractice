class user{
    constructor(userName,email,city){
        this.userName=userName
        this.email=email
        this.city=city
    }

    encryptPassword(){
        return `The password is ${this.email}123`
    }

    changeUsername(){
        return`${this.userName}`
    }
}

const namee= new user("Ramesh","@gmail.com","srcl")
console.log(namee.encryptPassword())
console.log(namee.changeUsername())

function user(userName,email,city){
    this.userName=userName
    this.email=email
    this.city=city
}
user.prototype.encryptPassword=function(){
    return `The password is ${this.email}123`
}
user.prototype.changeUsername=function(){
    return`${this.userName}`
}

const namee= new user("Ramesh","@gmail.com","srcl")
console.log(namee.changeUsername())
console.log(namee.encryptPassword())
