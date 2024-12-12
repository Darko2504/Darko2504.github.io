// OBJECTS group together a set of variables and functions to create a model of a smth you would recognize from the real world
// variables are properties
// functions are methods 
// all properties are known as a key(moze da ima edno properti so isto ime vo eden objekt)
// so tocka se doaga do metod ili method "." e member operator


// Create an object - Literal Notation

let person = {
    firstName: `Darko`,
    lastName: `Milanovski`,
    age: 23,
    hobbies: [`gym`, `gaming`],
    isLazy: false,

    getFullName: function(){
        return this.firstName + ` ` + this.lastName;
    },

    showHobbies: function(){
        for(let hobby of this.hobbies){
            console.log(hobby);
            
        }
    }
}
console.log(person);
console.log(person.firstName +  person.age);
console.log(person.getFullName());
console.log(person.showHobbies());

//  we can change the objects after their creation
// Add property or method after the object is created

person.height = 180;
console.log(person);


person.getHeight = function (){
    return this.height
}
console.log(person.getHeight());


