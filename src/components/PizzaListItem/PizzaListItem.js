import React, { Component } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import "./PizzaListItem.css";

class PizzaListItem extends Component {
  state = {
    selected: false,
  };

  //TEMPORARY
  //this will change whatever toggle is to the opposite
  // toggle = () => {
  //   this.setState(state =>({
  //     toggle: !this.state.toggle,
  //   }))
  // }

  componentDidMount = () => {
    let pizzaInCart = this.props.currentOrder.pizzas.find((cur) => cur.id ===this.props.item.id);
    console.log("pizzaInCart",pizzaInCart);
  }

  addPizzaToCart = () => {
    console.log(this.props.item);
    const { dispatch } = this.props;
    dispatch({ type: "ADD_PIZZA", payload: this.props.item });

    this.setState((state) => ({
      toggle: !this.state.toggle,
    }));
  };
  removeFromCart = () => {
  const {dispatch} = this.props
  dispatch({type: "REMOVE_PIZZA", payload: this.props.item});

    this.setState((state) => ({
      toggle: !this.state.toggle,
    }));

  }
  //DESIGN QUESTION: should we have the descriptions appear on a click like we did in gallery? Or just display it below pic?
  render() {
    const pizza = this.props.item;
    return (
      <li> 
        {<img src = {this.props.item.image_path} alt ="pizza pic" />} {this.props.item.name}: {this.props.item.price}
        {!this.state.selected ? (
          <button onClick={this.addPizzaToCart}>Add to Cart</button>
        ) : (
          // TODO: change this so delete works
          <button onClick={this.removeFromCart}>Remove</button>
        )}
      </li>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("PizzaListItem.mapStateToProps", state);
  return {
    currentOrder: state.currentOrder,
    orders: state.orders
  };
};

export default withRouter(connect(mapStateToProps)(PizzaListItem));
