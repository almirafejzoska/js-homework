// 2.Write a program to find maximum between three numbers.

let enterFirstNum = parseFloat(prompt('Please enter the first number.'));
let enterSecodNum = parseFloat(prompt('Please enter the second number.'));
let enterThirdNum = parseFloat(prompt('Please enter the third number.'));

if(enterFirstNum > enterSecodNum && enterFirstNum > enterThirdNum ){
    console.log('The first number is larger than the rest.');
}
else if(enterSecodNum > enterFirstNum && enterSecodNum > enterThirdNum ){
    console.log('The second number is larger than the rest.');
}
else if(enterThirdNum > enterFirstNum && enterThirdNum > enterSecodNum ){
    console.log('The third number is larger than the rest.');
}

else if (enterFirstNum === enterSecodNum && enterFirstNum === enterThirdNum && enterSecodNum === enterThirdNum)
{
    console.log('You entered the same number three times.');
}
else{
    console.log("You didn't write three different numbers!");
}