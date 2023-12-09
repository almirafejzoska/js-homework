// 4.Write a program that will accept user input between 1-7 (week number) and print week day.
let inputDay = prompt("Enter day of week(1-7)");
let parsedInputDay = parseInt(inputDay);
switch(parsedInputDay){
    case 1:
        console.log("Monday");
        break;
    case 2: console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thurstday");
    break;
    case 5:console.log("Friday");
    break;
    case 6:console.log("Saturday");
    break;
    case 7:console.log("Sunday");
    break;
    default: console.log("Invalid input value");
    break;
}
