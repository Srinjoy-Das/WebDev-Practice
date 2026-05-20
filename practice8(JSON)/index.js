
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const people = [{
    "name": "Alice",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Bob",
    "age": 25,
    "isEmployed": false
},
{
    "name": "Charlie",
    "age": 35,
    "isEmployed": true
},
{
    "name": "David",
    "age": 28,
    "isEmployed": false
}]
const jsonString = JSON.stringify(people);
console.log(jsonString);

fetch("person.json")
    .then(responce => responce.json())
    .then(value => console.log(value))
    .catch(error => console.error("Error fetching JSON:", error));