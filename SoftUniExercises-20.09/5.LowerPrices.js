function lowerPrices(arr) {
  let products = {};

  for (let i = 0; i < arr.length; i++) {
    let props = arr[i].split(" | ");

    if (!products.hasOwnProperty(props[1])) {
      products[props[1]] = {
        lowerP: props[2],
        town: props[0],
      };
    } else {
      if (products[props[1]].lowerP > props[2]) {
        products[props[1]] = {
          lowerP: props[2],
          town: props[0],
        };
      }
    }
  }

  let newA = Object.entries(products);

  for (let [prod, val] of newA) {
    let el = Object.values(val);

    console.log(`${prod} -> ${el[0]} (${el[1]})`);
  }
}

lowerPrices([
  "Sample Town | Sample Product | 1500",

  "Sample Town | Orange | 5",

  "Sample Town | Peach | 1",

  "Sofia | Orange | 3",

  "Sofia | Peach | 2",

  "New York | Sample Product | 1000.1",

  "New York | Burger | 10",
]);
