import React, { Component } from "react";
import "./PizzaListItem.css";
import { Paper, Button, Typography } from '@material-ui/core'; //use material UI


// PizzaListItem is a controlled component, managed by PizzaList
class PizzaListItem extends Component {
  render() {
    const { pizza, selected, toggleSelected } = this.props;
    return (
      <Paper style = {{borderRadius: "10%", height: "560px", width: "300px"}} elevation="24" id = "menuItem">
        <img src={pizza.image_path} alt="pizza pic" /> <br/>
        <Typography color="primary"><h3 id = "namePrice">{pizza.name}: ${pizza.price}</h3> </Typography> 
        <Button  variant="contained" id = "menuBtn" color = "primary"  onClick={() => toggleSelected(pizza, selected)}>
          {selected ? "Remove" : "Add to Cart"}
        </Button>
        <p id = "description">{pizza.description}</p>
      </Paper>
    ); // end return
  } // end render
} // end class PizzaListItem

export default PizzaListItem;
