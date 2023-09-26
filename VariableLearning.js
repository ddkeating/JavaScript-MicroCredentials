let favoriteFood = 'Sushi'
let numberOfPieces = 8;


const taxNumber = "12-15-21-12";
console.log(favoriteFood)

let salary = 2415.85; // Defined in local scope.

var grade = 78.43; // Defined in global scope.

let colors = []

console.log(colors);

colors.push("Brown");
colors.push("Green");
colors.push("Red");

console.log('', ...colors)

const numbers = [23, 45, 68, 12, 34, 54, 78, 90];
const filterNumbers = numbers.filter(number => number % 2 === 0);
console.log(filterNumbers);

const names = ['Jim', 'Bob', 'Sarah', 'Alex', 'James', 'Sam', 'Peter']
const filterNames = names.filter(name => name.startsWith("S"))
console.log(filterNames)