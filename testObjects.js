let obj = {
    sayHello() {
        return "hello " + obj.cars[0];
    },
    cars: ["Lada", "Reno", "Fiat"],
   
}

delete obj.cars[2];
console.log(obj.sayHello());