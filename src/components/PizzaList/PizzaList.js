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
  
  

next = () => {
  this.props.history.push('/customer-info') //takes customer to next "page"
}

  render() {
    const { pizzas, toggle } = this.props;
    return (
      <div>
        <ul>
          {/* TODO: NEED TOTAL DISPLAYED ON THIS 'page' */}
          {pizzas.map((item, i) => {
            //console.log("in PizzaList", item, i);
            
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
        pizzas: state.pizzas,
        orders: state.orders,
        currentOrder: state.currentOrder
      } 
}

export default withRouter(connect(mapStateToProps)(PizzaList));