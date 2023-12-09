// 5.Write a program that will check if user typed an input that is a number or not.
let textNumInput = prompt("Type something and i will tell you if it is a number or not");
if (!isNaN(textNumInput)){
    alert("It's a number.")
}
else if (isNaN(textNumInput)){
    alert("It's not a number.")
}