function solve() {
  return {
    hasClima(car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = function () {
        if (car.temp > car.tempSettings) {
          car.temp -= 1;
        } else if (car.temp < car.tempSettings) {
          car.temp += 1;
        }
      };
    },

    hasAudio(car) {
      let song = car.currentTrack.name;
      let artist = car.currentTrack.artist;
      car.nowPlaying = function () {
        return `Now playing "${song}" by ${artist}`;
      };
    },

    hasParktronic(car) {
      car.checkDistance = function (param) {
        if (param < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (param < 0.25) {
          console.log("Beep! Beep!");
        } else {
          console.log("Beep!");
        }
      };
    },
  };
}

const assemblyLine = solve();

let car = {
  make: "Fiat",
  model: "Bravo",
};

assemblyLine.hasClima(car);
console.log(car.temp);
car.tempSettings = 20;
car.adjustTemp();

console.log(car.temp);

car.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};

assemblyLine.hasAudio(car);
console.log(car.nowPlaying());

assemblyLine.hasParktronic(car);
car.checkDistance(0.55)
