function user(password,city){
    this._password=password
    this._city=city

    Object.defineProperty(this, 'password',{
        get:function(){
            return this._password
        },
        set:function(value){
            this._password=value
        }
    })

    Object.defineProperty(this, 'city',{
        get:function(){
            return this._city
        },
        set:function(value){
            this._city=value
        }
    })
}

const details=new user("123","srcl")
console.log(details.password)
console.log(details.city)