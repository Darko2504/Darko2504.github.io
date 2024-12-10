let start = 101;
let end = 150;
let squareSum = 0;
while(start <= end){
    
    squareSum = squareSum + Math.pow(start, 2);
    start++;
}

console.log(squareSum);
