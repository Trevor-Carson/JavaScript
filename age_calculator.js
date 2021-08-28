/****************************************************************************************************
*** File Name:      age_calculator.js
*** Description:    JavaScript function calculate age based on given year
*** Author:         Trevor Carson
*** Date:           2021-08-27
*****************************************************************************************************/

// Function to calculate the users age given a year
const howOld = (age, year) => {
    const currentYear = new Date().getFullYear();       // Variable to hold the current year (yyyy)
    const calculatedAge = age + (year - currentYear);   // Variable to calculate age
    
    if (year >= currentYear) {
      return `You will be ${calculatedAge} in the year ${year}`;
    } else if (calculatedAge < 0) {
      return `The year ${year} was ${calculatedAge} years before you were born` 
    } else {
      return `You were ${calculatedAge} in the year ${year}` 
    }
  }
  
  console.log(howOld(100, 2021));
  