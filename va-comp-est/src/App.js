import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import Inputs from './components/Inputs';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Inputs />

        
      </div>
    );
  }
}

export default App;
