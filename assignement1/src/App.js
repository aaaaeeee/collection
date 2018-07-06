import React, { Component } from 'react';
import Input from './components/UserInput';
import Output from './components/UserOutput';
import './App.css';

class App extends Component {
  state = { 
    users: [
      {username: 'jeff'},
      {username: 'brad'},
      {username: 'dan'}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({users: [
      {username: event.target.value}
    ]})
  }

  render() {
    return (
      <div className="App">
        <Input  change={this.nameChangeHandler} name={this.state.users[0].username}/>
        <Output name={this.state.users[0].username}
         />

      </div>
    );
  }
}

export default App;
