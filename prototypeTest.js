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

let eagle = new Bird ("eagle", 20);

console.log(Animal.prototype);
console.log(Bird.prototype);
console.log(eagle.canBreathe());