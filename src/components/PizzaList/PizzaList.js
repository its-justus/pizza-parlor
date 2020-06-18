import React, { Component } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { connect } from 'react-redux';
import axios from "axios";
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { withRouter } from "react-router";

class PizzaList extends Component {
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

next = () => {
  this.props.history.push('/customer-info') //takes customer to next "page"
}

  render() {
    const { pizza, toggle } = this.props;
    return (
      <div>
        <ul>
          {pizza.map((item, i) => {
            console.log("in PizzaList", item, i);
            return <PizzaListItem key={i} item={item} toggle={toggle} />;
          })}
        </ul>
        <button onClick = {this.next}>NEXT</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        pizza: state.pizza,
        order: state.order,
        currentOrder: state.currentOrder
      } 
}

export default withRouter(connect(mapStateToProps)(PizzaList));