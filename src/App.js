import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Calculator</h1>
        <h3>Add two numbers together</h3>

        <div className="Numbers">
          <button id="seven" value="7">7</button>
          <button id="eight" value="8">8</button>
          <button id="nine" value="9">9</button>
          <button id="four" value="4">4</button>
          <button id="five" value="5">5</button>
          <button id="six" value="6">6</button>
          <button id="one" value="1">1</button>
          <button id="two" value="2">2</button>
          <button id="three" value="3">3</button>
          <button id="zero" value="0">0</button>
        </div>
      </div>
    );
  }
}

export default App;
