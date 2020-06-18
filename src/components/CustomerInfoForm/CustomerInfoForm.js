import React from "react";
import axios from "axios";
import { connect } from "react-redux";

class CustomerInfoForm extends React.Component {
	state = {
		customer_name: '',
		street_address: '',
		city: '',
		zip: '',
		type: '',
	}

	handleChange = (event, fieldName) => {
		this.setState({[fieldName]: event.target.value});
	}

	submitInfo = (event) => {
		//do stuff
		event.preventDefault();
		// navigate to confirm checkout page. this will trigger componentWillUnmount, storing the form data to the store
		// this.props.history.push('/confirm')
	}

	componentDidMount() {
		//
		const {customer_name, street_address, city, zip, type} = this.props.currentOrder
		this.setState({customer_name, street_address, city, zip, type});
	}

	componentWillUnmount() {
		this.props.dispatch({type: "UPDATE_CUSTOMER_INFO", payload: this.state});
	}

	render() {
		console.log("CustomerInfoForm.render()", this.state);
		return(
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
					street="street_adress"
					value={this.state.street_address}
					placeholder="Street Adress"
					type="text" 
					maxLength={1000} 
					onChange={(event) => this.handleChange(event, 'street_adress')} 
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
				<select name="type">
					<option value="delivery">Delivery</option>
					<option value="pickup">Pickup</option>
				</select>
        <button onCLick={this.submitInfo}>Submit</button>
			</form>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currentOrder: state.currentOrder,
	}
}

export default connect(mapStateToProps)(CustomerInfoForm);