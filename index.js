const prompt = require(`prompt-sync`)();


const choices = ['rock', 'paper', 'scissors'];

const outcomes = {
rock: { beats: 'scissors', losesTo: 'paper' },
  
paper: { beats: 'rock', losesTo: 'scissors' },
  
scissors: { beats: 'paper', losesTo: 'rock' }
};

function determineWinner(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
        return 'Its a tie!';
    } else if (outcomes[player1Choice].beats === player2Choice) {
        return 'Player 1 wins!';
    } else {
        return 'Player 2 wins!';
    }
}

function playGame(rounds) {
  let player1Score = 0;
  let player2Score = 0;

  for (let i = 0; i < rounds; i++) {
      const player1Choice = prompt('Player 1, choose rock, paper, or scissors:').toLowerCase();
      const player2Choice = prompt('Player 2, choose rock, paper, or scissors:').toLowerCase();

      
      if (!choices.includes(player1Choice) || !choices.includes(player2Choice)) {
          alert('Invalid choice. Please choose rock, paper, or scissors.');
          i--; 
          continue;
      }

      const result = determineWinner(player1Choice, player2Choice);
      console.log(result);

    if (result === 'Player 1 wins!') {
        player1Score++;
    } else if (result === 'Player 2 wins!') {
        player2Score++;
    }
    console.log(`Score: Player 1 ${player1Score} - ${player2Score} Player 2`);
    }
  if (player1Score > player2Score) {
          alert(`Player 1 wins the game with a score of ${player1Score}-${player2Score}.`);
      } else if (player1Score < player2Score) {
          alert(`Player 2 wins the game with a score of ${player1Score}-${player2Score}.`);
      } else {
          alert('Its a tie! The game ends in a draw.');
      }
  }
playGame(3);