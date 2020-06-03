import React, { Component } from "react";

import "./Header.css";
import Nav from "./nav/Nav.js";
class Header extends Component {
  render() {
    return (
      <div className="bcg">
        <div className="main__header">
          <div className="main__TMS">TMS FE25</div>
          <div className="main__nav">
            <Nav />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
