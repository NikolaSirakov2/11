// function Hero (name, power){
//     this.name = name;
//     this.power = power;
// }

// console.log(Hero.prototype);

// Hero.prototype.age = 300;

// let superman = new Hero ("Superman", "fly");

// console.log(superman);
// console.log(superman.__proto__);

let fullname = "John Doe";
let obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};
console.log(obj.prop.getFullname());
let test = obj.prop.getFullname;

console.log(test());
