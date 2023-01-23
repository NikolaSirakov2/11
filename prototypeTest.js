function Hero (name, power){
    this.name = name;
    this.power = power;
}

console.log(Hero.prototype);

Hero.prototype.run = function (){
    return "Run";
}

let superman = new Hero ("Superman", "fly");

superman.__proto__.stop = function () {
    return "Stop"
}

let batman = new Hero ("Batman", "tehnologys");

console.log(batman.stop());
console.log(Hero.prototype.run());
console.log(superman.__proto__);