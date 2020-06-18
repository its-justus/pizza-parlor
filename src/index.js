import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

// redux
import {createStorelse, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


ReactDOM.render(<App />, document.getElementById('root'));
