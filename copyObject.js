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

editOffer(property, newValue) {
    let edit = this.offers.filter(function(a) {
        return a[property] = newValue;
    })
}


if(search = []){
    console.log("There is no offer with this name!");
} else {
    console.log(search[0]);
}