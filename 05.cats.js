function cat(name, age){
    let cat = {
        name: name,
        age: age,
        sayMeow: function() {
            return `${cat.name}, age ${cat.age} says Meow.`
        }
    }

    return cat;
}

let newCat = cat("Bibi", 2);

console.log(newCat.sayMeow());