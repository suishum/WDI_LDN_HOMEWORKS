import React from 'react';
import axios from 'axios';

class NewRoute extends React.Component {

  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://ga-doughnuts.herokuapp.com/donuts', this.state)
      .then(res => console.log(res.data))
      .then(() => this.props.history.push('/donuts'));
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value }, console.log(this.state));
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="name">Donut Style</label>
          <input
            className="input"
            placeholder="eg: Old Fashioned"
            name="style"
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="name">Donut Flavor</label>
          <input
            className="input"
            placeholder="eg: Chocolate"
            name="flavor"
            onChange={this.handleChange}
          />
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default NewRoute;
