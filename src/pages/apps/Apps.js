import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Stopwatch from "../../components/applications/stopwatch-app/Stopwatch";
import Wallet from "../../components/applications/wallet-app/wallet/wallet";
import Currencies from "../../components/applications/currency-exchange-app/fetch-rate/FetchRate";

export default class Apps extends Component {
  render() {
    return (
      <div>
        <NavLink className="header__navigation-item" to="/apps/wallet">
          Wallet
        </NavLink>
        <NavLink className="header__navigation-item" to="/apps/calc">
          Calc
        </NavLink>
        <NavLink className="header__navigation-item" to="/apps/stopwatch">
          Stopwatch
        </NavLink>

        <Switch>
          <Route path="/apps/stopwatch" component={Stopwatch} />
          <Route path="/apps/wallet" component={Wallet} />
          <Route path="/apps/calc" component={Currencies} />
        </Switch>
      </div>
    );
  }
}
