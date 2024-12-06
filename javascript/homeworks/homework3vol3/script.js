let balance = 1000;

function withdrawFromATM(amount) {
  if (amount > balance) {
    return "Not enough money";
  } else if ((balance -= amount));
  return `You have withdrawn $${amount}. You have $${balance} left in your account`;
}
function inputATM() {
  let withdrawAmount = prompt("Enter the amount you want to withdraw:");
  let sum = withdrawFromATM(withdrawAmount);
  alert(sum);
}
inputATM();
