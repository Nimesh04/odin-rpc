// Getting the elements from html

const para = document.querySelector("#score");
const div1 = document.querySelector(".results");
const para1 = document.createElement("p");
const btn = document.querySelectorAll("button.rps");
const restartBtn = document.querySelector("#restart");

// Variables to keep track of score

let humanScore = 0;
let computerScore = 0;

// List of choices for the random function.
// Choose randomly from 0 to 3.
// Return the item in that number from the list.

function getComputerChoice(){
    const computerChoice = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor((Math.random()* 3));
    return computerChoice[randomNumber]
}

// If humanScore is equal to 5 then displaying human(or you) won and giving a restart button
// If computerScore is equal to 5 then displaying computer won and giving a restart button

function gameOver(){
    let results = '';
    if(humanScore == 5 & computerScore < 5){
        results = "Congratulations, You won!";
    }else{
        results = "Good try, Computer won!";
    }
    btn.forEach(element => element.disabled = true);
    restartBtn.disabled = false;
    restartBtn.hidden = false;
    return results;
}

// Logic to play the game
// If human choose rock and computer choose scissors, human wins
// If human choose scissors and computer choose paper, human wins
// If human choose paper and computer choose rock, human wins
// If both human and computer choose the same it's a draw
// If vice versa computer wins.

function playGame(human, computer){
    let results = '';
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
    return results
}


// Function to restart the game

function restartGame(){
    restartBtn.hidden = true;
    btn.forEach(element => element.disabled = false);
    humanScore = 0;
    computerScore = 0;
    para.innerHTML = `<p id='score'>Human score: ${humanScore},<br>Computer score: ${computerScore}</p>`;
    para1.textContent = '';
    div1.append(para1);

}
// Function to play the round

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    let results = playGame(human, computer);
    if(humanScore >= 5 || computerScore >= 5){
        para1.textContent = gameOver();

    }else{
        para1.textContent = results;
    }
    para.innerHTML = `<p id='score'>Human score: ${humanScore},<br>Computer score: ${computerScore}</p>`;
    div1.append(para1);
    console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
}

// EventListener to all the click event happening in the button
// Using the textContent of the button to figure out human choice.
btn.forEach(element => {
    element.addEventListener("click",() => playRound(element.textContent, getComputerChoice()));
});

restartBtn.addEventListener("click", ()=> restartGame());


