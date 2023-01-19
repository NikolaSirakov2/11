let arr = ['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000',

'Jerusalem <-> 2000344'];

let towns = {};

for(let i = 0; i < arr.length; i++){
    let info = arr[i].split(" <-> ");

    if(towns[info[0]] === undefined){
        towns[info[0]] = Number(info[1]);
    } else {
        towns[info[0]] += Number(info[1]);
    }
}

let inform = Object.entries(towns);

for (let ele of inform){
    console.log(`${ele[0]} : ${ele[1]}`);
}