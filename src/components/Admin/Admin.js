import React, { Component } from 'react';

import { connect } from 'react-redux';
import axios from "axios";

class Admin extends Component {
  

  render() {
    
    return (
      <div>
        Test
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

export default connect(mapStateToProps)(Admin);