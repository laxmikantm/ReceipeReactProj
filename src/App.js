import React, { Component } from 'react';
import ReceipesList from './components/ReceipesList.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return(
      <div className="App">
	      <div className="App-header">
		      <h2>Vegan Recipes - React</h2>
	      </div>
        <ReceipesList />
      </div>
    );
  }

}

export default App;
