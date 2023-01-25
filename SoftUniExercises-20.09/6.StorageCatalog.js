function catalog(arr) {
  let sorted = arr.sort();

  let catalog = {};

  for (let i = 0; i < sorted.length; i++) {
    let el = sorted[i].split(" : ");
    
    if (!catalog.hasOwnProperty(sorted[i][0])) {
      catalog[sorted[i][0]] = sorted[i];
      console.log(sorted[i][0]);
      console.log("  " + el[0] + ": " + el[1]);
    } else {
        console.log("  " + el[0] + ": " + el[1]);
    }
  }
}

catalog([
  "Banana : 2",
  "Rubic`s Cube : 5",
  "Raspberry P : 4999",
  "Rolex : 100000",
  "Rollon : 10",
  "Rali Car : 2000000",
  "Pesho : 0.000001",
  "Barrel : 10",
]);
