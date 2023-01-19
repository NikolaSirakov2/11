let person = {
    names: "Jack S",
    age: 30
}

let otherOne = {
    city: "Plovd",
    country: "Bul"
}

let newPerson = JSON.parse(JSON.stringify(person));

person.dog = true;

console.log(person);
console.log(newPerson);

newPerson = person;

console.log(person);
console.log(newPerson);