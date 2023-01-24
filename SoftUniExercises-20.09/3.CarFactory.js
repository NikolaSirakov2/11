function carFactory({ model, power, color, carriage, wheelsize }) {
  let volume = 1800;

  if (90 < power && power < 121) {
    power = 120;
    volume = 2400;
  } else if (power > 120) {
    power = 200;
    volume = 3500;
  } else {
    power = 90;
  }

  let wheels = [];

  for (let i = 0; i < 4; i++) {
    if (wheelsize % 2 !== 0) {
      wheels.push(wheelsize);
    } else {
      wheels.push(wheelsize - 1);
    }
  }

  let newCar = {
    model: model,
    engine: { power: power, volume: volume },
    carriage: { type: carriage, color: color},
    wheels: wheels
  }

  return newCar;
}

carFactory({ model: 'Opel Vectra',

power: 65,

color: 'grey',

carriage: 'coupe',

wheelsize: 17 });
