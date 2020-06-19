import React, { Component } from "react";
import PizzaListItem from "../PizzaListItem/PizzaListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// PizzaList represents a pizza ordering page where customers may add or remove pizzas
class PizzaList extends Component {
  //on click of next button, directs user to customer info form
  next = () => {
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
        <h1>Step 1: Select Your Pizza</h1>
        {/* TODO: NEED TOTAL DISPLAYED ON THIS 'page' */}
        <ul>
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
        </ul>
        <button onClick={this.next}>NEXT</button>
      </div>
    );
  }
}

// pull state from Redux state
const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    currentOrder: state.currentOrder,
  };
};

export default withRouter(connect(mapStateToProps)(PizzaList));
