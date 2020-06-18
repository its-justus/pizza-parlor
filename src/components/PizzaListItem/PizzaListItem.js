import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";

class PizzaListItem extends Component {

  state = {
    toggle: false,
  }

  //TEMPORARY
  //this will change whatever toggle is to the opposite
  toggle = () => {
    this.setState(state =>({
      toggle: !this.state.toggle,
    }))
  }
   

    render() {
        return (
            <li>
              Add image {this.props.item.name}: {this.props.item.price}
              {this.state.toggle === false ? (
                <button onClick={this.toggle}>Add to Cart</button>
              ) : (
                <button onClick={this.toggle}>Remove</button>
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

export default connect(mapStateToProps)(PizzaListItem);