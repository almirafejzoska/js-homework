// 1.Write a JavaScript program that calculates the total price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. Print the result in the console.

let totalPhones = 30;
let phoneCost = 119.95;
let tax = 0.05;
let totalPrice = phoneCost * totalPhones;
let taxFee = totalPrice / tax;
let fully = taxFee;
console.log('The total price of 30 phones is:');
console.log(totalPrice);

// 2. Write a JavaScript program that takes minutes and converts them to seconds. Print the result in the console.
let minute = 13;
const seconds = 60;
let convertTime = seconds * minute;
console.log('The time is:');
console.log(convertTime);

// 3.Write a JavaScript program that takes a number and increments the number by +1 and prints the result in the console.

let incrementNumber = 66;
console.log('The incremented number is:');
console.log(incrementNumber + 1);

// 4.Write a JavaScript program that takes the base and height of a triangle and calculates its area. Print the result in the console.

let base = 3;
let height = 5;
let areaOfTriangle = base * height / 2;
console.log('The area is:');
console.log(areaOfTriangle);
// The basic formula for the area of a triangle is equal to half the product of its base and height

// 5.Write a JavaScript program that takes length and width of a rectangle and finds its perimeter. Print the result in the console.

let length = 4;
let width = 5;
let perimeterOfRectagle = 2 * length + 2 * width;
console.log('The perimeter of the rectangle is:')
console.log(perimeterOfRectagle);
// Perimeter of a rectangle: P = 2a + 2b

// 6.Write a JavaScript program that will calculate area of circle. Print the result in the console.

let radius = 2;
const pi = Math.PI; 
let areaOfCircle = pi * radius * radius;
console.log('The area of the circle is:');
console.log(areaOfCircle);
