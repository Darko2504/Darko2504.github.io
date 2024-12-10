
// Empty array
let emptyArray = [];
console.log(emptyArray);
console.log(typeof(emptyArray));



// Array of string values

let days = [`Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`, `Sun`]
console.log(days);


// Mixed values array

let mixedArray = [ `Martin`, 12, true, undefined, null, 22.4, NaN, ]
console.log(mixedArray);

// Acces an element from the array by its position(index)
let firstElement = mixedArray[0];
console.log(`First element of mixxed array: ${firstElement}`);
let secondElement = mixedArray[1];
console.log(`Second element of mixed array: ${secondElement}`);

let sunday = days[6];
console.log(sunday);

// Change value of an existing element of the array
mixedArray[0] = `Frose`;
console.log(`the mixed array after the change is:`);
console.log(mixedArray);
// nizi se kolekcii ili mnozestva koi moze da se tesno povrzani ili skroz razlicni. Site elementi se stavaat na razlicni pozicii
// prvata pozicija e 0 sekogas a ne 1


//Lenght of an arrat
console.log(`The lenght of the days array is: ${days.length}`); // ova e za vkupniot broj na elementi 
console.log(`The lenght of the days array is: ${days.length - 1}`); 

//Add new element in the array
mixedArray[7] = "Angel";
console.log(mixedArray);


// stavanje na druga stvar na kraj
mixedArray[mixedArray.length] = `Sandra`;
console.log(mixedArray);



// Insert element in an Array push(kraj na niza) unshift(pocetok na niza)
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(6); // vo nizata numbers dodadi element na krajot od nizata i toa da bide brojot6
 numbers.push(7);
 numbers.push(8, 9, 10, 11, 12)// inset as much element as you need in the array

 console.log(numbers);
numbers.push(`Martin`, `Frose`, null, undefined, NaN);
console.log(numbers);
 

numbers.unshift(-2, -1, 0) // stava elementi pred prviot element
console.log(numbers);

// Delete an element from an array pop(na kraj na niza) shift(pocetok na niza)
numbers.pop();
numbers.pop();
console.log(numbers);// brise na krajot na nizata


numbers.shift();
console.log(numbers);// brise na pocetok na nizata








