function Girl(name, age, home, fairness) {
  this.name = name;
  this.age = age;
  this.home = home;
  this.fairness = fairness;
  this.grow = function () {
    this.age++;
    this.fairness++;
  };
  this.helps = function () {
        return "cook, clear and read";
  }
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

function Hunter(home) {
  this.home = home;
  this.takeSomeone = function () {
    snowWhite.home = "forest";
    return "Hunter takes SnowWhite in the forest to kill her!";
  };
  this.beMerciful = function () {
    return "He decide to let her go.";
  };
}

function Dwarf(name) {
  this.name = name;
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

dwarfsNames = [
    {name: "Doc"},
    {name: "Dopey"},
    {name: "Grumpy"},
    {name: "Bashful"},
    {name: "Happy"},
    {name: "Sleepy"},
    {name: "Sneezy"}
]

let snowWhite = new Girl("SnowWhite", 2, "Castle", 1);
let evilQueen = new Queen("Queen", 22, "Castle", 11);
let mirror = new Mirror([snowWhite, evilQueen]);
let hunter = new Hunter("Castle");
let dwarfs = dwarfsNames.map(
    el => new Dwarf(el.name)
);


while (snowWhite.fairness <= evilQueen.fairness) {
  evilQueen.grow();
  snowWhite.grow();
  evilQueen.askMirror(mirror);
}

if (snowWhite.fairness > evilQueen.fairness && snowWhite.home === "Castle") {

    evilQueen.commandToKill(hunter)

  if (snowWhite.home === "forest") {
    console.log("She beg him for mercy!");
    console.log(hunter.beMerciful());
    snowWhite.home = "dwarf house";
  }
}

let sevenDwarfs = "";

for(let i = 0; i < dwarfs.length; i++){
    if(i === dwarfs.length - 1){
        sevenDwarfs += dwarfs[i].name;
    } else {
    sevenDwarfs += dwarfs[i].name + ", ";
    }
}

if(snowWhite.home === dwarfs[0].home){
    console.log(`${snowWhite.name} runs to the forest where she found the house of the seven dwarfs: ${sevenDwarfs}.`);
    console.log(`She stay there and ${snowWhite.helps()} for them.`);
}

