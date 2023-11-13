const promiseOne= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hello")
    },1000)
    resolve()
})
promiseOne.then(function(){
    console.log("How are you")
})