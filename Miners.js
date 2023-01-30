class Miner {
    constructor(name){
        this.name = name;
        this.money = 0;
        this.gems = 0;
        this.days = 0;
    }
}

let mine = [];

for (let i = 1; i <= 10; i++){
    let name = "" + i;
    
    let miner = new Miner(name);
    
    mine.push(miner)
}

console.log(mine);