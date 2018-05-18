import React from 'react';
import ReactDOM from 'react-dom';

import TubeStatus from './components/TubeStatus.js';

import 'bulma';
import './assets/scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <div className="container">
        <div className="tfl-roundel">
          <div className="red-circle"></div>
          <div className="blue-banner"><marquee>The tubes are fucked</marquee></div>
        </div>
        <TubeStatus />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
