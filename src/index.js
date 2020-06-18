import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


const orderReducer = (state=[], action) => {
    let newState = [...state];
    if(action.type === "SET_ALL_ORDER"){
        newState = [...action.payload];
    }
    return newState
}

//put pizzas from database onto page (GET)
const pizzaReducer = (state=[], action) => {
	let newState = [...state];
	if(action.type ==="GET_PIZZAS"){
		newState = [...action.payload];
	}
	return newState;
}

//here, state is an object
const currentOrderReducer = (state={}, action) => {
	let newState = {...state};
	if(action.type ==="UPDATE_CUSTOMER_INFO") {
		// payload need to be an object containing all of the customer info
		newState = {...newState, ...action.payload}
	} else if(action.type ==="UPDATE_PIZZAS") {
		// payload needs to be an array of pizza objects
		newState = {...newState, pizzas: action.payload}
	}
	return newState;
}

const storeInstance = createStore(
	combineReducers({
        pizza: pizzaReducer, 
        order: orderReducer, 
        currentOrder: currentOrderReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
