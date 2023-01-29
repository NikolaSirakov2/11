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
  constructor(title, price, creator, description, vehicle) {
    this.title = title;
    this.price = price;
    this.creator = creator;
    this.description = description;
    this.vehicle = vehicle;
  }
}

class OfferManager {
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

  editOffer(property, newValue) {
    let edit = this.offers.filter(function(a) {
        return a[property] = newValue;
    })

    
}

  searchOffers(keyword){
        let search = this.offers.filter(function(a) {
            
            return a.title.toLowerCase().includes(keyword.toLowerCase().trim())
        })

        if(search[0] === undefined){
            console.log("There is no offer with this name!");
        } else {
            console.log(search[0]);
        }
   }
}

class Vehicle {
    constructor(make, model, topSpeed){
        this.make = make;
        this.model = model;
        this.topSpeed = topSpeed;
    }
}

class Car extends Vehicle {
    constructor(make, model, topSpeed, agu){
        super(make, model, topSpeed);
        this.agu = agu;
    }
}

class Bike extends Vehicle {
    constructor(make, model, topSpeed, type){
        super(make, model, topSpeed);
        this.type = type;
    }
}

class Jeep extends Vehicle {
    constructor(make, model, topSpeed, offroad){
        super(make, model, topSpeed);
        this.offroad = offroad;
    }
}



let newOfferManager = new OfferManager();

let offer1 = new Offer("BMW M3", 60000, new User("Nik", "pass", "nik@abv.bg"), "New import from Germany" , new Car("BMW", "M3", 300, false));

newOfferManager.createOffer(offer1)

console.log(newOfferManager.offers[0]);

newOfferManager.searchOffers("BMW")

newOfferManager.editOffer("title", "Mercedes");

console.log(newOfferManager.offers[0]);