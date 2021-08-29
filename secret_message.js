/****************************************************************************************************
*** File Name:      secret_message.js
*** Description:    JavaScript to create a secret message from an array
*** Author:         Trevor Carson
*** Date:           2021-08-29
*****************************************************************************************************/

// Variable to hold the secret message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// console.log(secretMessage.length);
// console.log(secretMessage);
secretMessage.pop();
secretMessage.push("to", "program");
// console.log(secretMessage.length);
secretMessage[7] = "right";
secretMessage.shift();
secretMessage.unshift("Programming");
secretMessage.splice(6, 5, "know");
console.log(secretMessage.join());
