import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

class PizzaListItem extends Component {

  state = {
    toggle: false,
  }

  //TEMPORARY
  //this will change whatever toggle is to the opposite
  // toggle = () => {
  //   this.setState(state =>({
  //     toggle: !this.state.toggle,
  //   }))
  // }

  addPizzaToCart = () => {
    console.log(this.props.item);
const { dispatch } = this.props;
dispatch({ type: "UPDATE_PIZZAS", payload: this.props.item});

this.setState(state =>({
  toggle: !this.state.toggle,
}))
}
   

    render() {
        return (
            <li>
              Add image {this.props.item.name}: {this.props.item.price}
              {this.state.toggle === false ? (
                <button onClick={this.addPizzaToCart}>Add to Cart</button>
              ) : (
                // TODO: change this so delete works
                <button onClick={this.addPizzaToCart}>Remove</button>
              )}
            </li>
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

export default withRouter(connect(mapStateToProps)(PizzaListItem));