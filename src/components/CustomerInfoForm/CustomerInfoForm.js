import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Input, TextField, Button, Select, MenuItem} from '@material-ui/core';

// CustomerInfoForm represents the input form a client uses to enter their information
class CustomerInfoForm extends React.Component {
	// TODO: change state to pull from Redux state???
	state = {
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    type: "delivery",
  };

	// handle change handles input field changes
  handleChange = (event, fieldName) => {
    console.log(`CustomerInfoForm.handleChange(${fieldName})`, event);
    this.setState({ [fieldName]: event.target.value });
  };
	
	// submit info handles our form submission
  submitInfo = (event) => {
		// validation is handled by the form "required" attribute
    event.preventDefault();
    this.props.history.push("/checkout");
  };

  previous = (event) => {
    event.preventDefault();
     this.props.history.push("/");
  }

	// we use componentDidMount to set our state after the client navigates back to
	// this page
  componentDidMount() {
		// pull cached customer info from the redux state
		const { customer_name, street_address, city, zip, type } = {
      ...this.props.currentOrder,
		};
		// set state to the pulled state
    this.setState({ customer_name, street_address, city, zip });
    if (type) { // set type if type exists. i've forgotten why we did this
      this.setState({ type });
    }
  }

	// componentWillUnmout is called when the client navigates away from the form page
	// we use this to update our customer info in the Redux store
  componentWillUnmount() {
    this.props.dispatch({ type: "UPDATE_CUSTOMER_INFO", payload: this.state });
  }
	
	// React render function
  render() {
    const { pizzas } = this.props.currentOrder;
    return (
      // TODO:NEED TOTAL DISPLAYED ON THIS 'page'
      //Why doesn't 'required' work on an input?
      // required now works. didn't work before because submitting wasn't handled
      // by the form
      <>
        <h2>Step 2: Please fill in your information</h2>
        <form onSubmit={this.submitInfo}>
          <TextField
            variant="outlined"
            required
            label="Name"
            name="customer_name"
            value={this.state.customer_name}
            placeholder="Name"
            type="text"
            maxLength={1000}
            onChange={(event) => this.handleChange(event, "customer_name")}
          />
          <br />
          <TextField
            variant="outlined"
            required
            label="Street Address"
            name="street_address"
            value={this.state.street_address}
            placeholder="Street Address"
            type="text"
            maxLength={1000}
            onChange={(event) => this.handleChange(event, "street_address")}
          />
          <br />
          <TextField
            variant="outlined"
            required
            label="City"
            name="city"
            value={this.state.city}
            placeholder="City"
            type="text"
            maxLength={1000}
            onChange={(event) => this.handleChange(event, "city")}
          />
          <br />
          <TextField
            variant="outlined"
            required
            label="Zip"
            name="zip"
            value={this.state.zip}
            placeholder="Zip"
            type="text"
            maxLength={20}
            onChange={(event) => this.handleChange(event, "zip")}
          />
          <br />
          <Select
            variant="outlined"
            required
            name="type"
            value={this.state.type}
            onChange={(event) => this.handleChange(event, "type")}
          >
            <MenuItem value="delivery">Delivery</MenuItem>
            <MenuItem value="pickup">Pickup</MenuItem>
          </Select>
          <br />
          <Button id="review" variant="contained" color="primary" type="submit">
            Review Order
          </Button>
        </form>
        <Button
          id="previous"
          variant="contained"
          color="primary"
          type="submit"
          onClick={this.previous}
        >
          previous
        </Button>
        <br />
        <span className="total">
          Total: $
          {pizzas &&
            pizzas
              .reduce((sum, cur) => {
                return sum + Number(cur.price);
              }, 0)
              .toFixed(2)}
        </span>
      </>
    ); // end return
  } // end render
} // end class CustomerInfoForm

// pull Redux state
const mapStateToProps = (state) => {
  return {
    currentOrder: state.currentOrder,
  };
};

export default withRouter(connect(mapStateToProps)(CustomerInfoForm));
