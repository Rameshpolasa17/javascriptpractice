const changeText=function(){
    document.querySelector('h1').innerHTML="How are you"
}
let change=setTimeout(changeText,2000)
document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(change)
})