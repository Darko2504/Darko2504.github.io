console.log("======== LOGICAL OPERATORS ==========");

console.log(30 > 50); // true
console.log(30 < 50); // false


console.log();
console.log("======== Logical AND && =========="); // mora dvete strani da se true sza da bide true ako ednata strana e false ke bide false
console.log(true && true);
console.log(true && false);

let num1 = 50;
let num2 = 100;
console.log(num1 < num2 && num2 === 150); // true && false => false

console.log(num1 < num2 && num2 + 50 === 150); // true.. bidejki dvete strani se true

//primer

let expression = num1 < num2 && num2 <= 100 && num1 + 10 !== 60;
console.log(expression); // false

console.log("======== LOGICAL OR || =========="); //ILI
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

let number1 = 3;
let number2 = 13;
 
console.log(number1 < number2 || number2 >= 10); // dokolku ednata strana e true togas celiot izraz ke bide true

console.log(5 > 0 && (5 + 6 <10) || 10 > 5); //true bidejki || koga koristim vakvi ako edno e true togas ke bide true
// breakdown:
// 5 > 0 => true
// 11 < 10 => false
// 10 > 5 => true
// true && false || true
// false || true => true  bidejki barem edno e true


console.log();
console.log("======== LOGICAL NOT ! ==========");
console.log(!true); // false
console.log(!false); // true

let isValid = false;
console.log(isValid); // false
console.log(!isValid); // true

let numOne = 100;
let numTwo = 1000;
console.log(!(numOne > numTwo) && "Bob" == "Bob"); //! negira true ili negira false .. go pravi vo sprotivnoto
// breakdown
// 100<1000 - false ama ! pravi negacija i go pravi true ustvari obratnoto
// true bob == bob
//true and true
// true e finalno

console.log();
console.log("======== EQUALITIES ==========");
//edno ednakvo se koristi za inicijalizacija koga koristime edno ednakvo treba da stavime varijabla.. samo koga zadavame varijabla
//== sporeduvanje vrednost (equality)
// === sporeduva vrednost i tip (number i string itn, strict equality)
console.log(3 == "3"); // true
console.log(3 === "3"); // false

console.log();
console.log("======== TRUTHY/FALSY VALUES=========="); // truthy ili falsi pravime so boolean
// 0 e sekogas falsy vrednost.. praznoto mesto se smeta za karakter, moze da bide validen string ili truthy
let numberOne = -1000;
let numberTwo = 0;
 // !! se koristi kako boolean PRETVARA NESTO VO IZVICNICI BEZ ZAGRADI NEMA PPOTREBA
console.log(Boolean(numberOne)); //true
console.log(Boolean(numberTwo)); //false


console.log(Boolean("")); // false
console.log(Boolean(" ")); //true


console.log(Boolean(null)); // false
console.log(Boolean(!null)); // true













  


























