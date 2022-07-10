function computerPlay() {
    let play = Math.round(Math.random() * 100);
    if (play <= 33) {
        console.log("Rock");
    }
    else if (play <= 66) {
        console.log("Scissors");
    }
    else {
        console.log("Paper")
    }
}

computerPlay();