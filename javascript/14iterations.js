for (let i = 0; i <=10; i++) {
    console.log(i)
    
}
for (let i = 1; i <=10; i++) {
    //console.log(`The outer loop is ${i}`)
    for(let j=1; j<=10;j++){
        //console.log(`The inner loop is ${j} and the outer loop is ${i}`)
       // console.log(i+" * "+j+" = "+ i*j)
        console.log(i+" * "+j+" = "+ i*j)
    }   
}
for (let i = 0; i <=10; i++) {
    if (i==5) {
        console.log("Found 5")
    }
    console.log(i)
}

let names=["Kohli", "Rohit", "Shreyas"]
for (let i = 0; i < names.length; i++) {
    const element = names[i]; 
    console.log(element) 
}

// Break and continue----------------------------

for (let i = 0; i <= 10; i++) {
    if (i==5) {
        console.log("Found")
        break;
    }
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    if (i==5) {
        console.log("5 cannot be displayed")
        continue;
    }
    console.log(i)
}

