// CASE   AKO NEMA BREAK KE GI IZVRSUVA SITE POOSEBNO i ke go
// iskuca i defaultot i tocniot odgovor vo konzola
// mora toa sto e vo zagradite da e isto vo case ovite

let number = prompt("Please enter a number");
let parsedNumber = parseInt(number);

if(!isNaN(parsedNumber)){
    console.log("");
    switch(parsedNumber){ 
        case 1:
            alert("Monday");
            break;
            case 2:
                console.log("Tuesday");
                break;
                case 3:
                    console.log("Wednesday");
                    break;
                    case 4:
                        console.log("Thursday");
                        break;
                        case 5:
                            console.log("Friday");
                            break;
                            case 6:
                                console.log("Saturday");
                                break;
                                case 7:
                                    console.log("Sunday");
                                    break;
                                    default :
                                    console.log("there is not such day");
                                    break;
                                    }
}
else {
    console.log("Please enter a valid number");
    }

switch(parsedNumber){
    case 1:
    case 2:
    case 3:
    case 4:
     case 5:         
    console.log("Work day!");
    break;
    case 6:
    case 7:
    console.log("Weekend");
    break;
    default:
        console.log("There is no such day");
                  
                        
}    


