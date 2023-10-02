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

// Arrow Functions

const FirstIndex = n => {
    return n[0]
}

let testList = [1, 5, 2, 1]
console.log(FirstIndex(testList))

// Function Linkedin Learning

// Mechanics of Functions

// class Person {
//     constructor(id, name, contactNumber, emailAddress){
//         this.id = id;
//         this.name = name;
//         this.contactNumber = contactNumber;
//         this.emailAddress = emailAddress;
//     }

//     PrintDetails = () => {
//         return `${this.id}, Name: ${this.name}, Contact Number: ${this.contactNumber}, Email Address: ${this.emailAddress}`
//     }

    
// }

// let client1 = new Person(20241, 'Dallas Keating', '+232122332', '123@gmail.com')
// console.log(client1.PrintDetails())

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    Birthday(){
        this.age = this.age + 1
        console.log(`Happy Birthday! You are now ${this.age} years old.`)
    }
}

let sam = new Person('Sam', 20);
let alex = new Person('Alex', 43);
let brent = new Person('Brent', 75);

sam.Birthday();
alex.Birthday();
brent.Birthday();

class CreditAccount{
    constructor(accountNumber){
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    getBalance(){
        return `You currently have $${this.balance} in your account.`
    }

    setBalance(amount){
        this.balance =+ amount;
        return `You have added $${amount} to your account.`
    }

}

let acc = new CreditAccount('23521123');
console.log(acc.getBalance());
console.log(acc.setBalance(50));
console.log(acc.getBalance())

class Clients{
    constructor(person, account){
        this.person = person;
        this.account = account;
    }

    displayDetails(){
        console.log(`Name: ${this.person.name}\n${this.account.getBalance()} `)
    }
}

let clients = new Clients(sam, acc)
clients.displayDetails()


