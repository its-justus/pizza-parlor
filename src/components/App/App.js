import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//Our component imports in order
import Header from '../Header/Header';
import PizzaList from '../PizzaList/PizzaList';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm';
import Checkout from '../Checkout/Checkout'
import Admin from '../Admin/Admin';
import Footer from '../Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css'; //TODO: install bootstrap
//TODO: import/install icon library

//imported libraries and misc.
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

//NavLinks being used as a temp solution, will tie to next button later


class App extends Component {
  componentDidMount() {
    // react Component method
    this.refreshPizzas();
  }

  refreshPizzas = () => {
    const { dispatch } = this.props;
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        console.log("This is in GET in app", response.data);
        // response.data will be the array of artists
        dispatch({ type: "GET_PIZZAS", payload: response.data });
        // this.setState({
        //   artists: response.data,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // state = {
  //   toggle: false,
  // }
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
        <PizzaList />
        </Route>
        <Route exact path = "/customer-info">
        <CustomerInfoForm />
        </Route>
        <Route exact path = "/checkout">
        <Checkout/>
        </Route>
        <Route exact path = "/admin">
        <Admin />
        </Route>
        </Switch>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default connect()(App);
