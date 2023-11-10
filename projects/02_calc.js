const form= document.querySelector('form')


form.addEventListener('submit', function(e){
    e.preventDefault(); // To delay the submission
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    const guide = document.querySelector('#weight-guide')
    if (height==='' || height<0|| isNaN(height)) {
        result.innerHTML=`Please add the valid Height ${height}`
    }
    else if (weight==='' || weight<0|| isNaN(weight)) {
        result.innerHTML=`Please add the valid Weight ${weight}`
    }
    else{
        const bmi= (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
        if (bmi<=18.9) {
            guide.innerHTML=`You are underweight`
        }else if (bmi>18.6 && bmi<24.9){
            guide.innerHTML=`You are in normal range`
        }else{
            guide.innerHTML=`You are overWeight`
        }
    }
});