for(let i = 0; i < 10; i++){
    console.log(i);
    
}

let workingDays = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`]

for(let i = 0; i < workingDays.length; i++){
    console.log(workingDays[i]);
    
}

console.log("This week Mon was non working day, so the working days were: ");

for(let i = 0; i < workingDays.length; i++){
    if(workingDays[i] === `Mon`){
        continue; // skoka 
    }
    console.log(workingDays[i]);
}

let names = [`Martin`, `Frose`, `Angel`, `Sandra`, `Ana`];

let userInput = prompt("Please search a name in my list: ")

for(let i = 0; i < names.length; i++){
    if(userInput === names[i]){
        console.log(names[i]);
        break; // prekinuva
    }

    
}

// for-of loop structurees
let colors = [`Blue`, `Orange`, `Green`, `Red`];
for(let color of colors){
    console.log(color);
    
}