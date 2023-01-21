function SnowWhite() {
    this.name = "Snow White";
    this.age = 0;
    this.fairness = 0;
    this.grow = function () {
    this.age++;
    this.fairness++
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

    let snowWhite = new SnowWhite();
    let evilQueen = new EvilQueen();
    let mirror = new Mirror();

    console.log(snowWhite.grow());
    console.log(snowWhite);