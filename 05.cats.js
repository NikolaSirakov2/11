function cats(arr) {
  for (let i = 0; i < arr.length; i++) {
    let [name, age] = arr[i].split(" ");
    
    let cat = {
      name: name,
      age: age,
      sayMeow: function () {
        return `${cat.name}, age ${cat.age} says Meow.`;
      },
    };

    console.log(cat.sayMeow());
  }
}

cats(['Candy 1', 'Poppy 3', 'Nyx 2']);