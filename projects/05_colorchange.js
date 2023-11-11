let randomColor= function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i = 0; i < 6; i++) {
        color+= hex[Math.floor(Math.random()*16)]
        
    }
    return color
};
function changebgColor(){
    document.body.style.backgroundColor=randomColor();
}
let intervalId;
const startchangingColor=function(){
    intervalId=setInterval(changebgColor,1000)
}
const stopchangingColor=function(){
    clearInterval(intervalId);
}
document.querySelector('#start').addEventListener('click',startchangingColor)
document.querySelector('#stop').addEventListener('click',stopchangingColor)