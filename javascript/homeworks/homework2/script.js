let input = prompt("Please enter your birth year");
let parsedInput = parseInt(input);

let formula = (parsedInput - 4) % 12;
console.log(formula);
if(!isNaN(formula)){
if (formula == 0) {
  alert("Your zodiac sign is Rat");
} else if (formula == 1) {
  alert("Your zodiac sign is Ox");
} else if (formula == 2) {
  alert("Your zodiac sign is Tiger");
} else if (formula == 3) {
  alert("Your zodiac sign is Rabbit");
} else if (formula == 4) {
  alert("Your zodiac sign is Dragon");
} else if (formula == 5) {
alert("Your zodiac sign is Snake")
} else if (formula == 6) {
alert("Your zodiac sign is Horse")
} else if (formula == 7) {
alert("Your zodiac sign is Goat")
} else if (formula == 8) {
 alert("Your zodiac sign is Monkey")
} else if (formula == 9) {
alert("Your zodiac sign is Rooster")
} else if (formula == 10) {
alert("Your zodiac sign Dog")
} else if (formula == 11) {
alert("Your zodiac sign is Pig")
}
}
else{
    alert("Please enter a valid year")
}
