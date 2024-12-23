let myInputs = document.getElementById("inputs").children;
let final = document.getElementById("final");
let registerBut = document.getElementById("register");

function getUserInfo(myInputElements) {
  let result = `The user: `;
  for (let inputs of myInputElements) {
    result += inputs.value + ` `;
  }
  result += `is succesfully registered`;
  return result;
}
registerBut.addEventListener("click", function () {
  final.innerText = getUserInfo(myInputs);
});


