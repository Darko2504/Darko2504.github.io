function farToCel(celcius){
    let sum = (celcius * 1.8) + 32;
    return sum;
} 
function celToFar(farenhite){
    let sum2 = (5 / 9) * (farenhite - 32);
    return sum2;
}
 let choice = prompt(" Write F for farenhite or C for celcius")
 let input = parseInt(prompt("Please enter the value you would like to convert"))

 if(choice === "F"){
    alert(`${celToFar(input)} C`)
    
 }
 else if(choice === "C"){
    alert(`${farToCel(input)} F`)
 }
 else {
    alert("Please enter a valid number")
 }


 