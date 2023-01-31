class Miner {
  constructor(name) {
    this.name = name;
    this.money = 0;
    this.gems = 0;
    this.days = 0;
  }
}

let mine = [];

for(let d = 1; d <= 10; d++) {

    let miner = new Miner("" + d)

    nextMiner.days++;

    for (let t = 0; t < 5; t++) {
      let chance = Math.floor(Math.random() * 34);
      if (chance === 33) {
        nextMiner.gems++;
      } else if (chance >= 1 && chance < 6) {
        nextMiner.money += 10;
      }
    }

    if (nextMiner.money < 20) {
      mine.splice(m, 1);
    } else {
        nextMiner.money -= 20;
    }

    m++;
  
}

console.log(mine.sort((a,b) => b.money - a.money));

for(let i = 0; i < mine.length; i++){
    console.log(mine[i]);
}
