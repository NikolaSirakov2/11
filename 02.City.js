let city = {
  name: "Plovdiv",

  area: 389,

  population: 1162358,

  country: "Bulgaria",

  postCode: "4000",
};



let keys = Object.keys(city);

for(let i = 0; i < keys.length; i++){
    console.log(`${keys[i]} -> ${city[keys[i]]}`);
};