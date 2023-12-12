// Exercise - #1

// Decription: Using prompt() display a dialog box that prompts the visitor for input. Will return null on 'Cancel' or the value provided on 'Ok'
// Action: Ask the user how much money he has, and depending on the value, suggest to him what he should do
// Time to accomplish: 15 minutes

let firstUser = prompt('How much money you got?');
console.log(firstUser);
console.log(typeof firstUser);

if (firstUser <= 50){
    console.log('You should get a mouse.');
}
else if(firstUser >= 100){
    console.log('You should get a mouse and a keyboard.');
}
else{
    alert('Please enter a valid input');
}

