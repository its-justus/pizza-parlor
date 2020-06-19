import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

// redux
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const orderReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "SET_ALL_ORDER") {
    newState = [...action.payload];
  }
  return newState;
};

//put pizzas from database onto page (GET)
const pizzaReducer = (state = [], action) => {
  let newState = [...state];
  if (action.type === "GET_PIZZAS") {
    newState = [...action.payload];
  }
  return newState;
};

const currentOrderReducer = (state = { pizzas: [] }, action) => {
  let newState = { ...state };
  if (action.type === "UPDATE_CUSTOMER_INFO") {
    // payload need to be an object containing all of the customer info
    newState = { ...newState, ...action.payload };
  } else if (action.type === "ADD_PIZZA") {
    // payload needs to be a pizza object
    newState = { ...newState, pizzas: [...newState.pizzas, action.payload] };
  } else if (action.type === "REMOVE_PIZZA") {
    // payload needs to be a pizza object
    const filteredPizzas = newState.pizzas.filter(
      (pizza) => pizza.id !== action.payload.id
    );
    newState = { ...newState, pizzas: filteredPizzas };
  } else if (action.type === "RESET_ORDER") {
    newState = { pizzas: [] };
  }
  return newState;
};

const storeInstance = createStore(
  combineReducers({
    pizzas: pizzaReducer,
    orders: orderReducer,
    currentOrder: currentOrderReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
