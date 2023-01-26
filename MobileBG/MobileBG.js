class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
}

class UserManager {
  allUsers = [new User("Mik", "motorola", "michelin@abv.bg")];
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
    if (this.loggedUser === null && this.allUsers.includes(user)) {
      this.loggedUser = user;
    } else {
      console.log("You cant log in!");
    }
  }

  logOutUser() {
    this.loggedUser = null;
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
    super(made, type);
    this.kilometers = kilometers;
    this.maxSpeed = maxSpeed;
  }
}

class Offer {
    constructor(title, description, year, photos, car){
        this.title = title;
        this.description = description;
        this.year = year;
        this.photos = photos;
        this.car = car;
    }
}

class OffersManager {
    allOffers = [];

    createOffer(offer){
        let oldOffers = this.allOffers.filter(e => e.title === offer.title);

        if(oldOffers.length){
            console.log("This offer is already publicited!");
        } else {
            this.allOffers.push(offer)
        }
    }

    deleteOffer(offer){
        let deleteOffer = this.allOffers.filter(e => e.title !== offer.title);
        this.allOffers = deleteOffer;
    }
}

let nik = new User("Nik", "parola", "test@abv.com");

let gosho = new User("Gosho", "test", "poshta@gmail.com")

let userManager = new UserManager();

let toyota = new Offer("Toyota Celica", "New import from Italy!", "2000", "no photos", new Car("Toyota", "Celica", 150000, 240));

let offerManager = new OffersManager();

console.log(offerManager.allOffers);

offerManager.createOffer(toyota);

console.log(offerManager.allOffers[0]);

offerManager.createOffer(toyota);

console.log(offerManager.allOffers[0].car);