let myHeader = document.getElementById(`header`);
let myParagraph = document.getElementById(`paragraph`);
let  myButton = document.getElementById(`button`);
let myMagic = document.getElementById(`magic`);

function changeEverything (){
    myHeader.style.textAlign = `center`;
    myHeader.style.fontSize = `3rem`;
    myHeader.style.backgroundColor = `red`;
    myParagraph.style.color = `blue`;
    myParagraph.style.fontSize = `2rem`;
    myParagraph.style.backgroundColor = `violet`;
    myMagic.innerText = ``
}

myButton.addEventListener(`click`, changeEverything);