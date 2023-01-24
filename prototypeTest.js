function Animal (name, weight){
    this.name = name;
    this.weight = weight;
}

function Bird (name, weight) {
    Animal.call(this, name, weight);
}

let eagle = new Bird ("eagle", 20);

eagle.prototype.constructor = eagle;

console.log(Animal.prototype);
console.log(Bird.prototype);
console.log(eagle);