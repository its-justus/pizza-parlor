import React, { Component } from "react";
import "./PizzaListItem.css";

// PizzaListItem is a controlled component, managed by PizzaList
class PizzaListItem extends Component {
  render() {
    const { pizza, selected, toggleSelected } = this.props;
    return (
      <li>
        <img src={pizza.image_path} alt="pizza pic" />
        {pizza.name}: {pizza.price}
        <button onClick={() => toggleSelected(pizza, selected)}>
          {selected ? "Remove" : "Add to Cart"}
        </button>
      </li>
    ); // end return
  } // end render
} // end class PizzaListItem

export default PizzaListItem;
