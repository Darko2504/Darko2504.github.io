//HUMAN INTO DOG YEARS
function dogYears(humanYears) {
  let sum = humanYears * 7;
  return sum;
}

let humanAge = parseInt(prompt("Enter your age:"));

if (!isNaN(humanAge)) {
  let dogAge = dogYears(humanAge);
  console.log(`The dog's age is: ${dogAge}`);
} else {
  alert("Please enter a valid number");
}

//DOG INTO HUMAN YEARS
function humanYears(dogYears) {
  let sum = dogYears / 7;
  return sum;
}

let dogAges = prompt("Enter your dog's age:");
if(!isNaN(dogAges)){
let humanAges = humanYears(dogAges);
console.log(`Your age is: ${humanAges}`);
}
else{
    alert("Please enter a valid number")
}
