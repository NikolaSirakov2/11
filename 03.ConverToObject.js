function convert(string){
    let person = JSON.parse(string);

    for (let key in person){
        console.log(`${key}: ${person[key]}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');