console.log("================ STRINGS ============")

let firstName;
let secondName;
firstName = "Bob";
lastName = "Bobski";


//===> using double quotes
let doubleQuotes = "This is a string with double quotes";
// ===> single quotes
let singleQuotes = "This is a string with single quotes";
// ===> backticks strings
    let backticksString = `This is a backticks string`; 

console.log("======== Combining strings =========");

// ====> using `+`
let fullName = "First name: " + " " + firstName;
console.log(fullName);

console.log("Last Name; " + " " + lastName);

console.log(firstName + " is " + 30 + " years old ");
console.log(2 + 2);
console.log(2 + "2");

fullName = `Full name ${firstName} ${lastName}`
console.log(fullName);

console.log("========   quOTES within strings =========");
// let sentence = 'This isn't possible'
let sentence1 = "This isn't hard";
let sentence2 = 'This is "Qinshift academy"';
let sentence3 = 'This isn\'t possible';
let sentence4 = '\'TO BE\' or \'NOT TO BE\'';
let sentence5 = `"${sentence4}, the question is now"`
console.log(sentence5);


console.log();

console.log("================ NON VALUES VALUES(NULL , UNDEFINED) ============")

//UNDEFINED
let undefinedVariable;
console.log(undefinedVariable);


//Null
let emptyVariable = null;
console.log(emptyVariable);


console.log();
console.log("================ SPECIAL NUMBERS ============");

console.log("================ NaN ============"); //Not a Number
console.log(typeof NaN);
let result = 100 / "deset";
console.log(result);

console.log(isNaN(result)); // Proveruvanje dali nekoj rezultat e NaN
console.log(isNaN("tekst")); //true
console.log(Number.isNaN("tekst")); // false(namenet e da proveruva samo broevi i matematicki operacii dali davaat broj)


console.log("================ INFINITY ============"); //Se vodi kako number
let infinity = Infinity;
console.log(infinity);
console.log(typeof infinity);


// BROJ DELEN SO 0 DOBIVA INFINITY AKO E POZITIVEN I -INFINITY AKO E SO NEGATIVEN BROJ. NE TREBA NIKOGAS DA DELIME SO 0
console.log(1 / 0);
console.log(-1 / 0);







