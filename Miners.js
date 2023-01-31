class Miner {
  constructor(name) {
    this.name = name;
    this.money = 0;
    this.gems = 0;
    this.days = 0;
  }
}

let mine = [];

for (let d = 1; d <= 10; d++) {
  let nextMiner = new Miner("" + d);

  for (let d = 1; d <= 10; d++) {
    nextMiner.days++;

    for (let t = 0; t < 5; t++) {
      let chance = Math.floor(Math.random() * 34);
      if (chance === 33) {
        nextMiner.gems++;
        nextMiner.money += 200;
      } else if (chance >= 1 && chance < 6) {
        nextMiner.money += 10;
      }
    }

    if (nextMiner.money < 20) {
      break;
    } else {
      nextMiner.money -= 20;
    }

    if (nextMiner.days === 10) {
      mine.push(nextMiner);
    }
  }
}

console.log(mine[0]);

// console.log(mine.sort((a, b) => b.money - a.money));

// for (let i = 0; i < mine.length; i++) {
//   console.log(mine[i]);
// }
