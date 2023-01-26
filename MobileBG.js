class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

class UserManager {
  allUsers = [];
  loggedUser = [];

  constructor() {}

  createNewUser(user) {
    if (this.allUsers.hasOwnProperty(user.name)) {
      console.log("Ima veche takav potrebitel!");
    } else {
        console.log("Dobavqm nov potrebitel");
      this.allUsers.push(user);
    }
  }
}

class Vehicle {
  constructor(made, type) {
    this.made = made;
    this.type = type;
  }
}

class Car extends Vehicle {
  constructor(made, type, kilometers, maxSpeed) {
    super(Vehicle);
    this.kilometers = kilometers;
    this.maxSpeed = maxSpeed;
  }
}

let userManager = new UserManager();

console.log(userManager.allUsers);

let nik = new User("Nik", "parola", "test@abv.bg");

userManager.createNewUser(nik);

console.log(userManager.allUsers[0]);

userManager.createNewUser(nik);

console.log(userManager.allUsers[1]);