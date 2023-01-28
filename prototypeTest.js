function Animal (name, weight){
    this.name = name;
    this.weight = weight;
}

Animal.prototype.canBreathe = function () {
    return "Breathe";
}

function Bird (name, weight) {
    Animal.call(this, name, weight);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.canFly = function () {
    return "Fly"
}

let eagle = new Bird ("eagle", 20);

console.log(Animal.__proto__);
console.log(Bird.__proto__.__proto__);
console.log(eagle.__proto__.__proto__.__proto__);
// console.log(eagle.canFly());