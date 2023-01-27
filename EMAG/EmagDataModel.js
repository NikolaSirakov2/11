class Product {
  constructor(section, price) {
    this.section = section;
    this.price = price;
  }
}

class Phone extends Product {
  constructor(section, price, color, weight, storage) {
    super(section, price);
    this.color = color;
    this.weight = weight;
    this.storage = storage;
  }
}

class Laptop extends Product {
  constructor(section, price, ram, screen, videocard) {
    super(section, price);
    this.ram = ram;
    this.screen = screen;
    this.videocard = videocard;
  }
}

class Mouse extends Product {
  constructor(section, price, buttons, dpi, lighting) {
    super(section, price);
    this.buttons = buttons;
    this.dpi = dpi;
    this.lighting = lighting;
  }
}

class Offer {
  constructor(name, discription, product) {
    this.name = name;
    this.discription = discription;
    this.product = product;
  }
}

class OffersManager {
  allOffers = [];

  addOffer(offer) {
    let filter = this.allOffers.filter((e) => e.name === offer.name);

    if (filter.length) {
      console.log("This offer is alredy added!");
    } else {
      this.allOffers.push(offer);
    }
  }

  removeOffer(offer) {
    let filter = this.allOffers.filter((e) => e.name !== offer.name);

    this.allOffers = filter;
  }

  editOffer(offer) {}
}

class Basket {
  basketItems = [];

  addToBasket(offer) {
    let filterBasket = this.basketItems.filter((a) => a.name === offer.name);

    if (filterBasket.length) {
      console.log("This item is already in your basket!");
    } else {
      this.basketItems.push(offer);
    }
  }

  removeFromBasket(basketItems) {
    let filterBasket = this.basketItems.filter((a) => a.name !== basketItems.name);

    this.basketItems = filterBasket;
  }
}

let offersManager = new OffersManager();

let iphone14 = new Offer(
  "Iphone 14 512gb",
  "New Iphone in SpaceGray color and 512gb storage.",
  new Phone("Phones", "2999", "Space gray", "140", "512gb")
);

let razzerNaga = new Offer(
  "Razzer Naga",
  "Best gaming mouse for 2020.",
  new Mouse("Mouses", "160lv", "16 buttons", "16 000 dpi", "6 colors")
);

offersManager.addOffer(iphone14);

offersManager.addOffer(razzerNaga);

console.log(offersManager.allOffers[0]);

let basket = new Basket();

console.log(basket);

basket.addToBasket(offersManager.allOffers[1]);

console.log(basket.basketItems[0]);

basket.addToBasket(offersManager.allOffers[0]);



basket.removeFromBasket(basket.basketItems[0]);

console.log(basket.basketItems[0]);