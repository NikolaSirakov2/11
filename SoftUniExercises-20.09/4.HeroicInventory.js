function inventory(arr){
    let obj = {
        heroName: undefined,
        heroLevel: undefined,
        items: undefined
    };

    

    for(let i = 0; i < arr.length; i++){
        let info = arr[i].split(" / ");

        obj.heroName = info[0];
        obj.heroLevel = Number(info[1]);
        obj.items = info[2].split(", ");
    }

    console.log(JSON.stringify(obj));
}

inventory(['Jake / 1000 / Gauss, HolidayGrenade']);