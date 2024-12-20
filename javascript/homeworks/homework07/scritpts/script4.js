let firstHeader = document.getElementById(`firstHeader`);
let secondHeader = document.getElementById(`secondHeader`);
let thirdHeader = document.getElementById(`thirdHeader`);
let fourthHeader = document.getElementById(`fourthHeader`);
let fifthHeader = document.getElementById(`fifthHeader`);
let sixthHeader = document.getElementById(`sixthHeader`);

let firstHeaderList = document.getElementById(`firstHeaderList`);
let secondHeaderList = document.getElementById(`secondHeaderList`);
let thirdHeaderList = document.getElementById(`thirdHeaderList`);
let fourthHeaderList = document.getElementById(`fourthHeaderList`);
let fifthHeaderList = document.getElementById(`fifthHeaderList`);
let sixthHeaderList = document.getElementById(`sixthHeaderList`);

let firstPar = document.getElementById(`firstPar`);

let recipeName = prompt(`Enter the name of the first recipe`);
let ingridientsNumber = parseInt(prompt(`Enter how much ingridients are needed for the ${recipeName}`));
let newIngridients = [];
    while(true){
    let ingridientsInput = prompt(`Enter the next ingridient for the ${recipeName}:`);
    newIngridients.push(ingridientsInput);
    let stopAdding = prompt(`Type stop if you are done. Or just ENTER to continiue adding.`)
    if(stopAdding === `stop`){
        break;
    }
    }
   
    for(let i = 0; i < newIngridients.length; i++){
        firstHeaderList.innerHTML +=`<li>${newIngridients[i]}</li>`
    }
    
    
    


firstHeader.innerText = recipeName ;
firstPar.innerText = `The ${recipeName} contains ${ingridientsNumber} ingridients`


let recipeSecondName = prompt(`Enter the name of the second recipe:`);
let ingridientsSecondNumber = parseInt(prompt(`Enter how much ingridients are needed for the ${recipeSecondName}`));
let newSecondIngridients = [];
    while(true){
    let ingridientsInput = prompt(`Enter the next ingridient for the ${recipeSecondName}:`);
    newSecondIngridients.push(ingridientsInput);
    let stopAdding = prompt(`Type stop if you are done. Or just ENTER to continiue adding.`)
    if(stopAdding === `stop`){
        break;
    }
    }
   
    for(let i = 0; i < newSecondIngridients.length; i++){
        secondHeaderList.innerHTML +=`<li>${newSecondIngridients[i]}</li>`
    }
    
    
    


secondHeader.innerText = recipeSecondName ;
secondPar.innerText = `The ${recipeSecondName} contains ${ingridientsSecondNumber} ingridients`


let recipeThirdName = prompt(`Enter the name of the third recipe`);
let ingridientsThirdNumber = parseInt(prompt(`Enter how much ingridients are needed for the ${recipeThirdName}`));
let newThirdIngridients = [];
    while(true){
    let ingridientsInput = prompt(`Enter the next ingridient for the ${recipeThirdName}:`);
    newThirdIngridients.push(ingridientsInput);
    let stopAdding = prompt(`Type stop if you are done. Or just ENTER to continiue adding.`)
    if(stopAdding === `stop`){
        break;
    }
    }
   
    for(let i = 0; i < newThirdIngridients.length; i++){
        thirdHeaderList.innerHTML +=`<li>${newThirdIngridients[i]}</li>`
    }
    
    
    


thirdHeader.innerText = recipeThirdName ;
thirdPar.innerText = `The ${recipeThirdName} contains ${ingridientsSecondNumber} ingridients`