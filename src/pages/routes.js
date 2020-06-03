import React from "react";
import { Switch, Route } from "react-router-dom";

import Sites from "../pages/sites/Sites";
import Apps from "../pages/apps/Apps";
import About from "../pages/about/About";
import Contacts from "./contacts/Contacts";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Sites} />
      <Route path="/apps" component={Apps} />
      <Route path="/contact" component={Contacts} />
      <Route path="/about" component={About} />
    </Switch>
  );
};
