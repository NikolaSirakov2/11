class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

class UserManager {
  allUsers = [];
  loggedUsers = [];

  constructor() {};

  createNewUser(user) {
    if (!this.allUsers.hasOwnProperty(user.name)) {
      console.log("Create new user!");
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

let userManager = new UserManager;

userManager.createNewUser(new User("Nik", "parola", "test@abv.bg"))
