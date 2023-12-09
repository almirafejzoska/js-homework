// 3. Write a program to check whether a number is negative, positive or zero.
let number = parseFloat((prompt("Please enter a number to check if it's positive, negative or zero.")));
if (number > 0){
    alert('You entered a positive number.');
}
else if(number === 0){
    alert('Your input was zero.');
}
else if(number < 0){
    alert('You entered a negative number.');
}
else {
    alert('Please, write a number.')
}