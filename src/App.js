import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    const { number, add, sub } = this.props
    const { handleAdd, handleSub } = this
    return (
      <div className="App">
        <button onClick={add}>Add</button>
        <div>{number}</div>
        <button onClick={sub}>Sub</button>
      </div>
    );
  }
}

export default App;
