let numbers = [2, 4, 5, 3, 5, 6, 9];

let numbersList = document.getElementById(`list-element`);
let equationFinal = document.getElementById(`equationFinal`);

let equation = " ";
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  numbersList.innerHTML += `<li> ${numbers[i]} </li>`;

  equation += numbers[i];
  if (i < numbers.length - 1) {
    equation += " + ";
  }
  sum += numbers[i];
}

equation += `= ${sum}`;
equationFinal.innerText = `The mathematical equation SUM from these numbers is: \n ${equation}`;
