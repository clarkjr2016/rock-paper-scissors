/* Add some variables here so that you have some "counting" variables in a global scope 
to refrence in functions.
*/

let playerCount = 0;
let compCount = 0;

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
    const player = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1); // This makes the user input entry case insensitive
    const comp = computerSelection;
    


     if (player === "Rock") {
         if (comp === "Rock") {
             playerCount += 0;
             compCount += 0;
             return `It's a tie! You both chose ${comp}`;    
         }
        else if (comp === "Scissors") {
            playerCount += 1;
            compCount += 0;
            return `You win! ${player} beats ${comp}`;
        }
        else {
            playerCount += 0;
            compCount += 1;
            return `You lose! ${comp} beats ${player}`;
            
        }

     };
     if (player === "Scissors") {
        if (comp === "Scissors") {
            playerCount += 0;
            compCount += 0;
            return `It's a tie! You both chose ${comp}`
            
        }
       else if (comp === "Paper") {
            playerCount += 1;
            compCount += 0;
         return `You win! ${player} beats ${comp}`
           
       }
       else {
        playerCount += 0;
        compCount += 1;
           return `You lose! ${comp} beats ${player}`   
       }
    };

    if (player === "Paper") {
        if (comp === "Paper") {
            playerCount += 0;
            compCount += 0;
            return `It's a tie! You both chose ${comp}`
            
        }
       else if (comp === "Rock") {
            playerCount += 1;
            compCount += 0;
           return `You win! ${player} beats ${comp}`
           
       }
       else {
        playerCount += 0;
        compCount += 1;
           return `You lose! ${comp} beats ${player}`
           
       }
    };
}

function game() {
    for (let i = 0; i < 5; i++) {

        playRound(prompt("Rock Paper or Scissors?"));
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

}

