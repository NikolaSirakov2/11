function Hero (name, power){
    this.name = name;
    this.power = power;
}

Hero.prototype.age = 300;

let superman = new Hero ("Superman", "fly");

console.log(superman);