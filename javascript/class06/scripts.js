// // exercise 1
// let stringValue = `Darko`
// console.log(typeof(stringValue));
// console.log(stringValue);

// let numberValue = 12345;
// console.log(typeof(numberValue));
// console.log(numberValue);

// let booleanValue = false;
// console.log(typeof(booleanValue));
// console.log(booleanValue);

// let undefinedValue;
// console.log(typeof(undefinedValue));
// console.log(undefinedValue);

// let a = `something`;
// let b = 20;
// let sum = a * b;
// console.log(typeof(sum));
// console.log(sum);

// let nullValue = null;
// console.log(nullValue);
// console.log(typeof(nullValue));

// // exercise 2
// let inputNumber = parseInt(prompt("Please enter a number"));
// console.log(typeof(inputNumber));

// let inputString = prompt("Please enter a name");
// console.log(typeof(inputString));

// let inputBoolean = prompt(`Please enter if it is raining outside. Type "yes" for true or "no" for false`)
// if(inputBoolean === `yes`){
//     console.log(true);

// }else if(inputBoolean === `no`){
//     console.log(false);

// }

// let c = parseInt(prompt(`Enter first number you want to multiply`));
// let d = prompt(`Enter second number you want to multiply`);
// let sumInput = c * d;
// console.log(sumInput);

//exercise 3
// let inputNumber = parseInt(prompt("Please enter a number"));
// function calculateDifference(number) {
//   let f = 13;

//   let sum = number - f;
//   if (number > f) {
//     return sum * 2;
//   } else {
//     return sum;
//   }
// }
// console.log(calculateDifference(inputNumber));

//exercise 4
// function closerNumber(){
//     let a = parseInt(prompt(`Enter the main number`));
//     let b = parseInt(prompt(`Enter the first number`));
//     let c = parseInt(prompt(`Enter the second number`));
//     let sumBigger = a - c;
//     let sumSmaller = a - b;
//     if(c <= a && b <= a){
//     if(c > 0 && b > 0){
//     if(sumBigger > sumSmaller){
//         return `${b} is closer to ${a}`

//     }
//     else if(sumBigger < sumSmaller){
//         return `${c} is closer to ${a}`
//     }

// }
// else if(c < 0 || b < 0) {
//     alert (`Please enter a positive number`);
// }
// }
// else{
//     alert (`ERROR`);
// }}

// console.log(closerNumber());

//exercise 5
//  let plata = 1000;
//  let rent = parseInt(prompt(`Enter how much you pay for rent`));
//  let bills = parseInt(prompt(`Please enter how much you pay for bills`));
//  let sales = parseInt(prompt(`Enter how much gross you made this month`));

//  function bobProblem(plata, rent, bills, sales) {
//    let bonus = 0.1 * sales;
//    let plataWithBonus = plata + bonus;
//    let leftMoney = plataWithBonus - (rent + bills);
//    let expenses = rent + bills;
//    if (bonus > 500) {
//      console.log(`You have made ${bonus} more money this month in bonuses`);

//      if (rent < plataWithBonus && bills < plataWithBonus) {
//        if (rent > 0 && bills > 0) {
//          console.log(`You have ${leftMoney} left for this month`);
//          console.log(`You have ${expenses} in expenses this month`);
//        } else if (rent < 0 || bills < 0) {
//          console.log(`Please enter a valid number`);
//        }
//      } else {
//        alert(`ERROR`);
//      }
//    } else if(bonus <= 500) {
//      if (rent < plata && bills < plata) {
//          if (rent > 0 && bills > 0) {
//            console.log(`You have ${leftMoney} left for this month`);
//            console.log(`You have ${expenses} in expenses this month`);
//          } else if (rent < 0 || bills < 0) {
//            console.log(`Please enter a valid number`);
//          }
//        }
//    }
//    else{
//      alert(`ERROR`)
//    }
//  }

//  console.log(bobProblem(plata, rent, bills, sales));

// =======HOMEWORKS============ //

