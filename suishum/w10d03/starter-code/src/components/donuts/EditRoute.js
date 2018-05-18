import React from 'react';
import axios from 'axios';

class EditRoute extends React.Component {

  state = {
    style: '',
    flavor: ''
  }

  componentDidMount() {
    axios.get(`https://ga-doughnuts.herokuapp.com/donuts/${this.props.match.params.id}`)
      .then(res => this.setState(res.data));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://ga-doughnuts.herokuapp.com/donuts/${this.props.match.params.id}`, this.state)
      .then(res => console.log(res.data))
      .then(() => this.props.history.push(`/donuts/${this.props.match.params.id}`));
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
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
            value={this.state.style}
          />
        </div>
        <div className="field">
          <label htmlFor="name">Donut Flavor</label>
          <input
            className="input"
            placeholder="eg: Chocolate"
            name="flavor"
            onChange={this.handleChange}
            value={this.state.flavor}
          />
        </div>
        <button className="button is-primary">Submit</button>
      </form>
    );
  }
}

export default EditRoute;
