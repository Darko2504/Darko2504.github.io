$(document).ready(function () {
  let myBtn = $(`#myBtn`);
  let finalHeader = $(`#final`);

  console.log(myBtn);
  console.log(finalHeader);
  myBtn.click(function () {
    let inputParameter = $(`#inputName`).val();
    finalHeader.text(`Hello from ${inputParameter} !`);
    
  });

});
