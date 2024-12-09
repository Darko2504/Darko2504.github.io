let balance = 1000;

function withdrawFromATM(amount) {
  if (amount > balance) {
    return "Not enough money";
  } else { balance -= amount
  return `You have withdrawn $${amount}. You have $${balance} left in your account`;
  }
}
function inputATM() {
  let withdrawAmount = parseInt(prompt("Enter the amount you want to withdraw:"));
  let sum = withdrawFromATM(withdrawAmount);
  alert(sum);
}
inputATM();
