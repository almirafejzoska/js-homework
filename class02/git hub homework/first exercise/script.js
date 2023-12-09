// 1. Write a program to find maximum between two numbers.

let firstNumberByTheUser = parseFloat(prompt('Please enter the first number.'));
let secondNumberByTheUser = parseFloat(prompt('Please enter the second number.'));
if(firstNumberByTheUser > secondNumberByTheUser){
    alert('The first number is larger than the second one.');
}
else if ( secondNumberByTheUser > firstNumberByTheUser){
    alert('The second number is larger than the first one.');
}
else if (secondNumberByTheUser === firstNumberByTheUser){
    alert('You entered the same number.');
}
else{
    alert("You didn't enter a number!");
}
