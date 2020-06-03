import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="header__navigation">
          <NavLink className="header__navigation-item" to="/">
            Sites
          </NavLink>
          <NavLink className="header__navigation-item" to="/apps">
            Apps
          </NavLink>
          <NavLink className="header__navigation-item" to="/about">
            About
          </NavLink>
          <NavLink className="header__navigation-item" to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Nav;
