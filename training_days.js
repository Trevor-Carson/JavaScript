/****************************************************************************************************
*** File Name:      training_days.js
*** Description:    JavaScript to randomize an althletes event and report number of days to train
*** Author:         Trevor Carson
*** Date:           2021-08-26
*****************************************************************************************************/

// Function to select an event at random
const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3); // Variable to hold a random number between 0 and 2
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // Function to return the number of days based on event 
  const getTrainingDays = event => {
    let days = 0; // Variable for the amount of days to train
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
    return days;
  };
  
  // Prints the athletes name and event type
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  // Prints the athletes name and time to train
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();           // Variable to hold event from function
  const days = getTrainingDays(event);    // Variable to hold days left to train from function
  const name = "Nala";                    // Variable to hold the first athletes name
  logEvent(name, event);
  logTime(name, days);
  
  const event2 = getRandEvent();          // Variable to hold event from function
  const days2 = getTrainingDays(event2);  // Variable to hold days left to train from function
  const name2 = 'Warren';                 // Variable to hold the first athletes name
  logEvent(name2, event2);
  logTime(name2, days2);
  