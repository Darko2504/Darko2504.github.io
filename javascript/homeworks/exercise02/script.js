let toDateYear = 2024;

function calculateAge(birthYear, currentYear){
    let sum = currentYear - birthYear ;
    return sum;
}

console.log(`You are ${calculateAge(2001, 2025)} years old`);
console.log(`You are ${calculateAge(1924, toDateYear)} years old`);


 let year = prompt("Enter your birth year")
 if(!isNaN(year)){
    alert(`You are ${toDateYear - year} years old`)
 }
 else{
    alert("Please enter a valid year")
 }



