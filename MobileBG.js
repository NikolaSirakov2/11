class User {
    constructor (name, password) {
        this.name = name;
        this.password = password;
    }
}

let gosho = new User("Gosho", "007")

class UserManager {

    allUsers = [];
    loggedUsers = [];
    constructor (User){
        this.user = User.name;
    }
}

class Vehicle {
    constructor(made, type){
        this.made = made;
        this.type = type;
    }
}

class Car extends Vehicle {
    constructor(made, type, kilometers, maxSpeed){
        super (Vehicle);
        this.kilometers = kilometers;
        this.maxSpeed = maxSpeed;
    }
}

console.log(new Car("BMW", "jeep", 20000, 250));