import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class Checkout extends React.Component {

	render() {
		const {customer_name, street_address, city, zip, type, pizzas} = this.props.currentOrder;
		const {allPizzas} = this.props;
		return (
			<div>
				<h3>Your Order</h3>
				<table>
					<thead>
						<tr>
							<th>Pizza</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
		{allPizzas.map((pizza, index) => {
			return <tr key={`pizza-${index}`}><td>{pizza.name}</td><td>{pizza.price}</td></tr>})}
				</tbody>
				</table> 
                <span>
                Total:
                <br /> 
								{/* todo fix  */}
                {allPizzas[0] && allPizzas.reduce((sum, cur) => sum + Number(cur.price))}
                </span>
			</div>
            
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentOrder: state.currentOrder,
		allPizzas: state.pizza,
	}
}

export default connect(mapStateToProps)(Checkout);