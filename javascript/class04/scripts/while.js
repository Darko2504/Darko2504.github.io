
let a = 1;
while(a <= 10){
    console.log(a);
    a++; // a = a + 1;
    
}

let fruits = [`Apple`, `Banana`, `Orange`, `Grapes`];
let count = 0;
console.log(fruits);

while(count < fruits.length){
    console.log( `${count}: ` + fruits[count]);
    count++;
    
}


// do while ,another looping structure
let b = 5;
console.log("===== Using while =====");
while(b < 5){
    console.log("Hello " + b);
    b++;
    } // PRVO PROVERUVA USLOV POSLE PRAVI NESTO


console.log("===== Using do while =====");
let c = 5;
do{
    console.log("Hello " + c);
    c++;
    } while(c < 5) // prvo se ispisuva pa posle se proveruva. BAREM EDNASKA KE SE ISPRINTA TOA VO DO