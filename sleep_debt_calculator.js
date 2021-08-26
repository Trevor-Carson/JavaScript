/****************************************************************************************************
*** File Name:      sleep_debt_calculator.js
*** Description:    JavaScript to calculate actual sleep VS ideal sleep
*** Author:         Trevor Carson
*** Date:           2021-08-25
*****************************************************************************************************/

// Function to take in a day and return the amount of hours slept
const getSleepHours = day => {
    switch (day){
      case ("sunday"):
        return 8;
      case ("monday"):
        return 8;
      case ("tuesday"):
        return 8;
      case ("wednesday"):
        return 8;
      case ("thursday"):
        return 8;
      case ("friday"):
        return 8;
      case ("saturday"):
        return 8;
    }
  }
  
  // Function to calculate sleep hours with implicit return
  const getActualSleepHours = () => (getSleepHours("sunday") + getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday"));
  
  // Function to hold the ideal sleep hours preferred per night/week 
  const getIdealSleepHours = () => {
    const idealHours = 8; // Variable to hold the ideal amounst of sleep per night
    return idealHours * 7;
  };
  
  // Function to calculate sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(); // Variable to hold actual time slept/week
    const idealSleepHours = getIdealSleepHours();   // Variable to hold ideal time slept/week
    const calculateExtra = (Math.abs(actualSleepHours - idealSleepHours));  // Variable to calculate extra sleep
  
    if (actualSleepHours === idealSleepHours) {
      console.log("The user got the perfect amount of sleep.");
    } else if (actualSleepHours < idealSleepHours){
      console.log(`The user is missing ${calculateExtra} hours of sleep and should get some rest.`);
    } else if (actualSleepHours > idealSleepHours){
      console.log(`The user got ${calculateExtra} more hours of sleep than needed.`);
    }
  };
  
  calculateSleepDebt();
  