import React from 'react';

import Match from './Match';
import Buttons from './Buttons';

class Game extends React.Component {

  state = {
    playerPick: '',
    opponentPick: '',
    message: ''
  }

  winConditions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors']
  };

  getWinner = (player1Choice, player2Choice) => {
    if (player1Choice === player2Choice) return 'Draw!';
    if (this.winConditions[player1Choice].includes(player2Choice)) return 'You win!';
    return 'You lose!';
  }

  handleChoice = (e) => {
    // console.log(e.currentTarget);
    const random = Math.floor(Math.random() * 3);
    const opponentChoices = ['rock', 'paper', 'scissors'];
    const playerPick = e.currentTarget.value;
    // console.log(playerPick);
    const opponentPick = opponentChoices[random];
    const message = this.getWinner(playerPick, opponentPick);

    this.setState({ playerPick, opponentPick, message });

  }

  render () {
    return (
      <div className="container">
        <div className="divider"></div>

        <Match playerPick={this.state.playerPick} opponentPick={this.state.opponentPick} />

        <div className="flex">
          <h2 className="center full-width marbot">{this.state.message}</h2>
        </div>

        <div className="divider"></div>

        <Buttons handleChoice={this.handleChoice} />

      </div>
    );
  }
}

export default Game;
