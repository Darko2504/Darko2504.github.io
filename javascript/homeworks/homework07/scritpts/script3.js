function weightInChickens(kilograms){
    let weight = kilograms * 0.5;
    return weight;
}

let finalWeight = document.getElementById(`myWeight`);
let userInput = parseInt(prompt(`Enter your weight in kilograms:`));

finalWeight.innerText = `Your weight is ${userInput} kg.\n You weight ${weightInChickens(userInput)} chicken adults!`