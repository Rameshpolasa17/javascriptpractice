class user{
    constructor(password,city){
        this.password=password
        this.city=city
    }

    get password(){
        return this._password
    }

    set password(value){
        this._password=value
    }
}

const details= new user("123","Srcl")

console.log(details.password)