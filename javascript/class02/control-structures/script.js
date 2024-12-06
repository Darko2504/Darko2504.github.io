console.log("========== CONTROL STRUCTURES ============");
// 1) Conditional statements
// 2) Switch statement
// 3) Looping structures

//Purpose : Control the flow of a program

console.log();
console.log("=======CONDITIONAL STATEMENTS=========");


let num = -10;

console.log("======== IF STATEMENT=========");
//Base Syntax izvrsi go samo koga vo zagradite toa ke bide true
// if (boolean statement) {
    //     // code ....
    // }

 if (num > 0) {
    console.log(`The number ${num} is positive`);
    }
    
console.log();
console.log('====== ELSE STATEMENT =======');
//sekogas mora da ide posle if

if (num > 0) {
    console.log(`The number ${num} is positive`);
    }

    else     {
        console.log(`The number ${num} not positive`);
        

    }
        


    console.log();
    console.log('====== ELSE IF STATEMENT =======');
    if (num > 0) {
        console.log(`The number ${num} is positive`);
        
    }
    else if(num < 0){
        console.log(`The number ${num} is negative`);
        
    }
    else {
        console.log(`The number is zero`);
        
    }


    if (num < -5){
        console.log("Number is smaller than -5");
        
    }



    num  = 101;
    if(num > 100){
        console.log("The number is larger than 100");
        
    }
     else if (num > 0) {
        console.log(`The number ${num} is positive`);
        
    }
    else if(num < 0){
        console.log(`The number ${num} is negative`);
        
    }
    else {
        console.log(`The number is zero`);
        
    }


    //se izvrsuva samo eden true if . AKO IMA EDEN IF ... AKO IMA POVEKE IF SE IZVRSUVAAT SITE IF

    if(num > 0){
        console.log("The number is positive");
        
    }
     else if (num > 100) {
        console.log(`The number is larger than 100`);
        
    }
    else if(num < 0){
        console.log(`The number ${num} is negative`);
        
    }
    else {
        console.log(`The number is zero`);
        
    }



console.log();
console.log("=======getting an input=========");

let input = prompt("Enter a number: ")
console.log(input);
console.log(typeof input);

console.log();

console.log("AFTER PARSING THE INPUT TO INTEGER");

let parsedNumber = parseInt(input)
console.log(parsedNumber);
console.log(typeof parsedNumber);


/// SVE STO USEROT VNESUVA VO EKRAN VLEGUVA VO POZADINA KAKO STRING
// parsetInt za preobrazuvanje na string vo broj
// floatInt za decimalni brojki

if (Number.isNaN(parsedNumber)){
    alert("You entered an invalid number")
} else {
    alert(`The parsed number value is ${parsedNumber}`)
}


