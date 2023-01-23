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
  };
  this.wakesUp = function () {
    console.log(`${this.name} opens her eyes and take a deep breath!`);
    console.log(this.fallInLove());

  }
  this.fallInLove = function () {
    return `She saw ${prince.name} and instatly fall in love too!`
  }
}

function Queen(name, age, home, fairness) {
  this.name = name;
  this.age = age;
  this.home = home;
  this.fairness = fairness;
  this.askMirror = function () {
    console.log("Mirror on the wall, who is the fairest of them all?");
    console.log(`${mirror.whoIsTheFairest().name} is the fairest of all!`);
  };
  this.grow = function () {
    this.age++;
    this.fairness--;
  };
  this.commandToKill = function () {
    console.log(`${evilQueen.name} coudnt accept this fact and commands one man to kill SnowWhite!`);
    console.log(hunter.takeSomeone());
  };
  this.getMad = function () {
    console.log(
      `${this.name} gets mad and decide its time to finish with SnowWhite once and for all!`
    );
    console.log(this.changeClothes());
  };
  this.changeClothes = function () {
    return `She change clothes and dressed up like old woman.`;
  };
  this.givePoison = function () {
    console.log(
      `Then ${evilQueen.name} go to the forest where she found ${snowWhite.name} and give her a poisened ${apple.name}.`
    );
    console.log(apple.poison());
    console.log(
      `${evilQueen.name} was finnaly happy and she run back to the castle!`
    );
    prince.position = "forest";
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

function Prince(name, look, position, inLove) {
    this.name = name;
  this.look = look;
  this.position = position;
  this.inLove = inLove;
  this.sawShowWhite = function () {
    console.log(`He saw ${snowWhite.name} laying on the ground and it was love from the first sight.`);
    this.inLove = true;
    return this.kiss();
  }
  this.kiss = function () {

    console.log(`${this.name} decide to kiss ${snowWhite.name} even she wasnt breathing.`);
  };
}

function Fruit(name) {
  this.name = name;
  this.poison = function () {
    return `When ${snowWhite.name} bites the ${apple.name} she fell to the ground! `;
  };
}

dwarfsNames = [
  { name: "Doc" },
  { name: "Dopey" },
  { name: "Grumpy" },
  { name: "Bashful" },
  { name: "Happy" },
  { name: "Sleepy" },
  { name: "Sneezy" },
];

let snowWhite = new Girl("SnowWhite", 12, "Castle", 1);
let evilQueen = new Queen("Queen", 22, "Castle", 11);
let mirror = new Mirror([snowWhite, evilQueen]);
let hunter = new Hunter("Castle");
let dwarfs = dwarfsNames.map((el) => new Dwarf(el.name));
let apple = new Fruit("apple");
let prince = new Prince("Sedrik", "strong and handsome", "castle", false);

// ---------------------------------------------------------------------------------------------------------------------------------

console.log(
  `Once upon a time in one ${evilQueen.home} lives ${evilQueen.name} and her stepdaughter ${snowWhite.name}.`
);
console.log(
  `${evilQueen.name} was very beatiful and she has magical mirror and every New year she ask it:`
);

while (snowWhite.fairness <= evilQueen.fairness) {
  evilQueen.grow();
  snowWhite.grow();
  evilQueen.askMirror(mirror);
}

if (snowWhite.fairness > evilQueen.fairness && snowWhite.home === "Castle") {
  evilQueen.commandToKill(hunter);

  if (snowWhite.home === "forest") {
    console.log("She beg him for mercy!");
    console.log(hunter.beMerciful());
    snowWhite.home = "dwarf house";
  }
}

let sevenDwarfs = "";

for (let i = 0; i < dwarfs.length; i++) {
  if (i === dwarfs.length - 1) {
    sevenDwarfs += dwarfs[i].name;
  } else {
    sevenDwarfs += dwarfs[i].name + ", ";
  }
}

if (snowWhite.home === dwarfs[0].home) {
  console.log(
    `${snowWhite.name} runs to the forest where she found the house of the seven dwarfs: ${sevenDwarfs}.`
  );
  console.log(`She stay there and ${snowWhite.helps()} for them.`);
}

evilQueen.grow();
snowWhite.grow();
console.log(`After one year ${evilQueen.name} asks mirror again:`);
evilQueen.askMirror(mirror);
if (mirror.whoIsTheFairest().name !== "Queen") {
  evilQueen.getMad();
  evilQueen.home = "forest";
}
evilQueen.givePoison();

console.log(`At the same time young prince ${prince.name} from another kingdom was on hunt in the same forest.`);
prince.sawShowWhite();

snowWhite.wakesUp();

console.log(`After that ${snowWhite.name},${prince.name} and ${sevenDwarfs} lived happily ever after in prince's kingdom!`);