let input = prompt("Please enter your birth year");
let parsedInput = parseInt(input);

let formula = (parsedInput - 4) % 12;
if(!isNaN(formula)){
switch (formula) {
  case 0:
    alert("Your zodiac sign is Rat");
    break;
  case 1:
    alert("Your zodiac sign is Ox");
    break;

  case 2:
    alert("Your zodiac sign is Tiger");
    break;

  case 3:
    alert("Your zodiac sign is Rabbit");
    break;

  case 4:
    alert("Your zodiac sign is Dragon");
    break;

  case 5:
    alert("Your zodiac sign is Snake");
    break;

  case 6:
    alert("Your zodiac sign is Horse");
    break;

  case 7:
    alert("Your zodiac sign is Goat");
    break;

  case 8:
    alert("Your zodiac sign is Monkey");
    break;

  case 9:
    alert("Your zodiac sign is Rooster");
    break;

  case 10:
    alert("Your zodiac sign Dog");
    break;

  case 11:
    alert("Your zodiac sign is Pig");
    break;

  default:
    alert("There is no such year");
}}
else{
    alert("There is not such year")
}
