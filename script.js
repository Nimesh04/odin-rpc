// Variables to keep track of score

let humanScore = 0;
let computerScore = 0;

// List of choices that can choosed by random function.
// Choose randomly from 0 to 3.
// Return the item in that number from the list.

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor((Math.random()* 3));
    return computerChoice[randomNumber]
}


// Display the results in the DOM

const div = document.querySelector(".results");
const para = document.createElement("p");
const para1 = document.createElement("p");
para.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
div.appendChild(para);


// Function to play the round
// If human choose rock and computer choose scissors, human wins
// If human choose scissors and computer choose paper, human wins
// If human choose paper and computer choose rock, human wins
// If both human and computer choose the same it's a draw
// If vice versa computer wins.

function playRound(humanChoice, computerChoice){
    let results = '';
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    if(human == "rock"){
        if(computer == "scissors"){
            humanScore++;
            results = "You win! Rock beats scissors";
        }

        if(computer == "paper"){
            computerScore++;
            results = "You lose! Scissors beats Rock";
        }

        if(computer == "rock"){
            results = "DRAW";
        }
    } else if(human == "scissors")
    {
        if(computer == "paper"){
            humanScore++;
            results = "You win! Scissors beats paper";
        }

        if(computer == "rock"){
            computerScore++;
            results = "You lose! Rock beats scissor";
        }

        if(computer == "scissors"){
            results = "DRAW";
        }
    }
    else
    {
        if(computer == "rock"){
            humanScore++;
            results = "You win! Paper beats rock";
        }

        if(computer == "scissors"){
            computerScore++;
            results = "You lose! Scissors beats paper";
        }

        if(computer == "paper"){
            results = "DRAW";
        }
    }

    para.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;
    para1.textContent = results;
    div.append(para, para1);
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
}

// EventListener to all the click event happening in the button
// Using the textContent of the button to figure out human choice.
const btn = document.querySelectorAll("button");
btn.forEach(element => {
    element.addEventListener("click",() => playRound(element.textContent, getComputerChoice()));
});

console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);


