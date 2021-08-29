/****************************************************************************************************
*** File Name:      iterating_through_strings.js
*** Description:    JavaScript to iterate though strings
*** Author:         Trevor Carson
*** Date:           2021-08-29
*****************************************************************************************************/

const spellingWord = 'hippopotamus';

for (const char of spellingWord) {
  console.log(char);
}

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

for (const pokemon of pokemonList) {
  if (pokemon === "Yoshi") {
    continue;
  }
  console.log(`You caught a ${pokemon}!`);
}
