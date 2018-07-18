import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const URL_TO_FETCH = 'http://www.json-generator.com/api/json/get/bVXNlAsJWq?indent=2';
fetch(URL_TO_FETCH, {
  method: 'get' // opcional 
})
.then(function(response) { 
  console.log(response)
})
.catch(function(err) { 
  console.error(err); 
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
