function SnowWhite() {
    this.name = "Snow White";
    this.age = 0;
    this.home = "Castle";
    this.fairness = 0;
    this.grow = function () {
    this.age++;
    this.fairness++
    this.beg = false;
    }
    }

    function EvilQueen() {
    this.name = "Queen";
    this.age = 22;
    this.fairness = 9;
    this.askMirror = function (mirror) {
    console.log("Mirror on the wall, who is the fairest of them all?")
    console.log(mirror.whoIsTheFairest().name);
    }
    this.grow = function () {
    this.age++;
    }
    }

    function Mirror() {
    this.chicks = [];
    this.whoIsTheFairest = function () {
    return this.chicks.sort((a, b) => b.fairness - a.fairness)[0];
    }
    }

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

    let snowWhite = new SnowWhite();
    let evilQueen = new EvilQueen();
    let mirror = new Mirror();
    let hunter = new Hunter();

   

    console.log(hunter.takeSomeone());

    if (snowWhite.home === "forest"){
        console.log("She beg him for mercy!");
        console.log(hunter.beMerciful());
        snowWhite.home = "dwarf house";
    }