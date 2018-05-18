import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/Game';

import './assets/scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <div className="container">
        <div className="flex">
          <h1 className="center full-width marbot">Rock, Paper, Scissors</h1>
        </div>
        <Game />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
