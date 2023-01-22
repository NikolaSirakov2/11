function Girl(name, age, home, fairness) {
  this.name = name;
  this.age = age;
  this.home = home;
  this.fairness = fairness;
  this.grow = function () {
    this.age++;
    this.fairness++;
  };
}

function Queen(name, age, home, fairness) {
  this.name = name;
  this.age = age;
  this.home = home;
  this.fairness = fairness;
  this.askMirror = function (mirror) {
    console.log("Mirror on the wall, who is the fairest of them all?");
    console.log(`${mirror.whoIsTheFairest().name} is the fairest of all!`);
  };
  this.grow = function () {
    this.age++;
    this.fairness--;
  };
  this.commandToKill = function (hunter) {
    console.log("Queen commands one man to kill SnowWhite!");
    console.log(hunter.takeSomeone());
  };
}

function Mirror(chicks) {
  this.chicks = chicks;
  this.whoIsTheFairest = function () {
    return this.chicks.sort((a, b) => b.fairness - a.fairness)[0];
  };
}

function Hunter() {
  this.home = "Castle";
  this.takeSomeone = function () {
    snowWhite.home = "forest";
    return "Hunter takes SnowWhite in the forest to kill her!";
  };
  this.beMerciful = function () {
    return "He decide to let her go.";
  };
}

function Dwarf() {
  this.name = undefined;
  this.home = "dwarf house";
}

function Prince() {
  this.look = "strong and beatiful";
  this.position = "Castle";

  this.inLove = false;
  this.kiss = function () {
    return "He kiss SnowWhite and she wake up!";
  };
}

let snowWhite = new Girl("SnowWhite", 2, "Castle", 1);
let evilQueen = new Queen("Queen", 22, "Castle", 11);
let mirror = new Mirror([snowWhite, evilQueen]);
let hunter = new Hunter();

// console.log(snowWhite);
// console.log(evilQueen);
// console.log(mirror);
// console.log(hunter);

while (snowWhite.fairness <= evilQueen.fairness) {
  evilQueen.grow();
  snowWhite.grow();
  evilQueen.askMirror(mirror);
}

if (snowWhite.fairness > evilQueen.fairness) {
    evilQueen.commandToKill(hunter)

  if (snowWhite.home === "forest") {
    console.log("She beg him for mercy!");
    console.log(hunter.beMerciful());
    snowWhite.home = "dwarf house";
  }
}
