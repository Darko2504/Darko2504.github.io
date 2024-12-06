// funkciite mora da se deklariraat kako varijabla i da kazeme so ke pravi

// FUNCTION DECLARATION

function sayHello() {
  console.log("Hello there!");
}

// ======== CALLING FUNCTION TO BE EXECUTED ======

sayHello();
sayHello();
sayHello();

// function sayGoodBye() {
//   console.log("Goodbye! See you next week");
// }
// sayGoodBye();

// function addTwoNumbers(){
//     let firstNum = 22;
//     let secondNum = 324;
//     let result = firstNum + secondNum;
//     console.log(result);

// }
// addTwoNumbers();

// // function sumTwoNumbers(){
// //     let firstNum = parseInt(prompt("Please enter first number:"));
// //     let secondNum = parseInt(prompt("Please enter a second numbeR:"));
// //     let result = firstNum + secondNum;
// //     console.log(`The sum of the two numbers is ${result}`)
// // }

// // sumTwoNumbers();

// //===============FUNCTIONS WITH ARGUMENTS============

//document write pisuva vo ekran direkt
function sayMyFullName(firstName, lastName) {
  document.write(`${firstName} ${lastName}`);
}

sayMyFullName(`Darko`, `Milanovski`);
sayMyFullName(`Elena`, `Cvetkovska`);

//========FUNCTIONS THAT RETURN VALUES=======

function returnValue(value) {
  return value;
}

console.log(returnValue("This will be returned"));

function greetSomeone(personName) {
  let greeting = `Hello there ${personName}`;
  return greeting;
}

console.log(greetSomeone(`Slave`));
console.log(greetSomeone(`Slave`));
console.log(greetSomeone(`Slave`));
let greetMessage = greetSomeone(`Angel`);
console.log(greetMessage);

//===== parameter mismatch ====

function sayMyNameAndYears(firstName = Darko, lastName = Milanovski, years = 20) {
  console.log(`${firstName} ${lastName} is ${years} years old`);
}

sayMyNameAndYears(`Angel`, `Ivanovski`, `32` );


function myCustomeAlert(message){
  alert(message);
}
myCustomeAlert("Hello there!");
 // number prima string a go vraka kako brojka
let myNum = Number("22")
// string prima brojka ama vraka kako brojka
let myString = String(22);


