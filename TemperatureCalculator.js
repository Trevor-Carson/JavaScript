/****************************************************************************************************
*** File Name:      TemperatureCalculator.js
*** Description:    JavaScript to convert a temperature in Kelvin to Celsius/Fahrenheit/Newton Scale
*** Author:         Trevor Carson
*** Date:           2021-08-24
*****************************************************************************************************/

// Constant variable to store the current temperature
const kelvin = 0;
// Variable to convernt Kelvin to Celsius
const celsius = (kelvin - 273);
// Variable to convert Celsius to Fahrenheit
let fahrenheit = (celsius * (9/5) + 32);
// Rounds down the temperature of fahrenheit to the nearest integer
fahrenheit = Math.floor(fahrenheit);
// Variable to convert Celsius to the Newton scale.
let newton = celsius * (33/100);
// Rounds down the Newton Scale to the nearest integer
newton = Math.floor(newton);

console.log(`Kelvin temperature: ${kelvin}`)
console.log(`The temperature is ${celsius} degrees in Celsius.`);
console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);
console.log(`The temperature is ${newton} on the Newton scale.`);
