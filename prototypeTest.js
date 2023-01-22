function Hero (name, power){
    this.name = name;
    this.power = power;
}

console.log(Hero.proto);

Hero.prototype.age = 300;

let superman = new Hero ("Superman", "fly");

console.log(superman);
console.log(superman.__proto__);