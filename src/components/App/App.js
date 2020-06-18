import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
// import 'bootstrap/dist/css/bootstrap.min.css'; //TODO: install bootstrap
//TODO: import/install icon library

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        {/* Step 1: Select Your Pizza */}
        {/* Step 2: Customer Info */}
        {/* Step 3: Checkout */}
        {/* Admin Order Page */}
      </div>
    );
  }
}

export default App;
