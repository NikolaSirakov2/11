class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

class UserManager {
  allUsers = [new User("Mik", "parola", "test@abv.bg")];
  loggedUser = [];

  constructor() {}

  createNewUser(user) {
        let filterUsers = this.allUsers.filter(e => e.name === user.name);

        if(filterUsers.length){
            console.log("Greshka!");
        } else {
            this.allUsers.push(user)
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

console.log(userManager.allUsers[1]);