function inventory(arr){
    let allHero = [];

    for(let i = 0; i < arr.length; i++){
        let info = arr[i].split(" / ");

        let obj = {
        name: info[0],
        level: Number(info[1]),
        items: info[2].split(", ")
        }

        allHero.push(obj);
    }

    console.log(JSON.stringify(allHero));
}

inventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']);