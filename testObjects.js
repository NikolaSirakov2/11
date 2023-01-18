let obj = {
    firstName: "Nik",
    sayHello() {
        return "hello " + obj.firstName;
    }
}
console.log(obj.sayHello());