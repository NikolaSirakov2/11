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
  constructor(made, model) {
    this.made = made;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(made, model, kilometers, maxSpeed) {
    super(made, model);
    this.kilometers = kilometers;
    this.maxSpeed = maxSpeed;
  }
}

class Bike extends Vehicle {
  constructor(make, model, hp, turbo){
    super(make, model)
    this.hp = hp;
    this.turbo = turbo;
  }
}

class Jeep extends Vehicle {
  constructor(make, model, high,offroad){
    super(make,model)
    this.make = make;
    this.model = model;
    this.high = high;
    this.offroad = offroad;
  }
}

class Offer {
    constructor(title, description, year, photos, vehicle){
        this.title = title;
        this.description = description;
        this.year = year;
        this.photos = photos;
        this.vehicle = vehicle;
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

let hondaCbr = new Offer("Honda CBR 600cc", "Brand new", 2022, "no photos", new Bike("Honda","CBR",113, "yes"));

let ladaNiva = new Offer("Lada Niva", "In great condition!", 1995, "no photos", new Jeep("Lada", "Niva", 2.3, true))

let offerManager = new OffersManager();

console.log(offerManager.allOffers);

offerManager.createOffer(toyota);

console.log(offerManager.allOffers[0].vehicle);

offerManager.createOffer(hondaCbr);

console.log(offerManager.allOffers[1].vehicle);

offerManager.createOffer(ladaNiva);

offerManager.deleteOffer(toyota);

console.log(offerManager.allOffers);