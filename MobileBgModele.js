class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

class UserManager {
  users = [];
  logedUser = null;

  addUser(newUser) {
    let filter = this.users.filter((i) => i.name === newUser.name);

    if (filter.length) {
      console.log("This username is already taken!");
    } else {
      this.users.push(newUser);
    }
  }

  deleteUser(user) {
    let filter = this.users.filter((i) => i.name !== user.name);

    this.users = filter;
  }

  loginUser(user) {
    let filter = this.users.filter((i) => i.name === user.name);

    if (filter.length && this.logedUser === null) {
      this.logedUser = user;
    } else if (filter.length <= 0) {
      console.log("Wrong username!");
    }
  }

  logoutUser() {
    this.logedUser = null;
  }
}

class Offer {
  constructor(title, price, photos, description, vehicle) {
    this.title = title;
    this.price = price;
    this.photos = photos;
    this.description = description;
    this.vehicle = vehicle;
  }
}

class offerManager {
  offers = [];

  createOffer(offer) {
    let filter = this.offers.filter((i) => i.name === offer.name);

    if (filter.length) {
      console.log("This offer is already added!");
    } else {
      this.offers.push(offer);
    }
  }

  deleteOffer(offer) {
    let filter = this.offers.filter((i) => i.name !== offer.name);

    this.offers = filter;
  }

  editOffer(offer, property, newValue) {}

  filterOffers(keyword){

  }
}

class Vehicle {
    constructor(make, model, topSpeed){
        this.make = make;
        this.model = model;
        this.topSpeed = topSpeed;
    }
}