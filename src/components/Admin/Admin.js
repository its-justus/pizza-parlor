import React, { Component } from "react";
import "./Admin.css";
import { connect } from "react-redux";
import axios from "axios";

// Admin represents a hidden view for the establishment owner so they can see 
// and manage current orders
class Admin extends Component {
  componentDidMount() {
    this.refreshOrders();
	}
	
  //GETs list of orders from database and puts them in the Redux state
  refreshOrders = () => {
    const { dispatch } = this.props;
    axios.get("/api/order")
      .then((response) => {
        // response.data will be the array of orders
        dispatch({ type: "SET_ALL_ORDERS", payload: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }; //end refreshOrders

	// React render function
  render() {
    const { orders } = this.props;
    console.log("this is orders", orders);
    return (
      <table id = "adminTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Time Order Placed</th>
            <th>Type</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((admin, index) => {
            return (
              <tr key={`Admin-${index}`}>
                <td>{admin.customer_name}</td>
                <td>{admin.time}</td>
                <td>{admin.type}</td>
                <td>${admin.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

// pull props from Redux state
const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(Admin);

// I am the new admin now.
// well I am root, so there :P