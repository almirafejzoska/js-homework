// HOMEWORK Part 1

// Change the page with JavaScript

//     Change the text of all paragraphs and headers with javascript
//     Note:The html must not be changed

let firstDiv = document.getElementById("first");
let childOfDiv = firstDiv.firstElementChild;
childOfDiv.textContent += ".I made it with JS!";

let paragraphOne = document.getElementsByClassName("paragraph")[0];
paragraphOne.textContent += " and this is the paragraph I changed first."

let childDiv = document.getElementsByClassName("anotherDiv")[0];
let children = childDiv.firstElementChild;
children.textContent += " This is new";

const secondHeader1 = document.getElementsByTagName('h1')[1];
secondHeader1.innerText += ".And it was easy too!";

const header3 = document.querySelector("h3");
header3.textContent += " This is the last header three";



// HOMEWORK Part 2

// Print all numbers from an array and the sum

//     Create an array with numbers
//     Print all numbers from the array in a list element, in a new HTML page
//     Print out the sum of all of the numbers below the list
//     Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)


let mainDiv = document.getElementById('lastDiv');
let ul = document.createElement('ul');

let numbers = [32,4,6,32,33,421,51,8,9,10];

mainDiv.append(ul);
let sum = 0;
let equation = "The array summary is: ";
let summedNumbers = document.createElement('span');
for (let i=0; i < numbers.length; i++){
    let li = document.createElement('li')
    ul.append(li);
    li.textContent +=numbers[i]; 
    sum += numbers[i];
    equation += (i === 0) ? `${numbers[i]}` : ` + ${numbers[i]}`;
}
// so equation go dobiv zbirot so koj equation stanva 32, pa posle mu se dodava + 4 (32+4) i se taka do krajot na nizata.
summedNumbers.innerText = `${equation} = ${sum}`;
mainDiv.append(summedNumbers);