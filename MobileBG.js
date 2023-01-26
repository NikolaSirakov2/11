class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

class UserManager {
  allUsers = [new User("Mik", "parola", "test@abv.bg")];
  loggedUser = null;

  constructor() {}

  createNewUser(user) {
    let filterUsers = this.allUsers.filter(
      (e) => e.name === user.name || e.email === user.email
    );

    if (filterUsers.length) {
      console.log("Greshka!");
    } else {
      this.allUsers.push(user);
    }
  }

  deleteUser(user) {
    let deleteUser = this.allUsers.filter((e) => e.name !== user.name);
    this.allUsers = deleteUser;
  }

  logInUser(user) {
    if (this.loggedUser === null) {
      this.loggedUser = user;
    } else {
      console.log("You are logged already!");
    }
  }

logOutUser() {
    if(this.loggedUser !== null){
        console.log("Ima lognat acc");
        this.loggedUser === null;
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

// console.log(userManager.allUsers);

let nik = new User("Nik", "parola", "test@abv.com");

// userManager.createNewUser(nik);

// console.log(userManager.allUsers);

// userManager.deleteUser(nik);

// console.log(userManager.allUsers[0]);

console.log(userManager.loggedUser);

userManager.logInUser(nik);

console.log(userManager.loggedUser);

userManager.logInUser(nik);

console.log(userManager.loggedUser);

userManager.logOutUser(nik);

console.log(userManager.loggedUser);
