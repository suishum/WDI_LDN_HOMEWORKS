import React from 'react';
import ReactDOM from 'react-dom';

import Messages from './components/Messages';
import Form from './components/Form';

import './assets/scss/style.scss';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: ['Hello', 'Hi there', 'Delete me'],
      newMessage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  handleChange(e) {
    this.setState({ newMessage: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      messages: this.state.messages.concat(this.state.newMessage),
      newMessage: ''
    });
  }

  deleteMessage(delMsg) {
    // console.log(delMsg);
    this.setState({ messages: this.state.messages.filter(message => message !== delMsg) });
  }

  render() {
    return(
      <div className="container">
        <h1 className="title">WDI Message Board</h1>
        <Messages
          messages={this.state.messages}
          deleteMessage={this.deleteMessage}
        />
        <Form
          newMessage={this.state.newMessage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
