// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Possible choices
    const choices = ["rock", "paper", "scissors"];

    // Function to get the computer's random choice
    const getComputerChoice = () => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    };

    // Function to determine the winner
    const getWinner = (player, computer) => {
        console.log("Player chooses", player);
        console.log("Computer chooses", computer);
        if (player === computer) {
            return "It's a tie!";
        } else if (
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper") ||
            (player === "paper" && computer === "rock")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    };

    // Main game logic
    let playerScore = 0;
    let computerScore = 0;

    const updateScores = (result) => {
        const playerScoreElement = document.getElementById("player-score");
        const computerScoreElement = document.getElementById("computer-score");

        if (result === "You win!") {
            playerScore += 1;
            playerScoreElement.textContent = playerScore;
        } else if (result === "Computer wins!") {
            computerScore += 1;
            computerScoreElement.textContent = computerScore;
        }
    };

    const playGame = (playerChoice) => {
        const computerChoice = getComputerChoice();
        const result = getWinner(playerChoice, computerChoice);
        updateScores(result);

        // Update the result display
        document.getElementById("result").innerHTML = `
            <p>You chose: ${playerChoice}</p>
            <p>Computer chose: ${computerChoice}</p>
            <h2>${result}</h2>
        `;
    };

    // Event listeners for game buttons
    document.getElementById("rock").addEventListener("click", () => playGame("rock"));
    document.getElementById("paper").addEventListener("click", () => playGame("paper"));
    document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

    // Reset button functionality
    document.getElementById("reset").addEventListener("click", () => {
        console.log("Reset button clicked"); // Debugging statement

        // Reset scores
        playerScore = 0;
        computerScore = 0;

        // Update the displayed scores
        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;

        // Clear the result display
        document.getElementById("result").innerHTML = "<p>Game reset! Play again.</p>";

        console.log("Game reset. Scores set to 0.");
    });
});
