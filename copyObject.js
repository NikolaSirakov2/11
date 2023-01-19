let person = {
    names: "Jack S",
    age: 30
}

let newPerson = Object.assign({}, person);

person.dog = true;

console.log(person);
console.log(newPerson);