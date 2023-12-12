// Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

//     object
//     boolean
//     number
//     string
//     undefined
function allDataTypes(parameter) {
  return typeof (parameter);
}
let monitor = {
  Brand: `Samsung`,
  Resolution: `7,680 x 2,160`,
  dsada: `321`
};
let objectType = allDataTypes(monitor);
console.log(objectType);

let math = 10 > 4;
let boolean = !!math;
let booleanType = allDataTypes(math);
console.log(boolean);

let number1 = Number(53);
let number2 = Number(41);
let calulactionOfNumbers = number1 + number2;
let numberType = allDataTypes(calulactionOfNumbers);
console.log(numberType);

let string = "Hello SEDC";
let stringType = allDataTypes(string);
console.log(stringType);


let notDefined = allDataTypes();
console.log(notDefined);

// Write a JavaScript function that will return:

//     Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
//     Note: Call the function in console to see answer
//     Bonus: Make the same function work for converting dog to human years as well
function dogToHuman(years) {
  let convertedYear = years * 7;
  return convertedYear;
}
function humanToDog(years) {
  let convertedYear = parseFloat(years / 7);
  return convertedYear;
}
function mistakeMade() {
  return "This option doesn't exist, please try again.";
}

let chooseOption = prompt("Would you like to convert Dog To Human (1) or Human To Dog (2) years:");

if (chooseOption === "I choose option one" || chooseOption == 1 || chooseOption == "Dog To Human") {
  let optionOne = prompt("Enter dog's age:");
  alert("The dog is " + `${dogToHuman(optionOne)}` + " years old in human age.");
}
else if (chooseOption === "2") {
  let optionTwo = prompt("Enter human's age:");
  let formatedAge = humanToDog(optionTwo);
  alert("The human is " + `${formatedAge.toPrecision(2)}` + " years old in dog age.");
} 
else {
  console.log(mistakeMade());
  alert(mistakeMade());
}

// HOMEWORK Part 3

// Write a javascript function for an ATM:

//     The ATM should give cash
//     Should return "Not enough money" if you request more money
//     Should return the ammount withdrawn and money left on the account if you have enough
//     Note: Hardcode your account money in the program
//     Bonus: Make it work with prompt()!


function atm(cash) {
  let currentBalanceInBank = 25000;
  if (cash == 0) {
    return "You cannot withdraw 0.";
  }
  else if (currentBalanceInBank >= cash) {
    return `You withdrew ${cash} and you have ${currentBalanceInBank - cash} left on the account.`;
  }
  else if (cash > currentBalanceInBank) {
    return "Not enough funds.";
  }
  else {
    return "Please enter valid amount.";
  }
}

let printATM = prompt("Please enter amount of cash to withdraw:");
alert(atm(printATM));
