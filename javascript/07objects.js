let mysym="mykey"
let jsUser={
    name:"Ramesh",
    mysym:"Key",
    email:"ramesh@gmail.com",
    "role":"Batsmen",
    city:"Sircilla",
    isLoggedIn:true
}
console.log(jsUser.name)
console.log(jsUser.isLoggedIn)
console.log(jsUser.role)
console.log(jsUser.mysym)
jsUser.greeting=function(){
    console.log("Hello")
}
jsUser.greetings=function(){
    console.log(`Hi $(This.name)`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetings())
console.log(jsUser.email)
Object.freeze(jsUser) //To freeze the obeject
jsUser.email="polasa@"
console.log(jsUser.email)
// let tinderUser=new Object //It is singleton object
let tinderUser={}
tinderUser.id="rams"
tinderUser.name="Ramesh"
tinderUser.email="rameshpolasa@gmail.com"
tinderUser.city="Sircilla"
tinderUser.isLoggedin=false
console.log(tinderUser.isLoggedin)
console.log(tinderUser.email)
tinderUser.id="ramesh#@"
Object.freeze(tinderUser)
tinderUser.city="Karimnagar"
console.log(tinderUser.id)
console.log(tinderUser.city)
tinderUser.email="polasaramesh"
console.log(tinderUser.email)

let regularUser={
    email:"rameshpolasa",
    username:{
        userFullname:{
            firstname:"Ramesh",
            lastname:"Polasa"
        }
    }
}
console.log(regularUser.username.userFullname.firstname)
console.log(regularUser.username.userFullname)
console.log(regularUser.username)

let obj1={
    1:"a", 2:"b"
}
let obj2={
    3:"c",4:"d"
}
console.log(obj1,obj2)
const obj3=Object.assign({},obj1,obj2)
console.log(obj3)
const obj4={...obj1,...obj2}
console.log(obj4)
let user=[
    {
        Id:"Ramesh@",
        email:"rameshpolasa",
        city:"Sircilla"
    },
    {
        Id:"Suvarna",
        email:"suvarna@gmail.com",
        city:"Hyderabad"
    },
    {
        Id:"Ramya",
        email:"ramya@gmail.com",
        city:"Siricilla"
    }
]
console.log(user[0].email)
console.log(user[0].Id)
console.log(user[0].city)
console.log(user[1].Id)
console.log(user[1].email)
console.log(user[1].city)
console.log(user[2].Id)
console.log(user[2].email)
console.log(user[2].city)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))//Gives output as arrays form
console.log(tinderUser.hasOwnProperty('isLoggedin'))//It checks the value present or not
console.log(tinderUser.hasOwnProperty('email'))
console.log(tinderUser.hasOwnProperty('userid'))
let course={
    courseName:"webdevelopment",
    price:"999",
    site:"Udemy"
}
let {}=course
let {site}=course //It is used to destructure the code
console.log(course.site)
console.log(course)
console.log(site)
let {site:s}=course
let{price:e}=course
console.log(s)
console.log(e)