function lowerPrices(arr) {
  let products = {};

  for (let i = 0; i < arr.length; i++) {
    let props = arr[i].split(" | ");

    if (!products.hasOwnProperty(props[1])) {
      products[props[1]] = {
        lowerP: Number(props[2]),
        town: props[0],
      };
    } else {
      if (Number(products[props[1]].lowerP) > Number(props[2])) {
        products[props[1]] = {
          lowerP: Number(props[2]),
          town: props[0],
        };
      }
    }
  }

  let newA = Object.entries(products);

  for (let [prod, val] of Object.entries(products)) {
    let el = Object.values(val);

    console.log(`${prod} -> ${val.lowerP} (${val.town})`);
  }
}

lowerPrices([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  'Washington City | Mercedes | 1000'
]);
