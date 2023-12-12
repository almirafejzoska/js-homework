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

function yearsOfDogAndHuman(dogYearsAndHumanYears) {
  let dogYears = dogYearsAndHumanYears * 7;
  let humanYears = dogYearsAndHumanYears / 7;
  return `A human's age in dog years is ${dogYears}; a dog's age in human years is ${humanYears}.`
}
const calculateAge = yearsOfDogAndHuman(24, 5);
console.log(calculateAge);

// HOMEWORK Part 3

// Write a javascript function for an ATM:

//     The ATM should give cash
//     Should return "Not enough money" if you request more money
//     Should return the ammount withdrawn and money left on the account if you have enough
//     Note: Hardcode your account money in the program
//     Bonus: Make it work with prompt()!

function atm(cash) {
  let currentBalanceInBank = 25000;
  if (cash > currentBalanceInBank) {
    return "Not enough money";
  }
  else {
    currentBalanceInBank -= cash;
    return `You withdrew ${cash} and you have ${currentBalanceInBank} left on the account:`;
  }
}
let withdrawCash = prompt("Please enter amount of cash to withdraw:")
let parsedwithdrawCash = parseInt(withdrawCash);
let withdraw = atm(parsedwithdrawCash);
console.log(withdraw);
