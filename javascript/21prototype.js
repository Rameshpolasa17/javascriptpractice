let myheros=["Kohli","Raina"]
let myherosPower={
    Kohli:"Coverdrive",
    Raina:"Insideout",
    getrainaPower:function(){
        console.log(`Raina power is ${this.Raina}`)
    }
}

Object.prototype.ramesh=function(){
    console.log("Ramesh is fan of Raina")
}
Array.prototype.heyramesh=function(){
    console.log(`Ramesh is fan of Kohli`)
}
myheros.ramesh()
myherosPower.ramesh()
myheros.heyramesh()
// myherosPower.heyramesh()

const user={
    username:"Chai",
    email:"google.com"
}
const Teacher={
    makeVideo:true
}
const teachingStaff={
    isAvvailable:false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingStaff
}
Teacher.__proto__=user
Object.setPrototypeOf(teachingStaff,Teacher)

let anotherUsername="Salaar     "

String.prototype.trueLength=function(){
    console.log(`${this.trim().length}`)
}

console.log(anotherUsername.trueLength())
"Ramesh".trueLength()