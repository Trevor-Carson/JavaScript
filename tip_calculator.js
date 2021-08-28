/****************************************************************************************************
*** File Name:      tip_calculator.js
*** Description:    JavaScript function calculate tip based off quality of service
*** Author:         Trevor Carson
*** Date:           2021-08-27
*****************************************************************************************************/

// Function to calculate tip based off service quality
const tipCalculator = (qualityOfService, totalCost) => {
    if (qualityOfService === "excellent") {
      return .3 * totalCost;
    } else if (qualityOfService === "good") {
      return .2 * totalCost;
    } else if (qualityOfService === "ok") {
      return .15 * totalCost;
    } else if (qualityOfService === "bad") {
      return .05 * totalCost;
    } else {
      return .18 * totalCost;
    }
  }
  
  console.log(tipCalculator('good', 100)) // returns 20
  