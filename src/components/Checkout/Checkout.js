import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Checkout extends React.Component {
	checkoutSubmit = () => {
		const { pizzas } = this.props.currentOrder;
		let total = pizzas.reduce((sum, cur) => { return sum + Number(cur.price) }, 0).toFixed(2)
		console.log("total", total)
		console.log("this.props.currentOrder", this.props.currentOrder)
		let submitOrder = {...this.props.currentOrder, total: Number(total)};
		console.log(submitOrder);
		axios({
			method: "POST",
			url: "/api/order",
			data: submitOrder
		})
			.then((response) => {
				this.props.history.push('/');
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		const {customer_name, street_address, city, zip, type, pizzas} = this.props.currentOrder;
		// const {allPizzas} = this.props;
		console.log("Checkout.render", pizzas);
		return (
			<div>
				<h3>Your Order</h3>
        <div> {/* TODO: create block (or card) that holds all of the customer's information*/}
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
		{pizzas && pizzas.map((pizza, index) => {
			return <tr key={`pizza-${index}`}><td>{pizza.name}</td><td>{pizza.price}</td></tr>})}
				</tbody>
				</table> 
                <span>
                Total: $
								{/* todo fix sum to be number */}
                {pizzas && pizzas.reduce((sum, cur) => {return sum + Number(cur.price)}, 0).toFixed(2)}
                </span>
				<button onClick={this.checkoutSubmit}>Complete Order</button>
			</div>
            
		)
	}
}
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

const mapStateToProps = (state) => {
	return {
		currentOrder: state.currentOrder,
	}
}

export default withRouter(connect(mapStateToProps)(Checkout));