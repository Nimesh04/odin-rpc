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

// If human choose rock and computer choose scissors, human wins
// If human choose scissors and computer choose paper, human wins
// If human choose paper and computer choose rock, human wins
// If both human and computer choose the same it's a draw
// If vice versa computer wins.

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    if(human == "rock"){
        if(computer == "scissors"){
            humanScore++;
            console.log("You win! Rock beats scissors");
        }

        if(computer == "paper"){
            computerScore++;
            console.log("You lose! Scissors beats Rock");
        }

        if(computer == "rock"){
            console.log("DRAW");
        }
    } else if(human == "scissors")
    {
        if(computer == "paper"){
            humanScore++;
            console.log("You win! Scissors beats paper");
        }

        if(computer == "rock"){
            computerScore++;
            console.log("You lose! Rock beats scissor");
        }

        if(computer == "scissors"){
            console.log("DRAW");
        }
    }
    else
    {
        if(computer == "rock"){
            humanScore++;
            console.log("You win! Paper beats rock");
        }

        if(computer == "scissors"){
            computerScore++;
            console.log("You lose! Scissors beats paper");
        }

        if(computer == "paper"){
            console.log("DRAW");
        }
    }
}


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);