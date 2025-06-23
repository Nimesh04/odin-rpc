// List of choices that can choosed by random function.
// Choose randomly from 0 to 3.
// Return the item in that number from the list.

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor((Math.random()* 3));
    return computerChoice[randomNumber]
}

// Get input from user
// Validate the input from the user with the choices

function getHumanChoice(){
    const humanChoice = prompt("Rock, paper or scissors:");
    return humanChoice;
}

// Variables to keep track of score

let humanScore = 0;
let computerScore = 0;

// Function to play the round

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    console.log(human,", ",computer);
}


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);