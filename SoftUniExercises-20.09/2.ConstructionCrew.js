function crew({weight, experience, levelOfHydrated, dizziness}){
    let worker ={
        weight: weight,
        experience: experience,
        levelOfHydrated: levelOfHydrated,
        dizziness: dizziness
    }

    if(worker.dizziness === true){
        worker.levelOfHydrated += (0.1*worker.weight*worker.experience);
    }

    return worker;
}

crew({ weight: 95,

    experience: 3,
    
    levelOfHydrated: 0,
    
    dizziness: false })