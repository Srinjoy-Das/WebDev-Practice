let fruits = ["apple", "banana", "orange", "grape", "kiwi"];

fruits.forEach(capitalize);
fruits.forEach(display);

function lowercase(element, index, array) {
    array[index] = element.toLowerCase();
}

function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}


//Filter and Reduce

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

const total = numbers.reduce(sum);

console.log(total);

function sum(accumulator, element){
    return accumulator + element;
}



//using THIS and arrow function and javascript objects

const person ={
    firstname: "Srinjoy",
    lastname: "Das",
    age: 22,
    sayHello: () => {console.log("Hello");},
    sayBye: function(){console.log(`Bye ${this.firstname}`);}
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
person.sayHello();
person.sayBye();


//Classes and Objects and Constructor

class Person {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Person("Shirt", 19.99);
const product2 = new Person("Pants", 22.50);

const totalShopping = product1.calculateTotal(salesTax);

product1.displayProduct();
product2.displayProduct();
console.log(`Total price with tax for ${product1.name}: $${totalShopping.toFixed(2)}`);



//Inheritance and Polymorphism

class Animal {
    alive = true;

    eat(){
        console.log(`The ${this.nameAnimal} is eating.`);
    }
    sleep(){
        console.log(`The ${this.nameAnimal} is sleeping.`);
    }
}
class Rabbit extends Animal {
    nameAnimal = "Rabbit";
}
class Fish extends Animal {
    nameAnimal = "Fish";
}
class Hawk extends Animal {
    nameAnimal = "Hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.eat();
rabbit.sleep();
rabbit.alive = false;
console.log(`Is the rabbit alive? ${rabbit.alive}`);
hawk.eat();
hawk.sleep();
fish.eat();
fish.sleep();



//Destructuring
const colors = ["red", "green", "blue", "black", "white"];
console.log(colors);
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);



//Sorting
let unsortedNumbers = [5, 2, 9, 6, 8, 10, 7, 3, 1, 4];
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers);
unsortedNumbers.sort((a, b) => b - a);
console.log(unsortedNumbers);

const people = [{name: "Alice", age: 22, gpa: 3.0},
                 {name: "Akbar", age: 27, gpa: 1.5},
                 {name: "Rajesh", age: 35, gpa: 3.5},
                 {name: "Priya", age: 29, gpa: 4.5}]

people.sort((a, b) => a.gpa - b.gpa);
console.log(people);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);


//Date and Time
const date = new Date();
console.log(date);