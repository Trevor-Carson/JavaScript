/****************************************************************************************************
*** File Name:      function_consistency_checker.js
*** Description:    JavaScript to run higher-order functions
*** Author:         Trevor Carson
*** Date:           2021-09-01
*****************************************************************************************************/

// A function to check if 2+2=4 a million times
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i <= 1000000; i++) {
        if ((2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
    }
};

// Function to add two to a specified number
const addTwo = num => num + 2;

// Higher-order function to test the time it takes to run the passed in function
const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();                            // Variable to hold the current time
    funcParameter();
    let t2 = Date.now();                            // Variable to hold the time after the function finishes
    return t2 - t1;
};

// Function to increase readability of name
const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

// Higher-order function to check if multiple calls to the same function are identical
const checkConsistentOutput = (func, value) => {
    let firstTry = func(value);                     // Variable to hold the first time the passed function runs
    let secondTry = func(value);                    // Variable to hold the second time the passed function runs
    if (firstTry === secondTry) {
        return firstTry;
    } else {
        return "This function returned inconsistent results";
    }
};

// Test data
checkConsistentOutput(addTwo);
