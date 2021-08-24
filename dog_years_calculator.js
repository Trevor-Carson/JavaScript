/****************************************************************************************************
*** File Name:      TemperatureCalculator.js
*** Description:    JavaScript to convert years to reflect a dogs age
*** Author:         Trevor Carson
*** Date:           2021-08-24
*****************************************************************************************************/

// Variable to hold the age to convert to dog years
const age = 18;
// Variable for the first 2 years of a dogs life
let earlyYears = 2;
earlyYears *= 10.5;

// Variable for the remaining age to calculate
let laterYears = age - 2;
laterYears *= 4;

var ageInDogYears = earlyYears + laterYears;
console.log(`${age} year(s) for a dog is equal to ${ageInDogYears} year(s)`);
