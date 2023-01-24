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

console.log(Animal.prototype.constructor);
console.log(Bird.prototype.constructor);
console.log(eagle.constructor);
console.log(eagle.canFly());