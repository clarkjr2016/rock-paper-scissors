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

function playRound(playerSelection, computerSelection = computerPlay()) {
    const player = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1); // This makes the user input entry case insensitive
    const comp = computerSelection;
    let playerResults;


     if (player === "Rock") {
         if (comp === "Rock") {
            playerResults = null;
            compResults = null;
             return `It's a tie! You both chose ${comp}`;
             
         }
        else if (comp === "Scissors") {
            
            return `You win! ${player} beats ${comp}`;
            
        }
        else {
            
            return `You lose! ${comp} beats ${player}`;
            
        }
     };
     if (player === "Scissors") {
        if (comp === "Scissors") {
            
            return `It's a tie! You both chose ${comp}`
            
        }
       else if (comp === "Paper") {
        
           return `You win! ${player} beats ${comp}`
           
       }
       else {
        
           return `You lose! ${comp} beats ${player}`
           
       }
    };

    if (player === "Paper") {
        if (comp === "Paper") {
            
            return `It's a tie! You both chose ${comp}`
            
        }
       else if (comp === "Rock") {
        
           return `You win! ${player} beats ${comp}`
           
       }
       else {
           return `You lose! ${comp} beats ${player}`
           
       }
    };
}

function game() {
    for (let i = 0; i < 5; i++) {

        let compCount = 0
        let playerCount = 0
playRound(prompt("Rock Paper or Scissors"));
        
        }
    

}

