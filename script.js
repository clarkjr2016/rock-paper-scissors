/* Add some variables here so that you have some "counting" variables in a global scope 
to refrence in functions.
*/
let playerCount = 0;
let compCount = 0;

/* const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');

*/


const resultDisplay = document.querySelector("#result-display");
const scoreDisplay = document.querySelector("#score-display");


const selections = Array.from(document.querySelectorAll("button"));
selections.forEach((btn) => btn.addEventListener("click", (event) => {
    const comp = computerPlay();
     const playerSelection = event.target.id;
     
     if (playerSelection === "Rock") {
        if (comp === "Rock") {
            playerCount += 0;
            compCount += 0;
           resultDisplay.innerText = `It's a tie! You both chose ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
        }
       else if (comp === "Scissors") {
           playerCount += 1;
           compCount += 0;
           resultDisplay.innerText = `You win! ${playerSelection} beats ${comp}`;
           scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
       }
       else {
           playerCount += 0;
           compCount += 1;
           resultDisplay.innerText = `You lose! ${comp} beats ${playerSelection}`;
           scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
       if (playerCount === 5 || compCount ===5 ) {
        stopGame();
      };

    };
    if (playerSelection === "Scissors") {
       if (comp === "Scissors") {
           playerCount += 0;
           compCount += 0;
           resultDisplay.innerText =`It's a tie! You both chose ${comp}`;
           scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
      else if (comp === "Paper") {
           playerCount += 1;
           compCount += 0;
           resultDisplay.innerText = `You win! ${playerSelection} beats ${comp}`;
           scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
          
      }
      else {
       playerCount += 0;
       compCount += 1;
       resultDisplay.innerText = `You lose! ${comp} beats ${playerSelection}`
       scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`; 
      }
      if (playerCount === 5 || compCount ===5 ) {
        stopGame();
      };
   };

   if (playerSelection === "Paper") {
       if (comp === "Paper") {
           playerCount += 0;
           compCount += 0;
           resultDisplay.innerText = `It's a tie! You both chose ${comp}`;
           scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
      else if (comp === "Rock") {
           playerCount += 1;
           compCount += 0;
           resultDisplay.innerText = `You win! ${playerSelection} beats ${comp}`;
           scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
          
      }
      else {
       playerCount += 0;
       compCount += 1;
       resultDisplay.innerText = `You lose! ${comp} beats ${playerSelection}`;
       scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
          
      }
      if (playerCount === 5 || compCount ===5 ) {
        stopGame();
      };
   };
}

     
   
))


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
}



function stopGame() {
    if (playerCount > compCount) {
        resultDisplay.innerText = "You Won";
    } else {
        resultDisplay.innerText = "You Lost";
    
    }
    scoreDisplay.innerText ="";
    playerCount = 0;
    compCount = 0;
} // this resets the count back to 0 






/* function playRound(playerSelection, computerSelection = computerPlay()) {
    const player = playerSelection // This represents the id name for whatever is passed into the playerSelection parameter
    const comp = computerSelection;
    


     if (player.id === "Rock") {
         if (comp === "Rock") {
             playerCount += 0;
             compCount += 0;
            resultDisplay.innerText = `It's a tie! You both chose ${comp}`;
             scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
         }
        else if (comp === "Scissors") {
            playerCount += 1;
            compCount += 0;
            resultDisplay.innerText = `You win! ${player.id} beats ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
        }
        else {
            playerCount += 0;
            compCount += 1;
            resultDisplay.innerText = `You lose! ${comp} beats ${player.id}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
            
        }

     };
     if (player.id === "Scissors") {
        if (comp === "Scissors") {
            playerCount += 0;
            compCount += 0;
            resultDisplay.innerText `It's a tie! You both chose ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
            
        }
       else if (comp === "Paper") {
            playerCount += 1;
            compCount += 0;
            resultDisplay.innerText = `You win! ${player.id} beats ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
       else {
        playerCount += 0;
        compCount += 1;
        resultDisplay.innerText = `You lose! ${comp} beats ${player.id}`
        scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`; 
       }
    };

    if (player.id === "Paper") {
        if (comp === "Paper") {
            playerCount += 0;
            compCount += 0;
            resultDisplay.innerText = `It's a tie! You both chose ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
            
        }
       else if (comp === "Rock") {
            playerCount += 1;
            compCount += 0;
            resultDisplay.innerText = `You win! ${player.id} beats ${comp}`;
            scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
       else {
        playerCount += 0;
        compCount += 1;
        resultDisplay.innerText = `You lose! ${comp} beats ${player.id}`;
        scoreDisplay.innerText = `Player Score: ${playerCount} Computer Score: ${compCount}`;
           
       }
    };
} */


// function to generate a computers play

