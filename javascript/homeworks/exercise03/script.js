let balanceDenars = 10000;

let balanceEuros = 1000;


let choosingValute = prompt("Type Euro if you want to open your international bank account. Type Denar if you want to open your domestic account")

if(choosingValute === "denar"){

function withdrawMoney(amountDenars){
    if(amountDenars > balanceDenars ){
        return "You dont have enough money in your account"
        
    }
    else if ((balanceDenars -= amountDenars)){
        return  ` You have withdrawn ${amountDenars} denars. You have ${balanceDenars} denars more left in your account`
}}

let action = prompt("Type check for checking your balance or withdraw for withdrawing money")
if(action === "withdraw"){
function input(){
    let withdrawAmount = prompt ("Enter how much denars you would like to withdraw");
    let sum = withdrawMoney(withdrawAmount);
    alert(sum);
}}

else if(action === "check"){
    alert(`You have ${balanceDenars} denars left in your account`)
}
else {
    alert("Please enter a valid number")
}}

else if(choosingValute === "euro"){
    function withdrawEuro(amountEuro){
        if(amountEuro > balanceEuros ){
            return "You dont have enough money in your account"
            
        }
        else if ((balanceEuros -= amountEuro)){
            return  ` You have withdrawn ${amountEuro} euros. You have ${balanceEuros} euros more left in your account`
    }}
    
    let action = prompt("Type check for checking your balance or withdraw for withdrawing money")
    if(action === "withdraw"){
    function input(){
        let withdrawAmountEuro = prompt ("Enter how much euros you would like to withdraw");
        let sum1 = withdrawEuro(withdrawAmountEuro);
        alert(sum1);
    }}
    
    else if(action === "check"){
        alert(`You have ${balanceEuros} euros left in your account`)
    }
    else {
        alert("Please enter a valid number")
    }}
    else{
        alert("There is not such account")
    }

input();


