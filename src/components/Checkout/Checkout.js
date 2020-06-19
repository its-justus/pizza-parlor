import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import swal from "sweetalert";
import { withRouter } from "react-router";

class Checkout extends React.Component {
  // checkoutSubmit handles all the functions of completing an order
  checkoutSubmit = () => {
    // get current order pizzas
    const { pizzas, customer_name } = this.props.currentOrder;

    // calculate the total price of the pizzas
    const total = pizzas
      .reduce((sum, cur) => {
        return sum + Number(cur.price);
      }, 0)
      .toFixed(2);

		// send axios request to server
    const submitOrder = { ...this.props.currentOrder, total: Number(total) };
    swal({
        title: "Are you sure?",
        text: `Thank you ${customer_name} for your order. Your total is ${total}, please click 'ok' to confirm`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((response) => {
        if (response) {
    axios({
      method: "POST",
      url: "/api/order",
      data: submitOrder,
    }) //end axios
      .then((response) => {
        // reset the current order data 
				this.props.dispatch({ type: "RESET_ORDER" });
				// go back to the starting order page
        this.props.history.push("/");
      }) //end .thenresponse
      .catch((error) => {
        console.log(error);
      }); //end .catchError
            swal("Thank you for your order!", {
                icon: "success",
            }); //end swal
        } else {
            swal("Your order has been cancelled!");
            return;
        }//end else
    });
  }; // end checkoutSubmit



  render() {
		// destructure current order object
		const {
      customer_name,
      street_address,
      city,
      zip,
      type,
      pizzas,
		} = this.props.currentOrder;
		
    return (
      <div>
        <h3>Your Order</h3>
        <div>
          {" "}
          {/* TODO: create block (or card) that holds all of the customer's information*/}
          {customer_name}
          {street_address}
          {city}
        </div>
        <table>
          <thead>
            <tr>
              <th>Pizza</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza, index) => {
                return (
                  <tr key={`pizza-${index}`}>
                    <td>{pizza.name}</td>
                    <td>{pizza.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <span>
          Total: $
          {pizzas &&
            pizzas
              .reduce((sum, cur) => {
                return sum + Number(cur.price);
              }, 0)
              .toFixed(2)}
        </span>
        <button onClick={this.checkoutSubmit}>Complete Order</button>
      </div>
    ); // end return
  } // end render
} // end class Checkout

const mapStateToProps = (state) => {
	// pull current order from Redux store
	return {
    currentOrder: state.currentOrder,
  };
};

export default withRouter(connect(mapStateToProps)(Checkout));
