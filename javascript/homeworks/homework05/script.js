//PRV NACIN

// let animal = {
//     name: `Robi`,
//     kind: [`cat`, `dog`, `snake`],
//     message: `Hey bro!!!`,
//     speakingAnimal: function(){
//         let input = prompt("Enter what animal would you like to adopt. Snake, dog or a cat")
//         if(input == this.kind[0]){
//             console.log(`${input} says:${this.message} `);
            
//         }else if(input == this.kind[1]){
//             console.log(`${input} says: ${this.message}`);
            
//         }else if(input == this.kind[2]){
//             console.log(`${input} says: ${this.message}`);
            
//         }else{
//             alert("Please enter an animal from the existing list!!")
//         }
//     }
// }
// console.log(animal.speakingAnimal());


//VTOR NACIN

//  let animal = new Object();
//  animal.name = `Robi`;
//  animal.kind = [`dog`, `cat`, `snake`];
//  animal.message = `Hey bro!!!`
//  animal.speakingAnimal = function(){
//     let input = prompt("Enter what animal would you like to adopt. Snake, dog or a cat")
//             if(input == this.kind[0]){
//                 console.log(`${input} says:${this.message} `);
                
//             }else if(input == this.kind[1]){
//                 console.log(`${input} says: ${this.message}`);
                
//             }else if(input == this.kind[2]){
//                 console.log(`${input} says: ${this.message}`);
         
//             }else{
//                 alert("Please enter an animal from the existing list!!")
//             }
//         }
//  console.log(animal.speakingAnimal());
 

//TRET NACIN
// function Animal(name, kind){
//     this.name = name;
//     this.kind = kind;
//     this.dogSpeak = function(){
//         console.log(`Dog says: Hey bro!!!`);
        
//     }
//     this.catSpeak = function(){
//         console.log(`Cat says: Hello bro!!!`);
        
//     }
//     this.snakeSpeak = function(){
//         console.log(`Snake says: Hello bro!!!`);
        
//     }
//     }

//     let cat = new Animal(`dzeki`, `cat`)
//     let dog = new Animal(`dzeki`, `dog`)
//     let snake = new Animal(`dzeki`, `snake`)
//     let input = prompt("Please choose a pet for adoption. Snake, dog or cat?")
//     if(input === `dog`){
//         console.log(dog.dogSpeak());
        
//     }   else if(input === `cat`){
//         console.log(cat.catSpeak());
        
//     }   else if(input === `snake`){
//         console.log(snake.snakeSpeak());
        
//     }   else{
//         alert("Please enter one of the three options")
//     }

    
    

//VTORA DOMASNA
function Book(title, author, readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;
    this.checkBook = function(){
        
        if(readingStatus == firstBook.readingStatus){
            console.log(`You have already read ${firstBook.title} by ${firstBook.author}`);
            
        }else if(readingStatus == secondBook.readingStatus){
            console.log(`You still need to read ${secondBook.title} by ${secondBook.author}`);
            
        }
    }
}

let firstBook = new Book(`The Robots of dawn`, `Isaac Asimov`, true)
let secondBook = new Book(`Mockingjay`, `Suzane Collins`, false)

let input = prompt(`Enter "check" if you want to check the books you have finished. \n Enter "continiue" if you  want to see which books you have not finished yet`)
if(input === `check`){
console.log(firstBook.checkBook());
} else if(input === `continiue`){
console.log(secondBook.checkBook());}

