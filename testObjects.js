let obj = {
    firstName: "Nik",
    sayHello() {
        return "hello " + obj.firstName;
    }
}
console.log(obj.sayHello());

function Hunter() {
    this.home = "Castle";
    this.takeSomeone = function () {
        snowWhite.home = "forest";
        return "Hunter takes SnowWhite to the forest to kill her!";
        
    }
    this.beMerciful = function () {
        return "Hunter decide to let her go."
    }
}

function Dwarf() {
    this.name = undefined;
    this.home = "dwarf house"
}

function Prince() {
    this.look = "strong and beatiful";
    this.position = "Castle";

    this.inLove = false;
    this.kiss = function () {
        return "He kiss SnowWhite and she wake up!"
    }
}