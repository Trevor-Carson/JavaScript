/****************************************************************************************************
*** File Name:      race_day.js
*** Description:    JavaScript to assign a number and instructions to runners of various ages
*** Author:         Trevor Carson
*** Date:           2021-08-25
*****************************************************************************************************/

// Randomly assigngs a number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);
// Variable to determine if a runner registered early
const hasRegisteredEarly = false;
// Variable to hold the runners age
const age = 19;

if (age >= 18 && hasRegisteredEarly) {
  raceNumber += 1000;
}

if (age >= 18 && hasRegisteredEarly) {
  console.log(`Your race number is: ${raceNumber}`);
  console.log(`Your race begins at 9:30AM.`);
} else if (age >= 18 && !hasRegisteredEarly) {
  console.log(`Your race number is: ${raceNumber}`);
  console.log(`Your race begins at 11:00AM.`);
} else if (age < 18){
  console.log(`Your race number is: ${raceNumber}`);
  console.log(`Your race begins at 12:30PM.`);
} else {
  console.log("Runners who are 18 years old should see the registration desk.")
}
