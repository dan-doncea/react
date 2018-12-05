import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSocketConnection = this.handleSocketConnection.bind(this);
  };

  state = {
    title: null,
    content: null,
    socket: new WebSocket('ws://localhost:8080/ws/articles')
  }

  componentDidMount() {
    this.state.socket.addEventListener('message', this.handleSocketConnection);
  }

  handleSocketConnection = (event) => {
    const response = JSON.parse(event.data);
    this.setState({
      title: response.title,
      content: response.content
    });
  }

  render() {
    return (
      <div className="App">
        Article Push Notification
        <div className="Wrapper">
          <div className="Title">{this.state.title}</div>
          <div className="Content">{this.state.content}</div>
        </div>
      </div>
    );
  }
}

export default App;