//exercise 6
//  let grades = alert(`Enter your grades from this semester:`);
//  let firstGrade = parseInt(prompt("Enter your Math grade:"));
//  let secondGrade = parseInt(prompt("Enter your Physics grade:"));
//  let thirdGrade = parseInt(prompt("Enter your History grade:"));
//  let fourthGrade = parseInt(prompt("Enter your English grade:"));
//  let fifthGrade = parseInt(prompt("Enter your Biology grade:"));
//  let average = (firstGrade + secondGrade + thirdGrade + fourthGrade + fifthGrade) / 5;
//  function passingSemester() {
//   if(firstGrade > 0 && secondGrade > 0 && thirdGrade > 0 && fourthGrade > 0 && fifthGrade >0){
//    if (average > 8) {
//      alert(`You have passed`);
//    } else {
//      alert("You have not passed");
//    }}
//    else if(firstGrade  <= 0 || secondGrade <= 0 || thirdGrade <= 0 || fourthGrade <= 0 || fifthGrade <= 0){
//     alert("Please enter a valid number as a grade")

//    }
//    else{
//     alert("ERROR!!!")
//    }
//  }
//  console.log(passingSemester());

//exercise 7

// function removeFalsyValues(array) {
//   let truthyArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       truthyArray.push(array[i]);
//     }
//   }

//   return truthyArray;
// }

// let array = [NaN, undefined, null, "", false, "Darko", "alfie", 12, 33, true];
// console.log(removeFalsyValues(array));

//exercise 8

// let toDoList = [];

// function addToList() {
//   let toDoInput = prompt(`Enter what do you need to do today`);
//   toDoList.push(toDoInput);
//   console.log(`You have added ${toDoInput} to your list`);
// }

// function showList() {
//   console.log(`Your to do list for the day contains:`);
//   for (let i = 0; i < toDoList.length; i++) {
//     console.log(`${i + 1}. ${toDoList[i]}`);
//   }
// }

// addToList();
// addToList();
// addToList();
// addToList();
// addToList();

// showList();

//exercise 9

//  let phoneContacts = [];

//  function addContact() {
//    while (true) {
//      let name = prompt(`Enter the contact full name:`);
//      let number = prompt(`Enter the contact number:`);

//      phoneContacts.push({ name, number });

//      alert(`You have succesfully added ${name} to your contact list.`);

//      let stopAdding = prompt(
//        `Do you want to continiue adding contacts? \n Type yes or no!`
//      );

//      if (stopAdding === "no") {
//        break;
//      }
//    }
//  }

//  function showContactList() {
//    console.log(`Your contact list contains of:`);
//    for (let i = 0; i < phoneContacts.length; i++) {
//      console.log(`${i + 1}. Full Name: ${phoneContacts[i].name} \n   Phone Number: ${
//          phoneContacts[i].number
//        }`);
//    }
//  }
//  addContact();
//  showContactList();


// //exercise 10

// function Academy(academyName, numberOfGroups, numberOfClassrooms){
//     this.academyName = academyName;
//     this.numberOfGroups = numberOfGroups;
//     this.numberOfClassrooms = numberOfClassrooms;
//     this.showAcademyName = function(){
//         console.log(`The academy name is: ${this.academyName}`);
        
//     }
// }


// function Student(firstName, lastName, age, email, academy, group){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.academy = academy;
//     this.group = group;
//     this.showEnrolledAcademy = function(){
//         console.log(`${this.firstName} ${this.lastName} is enrolled to ${this.academy.academyName}`);
        
//     }
// }


// function Group(name, numberOfStudents, students){
//     this.name = name;
//     this.numberOfStudents = numberOfStudents;
//     this.students = students;
//     this.showNumberOfStudents = function(){
//         console.log(`The group ${this.name} has ${this.numberOfStudents} students`);}
// }

    


// let academy = new Academy(`Qinshift academy`, 9, 6)
// let academy1 = new Academy(`Semos academy`, 15, 6)

// let firstStudent = new Student(`Darko`, `Milanovski`, 23, `darkomilanovski45@gmail.com`, academy, undefined)
// let secondStudent = new Student(`Martin`, `Panovski`, 33, `panovskimartin@gmail.com`, academy, undefined)
// let thirdStudent = new Student(`Angel`, `Ivanovski`, 27, `angeleivanovski@gmail.com`, academy1, undefined )

// let group = new Group(`G2(Palmyra)`, 22, [firstStudent, secondStudent]);
// let group2 = new Group(`G3(Something)`, 20, [thirdStudent]);


// academy.showAcademyName();
// firstStudent.showEnrolledAcademy();
// secondStudent.showEnrolledAcademy();
// group.showNumberOfStudents();

// academy1.showAcademyName();
// thirdStudent.showEnrolledAcademy();
// group2.showNumberOfStudents();


