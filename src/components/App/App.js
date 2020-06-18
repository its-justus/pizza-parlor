import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css'; //TODO: install bootstrap
//TODO: import/install icon library

import { connect } from 'react-redux';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
//TODO: Tidy up our imports (components vs other things)
//NavLinks being used as a temp solution, will tie to next button later

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <div id = "routerLinks">
        <NavLink exact to ="/">Pizza List</NavLink>
        ||
        <NavLink exact to ="/customer-info">Customer Information</NavLink>
        ||
        <NavLink exact to ="/checkout">Checkout</NavLink>
        ||
        <NavLink exact to ="/admin">Admin Page</NavLink>
        </div>
        <Switch>
        <Route exact path = "/">
        <PizzaList/>
        </Route>
        <Route exact path = "/customer-info">
        <CustomerInfoForm />
        </Route>
        {/* Step 3: Checkout */}
        {/* Admin Order Page */}
        </Switch>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
