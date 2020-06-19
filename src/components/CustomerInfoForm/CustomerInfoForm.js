import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class CustomerInfoForm extends React.Component {
	state = {
		customer_name: '',
		street_address: '',
		city: '',
		zip: '',
		type: 'delivery',
	}

	handleChange = (event, fieldName) => {
		this.setState({[fieldName]: event.target.value});
	}

	submitInfo = (event) => {
		event.preventDefault();
		this.props.history.push('/checkout');
			}


	componentDidMount() {
		const {customer_name, street_address, city, zip, type} = {...this.props.currentOrder}
		this.setState({customer_name, street_address, city, zip});
		if(type) {this.setState({type})};
	}

	//This is a POST?
	componentWillUnmount() {
		this.props.dispatch({type: "UPDATE_CUSTOMER_INFO", payload: this.state});
	}

	render() {
		console.log("CustomerInfoForm.render()", this.state);
		return(
			// TODO:NEED TOTAL DISPLAYED ON THIS 'page'
			<form>
				<input
					name="customer_name"
					value={this.state.customer_name}
					placeholder="Name"
					type="text" 
					maxLength={1000} 
					onChange={(event) => this.handleChange(event, 'customer_name')} 
				/>
                <input
					street="street_address"
					value={this.state.street_address}
					placeholder="Street Adress"
					type="text" 
					maxLength={1000} 
					onChange={(event) => this.handleChange(event, 'street_address')} 
				/>
				<input
					name="city"
					value={this.state.city}
					placeholder="City"
					type="text" 
					maxLength={1000} 
					onChange={(event) => this.handleChange(event, 'city')} 
				/>
				<input
					name="zip"
					value={this.state.zip}
					placeholder="Zip"
					type="text" 
					maxLength={20} 
					onChange={(event) => this.handleChange(event, 'zip')} 
				/>
				<select name="type" value={this.state.type} onInput={(event) => this.handleChange(event, 'type')}>
					<option value="delivery">Delivery</option>
					<option value="pickup">Pickup</option>
				</select>
				<button onClick={this.submitInfo}>Submit</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentOrder: state.currentOrder,
	}
}

export default withRouter(connect(mapStateToProps)(CustomerInfoForm));