// const promiseOne= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Hello")
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("How are you")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Hello2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("How are you again")
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({userName:"Ramesh",Email:"polasa@"})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if (!error) {
//             resolve({userName:"Ramesh",Email:"polasa@"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })
// promiseFour.then(function(user){
//     console.log(user)
//     return user.userName
// }).then(function(userName){
//     console.log(userName)
// }).catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("Executed")
// })

// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if (!error) {
//             resolve({userName:"Ramesh",password:"123"})
//         }else{
//             reject('ERROR-NOT FOUND')
//         }
//     },1000)
// })
// promiseFour.then(function(user){
//     console.log(user)
//     return user.password
// }).then(function(password){
//     console.log(password)
// }).catch(function(error){
//     console.log(error)
// })

// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if (!error) {
//             resolve({userName:"Ramesh",password:"123"})
//         }else{
//             reject('Error-not found')
//         }
//     },1000)
// })
// async function consumepromiseFive(){
//     try {
//         const response= await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumepromiseFive()

// async function getallUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }
// getallUsers()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})