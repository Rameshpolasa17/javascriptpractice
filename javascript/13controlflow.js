// const num=true
// if (true) {
//     console.log("Executed")
// }
// const balance=1000
// if (balance<500) {
//     console.log("It is less than 500")
// }else if (balance<=400) {
//     console.log("It is less than 500")
// }else if (balance==600) {
//     console.log("It is greater than 500")
// }else if (balance>1000) {
//     console.log("It is greater than 1000")
// }else if (balance==500) {
//     console.log("It is equal")
// }

// let num=200
// if (num>100) {
//     let add="Hello"
//     console.log(`${add} Ramesh`)
// }
// // console.log(`${add} hi`)

// const debitCard=true
// const LoggedIn=true
// const giftVoucher=false
// if (debitCard&&LoggedIn%% 2===3) {
//     console.log("You can make payment")
// }else{
//     console.log("Please choosen another payment oprion")
// }
// if (debitCard || giftVoucher) {
//     console.log("You can make payment")
// }


////----------Switch statements-------------------

// const month = 11

// switch (month) {
//     case 1:
//         console.log("It is jan")
//         break;
//     case 2:
//         console.log("It is feb")
//         break;
//     case 11:
//         console.log("It is nov")
//         break;     
//     default:
//         console.log("It is defalut case")
//         break;
// }


//------------Truthy falsy statements-------------------

// const balance=[]
// if (balance) {
//     console.log("Ok")
// }else{
//     console.log("No")
// }

// const tea=[]
// if (tea.length===0) {
//     console.log("Array It is empty")
// }else{
//     console.log("Not empty")
// }

// const emptyObj={}
// if (Object.keys(emptyObj===0)) {
//     console.log("Object is empty")
// }else{
//     console.log("Object is not empty")
// }

// Flasly values------------------------------------
// false , 0, -0, BigInt0n, null, undefined, NaN

// Truthy values------------------------------------
// true, "0", "false", " ", [], {}, function(){}

// false==0 =>true
// false==""=>true
// 0==""=>true

//Null coalescing operator---------------------

// let val1=6
// val1=5??10
// val1= null??10??20
// console.log(val1)

//Ternary operator-----------------------------

// const teaPrice=20
// teaPrice>15? console.log("Price is high") : console.log("Price is OK")