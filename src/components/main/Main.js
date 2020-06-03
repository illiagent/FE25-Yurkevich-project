import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer.js";
import Routes from "../../pages/routes";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="container">
            <header>
              <Header />
            </header>
            <main>
              <Routes className="routes" />
            </main>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Main;
