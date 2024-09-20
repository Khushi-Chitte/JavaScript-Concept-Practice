let playGame = confirm("Would you like to play rock,paper or scissors?");
if(playGame){
    //play
    let playerChoice = prompt("Enter your choice rock, paper or scissors");
    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2? "paper"
            : "scissors" ;

            let result = playerOne === computer? "Tie game!"
            : playerOne === "rock" && computer === "paper"? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock"? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
            alert(result);

            let playAgain = confirm("Would you like to Play Again?");
            playAgain ? location.reload(): alert("Thanks for Playing!")
        }else{
            console.log("You didn't enter your choice");
        }
    }else{
        console.log("I guess you changes your mind. Maybe next time");
    }
}
else{
    console.log("Maybe next time");
}