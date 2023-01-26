class User {
    constructor (name, password, email) {
        this.name = name;
        this.password = password;
        this.email = email;
    }
}

class UserManager {

    allUsers = [];
    loggedUsers = [];
    constructor (User){
        this.user = User.name;
    }

    createNewUser() {

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