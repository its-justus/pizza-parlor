import React, { Component } from "react";
import "./PizzaListItem.css";
import { Paper, Button, Typography } from '@material-ui/core'; //use material UI
import green from '@material-ui/core/colors/green';

// PizzaListItem is a controlled component, managed by PizzaList
class PizzaListItem extends Component {
  render() {
    const { pizza, selected, toggleSelected } = this.props;
    return (
      <Paper style = {{borderRadius: "10%"}} elevation="24" id = "menuItem">
        <img src={pizza.image_path} alt="pizza pic" /> <br/>
        <Typography variant="h6" color="primary">{pizza.name}: {pizza.price} </Typography>
        <Button  variant="contained" id = "menuBtn" color = "primary"  onClick={() => toggleSelected(pizza, selected)}>
          {selected ? "Remove" : "Add to Cart"}
        </Button>
      </Paper>
    ); // end return
  } // end render
} // end class PizzaListItem

export default PizzaListItem;
