/****************************************************************************************************
*** File Name:      magic_eight_ball.js
*** Description:    JavaScript magic eight ball game
*** Author:         Trevor Carson
*** Date:           2021-08-24
*****************************************************************************************************/

// Variable to store the users name
let userName = "";
userName ? console.log(`Hello ${userName}`) : console.log("Hello!");
// Variable to store the users question
const userQuestion = "Should I make my game map?";
console.log(`The user asked: ${userQuestion}`);
// Selects a random number between 0 and 7
randomNumber = Math.floor(Math.random() * 8);
// Variable to store the 8 balls response
let eightBall = "";

switch(randomNumber) {
  case 0: 
    eightBall = ("It is certain");
    break;
  case 1: 
    eightBall = ("It is decidedly so");
    break;
  case 2: 
    eightBall = ("Reply hazy try again");
    break;
  case 3: 
    eightBall = ("Cannot predict now");
    break;
  case 4: 
    eightBall = ("Do not count on it");
    break;
  case 5: 
    eightBall = ("My sources say no");
    break;
  case 6: 
    eightBall = ("Outlook not so good");
    break;
  case 7: 
    eightBall = ("Signs point to yes");
    break;
  default:
    console.log("Number is outside array bounds");
    break;
}

console.log(eightBall);
