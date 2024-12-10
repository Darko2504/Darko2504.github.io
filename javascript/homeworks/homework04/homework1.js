//FIRST HOMEWORK
console.log("=====FIRST HOMEWORK======");

function tellStory(name, mood, activity) {
  return `This is ${name}. ${name} is a nice person. Today he is in a ${mood} mood. They are ${activity} all day. The end`;
}
console.log(tellStory("Darko", "good", "learning"));

//SECOND HOMEWORK
console.log("======SECOND HOMEWORK=======");
let numbers = [1, 3, 6, 8, 11];
function sumOfNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumOfNumbers(numbers));

//THIRD HOMEWORK
console.log("=====THIRD HOMEWORK====");
let strings = ["Darko ", "Milanovski ", "uci ", "vo ", "Qinshift Academy"];
function puttingStringsTogether(arrayStrings) {
  let result = "";
  for (let i = 0; i < arrayStrings.length; i++) {
    result += arrayStrings[i];
  }
  return result;
}
console.log(puttingStringsTogether(strings));

//FOURTH HOMEWORK
console.log("=====FOURTH HOMEWORK=====");

let result = "";
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    result += i + "\n";
  } else {
    result += i + " ";
  }
}

console.log(result);

//FIFTH HOMEWORK
console.log("====FIFTH HOMEWORK====");
let nums = [1, 3, 4, 8, 10, 5, 102];
function sumOfMinAndMax(nums) {
  let max = nums[0];
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else if (nums[i] < min) {
      min = nums[i];
    }
  }
  return max + min;
}
console.log(sumOfMinAndMax(nums));  //Stvarno neznam kako drugsija mi pregrea mozokot. Znam deka ne etocno da zadadam varijabla za min i max

//SIXTH HOMEWORK
let firstName = ["Darko", "Martin", "Frosina", "Angel"];
let lastName = ["Milanovski", "Panovski", "Stamenkovska", "Ivanovski"];
let fullNames = [];
function studentFullName(firstName, lastName) {
  for (let i = 0; i < firstName.length; i++) {
    let fullName = `${firstName[i]} ${lastName[i]}`;

    fullNames.unshift(`${i + 1}.  ${fullName}`);
  } 

  return fullNames;
}

console.log(studentFullName(firstName, lastName));
