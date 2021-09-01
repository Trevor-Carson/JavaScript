/****************************************************************************************************
*** File Name:      function_iterators.js
*** Description:    JavaScript to run function iterators
*** Author:         Trevor Carson
*** Date:           2021-09-01
*****************************************************************************************************/

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];                                         // Variable to hold an array of strings

// Function iterator to print out the names in artists array followed by a predefinded string
artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];                                                                    // Variable to store an array of numbers

// Function to iterate through an array and print the cube root of each number mapped
const squareNumbers = numbers.map(number => {
    return number ** 3;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];                                         // Variable to hold an array of strings and numbers

// Function iterator to filter an array and print only the numbers to the console
const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});

console.log(onlyNumbers);

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];  // Variable to hold array of strings

// Function iterator to find the index of the animal elephant (Finds first instance, if none exists returns -1)
const foundAnimal = animals.findIndex(animal => {
    return animal === "elephant";
  });
 
  const newNumbers = [1, 3, 5, 7];                                                                  // Variable to hold array of numbers

  // Function iterator to reduce the array newNumbers into a single value
  const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    console.log(currentValue);
    return accumulator + currentValue
  }, 10);   // Value 10 is the second argument for .reduce() (Adds 10 to the overall result)
  
  console.log(newSum);
