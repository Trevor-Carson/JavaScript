/****************************************************************************************************
*** File Name:      whale_speak.js
*** Description:    JavaScript to translate an english phrase into whale speak
*** Author:         Trevor Carson
*** Date:           2021-08-29
*****************************************************************************************************/

const input = "turpentine and turtles.";  // Variable to hold the phrase to be translated
const vowels = ["a", "e", "i", "o", "u"]; // Variable to hold the vowels a whale can speak
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    //   resultArray.push(vowels[j], vowels[j]);
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j].toUpperCase());
      if (input[i] === "e" || input[i] === "u"){
        resultArray.push(vowels[j].toUpperCase());
      }
    }
  }
};

console.log(resultArray.join(""));
