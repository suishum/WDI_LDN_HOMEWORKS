import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import Search from './components/Search';
import Gifs from './components/Gifs';
import More from './components/More';

import './assets/scss/style.scss';

import axios from 'axios';
import 'bulma';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifArray: [],
      currentSearch: 'trending',
      newSearch: '',
      number: 16
    };
    this.getData = this.getData.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getData() {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.currentSearch}&api_key=YLYnNs7mGjWq8kmTFGJwDD22m5XNn8sl&limit=${this.state.number}`)
      .then(res => this.setState({ gifArray: res.data.data }));
  }

  loadMore() {
    this.setState({ number: this.state.number + 10 }, () => {
      this.getData();
    });
  }

  handleChange(e) {
    // get search query
    this.setState({ newSearch: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // get data with new search query
    this.setState({
      currentSearch: this.state.newSearch,
      newSearch: ''
    }, () => {
      this.getData();
    });
  }

  componentDidMount() {
    // get initial top 25 gifs
    this.getData();
  }

  render() {
    return(
      <div className="full-width">

        <Title />

        <Search
          newSearch={this.state.newSearch}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <Gifs gifArray={this.state.gifArray} />

        <More loadMore={this.loadMore} />

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
