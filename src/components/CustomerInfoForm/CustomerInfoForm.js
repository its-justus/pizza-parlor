import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

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
    this.setState({ [fieldName]: event.target.value });
  };
	
	// submit info handles our form submission
  submitInfo = (event) => {
		// validation is handled by the form "required" attribute
    event.preventDefault();
    this.props.history.push("/checkout");
  };

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
        <form onSubmit={this.submitInfo}>
          <input
            required
            name="customer_name"
            value={this.state.customer_name}
            placeholder="Name"
            type="text"
            maxLength={1000}
            onChange={(event) => this.handleChange(event, "customer_name")}
          />
          <input
						required
            name="street_address"
            value={this.state.street_address}
            placeholder="Street Adress"
            type="text"
            maxLength={1000}
            onChange={(event) => this.handleChange(event, "street_address")}
          />
          <input
						required
            name="city"
            value={this.state.city}
            placeholder="City"
            type="text"
            maxLength={1000}
            onChange={(event) => this.handleChange(event, "city")}
          />
          <input
						required
            name="zip"
            value={this.state.zip}
            placeholder="Zip"
            type="text"
            maxLength={20}
            onChange={(event) => this.handleChange(event, "zip")}
          />
          <select
						required
            name="type"
            value={this.state.type}
            onInput={(event) => this.handleChange(event, "type")}
          >
            <option value="delivery">Delivery</option>
            <option value="pickup">Pickup</option>
          </select>
          <button type="submit">Review Order</button>
        </form>
        <span>
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
