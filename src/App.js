import React, { Component } from 'react';
import './App.css';
import Router from "./router";

class App extends Component {
  render() {
    return (
      <div>
        <header>
        <Router />
        </header>
      </div>
    );
  }
}

export default App;
