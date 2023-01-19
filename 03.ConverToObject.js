function convert(string){
    let person = JSON.parse(string);

    return person;
}

let aspect = convert('{"name": "George", "age": 40, "town": "Sofia"}');

for (let key in aspect){
    console.log(`${key}: ${aspect[key]}`);
}