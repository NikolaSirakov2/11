function convertToJson(name, last, eyes){
    let person = {
        firstName: name,
        familyName: last,
        eyesColor: eyes
    }

    console.log(JSON.stringify(person));
}

convertToJson("George", "Jones", "Brown");