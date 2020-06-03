import React, { Component } from "react";
import "./FetchRate";
import Calc from "../calc/Calc";
export default class FetchRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyRate: "",
    };
    this.getRate();
  }

  getRate = () => {
    fetch("https://www.nbrb.by/api/exrates/rates?ondate=2020-5-30&periodicity=0")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        const result = Object.entries(data[4])[5][1];
        this.setState({ currencyRate: result });
        console.log(data);
      });
  };
  render() {
    return (
      <div className="rate">
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}
