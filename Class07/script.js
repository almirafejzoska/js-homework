// HOMEWORK Part 1

// Create OBJECT animal with 2 properties and 1 method:

//     name
//     kind
//     speak (method)

// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”
// Bonus: enter the values from prompt or from HTML inputs 

let animal = {
    name: ' ',
    kind: ' ',

    speak: function (theTalking) {
        console.log(`${this.name} is a ${this.kind} and says: Hey bro!!!`);
    }
}
animal.name = prompt("Enter the animal's name");
animal.kind = prompt("Enter the animal's kind");
animal.speak();




// HOMEWORK Part 2

// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

//Already read 'The Robots of dawn' by Isaac Asimov. (if true)
//You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

// Bonus: enter the values from prompt() or read them from HTML

let title = prompt("Enter the title of the book:");
let author = prompt("Enter the author of the book:");
let readingStatus = prompt("Enter the reading status of the book (true/false):");

let book = {
    title: title,
    author: author,
    readingStatus: readingStatus,

    infoForTheBook: function () {
        let hasRead = this.readingStatus === "true" ? "Already read" : "You still need to read";
        return `${hasRead} '${this.title}' by ${this.author}.`;
    }
};

console.log(book.infoForTheBook());
