// Create an object using constructor function

function Person(firstName, lastName, birthYear, isEmployed){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.isEmployed = isEmployed;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.calculateAge = function(currentYear){
        return currentYear - this.birthYear;
    }
}


// new e keyword za kreiranje nov objekt
let martin = new Person(`martin`, `panovski`, 1993, true); // nova istanca od objektot Person
let frose = new Person(`Frosina`, `Stamenkovska`, 1993, true);

martin.isLazy = false;

console.log(martin);
console.log(frose);
console.log(frose.calculateAge(2024));
console.log(martin.calculateAge(2024));

function windowSize(){
    let width = this.innerWidth;
    let height = this.innerHeight;
    return [width, height]
}
console.log(windowSize());


console.log(this);


