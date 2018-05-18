import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class ShowRoute extends React.Component {

  state = {
    donut: {},
    deletePressed: false
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    axios.get(`https://ga-doughnuts.herokuapp.com/donuts/${this.props.match.params.id}`)
      .then(res => this.setState({ donut: res.data }));
  }

  handleToggle = () => {
    this.setState({ deletePressed: !this.state.deletePressed });
  }

  handleDelete = () => {
    axios.delete(`https://ga-doughnuts.herokuapp.com/donuts/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/donuts'));
  }

  render() {
    return(
      this.state.donut ? (
        <div className="container">
          <h1 className="title">{this.state.donut.style}</h1>
          <h2 className="subtitle">{this.state.donut.flavor}</h2>

          {!this.state.deletePressed ? (
            <div>
              <Link to={`/donuts/${this.state.donut.id}/edit`} className="button is-primary">Edit</Link>
              {' '}
              <button onClick={this.handleToggle} className="button is-danger">Delete</button>
            </div>
          ) : (
            <div>
              <button onClick={this.handleDelete} className="button is-primary">I&apos;m sure</button>
              {' '}
              <button onClick={this.handleToggle} className="button is-danger">Not yet</button>
            </div>
          )}

        </div>
      ) : (
        <div className="container">
          <h1 className="title">LOADING</h1>
        </div>
      )
    );
  }
}

export default ShowRoute;
