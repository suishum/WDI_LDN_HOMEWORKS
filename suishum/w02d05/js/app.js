window.addEventListener('DOMContentLoaded', () => {
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let chosenHand = '';
  let computerHand = '';
  const images = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  function winnerCalc(pick, beatsPick1, beatsPick2) {
    if (computerHand === pick) {
      winner.innerHTML = 'DRAW';
    } else if (computerHand === beatsPick1 || computerHand === beatsPick2) {
      winner.innerHTML = 'YOU WIN!';
      playerOneScore += 1;
    } else {
      winner.innerHTML = 'YOU LOSE<br>):';
      playerTwoScore += 1;
    }
    //insert players scores
    score.innerHTML = `${playerOneScore} : ${playerTwoScore}`;
  }

  //get elements from DOM
  const playerOne = document.getElementById('playerOne');
  const playerTwo = document.getElementById('playerTwo');
  // const rockButton = document.getElementById('rock');
  // const paperButton = document.getElementById('paper');
  // const scissorsButton = document.getElementById('scissors');
  // const lizardButton = document.getElementById('lizard');
  // const spockButton = document.getElementById('spock');
  const allButtons = document.getElementById('actions').children;
  const score = document.getElementById('score');
  const winner = document.getElementById('winner');
  //elements on initial title page
  const titlePage = document.getElementsByClassName('title-page-container')[0];
  const gameContainer = document.getElementsByClassName('game-outer-container')[0];
  // const titleBottomHalfButtons = document.getElementsByClassName('bottom-half')[0].children;
  const howToPlayButton = document.getElementsByClassName('how-to-play')[0];
  const howToPlayImage = document.getElementById('howToPlay');
  const readyButton = document.getElementById('ready');
  // const h1 = document.getElementsByTagName(h1)[0];

  //title page animations
  readyButton.addEventListener('mouseover', (e) => {
    e.target.style.fontSize = '30px';
  });
  readyButton.addEventListener('mouseout', (e) => {
    e.target.style.fontSize = '20px';
  });


  //starting the game from the title page
  howToPlayButton.addEventListener('click', () => {
    howToPlayImage.classList.toggle('hidden');
  });
  howToPlayImage.addEventListener('click', () => {
    howToPlayImage.classList.toggle('hidden');
  });
  readyButton.addEventListener('click', () => {
    titlePage.classList.toggle('hidden');
    gameContainer.classList.toggle('hidden');
  });

  //insert player's choice into playerOne div
  for (let i=0; i<allButtons.length; i++) {
    allButtons[i].addEventListener('click', (e) => {
      // playerOne.classList.remove('bounceIn'); cant get animations to work every time a button is clicked?
      playerOne.classList.add('bounceIn');
      playerOne.innerHTML = `<img src="/img/${e.target.id}.svg">`;
      chosenHand = e.target.id;
      //random number generator between 1-5
      const random = Math.floor(Math.random() * 5);
      //insert randomly generated computer choice into playerTwo div
      playerTwo.classList.add('bounceIn');
      playerTwo.innerHTML = `<img src="/img/${images[random]}.svg">`;
      computerHand = images[random];
      //calculate winner
      switch (chosenHand) {
        case 'rock':
          winnerCalc('rock', 'scissors', 'lizard');
          break;
        case 'paper':
          winnerCalc('paper', 'rock', 'spock');
          break;
        case 'scissors':
          winnerCalc('scissors', 'paper', 'lizard');
          break;
        case 'lizard':
          winnerCalc('lizard', 'paper', 'spock');
          break;
        case 'spock':
          winnerCalc('spock', 'rock', 'scissors');
          break;
        default:
          console.log('Sorry, that was not a valid choice');
      }
    });
  }
});
