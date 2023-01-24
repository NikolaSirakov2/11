function catalog(arr) {
  console.log(arr);

  let sorted = arr.sort();

  console.log(sorted);

  let catalog = {};

  for(let i = 0; i < sorted.length; i++){
        if(!catalog.hasOwnProperty(sorted[i][0])){
            catalog[sorted[i][0]] = sorted[i];
        } else {
            catalog[sorted[i][0]] += sorted[i];
        }
  }

  console.log(catalog);
}

catalog([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
