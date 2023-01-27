class Product {
    constructor(section, price){
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

    addOffer(offer){
        let filter = this.allOffers.filter(e => e.name === offer.name);

        if(filter.length){
            console.log("This offer is alredy added!");
        } else {
            this.allOffers.push(offer);
        }
    }

    removeOffer(offer){
        let filter = this.allOffers.filter(e => e.name !== offer.name);

        this.allOffers = filter;
    }

    editOffer(offer){
        let edit
    }
}