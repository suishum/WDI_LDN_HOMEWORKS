import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class IndexRoute extends React.Component {

  state = {
    donuts: []
  }

  componentDidMount() {
    axios.get('https://ga-doughnuts.herokuapp.com/donuts/')
      .then(res => this.setState({ donuts: res.data }));
  }

  render () {
    return(
      <div className="container">
        <ul className="columns is-multiline">
          {this.state.donuts.map((donut, i) =>
            <li key={i} className="column is-one-third">
              <Link to={`/donuts/${donut.id}`}>
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-4">{donut.style}</h3>
                    <h4 className="subtitle">{donut.flavor}</h4>
                  </div>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default IndexRoute;
