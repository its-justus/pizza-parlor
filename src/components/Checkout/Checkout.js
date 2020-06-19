import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class Checkout extends React.Component {

	render() {
		const {customer_name, street_address, city, zip, type, pizzas} = this.props.currentOrder;
		// const {allPizzas} = this.props;
		console.log("Checkout.render", pizzas);
		return (
			<div>
				<h3>Your Order</h3>
        <div>
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
                <br /> 
								{/* todo fix sum to be number */}
                {pizzas && pizzas.reduce((sum, cur) => {return sum + Number(cur.price)}, 0).toFixed(2)}
                </span>
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

export default connect(mapStateToProps)(Checkout);