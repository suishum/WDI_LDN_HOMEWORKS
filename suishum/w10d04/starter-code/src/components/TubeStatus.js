import React from 'react';
import axios from 'axios';
import _ from 'lodash';

class TubeStatus extends React.Component {
  state = {
    tubeLines: []
    // tubeColors: {
    //   'bakerloo': '#b26201',
    //   'central': '#dc2520',
    //   'circle': '#ffd329',
    //   'district': '#037c32',
    //   'hammersmith-city': '#f5a8be',
    //   'jubilee': '#a1a5a7',
    //   'metropolitan': '#9b0057',
    //   'northern': '#000000',
    //   'piccadilly': '#081aa8',
    //   'victoria': '#0198d9',
    //   'waterloo-city': '#92ceba'
    // }
  }

  getTubeLines = () => {
    axios.get('https://api.tfl.gov.uk/Line/Mode/tube/Status?detail=true&app_id=7cd988d0&app_key=1c71c58ee1bc7bc1ac10d645ab521fc7')
      .then(res =>
        this.setState({ tubeLines: _.sortBy(res.data, [res.data.name]) }, () => console.log(this.state))
      );
  }

  componentDidMount () {
    this.getTubeLines();
    setInterval(this.getTubeLines(), 30000);
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.tubeLines.map((line, i) =>
            <li key={i}>
              <span className="tube-name">{line.name}</span>
              <span className={`status ${line.lineStatuses[0].statusSeverityDescription === 'Good Service' ? 'serviceGood' : 'serviceBad' }`}>{line.lineStatuses[0].statusSeverityDescription}</span>
              <div className={`block ${line.id}`}></div>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default TubeStatus;
