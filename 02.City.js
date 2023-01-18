let city = {
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
};

// for(let key in city){
//     console.log(`${key} -> ${city[key]}`);
// }

let keys = Object.keys(city);

for(let i = 0; i < keys.length; i++){
    console.log(`${keys[i]} -> ${city[keys[i]]}`);
};