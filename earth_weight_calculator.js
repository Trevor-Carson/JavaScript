/****************************************************************************************************
*** File Name:      earth_weight_calculator.js
*** Description:    JavaScript to calculate earth weight on different planets in the solar system
*** Author:         Trevor Carson
*** Date:           2021-08-27
*****************************************************************************************************/

// Fucntion to calculate weight on different planets
const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case "Mercury":
            return earthWeight * .378;
        case "Venus":
            return earthWeight * .907;
        case "Mars":
            return earthWeight * .377;
        case "Jupiter":
            return earthWeight * 2.36;
        case "Saturn":
            return earthWeight * .916;
        case "Uranus":
            return earthWeight * .889;
        case "Neptune":
            return earthWeight * 1.12;
        case "Pluto":
            return earthWeight * .071;
        default:
            return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune, or Pluto."
    }
}
