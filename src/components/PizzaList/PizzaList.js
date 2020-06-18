import React, { Component } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';
import { connect } from 'react-redux';
import axios from "axios";

class PizzaList extends Component {
  componentDidMount() {
    // react Component method
    this.refreshPizzas();
  }

  refreshPizzas = () => {
    const { dispatch } = this.props;
    axios({
      method: "GET",
      url: "/api/pizza",
    })
      .then((response) => {
        console.log("This is in GET in app", response.data);
        // response.data will be the array of artists
        dispatch({ type: "GET_PIZZAS", payload: response.data });
        // this.setState({
        //   artists: response.data,
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { pizza } = this.props;
    return (
      <div>
        <ul>
          {pizza.map((item, i) => {
            console.log("in PizzaList", item, i);
            return <PizzaListItem key={i} item={item} />;
          })}
        </ul>
        <button>NEXT</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        pizza: state.pizza,
        order: state.order,
        currentOrder: state.currentOrder
      } 
}

export default connect(mapStateToProps)(PizzaList);