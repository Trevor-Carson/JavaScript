/****************************************************************************************************
*** File Name:      iterating_through_objects.js
*** Description:    JavaScript to iterate though objects
*** Author:         Trevor Carson
*** Date:           2021-08-30
*****************************************************************************************************/

// Object for spaceship
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewRank in spaceship.crew) {
  // console.log(`${crewRank}: ${spaceship.crew[crewRank].name}`);
  console.log(`${spaceship.crew[crewRank].name}: ${spaceship.crew[crewRank].degree}`);
}
