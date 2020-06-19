import React, { Component } from "react";
let thisDate = new Date();
let thisYear = thisDate.getFullYear();
const copyright = "\u00A9";
class Footer extends Component {
  render() {
    return (
      <footer className="App-footer">
        <p>
          {copyright} Pod 4 {thisYear}
        </p>
      </footer>
    );
  }
}
export default Footer;