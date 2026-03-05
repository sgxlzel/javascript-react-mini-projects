const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices button");
const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdiplay");
const resultDisplay = document.getElementById("resultdisplay");
const computerScoreDisplay = document.getElementById("computerscoredisplay");
const playerScoreDisplay = document.getElementById("playerscoredisplay");

let computerScore = 0;
let playerScore = 0;

function playgame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a tie!😎";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissors" ? "You win!😒" : "Computer wins!😉";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You win!😒" : "Computer wins!😉";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You win!😒" : "Computer wins!😉";
        break;

      default:
        break;
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;
}
// playgame("rock");

buttons.forEach((button) => {
  button.addEventListener("click", () => playgame(button.id));
});

// resultDisplay.classList.remove("greentext", "redtext");
// switch(result){
//      case :
//         resultDisplay.classList.add("greentext");
//         playerScore++;
//         playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
//         break;
//     case "Computer wins!😉":
//         resultDisplay.classList.add("redtext");
//         computerScore++;
//         computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
//         break;
   
//     default:
//         break;
// }




// switch(resultDisplay.textContent) {

//     case "You win!😒":
//         resultDisplay.classList.add("greentext");
//         playerScore++;
//         playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
//         break;
//     case "Computer wins!😉":
//         resultDisplay.classList.add("redtext");
//         computerScore++;
//         computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
//         break;
//     default:
//         break;
// }

//error: resultDisplay.textContent is not updated immediately after playgame() is called, so the switch statement is not working as expected. To fix this, we can move the score updating logic inside the playgame() function, right after we set the resultDisplay.textContent. This way, we can ensure that the score is updated based on the correct result.

//error: The switch statement is not handling the tie case, which can lead to incorrect styling of the result display. To fix this, we can add a case for "It's a tie!😎" that removes any existing styling classes from the result display. This way, we can ensure that the result display is styled correctly based on the outcome of the game.
