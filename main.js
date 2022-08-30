const winnerField = document.getElementById("winnerCount");
const playersChoices = document.getElementById("playersChoices");
const gameStateField = document.getElementById("gameStateField");


const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", playRockPaperScissor))

let userCount = 0;
let computerCount = 0;


function playRockPaperScissor() {
    const computer = computerChoice();
    const userChoice = this.id;
    getWinner(userChoice, computer);

}

function getWinner(userChoice, computerChoice) {
    if (userWon(userChoice, computerChoice)) {
        userCount = userCount + 1;
        printWinner(computerChoice, userChoice, "You won!");

    } else if (computerWon(userChoice, computerChoice)) {
        computerCount = computerCount + 1;
        printWinner(computerChoice, userChoice, "Computer won!");

    } else {
        printWinner(computerChoice, userChoice, "Draw!");
    }

}

function userWon(userChoice, computerChoice) {
    return userChoice === "Paper" && computerChoice === "Rock" || userChoice === "Scissor" && computerChoice === "Paper" ||
        userChoice === "Rock" && computerChoice === "Scissor";
}

function computerWon(userChoice, computerChoice) {
    return computerChoice === "Paper" && userChoice === "Rock" || computerChoice === "Scissor" && userChoice === "Paper" ||
        computerChoice === "Rock" && userChoice === "Scissor";
}

function printWinner(computerChoice, userChoice, gameState) {
    playersChoices.innerText = "You : " + userChoice + " | " + "Computer: " + computerChoice;
    gameStateField.innerText = gameState;
    winnerField.innerText = "You: " + userCount + "\n" + " Computer: " + computerCount;

}

function computerChoice() {
    const choices = Array("Rock", "Paper", "Scissor");
    return (choices[Math.floor(Math.random() * choices.length)]);
}
