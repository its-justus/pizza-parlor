import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";

class Admin extends Component {
// componentDidMount() {
//     refreshAdmin()
// }
// //GETs list of orders from database
//     refreshAdmin = () => {
//         const { dispatch } = this.props;
//         axios({
//             method: "GET",
//             url: "/api/order",
//         })
//             .then((response) => {
//                 console.log("This is in GET in app for order", response.data);
//                 // response.data will be the array of artists
//                 dispatch({ type: "GET_PIZZAS", payload: response.data });
//                 // this.setState({
//                 //   artists: response.data,
//                 // });
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }; //end refreshAdmin

  render() {
    const { orders} = this.props;
    console.log("this is orders", orders)
    return (
      <table>
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
			return <tr key={`Admin-${index}`}><td>{admin.customer_name}</td><td>{admin.time}</td><td>{admin.type}</td><td>{admin.total}</td></tr>})}
				</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(Admin);
