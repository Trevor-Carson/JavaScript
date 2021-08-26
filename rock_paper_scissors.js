/****************************************************************************************************
*** File Name:      rock_paper_scissors.js
*** Description:    JavaScript to play rock, paper, scissors VS the computer
*** Author:         Trevor Carson
*** Date:           2021-08-25
*****************************************************************************************************/

// Function to get users input and check if it's valid for the game
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput;
  } else {
    return console.log("Error, not a valid choice");
  }
};

// Function to randomly return rock, paper, or scissors for the computers play
const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)) {
    case (0):
      return "rock";
    case (1):
      return "paper";
    case (2):
      return "scissors";
    default:
      console.log("Error: Number out of bounds.");
      break;
  }
}

// Function to determine the winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return console.log("The game was a tie.");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return console.log("Paper covers rock, the computer wins!");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    return console.log("Rock breaks scissors, you win!");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    return console.log("Paper covers rock, you win!");
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return console.log("Scissors cut paper, the computer wins!");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return console.log("Rock breaks scissors, the computer wins!");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    return console.log("Scissors cut paper, you win!");
  } else if (userChoice === "bomb" && computerChoice === "rock") {
      return console.log("Bomb explodes rock, you win!");
  } else if (userChoice === "bomb" && computerChoice === "paper") {
      return console.log("Bomb explodes paper, you win!");
  } else if (userChoice === "bomb" && computerChoice === "scissors") {
      return console.log("Bomb explodes scissors, you win!");
  }
}

// Function to play the game
function playGame() {
const usersChoice = "bomb"; // Variable to hold the users choice
determineWinner(getUserChoice(usersChoice), getComputerChoice());
}

playGame();
