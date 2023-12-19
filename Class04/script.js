// HOMEWORK #1

// Create a function called tellStory()

// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

// The function should return one big string with a story made from the arguments

// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert
function tellStory([name, mood, activity]) {
    let story = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`
        return story;
  }
console.log(tellStory(["Bob", "happy", "shopping"]));
console.log(tellStory(["John", "free", "gaming"]));

// HOMEWORK #2

// Write a function that will take an array of 5 numbers as an argument and return the sum.

// Print it in the console or in alert

// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.


function sumTheNumbers(sumNumbers){
    let sum = 0;
    for(let i = 0; i < sumNumbers.length; i++){
    sum += sumNumbers[i];
    }
    return (`The sum of all 5 numbers is ${sum}.`);
    
}

let numbers = [12,15,71,51,31];
console.log(sumTheNumbers(numbers));


// HOMEWORK #3

// Write a javascript function that:

//     When given any array of strings (should work with array with any number of elements)
//     It will create one big string and return it
//     Ex:["Hello", "there", "students", "of", "SEDC", "!"]
//     Result: "Hello there students of SEDC!"


function stringWithArray(array){
    return array.join("");
}
let inputArray = ["Hello", " there", " students", " of", " SEDC", "!"];
let inputAnotherArray = ["There", " is", " ", 1, " more", " input", " with" ," number."];
let result = stringWithArray(inputArray);
let resultForAnotherArray = stringWithArray(inputAnotherArray);
console.log(result);
console.log(resultForAnotherArray);


// Homework #4

// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.
for(let i = 1; i <= 20; i++){
if(i % 2 === 0){
    console.log(`${i} \n`);
}
else{
    console.log(` `);  // Treba da e prazen string kaj ne parnite ??
}
};

// Homework #5

// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14

// Bonus: Try making the function work if there are other types of items in it

let fiveNumbers = [53,63,8523,623,7];
let max = fiveNumbers[0];
let min = fiveNumbers[0];
function minAndMaxNum(number){
    for (let i= 0; number.length; i++){
        if(fiveNumbers[i] > max){max = fiveNumbers[i];}
        if(fiveNumbers[i] < min) {min = fiveNumbers[i];}
    }
    console.log("Max number is :" +max);
    console.log("Min number is:" +min);
}
// minAndMaxNum(fiveNumbers); 
// ko ke ja povikam funcijata mi crashnuva, ne mozam da najdam oti ako mozi nekoj hint ili pomos,i++ staviv i nemozam da go najdam problemot zatoa i ja komentirav.


// Homework #6

// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

function stundetsFullname(firstName, lastName){
    let fullyname = [];
    for(let i = 0; i < firstName.length; i++){
        fullyname.push("Full name of the student is: " +  firstName[i] + " " + lastName[i]);
    }
    return fullyname;
}
let firstName = ["Bob", "Jill"];
let lastName = ["Gregpry", "Wurtz"];

let firstNameAndLastName = stundetsFullname(firstName, lastName);
console.log((firstNameAndLastName));