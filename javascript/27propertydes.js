const chai={
    name:"Chai",
    price:"30",
    isAvvailable:true,

    orderChai:function(){
        console.log("Order Taken")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    enumerable:true,
    writable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}