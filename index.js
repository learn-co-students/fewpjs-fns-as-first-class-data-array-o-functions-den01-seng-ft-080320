function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
  }

function leashDog(dogName, dogBreed) {
    console.log(`Please leash ${dogName} the ${dogBreed}`)
}

function walkToPark(dogName, dogBreed) {
    console.log(`Walk ${dogName} the ${dogBreed} to the park!`)
}

function throwFrisbee(dogName, dogBreed) {
    console.log(`${dogName} says throw the damn frisbee!`)
}

function walkHome(dogName) {
    console.log(`${$dogName} is tired now, lets go home`)
}

function unleashDog(dogName) {
    console.log(`please free ${dogName}`)
}

routine = [
    wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog
]

function exerciseDog(dogName, dogBreed) {
    routine.map(task => {
        task(dogName, dogBreed)
    })
}