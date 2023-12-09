// 6.Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following: Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade C Percentage >= 60% : Grade D Percentage >= 40% : Grade E Percentage < 40% : Grade F

function calculationForGrades(marks) {
    if (marks >= 90) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else if (marks >= 50) {
        return "E";
    } else {
           return "F";
    }
}

let physics = prompt("Enter pyhsics points");
let parsedPhysics = parseFloat(physics);
let chemistry = prompt("Enter chemistry points");
let parsedChemistry = parseFloat(chemistry);
let biology = prompt("Enter biology points");
let parsedBiology = parseFloat(physics);
let mathematics = prompt("Enter mathematics pointss");
let parsedMathematics = parseFloat(mathematics);
let computer = prompt("Enter computer science points");
let parsedComputer = parseFloat(computer);

const totalMarks = physics + chemistry + biology + mathematics + computer;

let gradeForPhysics = calculationForGrades(physics);
let gradeForChemistry = calculationForGrades(chemistry);
let gradeForBiology = calculationForGrades(biology);
let gradeForMathematics = calculationForGrades(mathematics);
let gradeForComputer = calculationForGrades(computer);


console.log(`Your physics grade is:${gradeForPhysics} `)
console.log(`Your chemistry grade is:${gradeForChemistry} `)
console.log(`Your biology grade is:${gradeForBiology} `)
console.log(`Your math grade is:${gradeForMathematics} `)
console.log(`Your computer grade is:${gradeForComputer} `)

let finalResult = calculationForGrades(totalMarks / 5);
alert(`Your final grade is: ${finalResult}`);

const percent = (totalMarks / 500) * 100;
alert(`Your grade in percent is: ${percent}`);
