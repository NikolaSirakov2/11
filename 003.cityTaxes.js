let town = {};

function cityRecord(name, population, treasury) {
  let city = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes: function () {
      return (city.treasury += city.population * city.taxRate);
    },
    applyGrowth: function (percentage) {
      return (city.population += city.population * (percentage / 100));
    },
    applyRecession: function (percentage) {
      return (city.treasury -= city.treasury * (percentage / 100));
    },
  };

  town = city;
  return town;
}

cityRecord("Tortuga", 7000, 15000);
town.collectTaxes();
console.log(town.treasury);
town.applyGrowth(5);
console.log(town.population);
town.applyRecession(10);
console.log(town.treasury);
