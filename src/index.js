import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "../src/components/main/Main";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
