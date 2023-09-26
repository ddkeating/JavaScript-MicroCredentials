let favoriteFood = 'Sushi'
let numberOfPieces = 8;


const taxNumber = "12-15-21-12";
console.log(favoriteFood)

let salary = 2415.85; // Defined in local scope.

var grade = 78.43; // Defined in global scope.

// Data types
let colors = []

console.log(colors);

colors.push("Brown");
colors.push("Green");
colors.push("Red");

console.log('', ...colors)

// Arrow function
const numbers = [23, 45, 68, 12, 34, 54, 78, 90];
const filterNumbers = numbers.filter(number => number % 2 === 0);
console.log(filterNumbers);

const names = ['Jim', 'Bob', 'Sarah', 'Alex', 'James', 'Sam', 'Peter']
const filterNames = names.filter(name => name.startsWith("S"))
console.log(filterNames)

// Maps and Sets - Syntax

const hogwartsStudents = new Map(
    [
        ["Harry Potter", "Gryffindor"],
        ["Draco Malfoy", "Slytherin"],
        ["Luna Lovegood", "Ravenclaw"]
    ]
);

console.log(hogwartsStudents.get("Harry Potter"));

console.log(hogwartsStudents.set("Hermione Granger", "Gryffindor"));

console.log(hogwartsStudents.has("Luna Lovegood"));

console.log(hogwartsStudents.size);

console.log(hogwartsStudents.delete("Draco Malfoy"));