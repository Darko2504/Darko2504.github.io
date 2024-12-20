let firstDiv = document.getElementById(`first`);
let topicFirstDiv = firstDiv.firstElementChild;
console.log(topicFirstDiv);
let paragraphFirstDiv = topicFirstDiv.nextElementSibling;
console.log(paragraphFirstDiv);

let secondDiv = document.getElementsByClassName(`anotherDiv`);
let paragraphSecondDiv = secondDiv[0].firstElementChild;
console.log(paragraphSecondDiv);
let textSecondDiv = paragraphSecondDiv.nextElementSibling;
console.log(textSecondDiv);


let bodyElement = document.querySelector(`body`);
console.log(bodyElement);

let thirdDiv = bodyElement.firstChild.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(thirdDiv);
let topicThirdDiv = thirdDiv.firstElementChild;
console.log(topicThirdDiv);
let nextTopicThirdDiv = topicThirdDiv.nextElementSibling;
console.log(nextTopicThirdDiv);

topicFirstDiv.innerText = `Yea it's a cool changed page now`;
paragraphFirstDiv.innerText = `It is actually easy`

paragraphSecondDiv.innerText = `Yes it really is easy`
textSecondDiv.innerText = `I agree it is all about selecting elements`

topicThirdDiv.innerText = `Everything is changed, so is this`
nextTopicThirdDiv.innerText = `And the last changed thing is this`





