function bike() {
    console.log(this.name);
    }
    var name = "Ninja";
    var obj1 = { name: "Pulsar", bike: bike };
    var obj2 = { name: "Gixxer", bike: bike };
    bike();
    obj1.bike();
    obj2.bike();