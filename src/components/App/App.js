//imported libraries and misc.
import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'; //TODO: install bootstrap
//TODO: import/install icon library

//Our component imports in order
import Header from "../Header/Header";
import PizzaList from "../PizzaList/PizzaList";
import CustomerInfoForm from "../CustomerInfoForm/CustomerInfoForm";
import Checkout from "../Checkout/Checkout";
import Admin from "../Admin/Admin";
import Footer from "../Footer/Footer";

//NavLinks being used as a temp solution, will tie to next button later

// App is our app container component
class App extends Component {
  componentDidMount() {
    // react Component method
    this.refreshPizzas();
  }

	// refreshPizzas gets the pizzas from the database and adds them to the Redux state
  refreshPizzas = () => {
		// grab the dispatch function from props
		const { dispatch } = this.props;
		
		// axios server request
    axios.get("/api/pizza")
      .then((response) => {
        dispatch({ type: "GET_PIZZAS", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }; // end refreshPizzas

	// React render function
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div id="routerLinks">
            <NavLink exact to="/">
              Pizza List
            </NavLink>
            ||
            <NavLink exact to="/customer-info">
              Customer Information
            </NavLink>
            ||
            <NavLink exact to="/checkout">
              Checkout
            </NavLink>
            ||
            <NavLink exact to="/admin">
              Admin Page
            </NavLink>
          </div>
          <Switch>
            <Route exact path="/">
              <PizzaList />
            </Route>
            <Route exact path="/customer-info">
              <CustomerInfoForm refreshPizzas={this.refreshPizzas} />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/admin">
              <Admin />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    ); // end return
  } // end render
} // end App

export default connect()(App);
