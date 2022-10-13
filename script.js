/* Add some variables here so that you have some "counting" variables in a global scope 
to refrence in functions.
*/

let playerCount = 0;
let compCount = 0;

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
// created three variables for the three different selections

paper.addEventListener("click",() => {playRound(paper)});
rock.addEventListener("click",() => {playRound(rock)});
scissors.addEventListener("click",() => {playRound(scissors)});
// Creates event listeners to play a round using the appropriate playerSelection.

const resultDisplay = document.querySelector("#result-display");
const scoreDisplay = document.querySelector("#score-display");
const announcement = document.querySelector("#announcement");



function computerPlay() {
    let play = Math.round(Math.random() * 100);
    if (play <= 33) {
        return "Rock";
    }
    else if (play <= 66) {
        return "Scissors";
    }
    else {
        return "Paper";
    }
} // Randomly generates a return value of either "Rock", "Paper", "Scissors".

function playRound(playerSelection, computerSelection = computerPlay()) {
    const player = playerSelection.id; // This represents the id name for whatever is passed into the playerSelection parameter
    const comp = computerSelection;
    


     if (player === "Rock") {
         if (comp === "Rock") {
             playerCount += 0;
             compCount += 0;
             resultDisplay.innerText = `It's a tie! You both chose ${comp}`;
             scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
         }
        else if (comp === "Scissors") {
            playerCount += 1;
            compCount += 0;
            resultDisplay.innerText = `You win! ${player} beats ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
        }
        else {
            playerCount += 0;
            compCount += 1;
            resultDisplay.innerText = `You lose! ${comp} beats ${player}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
            
        }

     };
     if (player === "Scissors") {
        if (comp === "Scissors") {
            playerCount += 0;
            compCount += 0;
            resultDisplay.innerText `It's a tie! You both chose ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
            
        }
       else if (comp === "Paper") {
            playerCount += 1;
            compCount += 0;
            resultDisplay.innerText = `You win! ${player} beats ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
       else {
        playerCount += 0;
        compCount += 1;
        resultDisplay.innerText = `You lose! ${comp} beats ${player}`
        scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`; 
       }
    };

    if (player === "Paper") {
        if (comp === "Paper") {
            playerCount += 0;
            compCount += 0;
            resultDisplay.innerText = `It's a tie! You both chose ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
            
        }
       else if (comp === "Rock") {
            playerCount += 1;
            compCount += 0;
            resultDisplay.innerText = `You win! ${player} beats ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
       else {
        playerCount += 0;
        compCount += 1;
        resultDisplay.innerText = `You lose! ${comp} beats ${player}`;
        scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
    };
} 

if (playerCount < 5 || compCount < 5) {
    if (playerCount > compCount) {
        announcement.innerText = "YOU WON BABY!!";
       
    } else if (playerCount == compCount) {
        announcement.innerText = "IT'S A TIE!!";
        
    }
    else {
        announcement.innerText = "SORRY YOU LOST :(";
    }
    playerCount = 0;
    compCount = 0;  


}

/*function game() {
    for (let i = 0; i < 5; i++) {

        playRound();
        console.log(`Player score: ${playerCount}`);
        console.log(`Computer score: ${compCount}`);
        }
    if (playerCount > compCount) {
        console.log("YOU WON BABY!!");
        console.log(`Final score - Player = ${playerCount}, Computer = ${compCount}`);
    } else if (playerCount == compCount) {
        console.log("IT'S A TIE!!");
        console.log(`Final score - Player = ${playerCount}, Computer = ${compCount}`);
    }
    else {
        console.log("SORRY YOU LOST :(");
        console.log(`Final score - Player = ${playerCount}, Computer = ${compCount}`);
    }
    playerCount = 0;
    compCount = 0;  

}*/


// hello
