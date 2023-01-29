let person = {
    names: "Jack S",
    age: 30
}

let otherOne = {
    city: "Plovdiv"
}
let newPerson = Object.assign({}, person);

person.dog = true;

console.log(person);
console.log(newPerson);




