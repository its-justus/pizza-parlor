import React, { Component } from "react";
import PizzaListItem from "../PizzaListItem/PizzaListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Button } from '@material-ui/core';
import "./PizzaList.css";
import swal from "sweetalert";

// PizzaList represents a pizza ordering page where customers may add or remove pizzas
class PizzaList extends Component {
  //on click of next button, directs user to customer info form
  next = () => {
    if (this.props.currentOrder.pizzas.length === 0) {
      swal('please select a pizza')
      return;
    }
    this.props.history.push("/customer-info"); //takes customer to next "page"
  };

  // toggleSelected adds and removes pizzas from the current order
  toggleSelected = (pizza, selected) => {
    // if this pizza is currently selected we want to remove it from the order
    // if it's not selected, then we want to add it to the order
    if (selected === true) {
      // remove the pizza from the current order
      this.props.dispatch({ type: "REMOVE_PIZZA", payload: pizza });
    } else {
      // otherwise, add the pizza to the order
      pizza.quantity = 1; // pizza quantity is required by the server
      this.props.dispatch({ type: "ADD_PIZZA", payload: pizza });
    }
  };

  // React render function
  render() {
    // destructuring props
    const { pizzas } = this.props;
    const selectedPizzas = this.props.currentOrder.pizzas;
    return (
      <div>
        <h2>Step 1: Select Your Pizza</h2>
        <span className="total">
          Total: $
          {selectedPizzas &&
            selectedPizzas
              .reduce((sum, cur) => {
                return sum + Number(cur.price);
              }, 0)
              .toFixed(2)}
        </span>
        {/* TODO: NEED TOTAL DISPLAYED ON THIS 'page' */}
        <Button
          id="next"
          variant="contained"
          color="primary"
          onClick={this.next}
        >
          NEXT
        </Button>{" "}
        <br />
        {pizzas.map((pizza, index) => {
          return (
            <PizzaListItem
              key={`pizza-list-${index}`}
              pizza={pizza}
              toggleSelected={this.toggleSelected}
              // selectedPizzas.some determines if pizza is included in the selectedPizzas array
              selected={selectedPizzas.some((cur) => cur.id === pizza.id)}
            />
          );
        })}
      </div>
    ); // end return
  } // end render
} // end PizzaList

// pull state from Redux state
const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    currentOrder: state.currentOrder,
  };
};

export default withRouter(connect(mapStateToProps)(PizzaList));
