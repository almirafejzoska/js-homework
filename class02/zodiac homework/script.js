let userInput = prompt('Enter a year to get your chinese zodiac sign calulacted');
let transformInput = parseInt(userInput);
let calculateZodiacSign = (userInput - 4) % 12;

if (calculateZodiacSign === 0){
    alert('This is the year of the Rat');
}
else if(calculateZodiacSign === 1){
    alert('This is the year of the Ox');
}
else if(calculateZodiacSign === 2){
    alert('This is the year of the Tiger');
}
else if(calculateZodiacSign === 3){
    alert('This is the year of the Rabbit');
}
else if(calculateZodiacSign === 4){
    alert('This is the year of the Dragon');
}
else if(calculateZodiacSign === 5){
    alert('This is the year of the Dragon');
}
else if(calculateZodiacSign === 6){
    alert('This is the year of the Horse');
}
else if(calculateZodiacSign === 7){
    alert('This is the year of the Goat');
}
else if(calculateZodiacSign === 8){
    alert('This is the year of the Monkey');
}
else if(calculateZodiacSign === 9){
    alert('This is the year of the Rooster');
}
else if(calculateZodiacSign === 10){
    alert('This is the year of the Dog');
}
else if(calculateZodiacSign === 11){
    alert('This is the year of the Pig');
}
else{
    alert('Please enter a valid input');
}
