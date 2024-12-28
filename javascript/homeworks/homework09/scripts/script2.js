$(document).ready(function () {
  let myBtn = $(`#generate`);
  let outputHeader = $(`#generatedHeader`);
  let errorHeader = $(`#errorHeader`);
  myBtn.on(`click`, function () {
    let colorInput = $(`#colorInput`);
    let selectedColor = colorInput.val();

    let textValue = $(`#textInput`);
    let text = textValue.val();
    if(text.trim() === ``){
        errorHeader.text(`Please enter a text`)
    }
   
   
    outputHeader.text(text);
    outputHeader.css(`color`, selectedColor);
  });
});
